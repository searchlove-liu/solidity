//SPDX-License-Identifier:MIT
// OpenZeppelin Contracts (last updated v4.9.6) (token/ERC1155/ERC1155.sol)
pragma solidity ^0.8.0;

import "../../openzeppelin_l/contracts/token/ERC1155/IERC1155.sol";
import "../../openzeppelin_l/contracts/token/ERC1155/IERC1155Receiver.sol";
import "../../openzeppelin_l/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
// import "../openzeppelin_l/contracts/utils/Address.sol";
import "../../openzeppelin_l/contracts/utils/Context.sol";
import "../../openzeppelin_l/contracts/utils/introspection/ERC165.sol";
import {TCF_ErrorCode as E} from "../TCF_ErrorCode.sol";

contract TCF_ERC1155 is Context, ERC165, IERC1155, IERC1155MetadataURI {
    // 将ERC1155赋值到这个函数
    // 1、用户mint NFT时保存NFT创建时间，创建时间:{amount，uint32[]}
    // 2、transfer
    // 2.1：用户转送NFT时，连同创建时间一同转给另一个用户（在当前合约中实现）
    // 2.2：用户转送NFT时，只有过期的NFT才能被转送（这个功能在TCF_NFT.sol中实现，因为这里没有每个NFT的权限时长）
    // 3.3：转送NFT时，需要传入index数组，表示可转移token在时间戳数组的index
    // 3.4：执行转token操作是，把某个位置的穿件时间追加到目标地址的时间戳列表中，将发送方时间戳数组的对应位置赋值为0，不需要删除，或把其它位置的数据复制到这个位置
    // 3、有效期存储
    // 3.1：保存在数组中，配套两个处理函数
    // 3.2：获取过期token的index数组
    // 3.3：获取有效token的index数组
    uint256[6] internal _nextTokenId;
    //  mapping(tokenID =>mapping(editionId => address))
    //  editionID表示同一类tokenID下的不同NFT
    mapping(uint256 => mapping(uint256 => address)) private _owners;
    // 用户的token数量, mapping(tokenId => mapping(owner => amount))
    mapping(uint256 => mapping(address => uint256)) private _balances;

    // Mapping from account to operator approvals
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC165, IERC165) returns (bool) {
        return
            interfaceId == type(IERC1155).interfaceId ||
            interfaceId == type(IERC1155MetadataURI).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    /**
     * @dev See {IERC1155MetadataURI-uri}.
     *
     * This implementation returns the same URI for *all* token types. It relies
     * on the token type ID substitution mechanism
     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].
     *
     * Clients calling this function must replace the `\{id\}` substring with the
     * actual token type ID.
     */
    function uri(uint256) public view virtual override returns (string memory) {
        // return _uri;
        return "";
    }

    // owner
    function ownerOf(
        uint256 tokenId,
        uint256 editionId
    ) public view returns (address) {
        require(tokenId < 6, E.ERR_TOKENID_RANGE);
        address owner = _owners[tokenId][editionId];
        return owner;
    }

    /**
     * @dev See {IERC1155-balanceOf}.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function balanceOf(
        address account,
        uint256 id
    ) public view virtual override returns (uint256) {
        require(
            account != address(0),
            "ERC1155: address zero is not a valid owner"
        );
        require(id < 6, E.ERR_TOKENID_RANGE);
        return _balances[id][account];
    }

    /**
     * @dev See {IERC1155-balanceOfBatch}.没有实现
     *
     * Requirements:
     *
     * - `accounts` and `ids` must have the same length.
     */
    function balanceOfBatch(
        address[] memory accounts,
        uint256[] memory ids
    ) public view virtual override returns (uint256[] memory) {
        // require(
        //     accounts.length == ids.length,
        //     "ERC1155: accounts and ids length mismatch"
        // );
        // uint256[] memory batchBalances = new uint256[](accounts.length);
        // for (uint256 i = 0; i < accounts.length; ++i) {
        //     batchBalances[i] = balanceOf(accounts[i], ids[i]);
        // }
        // return batchBalances;
    }

    /**
     * @dev See {IERC1155-setApprovalForAll}.
     */
    function setApprovalForAll(
        address operator,
        bool approved
    ) public virtual override {
        _setApprovalForAll(_msgSender(), operator, approved);
    }

    /**
     * @dev See {IERC1155-isApprovedForAll}.
     */
    function isApprovedForAll(
        address account,
        address operator
    ) public view virtual override returns (bool) {
        return _operatorApprovals[account][operator];
    }

    /**
     * @dev See {IERC1155-safeTransferFrom}.没有实现
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public virtual override {
        // require(
        //     from == _msgSender() || isApprovedForAll(from, _msgSender()),
        //     "ERC1155: caller is not token owner or approved"
        // );
        // _safeTransferFrom(from, to, id, amount, data);
    }

    /**
     * @dev 安全转移无效的token，可以删除，因为后面会在TCF_NFT中实现
     * @param indexes 无效token在mintTimes数组中的位置
     */
    function test_SafeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256[] calldata indexes,
        bytes memory data
    ) public virtual {
        require(
            from == _msgSender() || isApprovedForAll(from, _msgSender()),
            "ERC1155: caller is not token owner or approved"
        );
        _safeTransferFrom(from, to, id, indexes, data);
    }

    /**
     * @dev See {IERC1155-safeBatchTransferFrom}.
     */
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public virtual override {
        // require(
        //     from == _msgSender() || isApprovedForAll(from, _msgSender()),
        //     "ERC1155: caller is not token owner or approved"
        // );
        // _safeBatchTransferFrom(from, to, ids, amounts, data);
    }

    /**
     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.
     *
     * Emits a {TransferSingle} event.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - `from` must have a balance of tokens of type `id` of at least `amount`.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
     * acceptance magic value.
     */
    function _safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        uint256[] calldata indexes,
        bytes memory data
    ) internal virtual {
        require(to != address(0), "ERC1155: transfer to the zero address");
        require(tokenId < 6, E.ERR_TOKENID_RANGE);
        for (uint i = 0; i < indexes.length; i++) {
            require(
                _owners[tokenId][indexes[i]] == from,
                "ERC1155: transfer of token that is not own"
            );
        }
        // 不需要检查余额，因为，如果owners中存在这个tokenId和editionId的记录，表示用户拥有这个NFT

        address operator = _msgSender();
        uint256[] memory ids = _asSingletonArray(tokenId);
        uint256[] memory amounts = _asSingletonArray(indexes.length);
        _beforeTokenTransfer(operator, from, to, ids, amounts, data);

        // 检查两次，防止在beforeTokenTransfer中被修改
        for (uint i = 0; i < indexes.length; i++) {
            require(
                _owners[tokenId][indexes[i]] == from,
                "ERC1155: transfer of token that is not own"
            );
        }

        uint256 fromBalance = _balances[tokenId][from];
        unchecked {
            _balances[tokenId][from] = fromBalance - indexes.length;
            for (uint i = 0; i < indexes.length; i++) {
                _owners[tokenId][indexes[i]] = to;
            }
        }
        _balances[tokenId][to] += indexes.length;
        emit TransferSingle(operator, from, to, tokenId, indexes.length);
        _afterTokenTransfer(operator, from, to, ids, amounts, data);
        _doSafeTransferAcceptanceCheck(
            operator,
            from,
            to,
            tokenId,
            indexes.length,
            data
        );
    }

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.
     *
     * Emits a {TransferBatch} event.
     *
     * Requirements:
     *
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
     * acceptance magic value.
     */
    function _safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual {
        // require(
        //     ids.length == amounts.length,
        //     "ERC1155: ids and amounts length mismatch"
        // );
        // require(to != address(0), "ERC1155: transfer to the zero address");
        // address operator = _msgSender();
        // _beforeTokenTransfer(operator, from, to, ids, amounts, data);
        // for (uint256 i = 0; i < ids.length; ++i) {
        //     uint256 id = ids[i];
        //     uint256 amount = amounts[i];
        //     uint256 fromBalance = _balances[id][from].amount;
        //     require(
        //         fromBalance >= amount,
        //         "ERC1155: insufficient balance for transfer"
        //     );
        //     unchecked {
        //         _balances[id][from].amount = fromBalance - amount;
        //     }
        //     _balances[id][to].amount += amount;
        // }
        // emit TransferBatch(operator, from, to, ids, amounts);
        // _afterTokenTransfer(operator, from, to, ids, amounts, data);
        // _doSafeBatchTransferAcceptanceCheck(
        //     operator,
        //     from,
        //     to,
        //     ids,
        //     amounts,
        //     data
        // );
    }

    /**
     * @dev Sets a new URI for all token types, by relying on the token type ID
     * substitution mechanism
     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].
     *
     * By this mechanism, any occurrence of the `\{id\}` substring in either the
     * URI or any of the amounts in the JSON file at said URI will be replaced by
     * clients with the token type ID.
     *
     * For example, the `https://token-cdn-domain/\{id\}.json` URI would be
     * interpreted by clients as
     * `https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`
     * for token type ID 0x4cce0.
     *
     * See {uri}.
     *
     * Because these URIs cannot be meaningfully represented by the {URI} event,
     * this function emits no events.
     */
    function _setURI(string memory newuri) internal virtual {
        // _uri = newuri;
    }

    /**
     * @dev Creates `amount` tokens of token type `id`, and assigns them to `to`.
     *
     * Emits a {TransferSingle} event.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
     * acceptance magic value.
     */
    function _mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual {
        require(id < 6, E.ERR_TOKENID_RANGE);
        require(to != address(0), "ERC1155: mint to the zero address");

        address operator = _msgSender();
        uint256[] memory ids = _asSingletonArray(id);
        uint256[] memory amounts = _asSingletonArray(amount);

        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);

        // 更新用户资产
        _balances[id][to] += amount;
        for (uint i = 0; i < amount; i++) {
            _owners[id][_nextTokenId[id] + i] = to;
        }
        _nextTokenId[id] += amount;

        // _balances[id][to] = oldMintTime_Amount;
        emit TransferSingle(operator, address(0), to, id, amount);

        _afterTokenTransfer(operator, address(0), to, ids, amounts, data);

        _doSafeTransferAcceptanceCheck(
            operator,
            address(0),
            to,
            id,
            amount,
            data
        );
    }

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.
     *
     * Emits a {TransferBatch} event.
     *
     * Requirements:
     *
     * - `ids` and `amounts` must have the same length.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
     * acceptance magic value.
     */
    function _mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual {
        // require(to != address(0), "ERC1155: mint to the zero address");
        // require(
        //     ids.length == amounts.length,
        //     "ERC1155: ids and amounts length mismatch"
        // );
        // for (uint256 i = 0; i < ids.length; i++) {
        //     require(ids[i] < 6, E.ERR_TOKENID_RANGE);
        // }
        // address operator = _msgSender();
        // _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);
        // for (uint256 i = 0; i < ids.length; i++) {
        //     _balances[ids[i]][to].amount += amounts[i];
        //     for (uint j = 0; j < amounts[i]; j++) {
        //         _balances[ids[i]][to].mintTimes.push(block.timestamp);
        //     }
        // }
        // emit TransferBatch(operator, address(0), to, ids, amounts);
        // _afterTokenTransfer(operator, address(0), to, ids, amounts, data);
        // _doSafeBatchTransferAcceptanceCheck(
        //     operator,
        //     address(0),
        //     to,
        //     ids,
        //     amounts,
        //     data
        // );
    }

    /**
     * @dev Destroys `amount` tokens of token type `id` from `from`
     *
     * Emits a {TransferSingle} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `from` must have at least `amount` tokens of token type `id`.
     */
    function _burn(address from, uint256 id, uint256 amount) internal virtual {
        // require(from != address(0), "ERC1155: burn from the zero address");
        // address operator = _msgSender();
        // uint256[] memory ids = _asSingletonArray(id);
        // uint256[] memory amounts = _asSingletonArray(amount);
        // _beforeTokenTransfer(operator, from, address(0), ids, amounts, "");
        // uint256 fromBalance = _balances[id][from];
        // require(fromBalance >= amount, "ERC1155: burn amount exceeds balance");
        // unchecked {
        //     _balances[id][from] = fromBalance - amount;
        // }
        // emit TransferSingle(operator, from, address(0), id, amount);
        // _afterTokenTransfer(operator, from, address(0), ids, amounts, "");
    }

    /**
     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.
     *
     * Emits a {TransferBatch} event.
     *
     * Requirements:
     *
     * - `ids` and `amounts` must have the same length.
     */
    function _burnBatch(
        address from,
        uint256[] memory ids,
        uint256[] memory amounts
    ) internal virtual {
        // require(from != address(0), "ERC1155: burn from the zero address");
        // require(
        //     ids.length == amounts.length,
        //     "ERC1155: ids and amounts length mismatch"
        // );
        // address operator = _msgSender();
        // _beforeTokenTransfer(operator, from, address(0), ids, amounts, "");
        // for (uint256 i = 0; i < ids.length; i++) {
        //     uint256 id = ids[i];
        //     uint256 amount = amounts[i];
        //     uint256 fromBalance = _balances[id][from];
        //     require(
        //         fromBalance >= amount,
        //         "ERC1155: burn amount exceeds balance"
        //     );
        //     unchecked {
        //         _balances[id][from] = fromBalance - amount;
        //     }
        // }
        // emit TransferBatch(operator, from, address(0), ids, amounts);
        // _afterTokenTransfer(operator, from, address(0), ids, amounts, "");
    }

    /**
     * @dev Approve `operator` to operate on all of `owner` tokens
     *
     * Emits an {ApprovalForAll} event.
     */
    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal virtual {
        require(owner != operator, "ERC1155: setting approval status for self");
        _operatorApprovals[owner][operator] = approved;
        emit ApprovalForAll(owner, operator, approved);
    }

    /**
     * @dev Hook that is called before any token transfer. This includes minting
     * and burning, as well as batched variants.
     *
     * The same hook is called on both single and batched variants. For single
     * transfers, the length of the `ids` and `amounts` arrays will be 1.
     *
     * Calling conditions (for each `id` and `amount` pair):
     *
     * - When `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * of token type `id` will be  transferred to `to`.
     * - When `from` is zero, `amount` tokens of token type `id` will be minted
     * for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens of token type `id`
     * will be burned.
     * - `from` and `to` are never both zero.
     * - `ids` and `amounts` have the same, non-zero length.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual {}

    /**
     * @dev Hook that is called after any token transfer. This includes minting
     * and burning, as well as batched variants.
     *
     * The same hook is called on both single and batched variants. For single
     * transfers, the length of the `id` and `amount` arrays will be 1.
     *
     * Calling conditions (for each `id` and `amount` pair):
     *
     * - When `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * of token type `id` will be  transferred to `to`.
     * - When `from` is zero, `amount` tokens of token type `id` will be minted
     * for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens of token type `id`
     * will be burned.
     * - `from` and `to` are never both zero.
     * - `ids` and `amounts` have the same, non-zero length.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual {}

    function _doSafeTransferAcceptanceCheck(
        address operator,
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) private {
        if (to.code.length > 0) {
            try
                IERC1155Receiver(to).onERC1155Received(
                    operator,
                    from,
                    id,
                    amount,
                    data
                )
            returns (bytes4 response) {
                if (response != IERC1155Receiver.onERC1155Received.selector) {
                    revert("ERC1155: ERC1155Receiver rejected tokens");
                }
            } catch Error(string memory reason) {
                revert(reason);
            } catch {
                revert("ERC1155: transfer to non-ERC1155Receiver implementer");
            }
        }
    }

    function _doSafeBatchTransferAcceptanceCheck(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) private {
        if (to.code.length > 0) {
            try
                IERC1155Receiver(to).onERC1155BatchReceived(
                    operator,
                    from,
                    ids,
                    amounts,
                    data
                )
            returns (bytes4 response) {
                if (
                    response != IERC1155Receiver.onERC1155BatchReceived.selector
                ) {
                    revert("ERC1155: ERC1155Receiver rejected tokens");
                }
            } catch Error(string memory reason) {
                revert(reason);
            } catch {
                revert("ERC1155: transfer to non-ERC1155Receiver implementer");
            }
        }
    }

    function _asSingletonArray(
        uint256 element
    ) private pure returns (uint256[] memory) {
        uint256[] memory array = new uint256[](1);
        array[0] = element;

        return array;
    }
}
