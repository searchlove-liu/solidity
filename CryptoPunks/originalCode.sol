/**
 *Submitted for verification at Etherscan.io on 2017-07-19
 */

pragma solidity ^0.4.8;
contract CryptoPunksMarket {
    // You can use this hash to verify the image file containing all the punks
    string public imageHash =
        "ac39af4793119ee46bbff351d8cb6b5f23da60222126add4268e261199a2921b";

    address owner;

    string public standard = "CryptoPunks";
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    uint public nextPunkIndexToAssign = 0;

    bool public allPunksAssigned = false;
    uint public punksRemainingToAssign = 0;

    //mapping (address => uint) public addressToPunkIndex;
    mapping(uint => address) public punkIndexToAddress;

    /* This creates an array with all balances */
    mapping(address => uint256) public balanceOf;

    struct Offer {
        bool isForSale; // 是否在售
        uint punkIndex;
        address seller;
        uint minValue; // in ether
        address onlySellTo; // specify to sell only to a specific person
    }

    struct Bid {
        bool hasBid;
        uint punkIndex;
        address bidder;
        uint value;
    }

    // A record of punks that are offered for sale at a specific minimum value, and perhaps to a specific person
    mapping(uint => Offer) public punksOfferedForSale;

    // A record of the highest punk bid
    mapping(uint => Bid) public punkBids;

    mapping(address => uint) public pendingWithdrawals;

    event Assign(address indexed to, uint256 punkIndex);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event PunkTransfer(
        address indexed from,
        address indexed to,
        uint256 punkIndex
    );
    event PunkOffered(
        uint indexed punkIndex,
        uint minValue,
        address indexed toAddress
    );
    event PunkBidEntered(
        uint indexed punkIndex,
        uint value,
        address indexed fromAddress
    );
    event PunkBidWithdrawn(
        uint indexed punkIndex,
        uint value,
        address indexed fromAddress
    );
    event PunkBought(
        uint indexed punkIndex,
        uint value,
        address indexed fromAddress,
        address indexed toAddress
    );
    event PunkNoLongerForSale(uint indexed punkIndex);

    /* Initializes contract with initial supply tokens to the creator of the contract */
    function CryptoPunksMarket() payable {
        //        balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens
        owner = msg.sender;
        totalSupply = 10000; // Update total supply
        punksRemainingToAssign = totalSupply;
        name = "CRYPTOPUNKS"; // Set the name for display purposes
        symbol = "Ͼ"; // Set the symbol for display purposes
        decimals = 0; // Amount of decimals for display purposes
    }

    function setInitialOwner(address to, uint punkIndex) {
        if (msg.sender != owner) throw;
        if (allPunksAssigned) throw;
        if (punkIndex >= 10000) throw;
        if (punkIndexToAddress[punkIndex] != to) {
            if (punkIndexToAddress[punkIndex] != 0x0) {
                balanceOf[punkIndexToAddress[punkIndex]]--;
            } else {
                punksRemainingToAssign--;
            }
            punkIndexToAddress[punkIndex] = to;
            balanceOf[to]++;
            Assign(to, punkIndex);
        }
    }

    function setInitialOwners(address[] addresses, uint[] indices) {
        if (msg.sender != owner) throw;
        uint n = addresses.length;
        for (uint i = 0; i < n; i++) {
            setInitialOwner(addresses[i], indices[i]);
        }
    }

    //  标记初始分配完成，启用市场功能
    function allInitialOwnersAssigned() {
        if (msg.sender != owner) throw;
        allPunksAssigned = true;
    }

    function getPunk(uint punkIndex) {
        // 初始化分配完（并没有都分配完），才可以继续执行
        if (!allPunksAssigned) throw;
        if (punksRemainingToAssign == 0) throw;
        if (punkIndexToAddress[punkIndex] != 0x0) throw;
        if (punkIndex >= 10000) throw;
        punkIndexToAddress[punkIndex] = msg.sender;
        balanceOf[msg.sender]++;
        punksRemainingToAssign--;
        Assign(msg.sender, punkIndex);
    }

    // Transfer ownership of a punk to another user without requiring payment
    // 转移punk的所有权，不需要支付金额
    function transferPunk(address to, uint punkIndex) {
        // 初始化分配完（并没有都分配完），才可以继续执行
        if (!allPunksAssigned) throw;
        if (punkIndexToAddress[punkIndex] != msg.sender) throw;
        if (punkIndex >= 10000) throw;
        // 如果正在出售，转为不再售卖
        if (punksOfferedForSale[punkIndex].isForSale) {
            punkNoLongerForSale(punkIndex);
        }
        punkIndexToAddress[punkIndex] = to;
        balanceOf[msg.sender]--;
        balanceOf[to]++;
        Transfer(msg.sender, to, 1);
        PunkTransfer(msg.sender, to, punkIndex);
        // Check for the case where there is a bid from the new owner and refund it.
        // Any other bid can stay in place.
        Bid bid = punkBids[punkIndex];
        // 这里会有一个小问题，如果bid.bidder !=to,那么那些已经出价的人怎么提取钱呢？
        // withdrawBidForPunk，可以让出价最高的人自己调用来提取已经出的价钱，
        // 之前出价值已经放到pendingWithdrawals变量中，调用withdraw函数就可以自己的出价金额。
        if (bid.bidder == to) {
            // Kill bid and refund value
            // 这里使用+=的原因是，一个用户可能重复出价很多次
            pendingWithdrawals[to] += bid.value;
            punkBids[punkIndex] = Bid(false, punkIndex, 0x0, 0);
        }
    }

    function punkNoLongerForSale(uint punkIndex) {
        // 初始化分配完（并没有都分配完），才可以继续执行
        if (!allPunksAssigned) throw;
        if (punkIndexToAddress[punkIndex] != msg.sender) throw;
        if (punkIndex >= 10000) throw;
        punksOfferedForSale[punkIndex] = Offer(
            false,
            punkIndex,
            msg.sender,
            0,
            0x0
        );
        PunkNoLongerForSale(punkIndex);
    }

    function offerPunkForSale(uint punkIndex, uint minSalePriceInWei) {
        if (!allPunksAssigned) throw;
        if (punkIndexToAddress[punkIndex] != msg.sender) throw;
        if (punkIndex >= 10000) throw;
        punksOfferedForSale[punkIndex] = Offer(
            true,
            punkIndex,
            msg.sender,
            minSalePriceInWei,
            0x0
        );
        PunkOffered(punkIndex, minSalePriceInWei, 0x0);
    }

    function offerPunkForSaleToAddress(
        uint punkIndex,
        uint minSalePriceInWei,
        address toAddress
    ) {
        if (!allPunksAssigned) throw;
        if (punkIndexToAddress[punkIndex] != msg.sender) throw;
        if (punkIndex >= 10000) throw;
        punksOfferedForSale[punkIndex] = Offer(
            true,
            punkIndex,
            msg.sender,
            minSalePriceInWei,
            toAddress
        );
        PunkOffered(punkIndex, minSalePriceInWei, toAddress);
    }

    function buyPunk(uint punkIndex) payable {
        if (!allPunksAssigned) throw;
        Offer offer = punksOfferedForSale[punkIndex];
        if (punkIndex >= 10000) throw;
        if (!offer.isForSale) throw; // punk not actually for sale
        if (offer.onlySellTo != 0x0 && offer.onlySellTo != msg.sender) throw; // punk not supposed to be sold to this user
        if (msg.value < offer.minValue) throw; // Didn't send enough ETH
        if (offer.seller != punkIndexToAddress[punkIndex]) throw; // Seller no longer owner of punk

        address seller = offer.seller;

        punkIndexToAddress[punkIndex] = msg.sender;
        balanceOf[seller]--;
        balanceOf[msg.sender]++;
        Transfer(seller, msg.sender, 1);

        punkNoLongerForSale(punkIndex);
        // 给seller打钱
        pendingWithdrawals[seller] += msg.value;
        PunkBought(punkIndex, msg.value, seller, msg.sender);

        // Check for the case where there is a bid from the new owner and refund it.
        // Any other bid can stay in place.
        // 不懂
        Bid bid = punkBids[punkIndex];
        if (bid.bidder == msg.sender) {
            // Kill bid and refund value
            // 因为这个函数是payable的，msg.value是买家支付的钱
            // 所以需要把买家之前的出价退还给买家
            pendingWithdrawals[msg.sender] += bid.value;
            punkBids[punkIndex] = Bid(false, punkIndex, 0x0, 0);
        }
    }

    // 在enterBidForPunk函数中，如果别人出价比你高，就会给你退钱，你需要自己调用withdraw函数来提取这些退回的钱
    function withdraw() {
        if (!allPunksAssigned) throw;
        uint amount = pendingWithdrawals[msg.sender];
        // Remember to zero the pending refund before
        // sending to prevent re-entrancy attacks
        pendingWithdrawals[msg.sender] = 0;
        msg.sender.transfer(amount);
    }

    function enterBidForPunk(uint punkIndex) payable {
        if (punkIndex >= 10000) throw;
        if (!allPunksAssigned) throw;
        if (punkIndexToAddress[punkIndex] == 0x0) throw;
        if (punkIndexToAddress[punkIndex] == msg.sender) throw;
        if (msg.value == 0) throw;
        Bid existing = punkBids[punkIndex];
        if (msg.value <= existing.value) throw;
        if (existing.value > 0) {
            // Refund the failing bid
            pendingWithdrawals[existing.bidder] += existing.value;
        }
        punkBids[punkIndex] = Bid(true, punkIndex, msg.sender, msg.value);
        PunkBidEntered(punkIndex, msg.value, msg.sender);
    }

    // 卖家接受买家的出价
    function acceptBidForPunk(uint punkIndex, uint minPrice) {
        if (punkIndex >= 10000) throw;
        if (!allPunksAssigned) throw;
        if (punkIndexToAddress[punkIndex] != msg.sender) throw;
        address seller = msg.sender;
        Bid bid = punkBids[punkIndex];
        if (bid.value == 0) throw;
        // 如果出价低于最低价，则抛出异常
        if (bid.value < minPrice) throw;

        punkIndexToAddress[punkIndex] = bid.bidder;
        balanceOf[seller]--;
        balanceOf[bid.bidder]++;
        Transfer(seller, bid.bidder, 1);

        punksOfferedForSale[punkIndex] = Offer(
            false,
            punkIndex,
            bid.bidder,
            0,
            0x0
        );
        uint amount = bid.value;
        punkBids[punkIndex] = Bid(false, punkIndex, 0x0, 0);
        // 给seller打钱
        pendingWithdrawals[seller] += amount;
        PunkBought(punkIndex, bid.value, seller, bid.bidder);
    }

    function withdrawBidForPunk(uint punkIndex) {
        if (punkIndex >= 10000) throw;
        if (!allPunksAssigned) throw;
        if (punkIndexToAddress[punkIndex] == 0x0) throw;
        if (punkIndexToAddress[punkIndex] == msg.sender) throw;
        Bid bid = punkBids[punkIndex];
        // 只有出价者自己才能撤回自己的出价
        if (bid.bidder != msg.sender) throw;
        PunkBidWithdrawn(punkIndex, bid.value, msg.sender);
        uint amount = bid.value;
        punkBids[punkIndex] = Bid(false, punkIndex, 0x0, 0);
        // Refund the bid money
        msg.sender.transfer(amount);
    }
}
