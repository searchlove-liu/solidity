### 在hardhat中部署
运行本地节点：npx hardhat node
编译：npx hardhat compile   生成generated目录。

node 版本：v24.11.0

ai：
当前TCF_NFT.test.ts文件是对contracts/TCF_NFT.sol（刚刚进行了修改）合约的测试。请检查TCF_NFT.sol合约的安全性和TCF_NFT.test.ts测试文件的完整性，看还有哪些遗漏的对TCF_NFT.sol的测试，如果有遗漏的测试，请在TCF_NFT.test.ts原来的框架结构的基础上，追加上这些测试用例。如果合约存在安全性问题，请提示修改TCF_NFT.sol合约

slither-analyzer静态分析
 Echidna/Foundry动态模糊测试

部署合约使用bytecode，而不是使用deployedBytecode
对应bytecode文件夹中，bytecode对应xxx.init.bin，deployBytecode对应xxx.deployed.bin
bytecode是部署合约时的字节码，deployBytecode是存储在区块链上的合约的字节码。两者不相同