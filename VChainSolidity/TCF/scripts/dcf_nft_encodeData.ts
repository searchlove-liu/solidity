import { network, artifacts } from "hardhat";
const { viem } = await network.connect({
  network: "hardhatMainnet",
  chainType: "l1",
});
import { encodeFunctionData, decodeFunctionResult, zeroAddress } from "viem";
const TCF_NFT = (await artifacts.readArtifact("TCF_NFT")).abi;
// import { TCF_NFT } from "./abi/TCF_NFT.ts";
import { getPrices } from "../test/price.ts";
import { baseURI } from "../test/baseURI.ts";

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
const dcfAddress =
  "0xab2ef03f05cb429d8eecd8ead2512465a4c42be6" as `0x${string}`; // Replace with actual DCF contract address

// 编码addSupportedToken 函数调用的数据
function encodeAddSupportedToken_TCF_NFTPrice(
  tokenAddress: `0x${string}`,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "addSupportedToken",
    args: [tokenAddress],
  });
  console.log(data);
  return data;
}

// 编码tokenAddress_array 函数调用的数据
function encodeGetSupportedTokens_TCF_NFTPrice(index: bigint): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "tokenAddress_array",
    args: [index],
  });
  console.log(data);
  return data;
}

// 编码 initPrice函数调用的数据
function encodeInitPrice_TCF_NFTPrice(tokenAddress: `0x${string}`): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "initPrice",
    args: [getPrices(tokenAddress)],
  });
  console.log(data);
  return data;
}

// 编码getNFTPrice函数调用的数据
function encodeGetNFTPrice_TCF_NFTPrice(
  nftId: bigint,
  tokenAddress: `0x${string}`,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "getNFTPrice",
    args: [nftId, tokenAddress],
  });
  console.log(data);
  return data;
}

// 解码getNFTPrice函数返回的数据
function decodeGetNFTPrice_TCF_NFTPrice(data: `0x${string}`): bigint {
  const decoded = decodeFunctionResult({
    abi: TCF_NFT,
    functionName: "getNFTPrice",
    data: data,
  });
  if (decoded[0].length === 0) {
    console.log(decoded[1]);
  } else {
    console.log("error:", decoded[0]);
  }
  return decoded[1];
}

// 编码getNFTEquityDetails函数调用的数据
function encodeGetNFTEquityDetails_TCF_NFTPrice(nftId: bigint): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "getNFTEquityDetails",
    args: [nftId],
  });
  console.log(data);
  //   console.log("ration:", data[0]);
  //   console.log("duration:", data[1]);
  return data;
}

// 解码getNFTEquityDetails函数返回的数据
function decodeGetNFTEquityDetails_TCF_NFTPrice(data: `0x${string}`): void {
  const decoded = decodeFunctionResult({
    abi: TCF_NFT,
    functionName: "getNFTEquityDetails",
    data: data,
  });
  console.log(decoded);
  // console.log("ration:", decoded[0] + "%");
  // // 将秒转为天
  // console.log("duration:", decoded[1] / (24 * 60 * 60) + " days");
}

// 编码changeNFTPrice函数调用的数据
function encodeChangeNFTPrice_TCF_NFTPrice(
  nftId: bigint,
  tokenAddress: `0x${string}`,
  newPrice: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "changeNFTPrice",
    args: [nftId, tokenAddress, newPrice],
  });
  console.log(data);
  return data;
}

// 编码isSupported函数调用的数据
function encodeIsSupported_TCF_NFTPrice(tokenAddress: `0x${string}`): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "isSupported",
    args: [tokenAddress],
  });
  console.log(data);
  return data;
}

// 编码changeDynamicRatio函数调用的数据
function encodeChangeDynamicRatio_TCF_NFTPrice(
  tokenId: bigint,
  newRatio: number,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "changeDynamicRatio",
    args: [tokenId, newRatio],
  });
  console.log(data);
  return data;
}

// 编码setBaseURI函数调用的数据
function encodeSetBaseURI_TCF_NFTPrice(): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "setBaseURI",
    args: [baseURI],
  });
  console.log(data);
  return data;
}

// 编码Euri函数调用的数据
function encodeEuri_TCF_NFTPrice(tokenId: bigint): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "Euri",
    args: [tokenId],
  });
  console.log(data);
  return data;
}

function decodeEuri_TCF_NFTPrice(data: `0x${string}`) {
  const decoded = decodeFunctionResult({
    abi: TCF_NFT,
    functionName: "Euri",
    data: data,
  });
  console.log(decoded);
}

// 编码initRoot函数调用的数据
function encodeInitRoot_TCF_NFTPrice(rootAddress: `0x${string}`): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "initRoot",
    args: [rootAddress],
  });
  console.log(data);
  return data;
}

// 编码insert函数调用的数据，四个参数address node,address parent,address recommender,bool isLeft
function encodeInsert_TCF_NFTPrice(
  parent: `0x${string}`,
  recommender: `0x${string}`,
  isLeft: boolean,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "insert",
    args: [parent, recommender, isLeft],
  });
  console.log(data);
  return data;
}

