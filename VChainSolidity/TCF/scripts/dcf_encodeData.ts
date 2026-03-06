import { network, artifacts } from "hardhat";
const { viem } = await network.connect({
  network: "hardhatMainnet",
  chainType: "l1",
});
import { encodeFunctionData, decodeFunctionResult } from "viem";
const TCF_abi = (await artifacts.readArtifact("TCF")).abi;
// import { TCF_abi } from "./abi/TCF.ts";
import { numberTo32ByteHex } from "../test/utils/stringToHex.ts";

const staticAddress =
  "0x4f356e94bc6de91db2658767689da9b3fe6b6a2e" as `0x${string}`;
const dynamicAddress =
  "0x627f6864e78ed427f168c4a342922f860b608631" as `0x${string}`;
const addr_1 = "0xf8eb2d58672b1f7eb2cf89123a56107ba71f8951" as `0x${string}`;
const addr_2 = "0x0ca07b4ba2234e6d91984054a5343792b095bdb2" as `0x${string}`;
const addr_7 = "0x90b2e705daaba67db24ac029d6e10bb5023b83c1" as `0x${string}`;
const owner = "0x7741ba614e1a8cd096e0339fbe8d3c21f3bdc26a" as `0x${string}`;
const test_address =
  "0xf6d1c29792ee0e44b1853cf1ae70b0df56febf01" as `0x${string}`;
const decimals = 9;
const balanceModulo = 1000000000n;

function encodeInitializeData_DCT(): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "initialize",
    args: [staticAddress, dynamicAddress, addr_1, addr_2, addr_7],
  });
  // console.log('encodeFunctionData initialize data:', data);
  return data;
}

function encodeBalanceOf_TCF(address: `0x${string}`) {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "balanceOf",
    args: [address],
  });
  console.log("encodeFunctionData balanceOf data:", data);
}

function decodeBalanceOf_TCF(data: string): bigint {
  const decoded = decodeFunctionResult({
    abi: TCF_abi,
    functionName: "balanceOf",
    data: data as `0x${string}`,
  });
  console.log(decoded / balanceModulo);
  console.log(decoded);
  return decoded / balanceModulo;
}

// 解码name
function decodeName_TCF(data: `0x${string}`): string {
  const decoded = decodeFunctionResult({
    abi: TCF_abi,
    functionName: "name",
    data: data,
  });
  console.log(decoded);
  return decoded;
}

// 解码symbol
function decodeSymbol_TCF(data: `0x${string}`): string {
  const decoded = decodeFunctionResult({
    abi: TCF_abi,
    functionName: "symbol",
    data: data,
  });
  console.log(decoded);
  return decoded;
}

// 编码withdrawFromStaticVault函数的数据
function encodeWithdrawFromStaticVault_TCF(
  to: `0x${string}`,
  amount: bigint,
  serviceChargeAddress: `0x${string}`,
  serviceChargeAmount: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "withdrawAward",
    args: [
      staticAddress,
      to,
      amount * balanceModulo,
      serviceChargeAddress,
      serviceChargeAmount * balanceModulo,
    ],
  });
  console.log(data);
  return data;
}

// 编码withdrawFromStaticVault函数的数据
function encodeWithdrawFromDynamicVault_TCF(
  to: `0x${string}`,
  amount: bigint,
  serviceChargeAddress: `0x${string}`,
  serviceChargeAmount: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "withdrawAward",
    args: [
      dynamicAddress,
      to,
      amount * balanceModulo,
      serviceChargeAddress,
      serviceChargeAmount * balanceModulo,
    ],
  });
  console.log(data);
  return data;
}

// 编码approve函数的数据
function encodeApprove_TCF(spender: `0x${string}`, amount: bigint): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "approve",
    args: [spender, amount * balanceModulo],
  });
  console.log(data);
  return data;
}

// 编码allowance函数的数据
function encodeAllowance_TCF(
  owner: `0x${string}`,
  spender: `0x${string}`,
): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "allowance",
    args: [owner, spender],
  });
  console.log(data);
  return data;
}

// 解码allowance函数的返回值
function decodeAllowance_TCF(data: `0x${string}`): bigint {
  const decoded = decodeFunctionResult({
    abi: TCF_abi,
    functionName: "allowance",
    data: data,
  });
  console.log(decoded / balanceModulo);
  return decoded / balanceModulo;
}

// 编码incresseAllowance函数的数据
function encodeIncreaseAllowance_TCF(
  spender: `0x${string}`,
  addedValue: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "increaseAllowance",
    args: [spender, addedValue * balanceModulo],
  });
  console.log(data);
  return data;
}

// 编码decresseAllowance函数的数据
function encodeDecreaseAllowance_TCF(
  spender: `0x${string}`,
  subtractedValue: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "decreaseAllowance",
    args: [spender, subtractedValue * balanceModulo],
  });
  console.log(data);
  return data;
}

