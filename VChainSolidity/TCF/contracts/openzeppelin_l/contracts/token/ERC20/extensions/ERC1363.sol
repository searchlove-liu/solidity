// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC20/extensions/ERC1363.sol)

pragma solidity ^0.8.1;

import {ERC20} from "../ERC20.sol";
import {IERC165, ERC165} from "../../../utils/introspection/ERC165.sol";
import {IERC1363} from "../../../interfaces/IERC1363.sol";
import {ERC1363Utils} from "../utils/ERC1363Utils.sol";

/**
 * @title ERC1363
 * @dev Extension of {ERC20} tokens that adds support for code execution after transfers and approvals
 * on recipient contracts. Calls after transfers are enabled through the {ERC1363-transferAndCall} and
 * {ERC1363-transferFromAndCall} methods while calls after approvals can be made with {ERC1363-approveAndCall}
 *
 * _Available since v5.1._
 */

abstract contract ERC1363 is ERC165, ERC20, IERC1363 {
    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC165, IERC165, ERC20) returns (bool) {
        return
            interfaceId == type(IERC1363).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    /**
     * @dev Moves a `value` amount of tokens from the caller's account to `to`
     * and then calls {IERC1363Receiver-onTransferReceived} on `to`. Returns a flag that indicates
     * if the call succeeded.
     *
     * Requirements:
     *
     * - The target has code (i.e. is a contract).
     * - The target `to` must implement the {IERC1363Receiver} interface.
     * - The target must return the {IERC1363Receiver-onTransferReceived} selector to accept the transfer.
     * - The internal {transfer} must succeed (returned `true`).
     */
    function transferAndCall(
        address,
        uint256
    ) public pure override returns (bool) {
        revert("NOT_IMPLEMENTED");
        // return transferAndCall(to, value, "");
    }

    /**
     * @dev Variant of {transferAndCall} that accepts an additional `data` parameter with
     * no specified format.
     * 用户调用transferAndCall函数，使用DCF购买NFT时，最后一个参数需要传入 tokenID + buyAmount 的hex格式
     *（tokenID和buyAmount 都是uint256类型），前缀为0x，总共长度为66字节。
     * @param data tokenID + buyAmount (each uint256), 64 bytes total
     * @param to NFT合约的地址，花费value的token购买“buyAmount”数量的NFT
     * @param value 花费的token数量,单位是最小单位,花费1个token,则value=1*10^9
     */
    function transferAndCall(
        address to,
        uint256 value,
        bytes memory data
    ) public virtual override returns (bool) {
        // 检查数据格式是否正确
        require(data.length == 64, "ERC1363: invalid data format");
        require(transfer(to, value), "ERC1363: transfer failed");
        ERC1363Utils.checkOnERC1363TransferReceived(
            _msgSender(),
            _msgSender(),
            to,
            value,
            data
        );
        return true;
    }

    /**
     * @dev Moves a `value` amount of tokens from `from` to `to` using the allowance mechanism
     * and then calls {IERC1363Receiver-onTransferReceived} on `to`. Returns a flag that indicates
     * if the call succeeded.
     * 没有实现
     *
     * Requirements:
     *
     * - The target has code (i.e. is a contract).
     * - The target `to` must implement the {IERC1363Receiver} interface.
     * - The target must return the {IERC1363Receiver-onTransferReceived} selector to accept the transfer.
     * - The internal {transferFrom} must succeed (returned `true`).
     */
    function transferFromAndCall(
        address,
        address,
        uint256
    ) public pure override returns (bool) {
        revert("NOT_IMPLEMENTED");
        // return transferFromAndCall(from, to, value, "");
    }

    /**
     * @dev Variant of {transferFromAndCall} that accepts an additional `data` parameter with
     * no specified format.
     * 没有实现
     */
    function transferFromAndCall(
        address,
        address,
        uint256,
        bytes memory
    ) public pure virtual override returns (bool) {
        revert("NOT_IMPLEMENTED");
        // require(transferFrom(from, to, value), "ERC1363: transferFrom failed");
        // ERC1363Utils.checkOnERC1363TransferReceived(
        //     _msgSender(),
        //     from,
        //     to,
        //     value,
        //     data
        // );
        // return true;
    }

    /**
     * @dev Sets a `value` amount of tokens as the allowance of `spender` over the
     * caller's tokens and then calls {IERC1363Spender-onApprovalReceived} on `spender`.
     * Returns a flag that indicates if the call succeeded.
     * 没有实现
     *
     * Requirements:
     *
     * - The target has code (i.e. is a contract).
     * - The target `spender` must implement the {IERC1363Spender} interface.
     * - The target must return the {IERC1363Spender-onApprovalReceived} selector to accept the approval.
     * - The internal {approve} must succeed (returned `true`).
     */
    function approveAndCall(
        address,
        uint256
    ) public pure override returns (bool) {
        revert("NOT_IMPLEMENTED");
        // return approveAndCall(spender, value, "");
    }

    /**
     * @dev Variant of {approveAndCall} that accepts an additional `data` parameter with
     * no specified format.
     * 没有实现
     */
    function approveAndCall(
        address,
        uint256,
        bytes memory
    ) public pure virtual override returns (bool) {
        revert("NOT_IMPLEMENTED");
        // require(approve(spender, value), "ERC1363: approve failed");
        // ERC1363Utils.checkOnERC1363ApprovalReceived(
        //     _msgSender(),
        //     spender,
        //     value,
        //     data
        // );
        // return true;
    }
}
