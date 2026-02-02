import { network } from "hardhat";
const { viem } = await network.connect({
  network: "hardhatMainnet",
  chainType: "l1",
});
import { encodeFunctionData, decodeFunctionResult } from "viem";
import { TCF_NFT } from "./abi/TCF_NFT.ts";
import { TCF_abi } from "./abi/TCF.ts";
import { numberTo32ByteHex } from "../test/utils/stringToHex.ts";

const staticAddress =
  "0x4f356e94bc6de91db2658767689da9b3fe6b6a2e" as `0x${string}`;
const dynamicAddress =
  "0x627f6864e78ed427f168c4a342922f860b608631" as `0x${string}`;
const addr_3 = "0xf6d1c29792ee0e44b1853cf1ae70b0df56febf01" as `0x${string}`;
const addr_7 = "0x76e0e1c9979bdca864e888ba89579778ad3815e5" as `0x${string}`;
const owner = "0x7741ba614e1a8cd096e0339fbe8d3c21f3bdc26a" as `0x${string}`;
const test_address =
  "0xf6d1c29792ee0e44b1853cf1ae70b0df56febf01" as `0x${string}`;
const decimals = 9;
const balanceModulo = 1000000000n;

function encodeInitializeData_DCT(): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "initialize",
    args: [staticAddress, dynamicAddress, addr_3, addr_7],
  });
  // console.log('encodeFunctionData initialize data:', data);
  return data;
}

function encodeBalanceOf_TCF(address: `0x${string}`): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "balanceOf",
    args: [address],
  });
  // console.log('encodeFunctionData balanceOf data:', data);
  return data;
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
): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "withdrawFromStaticVault",
    args: [to, amount * balanceModulo],
  });
  console.log(data);
  return data;
}

// 编码withdrawFromStaticVault函数的数据
function encodeWithdrawFromDynamicVault_TCF(
  to: `0x${string}`,
  amount: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_abi,
    functionName: "withdrawFromDynamicVault",
    args: [to, amount * balanceModulo],
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

const tcf_nft = "0xc85731f754d09734e6ae33751f5d8f2e52ef4765" as `0x${string}`;

// console.log(encodeInitializeData_DCT());
// console.log(encodeBalanceOf_TCF(dynamicAddress));

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
// encodeWithdrawFromStaticVault_TCF(owner, 10n);

// withdrawFromDynamicVault
// encodeWithdrawFromDynamicVault_TCF(owner, 10n);

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
const balanceResultData_TCF =
  "0x" + "00000000000000000000000000000000000000000000000000000003f54769fb";
decodeBalanceOf_TCF(balanceResultData_TCF);

// transferAndCall
// encodeTransferAndCall_TCF(tcf_nft, 5n, 0n, 5n);