// 编码setWithdrawAddress函数调用的数据
function encodeSetWithdrawAddress_TCF_NFTPrice(
  newAddress: `0x${string}`,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "setWithdrawAddress",
    args: [newAddress],
  });
  console.log(data);
  return data;
}

// 编码buyNFTByTC函数调用的数据
function encodeBuyNFTByTC_TCF_NFTPrice(id: bigint, buyAmount: bigint): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "buyNFTByTC",
    args: [id, buyAmount],
  });
  console.log(data);
  return data;
}

// 编码isExist
function encodeIsExist_TCF_NFTPrice(node: `0x${string}`): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "isExist",
    args: [node],
  });
  console.log(data);
  return data;
}

// 编码balanceOf函数调用的数据
function encodeBalanceOf_TCF_NFT(
  account: `0x${string}`,
  tokenId: bigint,
): void {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "balanceOf",
    args: [account, tokenId],
  });

  console.log(data);
}

// 编码ESafeTransferFrom函数调用的数据
function encodeESafeTransferFrom_TCF_NFT(
  from: `0x${string}`,
  to: `0x${string}`,
  tokenId: bigint,
  indexs: bigint[],
): void {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "ESafeTransferFrom",
    args: [from, to, tokenId, indexs, "0x"],
  });
  console.log(data);
}

// 编码getChildren函数调用的数据
function encodeGetChildren_TCF_NFT(node: `0x${string}`): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "getChildren",
    args: [node],
  });
  console.log(data);
  return data;
}

// 解析getChildren函数返回的数据
function decodeGetChildren_TCF_NFT(data: `0x${string}`): void {
  const decoded = decodeFunctionResult({
    abi: TCF_NFT,
    functionName: "getChildren",
    data: data,
  });
  console.log("left child:", decoded[0]);
  console.log("right child:", decoded[1]);
  return;
}

// 编码getUserTokenIds函数调用的数据
function encodeGetUserTokenIds_TCF_NFT(
  user: `0x${string}`,
  tokenID: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "getUserTokenIds",
    args: [user, tokenID],
  });
  console.log(data);
  return data;
}

// 解码getUserTokenIds函数返回的数据
function decodeGetUserTokenIds_TCF_NFT(data: `0x${string}`) {
  const decoded = decodeFunctionResult({
    abi: TCF_NFT,
    functionName: "getUserTokenIds",
    data: data,
  });
  console.log(decoded);
}

// 编码setApprovalForAll函数调用数据
function encodeSetApprovalForAll_TCF_NFT(
  operator: `0x${string}`,
  approved: boolean,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "setApprovalForAll",
    args: [operator, approved],
  });
  console.log(data);
  return data;
}

// 编码checkInitPricesParams函数调用数据
function encodecheckInitPricesParams_TCF_NFTPrice(
  tokenAddress: `0x${string}`,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "checkInitPricesParams",
    args: [getPrices(tokenAddress)],
  });
  console.log(data);
  return data;
}

// 编码getNftMintTime函数调用数据
function encodegetNftMintTime_TCF_NFTPrice(
  nftId: bigint,
  editionId: bigint,
): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "getNftMintTime",
    args: [nftId, editionId],
  });
  console.log(data);
  return data;
}

// 解码getBlanceOf函数返回数据
function decodedBalanceOfResult(data: `0x${string}`) {
  const decoded = decodeFunctionResult({
    abi: TCF_NFT,
    functionName: "balanceOf",
    data: data,
  });

  // decoded是纳秒级别的时间戳，转为秒级别
  console.log("raw data:", decoded);
  // const seconds = decoded / 1_000_000_000n;
  // console.log(seconds);
  // return decoded;
}

// 编码getNodeBalance函数调用数据
function encodeGetNodeBalance(addr: `0x${string}`) {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "getNodeWorth",
    args: [addr],
  });
  console.log(data);
}

// 编码getParent函数调用数据
function encodeGetParent_TCF_NFT(node: `0x${string}`) {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "getParent",
    args: [node],
  });
  console.log(data);
}

// 编码getRecommendedParent函数调用数据
function encodeGetRecommendedParent_TCF_NFT(
  recommender: `0x${string}`,
  excludeNode: `0x${string}`,
) {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "getOptimalParent",
    args: [recommender, excludeNode],
  });

  console.log(data);
}

// 编码getRecommender函数调用数据
function encodeGetRecommender_TCF_NFT(node: `0x${string}`) {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "getRecommender",
    args: [node],
  });
  console.log(data);
}

// 编码isApprovedForAll函数调用数据
function encodeIsApprovedForAll_TCF_NFT(
  account: `0x${string}`,
  operator: `0x${string}`,
) {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "isApprovedForAll",
    args: [account, operator],
  });
  console.log(data);
}

// 编码subtreeWorth函数调用数据
function encodeSubtreeWorth_TCF_NFT(node: `0x${string}`) {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "subtreeWorth",
    args: [node],
  });
  console.log(data);
}

// 编码transferOwnership函数的数据
function encodeTransferOwnership_TCF_NFTPrice(newOwner: `0x${string}`): string {
  const data = encodeFunctionData({
    abi: TCF_NFT,
    functionName: "transferOwnership",
    args: [newOwner],
  });
  console.log(data);
  return data;
}

