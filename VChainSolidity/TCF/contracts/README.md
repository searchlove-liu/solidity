// ERC_NFTPrices.sol继承TCF_ERC1155.sol
// TCF_ERC1155MintTime.sol继承ERC_NFTPrices.sol
// binaryTree.sol继承了TCF_ERC1155MintTime.sol
// TCF_NFT.sol 继承了binaryTree.sol

初始化：
DCF_NFT合约：
1、初始化支持的token，TC不需要初始化，默认支持，如果需要初始化其它token地址，则调用addSupportedToken
2、初始化NFT价格。必须初始化，否则用户无法进行任何操作
3、初始化二叉树的根节点。必须初始化，否则用户无法进行任何操作
4、初始化nft的uri，uri是nft存储照片的地方，必须设置。不设置，用户可以正常购买NFT，但无法知道NFT对应照片的图片。

DCF合约：
1、初始化两个地址，占比3%的堵住和占比7%的地址