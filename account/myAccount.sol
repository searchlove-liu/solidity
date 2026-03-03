// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.5.0
pragma solidity ^0.8.27;

import {Account} from "@openzeppelin/contracts/account/Account.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ERC1155Holder} from "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import {ERC721Holder} from "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import {ERC7739} from "@openzeppelin/contracts/utils/cryptography/signers/draft-ERC7739.sol";
import {ERC7821} from "@openzeppelin/contracts/account/extensions/draft-ERC7821.sol";
import {SignerECDSA} from "@openzeppelin/contracts/utils/cryptography/signers/SignerECDSA.sol";

// Bundler 负责收集与打包，EntryPoint 负责链上执行与结算，Account 负责授权与执行逻辑。
contract MyAccount is Account, EIP712, ERC7739, SignerECDSA, ERC7821, ERC721Holder, ERC1155Holder {
    constructor(address signer) EIP712("MyAccount", "1") SignerECDSA(signer) {}

    function _erc7821AuthorizedExecutor(address caller, bytes32 mode, bytes calldata executionData)
        internal
        view
        override
        returns (bool)
    {
        return caller == address(entryPoint()) || super._erc7821AuthorizedExecutor(caller, mode, executionData);
    }
}
