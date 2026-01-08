export function stringToHexString(str: string): string {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    return Array.from(bytes)
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