// 编码addSupportedToken
// encodeAddSupportedToken_TCF_NFTPrice(dcfAddress);

// 编码tokenAddress_array
// encodeGetSupportedTokens_TCF_NFTPrice(0n);

// 编码initPrice
encodeInitPrice_TCF_NFTPrice(dcfAddress);

// 编码getNFTPrice
// encodeGetNFTPrice_TCF_NFTPrice(1n, zeroAddress);

// 解码getNFTPrice
// const getNFTPrice_data = ("0x" +
//   "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d50524943455f4e4f545f53455400000000000000000000000000000000000000") as `0x${string}`;
// decodeGetNFTPrice_TCF_NFTPrice(getNFTPrice_data);

// 编码getNFTEquityDetails
// encodeGetNFTEquityDetails_TCF_NFTPrice(0n);

// 解码getNFTEquityDetails
// const getNFTEquityDetails_data = ("0x" +
//   "0000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000003740762b8c0000") as `0x${string}`;
// decodeGetNFTEquityDetails_TCF_NFTPrice(getNFTEquityDetails_data);

// 编码changeNFTPrice
// encodeChangeNFTPrice_TCF_NFTPrice(1n, zeroAddress, 3n);

// 编码isSupported
// encodeIsSupported_TCF_NFTPrice("0x617d51b81e37224fbb9be1d969261a83236501b7");

// 编码changeDynamicRatio
// encodeChangeDynamicRatio_TCF_NFTPrice(0n, 30);

// 编码setBaseURI
// console.log(baseURI);
// encodeSetBaseURI_TCF_NFTPrice();

// 编码Euri
// encodeEuri_TCF_NFTPrice(0n);

// 解码Euri
// const euri_data = ("0x" +
//   "0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000006968747470733a2f2f63726f776465642d6861726c657175696e2d736b756e6b2e6d7966696c65626173652e636f6d2f697066732f516d543732754a7a6b36524d656f584a3159517943433741396263504463356f314b6742456b635836635171374a2f312e6a736f6e0000000000000000000000000000000000000000000000") as `0x${string}`;
// decodeEuri_TCF_NFTPrice(euri_data);

// 编码initRoot
// encodeInitRoot_TCF_NFTPrice(owner);

// 编码insert
// encodeInsert_TCF_NFTPrice(owner, owner, true);
// encodeInsert_TCF_NFTPrice(addr_7, owner, owner, false);

// 编码setWithdrawAddress
// encodeSetWithdrawAddress_TCF_NFTPrice(owner);

// 编码buyNFTByTC
// encodeBuyNFTByTC_TCF_NFTPrice(0n, 1n);

// 编码isExist
// encodeIsExist_TCF_NFTPrice(owner);

// 编码balanceOf
// encodeBalanceOf_TCF_NFT(owner, 0n);

// 编码ESafeTransferFrom
// encodeESafeTransferFrom_TCF_NFT(owner, addr_3, 1n, [0n, 1n]);

// 编码getChildren
// encodeGetChildren_TCF_NFT(owner);

// 解析getChildren
// const getChildren_data = ("0x" +
//   "00000000000000000000000076e0e1c9979bdca864e888ba89579778ad3815e5000000000000000000000000f6d1c29792ee0e44b1853cf1ae70b0df56febf01") as `0x${string}`;
// decodeGetChildren_TCF_NFT(getChildren_data);

// 编码getUserTokenIds
// encodeGetUserTokenIds_TCF_NFT(owner, 0n);

// 解码getUserTokenIds
// const getUserTokenIds_data =
//   "0x" +
//   "00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000d000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000f0000000000000000000000000000000000000000000000000000000000000010";
// decodeGetUserTokenIds_TCF_NFT(getUserTokenIds_data as `0x${string}`);

// 编码setApprovalForAll
// encodeSetApprovalForAll_TCF_NFT(owner, true);

// 编码checkInitPricesParams
// encodecheckInitPricesParams_TCF_NFTPrice(dcfAddress);

// 编码getNftMintTime
// encodegetNftMintTime_TCF_NFTPrice(2n, 2n);

//解码balanceOf返回数据
// const result =
//   "0x" + "0000000000000000000000000000000000000000000000000000000000000069";
// decodedBalanceOfResult(result as `0x${string}`);

// getNodeBalance
// encodeGetNodeBalance(owner);

// getParent
// encodeGetParent_TCF_NFT(addr_3);

// getRecommendedParent
// encodeGetRecommendedParent_TCF_NFT(addr_3, zeroAddress);

// getRecommender
// encodeGetRecommender_TCF_NFT(addr_3);

// isApprovedForAll
// encodeIsApprovedForAll_TCF_NFT(addr_3, owner);

// minChildSubtreeBalance
// encodeGetNodeBalance(owner);

// subtreeWorth
// encodeSubtreeWorth_TCF_NFT(addr_3);

// transferOwnership
// encodeTransferOwnership_TCF_NFTPrice(addr_3);
