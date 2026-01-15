//SPDX-License-Identifier:MIT

import {ERC1155} from "./openzeppelin_l/contracts/token/ERC1155/ERC1155.sol";

contract TCF_ERC1155 is ERC1155 {
    // git提交一次
    // 将ERC1155赋值到这个函数
    // 1、保存用户购买NFT的数量，创建时间:{amount，uint32[]}
    // amount和数组长度必须一致
    // 2、TCF使用ERC1363来实现授权
    // 3、实现使用TCF购买NFT
    // 4、实现使用tc转账NFT
}
