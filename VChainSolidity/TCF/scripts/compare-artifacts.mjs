#!/usr/bin/env node
/*
  Compare two contract artifacts (ABI + bytecode sizes).

  Supports:
  - Hardhat artifact JSON (e.g. artifacts/contracts/X.sol/X.json)
  - Generated ESM artifact module (e.g. generated/artifacts/X.js exporting Artifact_X)

  Examples:
    node scripts/compare-artifacts.mjs --a artifacts/contracts/TCF_NFTPrice.sol/TCF_NFTPrice.json --b generated/artifacts/TCF_NFTPrice.js
    node scripts/compare-artifacts.mjs --a artifacts/contracts/TCF.sol/TCF.json --b artifacts/contracts/TCFcopy.sol/TCF_copy.json

  Output:
    - ABI: added/removed/changed entries (function/event/error)
    - Bytecode sizes (if present): bytecode/deployedBytecode, with EIP-170 warning when runtime > 24576 bytes
*/

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

function usage(exitCode = 0) {
    const text = `
Usage:
  node scripts/compare-artifacts.mjs --a <path> --b <path> [--format text|json]

Notes:
  - <path> can be a .json Hardhat artifact OR an ESM module (e.g. generated/artifacts/TCF_NFTPrice.js)
  - For ESM module inputs, the script picks the first exported object containing an \'abi\' array.
`;
    // eslint-disable-next-line no-console
    console.log(text.trim());
    process.exit(exitCode);
}

function parseArgs(argv) {
    const args = { a: undefined, b: undefined, format: 'text' };
    for (let i = 2; i < argv.length; i++) {
        const key = argv[i];
        const next = argv[i + 1];

        if (key === '--help' || key === '-h') usage(0);

        if (key === '--a') {
            args.a = next;
            i++;
            continue;
        }
        if (key === '--b') {
            args.b = next;
            i++;
            continue;
        }
        if (key === '--format') {
            args.format = next ?? 'text';
            i++;
            continue;
        }

        // Allow positional fallback: node ... a b
        if (!args.a) {
            args.a = key;
            continue;
        }
        if (!args.b) {
            args.b = key;
            continue;
        }

        throw new Error(`Unknown argument: ${key}`);
    }

    if (!args.a || !args.b) usage(1);
    if (args.format !== 'text' && args.format !== 'json') {
        throw new Error(`Invalid --format ${args.format} (expected text|json)`);
    }

    return /** @type {{a:string,b:string,format:'text'|'json'}} */ (args);
}

function isHexString(value) {
    return typeof value === 'string' && value.startsWith('0x') && /^[0-9a-fA-F]*$/.test(value.slice(2));
}

function hexSizeBytes(hex) {
    if (!isHexString(hex)) return undefined;
    return (hex.length - 2) / 2;
}

function normalizeType(internalType, type) {
    return internalType || type || '';
}

function abiKey(entry) {
    const type = entry?.type;
    const name = entry?.name ?? '';
    const inputs = Array.isArray(entry?.inputs)
        ? entry.inputs.map((i) => normalizeType(i.internalType, i.type)).join(',')
        : '';
    // Overloads are disambiguated by input types.
    return `${type}:${name}(${inputs})`;
}

function abiSignature(entry) {
    const key = abiKey(entry);
    if (entry?.type === 'function') {
        const outputs = Array.isArray(entry?.outputs)
            ? entry.outputs.map((o) => normalizeType(o.internalType, o.type)).join(',')
            : '';
        const mut = entry?.stateMutability ?? '';
        return `${key} -> (${outputs}) ${mut}`.trim();
    }
    if (entry?.type === 'event') {
        return key;
    }
    if (entry?.type === 'error') {
        return key;
    }
    if (entry?.type === 'constructor') {
        return key;
    }
    if (entry?.type === 'fallback' || entry?.type === 'receive') {
        return `${entry.type}`;
    }
    return key;
}

