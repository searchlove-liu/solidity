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

func HexToNum(hexNum string) {
	result, _ := strconv.ParseInt(hexNum, 16, 32)
	fmt.Println(result)
}

// TODO:将数字转为hex，将hex转为数字
func main() {
	// StringToHex("wanmeishijie")
	// HexToString("68747470733a2f2f63726f776465642d6861726c657175696e2d736b756e6b2e6d7966696c65626173652e636f6d2f697066732f516d5a334437416b364e36564d35634152543255317a5756504a6876646d6153326979526833414e4447434e4d4c2f322e6a736f6e")
	// HexAddressAppend0To32("0xa5c245a738e59a166b00a528abe7cbef12009ab3")
	// NumTo64Hex(0)
	// fmt.Println(len("68747470733a2f2f63726f776465642d6861726c657175696e2d736b756e6b2e6d7966696c65626173652e636f6d2f697066732f516d5a334437416b364e36564d35634152543255317a5756504a6876646d6153326979526833414e4447434e4d4c2f322e6a736f6e"))
	// StringToBytes("MTK")
	HexToNum("d")

	//0x0e0b9e120000000000000000000000000000000000000000000000000000000000000000
}

// 0000000000000000000000000000000000000000000000000000000000000020
// 0000000000000000000000000000000000000000000000000000000000000069
// 68747470733a2f2f63726f776465642d6861726c657175696e2d736b756e6b2e6d7966696c65626173652e636f6d2f697066732f516d5a334437416b364e36564d35634152543255317a5756504a6876646d6153326979526833414e4447434e4d4c2f342e6a736f6e0000000000000000000000000000000000000000000000
