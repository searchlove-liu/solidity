// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts 4.9.6

// import {TCF} from "./TCF.sol";

/***
 * @dev 静态合约，继承了TCF合约。功能：计算算力，NFT过期之后让NFT无效（不再作为算力计算的依据）。
 * 实现：算力指代用户花费多少usdt/100。将ERC1155合约地址传入动态算力合约和静态算力合约，
 * 因为在计算算力时需要知道用户拥有多少个NFT，然后根据拥有的NFT来计算用户拥有多少算力。
 * 同时对于静态奖励和动态奖励，每天在计算算力的时候自动叠加，然后将计算得到的奖励保存在区块链外，
 * 用户需要手动提款。（因为静态合约和动态合约极度依赖NFT合约，所以先写NFT合约）
 */

contract StaticContract {
    //
}
