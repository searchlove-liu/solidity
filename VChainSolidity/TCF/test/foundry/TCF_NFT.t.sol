// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "forge-std/Test.sol";
import "../../contracts/TCF_NFT.sol";
import "../../contracts/extensions/ERC1155/TCF_NFTPrice.sol";

contract MockDCF {
    function symbol() external pure returns (string memory) {
        return "DCF";
    }
}

contract TCF_NFT_Fuzz is Test {
    TCF_NFT private nft;
    MockDCF private dcf;

    address private alice = address(0xA11CE);

    function setUp() public {
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

        nft.setWithdrawAddress(address(0xBEEF));

        nft.initRoot(address(this));
        nft.insert(alice, address(this), address(this), true);
    }

    function testFuzz_buyNFTByTC(uint256 buyAmount, uint256 sentValue) public {
        buyAmount = bound(buyAmount, 0, 10);
        sentValue = bound(sentValue, 0, 100);

        vm.deal(alice, sentValue);
        vm.prank(alice);

        uint256 price = 1;
        uint256 expected = price * buyAmount;
        if (buyAmount == 0 || sentValue != expected) {
            vm.expectRevert("INCORRECT_FUNDS");
            nft.buyNFTByTC{value: sentValue}(alice, 0, buyAmount);
            return;
        }

        nft.buyNFTByTC{value: sentValue}(alice, 0, buyAmount);
        assertEq(nft.balanceOf(alice, 0), buyAmount);
    }

    function testFuzz_onTransferReceived(
        uint256 buyAmount,
        uint256 amount
    ) public {
        buyAmount = bound(buyAmount, 0, 10);
        amount = bound(amount, 0, 100);

        bytes memory data = abi.encode(uint256(0), buyAmount);
        vm.prank(address(dcf));

        uint256 price = 1;
        uint256 expected = price * buyAmount;
        if (buyAmount == 0 || amount != expected) {
            vm.expectRevert("INCORRECT_FUNDS");
            nft.onTransferReceived(address(0), alice, amount, data);
            return;
        }

        nft.onTransferReceived(address(0), alice, amount, data);
        assertEq(nft.balanceOf(alice, 0), buyAmount);
    }

    function testFuzz_onTransferReceived_tokenIdRange(uint256 tokenId) public {
        tokenId = bound(tokenId, 6, 1000);
        bytes memory data = abi.encode(tokenId, uint256(1));
        vm.prank(address(dcf));
        vm.expectRevert("TOKENID_RANGE");
        nft.onTransferReceived(address(0), alice, 1, data);
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
