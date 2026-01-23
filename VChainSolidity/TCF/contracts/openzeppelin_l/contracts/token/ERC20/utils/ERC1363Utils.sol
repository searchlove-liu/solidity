// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC20/utils/ERC1363Utils.sol)

pragma solidity ^0.8.1;

import {IERC1363Receiver} from "../../../interfaces/IERC1363Receiver.sol";
import {IERC1363Spender} from "../../../interfaces/IERC1363Spender.sol";

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
            // 错误信息表示接收者合约没有正确实现接口IERC1363Receiver或IERC1363Spender
            // 或者更通俗第说，to合约地址不正确
            require(
                retval == IERC1363Receiver.onTransferReceived.selector,
                "ERC1363: to is a incorrect address"
            );
        } catch (bytes memory reason) {
            if (reason.length == 0) {
                // 这里表示接受者（to），不是合约或者没有实现IERC1363Receiver接口或IERC1363Spender
                // 或者更通俗的说，to合约地址不正确
                revert("ERC1363: to is a incorrect address");
            } else {
                assembly {
                    revert(add(reason, 0x20), mload(reason))
                }
            }
        }
    }

    /**
     * @dev Performs a call to {IERC1363Spender-onApprovalReceived} on a target address.
     *
     * Requirements:
     *
     * - The target has code (i.e. is a contract).
     * - The target `spender` must implement the {IERC1363Spender} interface.
     * - The target must return the {IERC1363Spender-onApprovalReceived} selector to accept the approval.
     */
    function checkOnERC1363ApprovalReceived(
        address,
        address,
        uint256,
        bytes memory
    ) internal pure {
        revert("Not allowed to be invoked");
        // require(spender.code.length != 0, "ERC1363: approve to non-contract");

        // try
        //     IERC1363Spender(spender).onApprovalReceived(operator, value, data)
        // returns (bytes4 retval) {
        //     if (retval != IERC1363Spender.onApprovalReceived.selector) {
        //         revert("ERC1363: invalid spender");
        //     }
        // } catch (bytes memory reason) {
        //     if (reason.length == 0) {
        //         revert("ERC1363: invalid spender");
        //     } else {
        //         assembly {
        //             revert(add(reason, 0x20), mload(reason))
        //         }
        //     }
        // }
    }
}