function shallowPickAbi(entry) {
    // Keep only stable, compare-relevant fields.
    const picked = {
        type: entry?.type,
        name: entry?.name,
        stateMutability: entry?.stateMutability,
        inputs: Array.isArray(entry?.inputs)
            ? entry.inputs.map((i) => ({
                name: i.name,
                type: i.type,
                internalType: i.internalType,
                indexed: i.indexed,
            }))
            : undefined,
        outputs: Array.isArray(entry?.outputs)
            ? entry.outputs.map((o) => ({
                name: o.name,
                type: o.type,
                internalType: o.internalType,
            }))
            : undefined,
    };
    return picked;
}

function stableStringify(value) {
    // Deterministic stringify for shallow compare.
    const seen = new WeakSet();
    return JSON.stringify(
        value,
        (k, v) => {
            if (v && typeof v === 'object') {
                if (seen.has(v)) return '[Circular]';
                seen.add(v);
                if (Array.isArray(v)) return v;
                return Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b)));
            }
            return v;
        },
        2
    );
}

async function loadArtifact(sourcePath) {
    const abs = path.isAbsolute(sourcePath) ? sourcePath : path.resolve(process.cwd(), sourcePath);
    const ext = path.extname(abs).toLowerCase();

    if (ext === '.json') {
        const raw = await fs.readFile(abs, 'utf8');
        const json = JSON.parse(raw);
        return { __sourcePath: sourcePath, __sourceType: 'json', ...json };
    }

    // ESM module (generated/artifacts/*.js). Must import via file URL.
    const mod = await import(pathToFileURL(abs).href);

    // Prefer an export named like Artifact_*
    const candidates = Object.entries(mod)
        .filter(([, v]) => v && typeof v === 'object')
        .map(([k, v]) => ({ key: k, value: v }));

    const preferred = candidates.find((c) => c.key.startsWith('Artifact_') && Array.isArray(c.value?.abi));
    const firstAbi = candidates.find((c) => Array.isArray(c.value?.abi));

    const picked = preferred?.value ?? firstAbi?.value;
    if (!picked) {
        throw new Error(`No exported artifact-like object with an abi[] found in ${sourcePath}`);
    }

    return { __sourcePath: sourcePath, __sourceType: 'module', ...picked };
}

function compareAbi(aAbi, bAbi) {
    const aList = Array.isArray(aAbi) ? aAbi : [];
    const bList = Array.isArray(bAbi) ? bAbi : [];

    const aMap = new Map(aList.map((e) => [abiKey(e), e]));
    const bMap = new Map(bList.map((e) => [abiKey(e), e]));

    const aKeys = new Set(aMap.keys());
    const bKeys = new Set(bMap.keys());

    /** @type {string[]} */
    const added = [];
    /** @type {string[]} */
    const removed = [];
    /** @type {Array<{key:string,from:any,to:any}>} */
    const changed = [];

    for (const key of [...bKeys].sort()) {
        if (!aKeys.has(key)) added.push(abiSignature(bMap.get(key)));
    }
    for (const key of [...aKeys].sort()) {
        if (!bKeys.has(key)) removed.push(abiSignature(aMap.get(key)));
    }

    for (const key of [...aKeys].sort()) {
        if (!bKeys.has(key)) continue;

        const aEntry = shallowPickAbi(aMap.get(key));
        const bEntry = shallowPickAbi(bMap.get(key));

        const aStr = stableStringify(aEntry);
        const bStr = stableStringify(bEntry);

        if (aStr !== bStr) changed.push({ key, from: aEntry, to: bEntry });
    }

    return { added, removed, changed };
}

function compareBytecode(a, b) {
    const aBytecode = a?.bytecode;
    const bBytecode = b?.bytecode;
    const aDeployed = a?.deployedBytecode;
    const bDeployed = b?.deployedBytecode;

    const res = {
        bytecode: {
            aBytes: hexSizeBytes(aBytecode),
            bBytes: hexSizeBytes(bBytecode),
        },
        deployedBytecode: {
            aBytes: hexSizeBytes(aDeployed),
            bBytes: hexSizeBytes(bDeployed),
            eip170LimitBytes: 24576,
        },
        linkReferences: {
            a: a?.linkReferences ?? undefined,
            b: b?.linkReferences ?? undefined,
        },
        deployedLinkReferences: {
            a: a?.deployedLinkReferences ?? undefined,
            b: b?.deployedLinkReferences ?? undefined,
        },
    };

    return res;
}

