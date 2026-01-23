// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

library TCF_ErrorCode {
    string internal constant ERR_ADDR_LEN = "ADDR_LEN";
    string internal constant ERR_ADDR_EXISTS = "ADDR_EXISTS";
    string internal constant ERR_NOT_DCF_USDT = "NOT_DCF_USDT";
    string internal constant ERR_DUP_DCF = "DUP_DCF";
    string internal constant ERR_DUP_USDT = "DUP_USDT";
    string internal constant ERR_PRICES_LEN = "PRICES_LEN";
    string internal constant ERR_TOKEN_UNSUPPORTED = "TOKEN_UNSUPPORTED";
    string internal constant ERR_TOKENID_RANGE = "TOKENID_RANGE";
    string internal constant ERR_NATURE_TOKEN_DEL = "NATURE_TOKEN_DEL";
    string internal constant ERR_PRICES_INITIALIZED = "PRICES_INITIALIZED";
    string internal constant ERR_NFT_SENDED_VALID = "NFT_SENDED_VALID";
    string internal constant ERR_INCORRECT_FUNDS = "INCORRECT_FUNDS";
    string internal constant ERR_INVALID_EDITIONID = "INVALID_EDITIONID";
    string internal constant ERR_TOKEN_NOT_OWNED = "TOKEN_NOT_OWNED";
    string internal constant ERR_DATA_INVALID = "DATA_INVALID";
    string internal constant ERR_ADDRESS_ZERO = "ZERO_ADDRESS";
    string internal constant ERR_PRICES_NOT_INITIALIZED =
        "PRICES_NOT_INITIALIZED";
    string internal constant ERR_ROOT_NOT_INITIALIZED = "ROOT_NOT_INITIALIZED";
    string internal constant ERR_NODE_NOT_EXISTS = "NODE_NOT_EXISTS";
}
