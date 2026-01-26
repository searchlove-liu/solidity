// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "../../contracts/TCF_NFT.sol";
import "../../contracts/extensions/ERC1155/TCF_NFTPrice.sol";

contract MockDCF {
    function symbol() external pure returns (string memory) {
        return "DCF";
    }

    function callOnTransfer(
        TCF_NFT nft,
        address from,
        uint256 amount,
        bytes memory data
    ) external returns (bytes4) {
        return nft.onTransferReceived(address(0), from, amount, data);
    }
}

contract EchidnaTCF_NFT {
    TCF_NFT private nft;
    MockDCF private dcf;

    address private alice = address(0xA11CE);
    address private withdraw = address(0xBEEF);
    bool public invariant_ok = true;

    constructor() payable {
        nft = new TCF_NFT();
        dcf = new MockDCF();

        nft.addSupportedToken(address(dcf));

        TCF_NFTPrice.priceTypeAndAomut[][6] memory prices = _buildPrices();
        nft.initPrice(prices);

        bytes[6] memory base;
        base[0] = bytes("ipfs://0");
        base[1] = bytes("ipfs://1");
        base[2] = bytes("ipfs://2");
        base[3] = bytes("ipfs://3");
        base[4] = bytes("ipfs://4");
        base[5] = bytes("ipfs://5");
        nft.setBaseURI(base);

        nft.setWithdrawAddress(withdraw);

        nft.initRoot(address(this));
        nft.insert(alice, address(this), address(this), true);
    }

    receive() external payable {}

    function buyByTC(uint256 buyAmount) external payable {
        (string memory err_, uint256 price) = nft.getNFTPrice(0, address(0));
        if (bytes(err_).length != 0) {
            invariant_ok = false;
            return;
        }

        if (buyAmount == 0) {
            if (_callBuy(alice, 0, buyAmount, msg.value)) {
                invariant_ok = false;
            }
            return;
        }

        if (price > 0 && buyAmount > type(uint256).max / price) {
            if (_callBuy(alice, 0, buyAmount, msg.value)) {
                invariant_ok = false;
            }
            return;
        }

        uint256 expected = price * buyAmount;
        bool ok = _callBuy(alice, 0, buyAmount, msg.value);
        if (ok && msg.value != expected) {
            invariant_ok = false;
        }
    }

    function onTransferReceivedCall(
        uint256 buyAmount,
        uint256 amount
    ) external {
        (string memory err_, uint256 price) = nft.getNFTPrice(0, address(dcf));
        if (bytes(err_).length != 0) {
            invariant_ok = false;
            return;
        }

        bytes memory data = abi.encode(uint256(0), buyAmount);

        if (buyAmount == 0) {
            if (_callOnTransfer(alice, amount, data)) {
                invariant_ok = false;
            }
            return;
        }
        if (price > 0 && buyAmount > type(uint256).max / price) {
            if (_callOnTransfer(alice, amount, data)) {
                invariant_ok = false;
            }
            return;
        }

        uint256 expected = price * buyAmount;
        bool ok = _callOnTransfer(alice, amount, data);
        if (ok && amount != expected) {
            invariant_ok = false;
        }
    }

    function onTransferReceivedTokenId(uint256 tokenId) external {
        if (tokenId < 6) {
            return;
        }
        bytes memory data = abi.encode(tokenId, uint256(1));
        if (_callOnTransfer(alice, 1, data)) {
            invariant_ok = false;
        }
    }

    function echidna_invariant_ok() external view returns (bool) {
        return invariant_ok;
    }

    function _callBuy(
        address account,
        uint256 id,
        uint256 buyAmount,
        uint256 value
    ) private returns (bool) {
        (bool ok, ) = address(nft).call{value: value}(
            abi.encodeWithSelector(
                nft.buyNFTByTC.selector,
                account,
                id,
                buyAmount
            )
        );
        return ok;
    }

    function _callOnTransfer(
        address from,
        uint256 amount,
        bytes memory data
    ) private returns (bool) {
        try dcf.callOnTransfer(nft, from, amount, data) {
            return true;
        } catch {
            return false;
        }
    }

    function _buildPrices()
        private
        view
        returns (TCF_NFTPrice.priceTypeAndAomut[][6] memory prices)
    {
        for (uint256 i = 0; i < 6; i++) {
            prices[i] = new TCF_NFTPrice.priceTypeAndAomut[](2);
            prices[i][0] = TCF_NFTPrice.priceTypeAndAomut({
                tokenAddress: address(0),
                amount: i + 1
            });
            prices[i][1] = TCF_NFTPrice.priceTypeAndAomut({
                tokenAddress: address(dcf),
                amount: i + 1
            });
        }
    }
}
