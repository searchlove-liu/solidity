package main

import (
	"encoding/hex"
	"fmt"
	"strconv"
	"strings"
)

// 将hex转为字符串
func HexToString(hexS string) {
	hexB, err := hex.DecodeString(hexS)
	if err != nil {
		panic(err)
	}
	str := string(hexB)
	fmt.Println(str)
}

// 将字符串转为hex
// 输出32字节对应64个hex字符
func StringTo32bytes_Hex(str string) {
	// 一个字符用一个字节来表示。一个字节用两个十六进制字符来表示。
	// 如果是32个字符，需要32字节来表示，则需要64个十六进制字符来表示
	var result [64]byte
	hex.Encode(result[:], []byte(str))
	for i := len(str) * 2; i < 64; i++ {
		result[i] = '0'
	}
	fmt.Println("0x" + string(result[:]))
}

func StringToBytes(str string) {
	// 一个字符用一个字节来表示。一个字节用两个十六进制字符来表示。
	length := len(str) * 2
	var result []byte = make([]byte, length)
	hex.Encode(result[:], []byte(str))
	fmt.Println("0x" + string(result[:]))
}

// 有效位在32字节的右边，左边补0
// vchain的地址不是32字节，所以需要补0
// 前缀有无0x都可以
func HexAddressAppend0To32(hexS string) {

	hexS = strings.TrimPrefix(hexS, "0x")

	var src = []byte(hexS)
	length := len(hexS)
	src0Bytes := make([]byte, 64-length)
	length0 := 64 - length

	for i := 0; i < length0; i++ {
		src0Bytes[i] = '0'
	}
	fmt.Println("0x" + string(append(src0Bytes, src...)))
}

// 将number转为hex，为构建64hex字符(32字节)，低位补0
func NumTo64Hex(num int) {
	srcString := strconv.FormatInt(int64(num), 16)
	length := len(srcString)

	// 原始数据字节
	var srcBytes = []byte(srcString)
	// 要拼接的填充部分的字节
	src0Bytes := make([]byte, 64-length)

	// 给填充部分赋值
	length0 := 64 - length
	for i := 0; i < length0; i++ {
		src0Bytes[i] = '0'
	}
	// 拼接
	fmt.Println("0x" + string(append(src0Bytes, srcBytes...)))
}

// TODO:将数字转为hex，将hex转为数字
func main() {
	// StringToHex("wanmeishijie")
	HexToString("4d544b")
	// HexAddressAppend0To32("0xa5c245a738e59a166b00a528abe7cbef12009ab3")
	// NumTo64Hex(1)
	// fmt.Println(len("0000000000000000000000000000000000000000000000000000000000000040"))
	// StringToBytes("MTK")

	//0x0e0b9e120000000000000000000000000000000000000000000000000000000000000000
}

// 0x1af19f77
// 0000000000000000000000000000000000000000000000000000000000000040
// 0000000000000000000000000000000000000000000000000000000000000080
// 0000000000000000000000000000000000000000000000000000000000000007
// 4d79546f6b656e00000000000000000000000000000000000000000000000000
// 0000000000000000000000000000000000000000000000000000000000000003
// 4d544b0000000000000000000000000000000000000000000000000000000000