// 编码transfer函数的数据
function encodeTransfer_TCF(to: `0x${string}`, amount: bigint): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "transfer",
    args: [to, amount * balanceModulo],
  });
  console.log(data);
  return data;
}

// 编码transferFrom函数的数据
function encodeTransferFrom_TCF(
  from: `0x${string}`,
  to: `0x${string}`,
  amount: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "transferFrom",
    args: [from, to, amount * balanceModulo],
  });
  console.log(data);
  return data;
}

// 编码transferOwnership函数的数据
function encodeTransferOwnership_TCF(newOwner: `0x${string}`): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "transferOwnership",
    args: [newOwner],
  });
  console.log(data);
  return data;
}

// 编码transferAndCall函数调用的数据
function encodeTransferAndCall_TCF(
  to: `0x${string}`,
  amount: bigint,
  tokenID: bigint,
  buyAmount: bigint,
): string {
  let data = numberTo32ByteHex(tokenID);
  data += numberTo32ByteHex(buyAmount).slice(2);
  const encodedData = encodeFunctionData({
    abi: TCF_abi,
    functionName: "transferAndCall",
    args: [to, amount, data as `0x${string}`],
  });
  console.log(encodedData);
  return encodedData;
}

// 调用buyNFTByDCF函数调用的数据
function encodeBuyNFTByDCF_TCF(
  tokenAddress: `0x${string}`,
  tokenID: bigint,
  buyAmount: bigint,
  value: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "buyNFTByDCF",
    args: [tokenAddress, tokenID, buyAmount, value],
  });
  console.log(data);
  return data;
}

const tcf_nft = "0x154a835f11dbba64ab3c262a125e0e258bfcd773" as `0x${string}`;

console.log(encodeInitializeData_DCT());
// encodeBalanceOf_TCF(dynamicAddress);

// name
// const nameResultData_TCF =
//   "0x" +
//   "000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000034443460000000000000000000000000000000000000000000000000000000000";
// decodeName_TCF(nameResultData_TCF as `0x${string}`);

// symbol
// const symbolResultData_TCF =
//   "0x" +
//   "000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000034443460000000000000000000000000000000000000000000000000000000000";
// decodeSymbol_TCF(symbolResultData_TCF as `0x${string}`);

// withdrawFromStaticVault
// encodeWithdrawFromStaticVault_TCF(owner, 10n, addr_3, 1n);

// withdrawFromDynamicVault
// encodeWithdrawFromDynamicVault_TCF(
//   "0xda095ef32b8bb3f846e2b51236170f36be2361e9" as `0x${string}`,
//   20n,
// );

// approve
// encodeApprove_TCF(test_address, 1n);

// allowance
// encodeAllowance_TCF(owner, test_address);

// 解码allowance函数的返回值
// const allowanceResultData_TCF =
//   "0x" + "000000000000000000000000000000000000000000000000000000003b9aca00";
// decodeAllowance_TCF(allowanceResultData_TCF as `0x${string}`);

// incresseAllowance
// encodeIncreaseAllowance_TCF(test_address, 1n);

// decresseAllowance
// encodeDecreaseAllowance_TCF(test_address, 1n);

// transfer
// encodeTransfer_TCF(test_address, 1n);

// transferFrom
// encodeTransferFrom_TCF(owner, test_address, 1n);

// transferOwnership
// encodeTransferOwnership_TCF(test_address);

// balanceOf
// const balanceResultData_TCF =
//   "0x" + "0000000000000000000000000000000000000000000000000000000df8475800";
// decodeBalanceOf_TCF(balanceResultData_TCF);

// transferAndCall
// encodeTransferAndCall_TCF(tcf_nft, 5n, 0n, 5n);

// buyNFTByDCF
// encodeBuyNFTByDCF_TCF(tcf_nft, 2n, 1n, 3n);

// 0x808fff80000000000000000000000004f356e94bc6de91db2658767689da9b3fe6b6a2e0000000000000000000000007741ba614e1a8cd096e0339fbe8d3c21f3bdc26a00000000000000000000000000000000000000000000000000000002540be400000000000000000000000000f6d1c29792ee0e44b1853cf1ae70b0df56febf023b9aca0000000000000000000000000000000000000000000000000000000000
// 0x808fff800000000000000000000000004f356e94bc6de91db2658767689da9b3fe6b6a2e0000000000000000000000007741ba614e1a8cd096e0339fbe8d3c21f3bdc26a00000000000000000000000000000000000000000000000000000002540be400000000000000000000000000f6d1c29792ee0e44b1853cf1ae70b0df56febf01000000000000000000000000000000000000000000000000000000003b9aca00
