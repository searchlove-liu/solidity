// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.4.0) (token/ERC20/utils/ERC1363Utils.sol)

pragma solidity ^0.8.1;

import {TCF_NFT} from "../TCF_NFT.sol";
import {IERC20} from "../openzeppelin_l/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Library that provides common ERC-1363 utility functions.
 *
 * See https://eips.ethereum.org/EIPS/eip-1363[ERC-1363].
 */
library AirdropUtils {
    event AirdropClaimed(address indexed claimant, uint256 amount);

    function checkTransfer(
        address operator,
        address rewardToken,
        uint256 value
    ) internal {
        require(
            rewardToken.code.length != 0,
            "AirdropUtils: rewardToken non-contract"
        );

        try IERC20(rewardToken).transfer(operator, value) returns (
            bool success
        ) {
            if (success) {
                emit AirdropClaimed(msg.sender, value);
            } else {
                revert("Reward transfer failed");
            }
        } catch (bytes memory reason) {
            if (reason.length == 0) {
                revert("Reward transfer failed");
            } else {
                assembly {
                    revert(add(reason, 0x20), mload(reason))
                }
            }
        }
    }

    function checkgetUserTokenIds(
        address account,
        address to,
        uint256 tokenId
    ) internal view returns (uint256[] memory tokenIds) {
        require(to.code.length != 0, "AirdropUtils: transfer to non-contract");

        try TCF_NFT(to).getUserTokenIds(account, tokenId) returns (
            uint256[] memory _tokenIds
        ) {
            tokenIds = _tokenIds;
            if (tokenIds.length > 0) {
                return tokenIds;
            }
        } catch (bytes memory reason) {
            if (reason.length == 0) {
                revert("AirdropUtils: getUserTokenIds failed");
            } else {
                assembly {
                    revert(add(reason, 0x20), mload(reason))
                }
            }
        }
    }

    function checkTotalSupply(
        address to,
        uint256 tokenId
    ) internal view returns (uint256 totalSupply) {
        require(to.code.length != 0, "AirdropUtils: transfer to non-contract");

        try TCF_NFT(to).totalSupply(tokenId) returns (uint256 _totalSupply) {
            totalSupply = _totalSupply;
            return totalSupply;
        } catch (bytes memory reason) {
            if (reason.length == 0) {
                revert("AirdropUtils: totalSupply failed");
            } else {
                assembly {
                    revert(add(reason, 0x20), mload(reason))
                }
            }
        }
    }

    // 检查空投合约的erc20代币的余额
    function checkAirdropBalance(
        address to,
        address rewardToken
    ) internal view returns (uint256) {
        require(rewardToken.code.length != 0, "AirdropUtils: ");

        try IERC20(rewardToken).balanceOf(to) returns (uint256 balance) {
            return balance;
        } catch (bytes memory reason) {
            if (reason.length == 0) {
                revert("AirdropUtils: balanceOf failed");
            } else {
                assembly {
                    revert(add(reason, 0x20), mload(reason))
                }
            }
        }
    }
}
