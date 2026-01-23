export function stringToHexString(str: string): string {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    return "0x" + Array.from(bytes)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
}

export function hexToStringBuffer(hex: string) {
    // 移除 0x 前缀
    if (hex.startsWith('0x')) {
        hex = hex.slice(2);
    }

    // 创建 Buffer 并转换为字符串
    const buffer = Buffer.from(hex, 'hex');
    return buffer.toString('utf8');

    // 其他编码可选：
    // return buffer.toString('ascii');
    // return buffer.toString('utf16le');
    // return buffer.toString('latin1');
}



export function hexToNumber(hex: string) {
    // 移除可能的 0x 前缀
    // 移除 0x 前缀
    if (hex.startsWith('0x')) {
        hex = hex.slice(2);
    }

    // 使用 parseInt 转换，基数设为 16
    return parseInt(hex, 16);
}

//案例
// let data = numberTo32ByteHex(3);
// data += numberTo32ByteHex(100).slice(2);

export function numberTo32ByteHex(num: number | bigint): string {
    // 推荐使用 BigInt，避免 JS number 精度问题（> 2^53-1 时不安全）
    const n = BigInt(num);

    // 转成 hex，去掉 0x 前缀
    let hex = n.toString(16);

    // 左侧补 0 到 64 字符（32 字节）
    hex = hex.padStart(64, '0');

    return '0x' + hex;
}

