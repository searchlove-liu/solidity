pragma solidity ^0.4.11;

// Aggregator file importing all split contracts.
// NOTE: Intentionally does NOT import "./kittycore.sol" to avoid duplicate contract definitions.

import "./ownable.sol";
import "./IERC721.sol";
import "./GeneScienceInterface.sol";
import "./KittyAccessControl.sol";
import "./KittyBase.sol";
import "./ERC721Metadata.sol";

import "./KittyOwnership.sol";
import "./KittyBreeding.sol";

import "./ClockAuctionBase.sol";
import "./Pausable.sol";
import "./ClockAuction.sol";
import "./SiringClockAuction.sol";
import "./SaleClockAuction.sol";

import "./KittyAuction.sol";
import "./KittyMinting.sol";
import "./KittyCoreMain.sol";
