// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC20/utils/ERC1363Utils.sol)

pragma solidity ^0.8.1;

import {IERC1363Receiver} from "../../../interfaces/IERC1363Receiver.sol";

/**
 * @dev Library that provides common ERC-1363 utility functions.
 *
 * See https://eips.ethereum.org/EIPS/eip-1363[ERC-1363].
 */
library ERC1363Utils {
    /**
     * @dev Performs a call to {IERC1363Receiver-onTransferReceived} on a target address.
     *
     * Requirements:
     *
     * - The target has code (i.e. is a contract).
     * - The target `to` must implement the {IERC1363Receiver} interface.
     * - The target must return the {IERC1363Receiver-onTransferReceived} selector to accept the transfer.
     */
    function checkOnERC1363TransferReceived(
        address operator,
        address from,
        address to,
        uint256 value,
        bytes memory data
    ) internal {
        require(to.code.length != 0, "ERC1363: transfer to non-contract");

        try
            IERC1363Receiver(to).onTransferReceived(operator, from, value, data)
        returns (bytes4 retval) {
            // 错误信息,使用DCF购买NFT时，第三个参数地址“to”(接受合约地址)没有正确实现接口IERC1363Receiver或IERC1363Spender
            // 或者更通俗第说，to合约地址不正确
            require(
                retval == IERC1363Receiver.onTransferReceived.selector,
                "ERC1363: to is a incorrect address"
            );
        } catch (bytes memory reason) {
            if (reason.length == 0) {
                // 使用DCF购买NFT时，第三个参数地址“to”(接受合约地址)，没有实现IERC1363Receiver接口或IERC1363Spender
                // 或者更通俗的说，to合约地址不正确
                revert("ERC1363: to is a incorrect address");
            } else {
                assembly {
                    revert(add(reason, 0x20), mload(reason))
                }
            }
        }
    }
}