function formatText(report) {
    const lines = [];
    const header = `${report.a.meta.label}  <->  ${report.b.meta.label}`;
    lines.push(header);
    lines.push('-'.repeat(Math.min(80, header.length)));

    lines.push(`A: ${report.a.meta.sourcePath}${report.a.meta.contractName ? ` (${report.a.meta.contractName})` : ''}`);
    lines.push(`B: ${report.b.meta.sourcePath}${report.b.meta.contractName ? ` (${report.b.meta.contractName})` : ''}`);

    if (report.bytecode.bytecode.aBytes != null || report.bytecode.bytecode.bBytes != null) {
        lines.push('');
        lines.push('Bytecode sizes:');
        lines.push(`- bytecode:         A=${report.bytecode.bytecode.aBytes ?? 'n/a'}  B=${report.bytecode.bytecode.bBytes ?? 'n/a'}`);
        lines.push(
            `- deployedBytecode: A=${report.bytecode.deployedBytecode.aBytes ?? 'n/a'}  B=${report.bytecode.deployedBytecode.bBytes ?? 'n/a'}  (EIP-170 limit ${report.bytecode.deployedBytecode.eip170LimitBytes})`
        );

        const aRuntime = report.bytecode.deployedBytecode.aBytes;
        const bRuntime = report.bytecode.deployedBytecode.bBytes;
        const limit = report.bytecode.deployedBytecode.eip170LimitBytes;

        if (typeof aRuntime === 'number' && aRuntime > limit) lines.push(`! WARNING: A runtime bytecode exceeds EIP-170 (${aRuntime} > ${limit})`);
        if (typeof bRuntime === 'number' && bRuntime > limit) lines.push(`! WARNING: B runtime bytecode exceeds EIP-170 (${bRuntime} > ${limit})`);
    }

    lines.push('');
    lines.push('ABI diff:');
    lines.push(`- added:   ${report.abi.added.length}`);
    lines.push(`- removed: ${report.abi.removed.length}`);
    lines.push(`- changed: ${report.abi.changed.length}`);

    if (report.abi.added.length) {
        lines.push('');
        lines.push('Added:');
        for (const s of report.abi.added) lines.push(`+ ${s}`);
    }
    if (report.abi.removed.length) {
        lines.push('');
        lines.push('Removed:');
        for (const s of report.abi.removed) lines.push(`- ${s}`);
    }
    if (report.abi.changed.length) {
        lines.push('');
        lines.push('Changed (keys):');
        for (const c of report.abi.changed) lines.push(`~ ${c.key}`);
    }

    return lines.join('\n');
}

async function main() {
    const args = parseArgs(process.argv);

    const [aRaw, bRaw] = await Promise.all([loadArtifact(args.a), loadArtifact(args.b)]);

    const a = {
        meta: {
            label: 'A',
            sourcePath: aRaw.__sourcePath ?? args.a,
            sourceType: aRaw.__sourceType ?? 'unknown',
            contractName: aRaw.contractName,
            sourceName: aRaw.sourceName,
        },
        abi: aRaw.abi,
        bytecode: aRaw.bytecode,
        deployedBytecode: aRaw.deployedBytecode,
        linkReferences: aRaw.linkReferences,
        deployedLinkReferences: aRaw.deployedLinkReferences,
    };

    const b = {
        meta: {
            label: 'B',
            sourcePath: bRaw.__sourcePath ?? args.b,
            sourceType: bRaw.__sourceType ?? 'unknown',
            contractName: bRaw.contractName,
            sourceName: bRaw.sourceName,
        },
        abi: bRaw.abi,
        bytecode: bRaw.bytecode,
        deployedBytecode: bRaw.deployedBytecode,
        linkReferences: bRaw.linkReferences,
        deployedLinkReferences: bRaw.deployedLinkReferences,
    };

    const report = {
        a,
        b,
        abi: compareAbi(a.abi, b.abi),
        bytecode: compareBytecode(a, b),
    };

    if (args.format === 'json') {
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(report, null, 2));
        return;
    }

    // eslint-disable-next-line no-console
    console.log(formatText(report));
}

try {
    await main();
} catch (err) {
    // eslint-disable-next-line no-console
    console.error(err?.stack || String(err));
    process.exit(1);
}
