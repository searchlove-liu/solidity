// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.5.0
pragma solidity ^0.8.1;

import {
    ERC721Upgradeable
} from "./openzeppelin_L/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

import {
    ERC721EnumerableUpgradeable
} from "./openzeppelin_L/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";

import {
    ERC721URIStorageUpgradeable
} from "./openzeppelin_L/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";

import {
    Initializable
} from "./openzeppelin_L/contracts-upgradeable/proxy/utils/Initializable.sol";

// 这个继承顺序按照C3线性化继承
// 1、Initializable，它是最基本的包，内部只引用了address 库（库不需要继承），只有其它包继承它的可能性，所以可以放前面。
// 2、Ownable，只继承了Context包，所以它也类似于Initializable，可以在继承链的最前面。
// 3、ERC721是最基本的函数,如果其它文件引用它，并复写它的函数，那么ERC721的函数应该是最后被执行的。
// 但它继承了Initializable，所以需要在Initializable之后，
// 4、ERC721Pausable属于权限管控，它里面的函数_beforeTokenTransfer先执行super._beforeTokenTransfer,然后继续执行自己的逻辑。
// 这个函数在ERC721, ERC721Enumerable,ERC721Pausable都存在，ERC721Enumerable中的这个函数也是先执行super._beforeTokenTransfer,
// 所以这个函数执行的逻辑，一定是ERC721中的逻辑。然后按照继承顺序，执行。我觉得应该是erc721->限制性权限->ERC721Enumerable，
// 所以ERC721Pausable在ERC721Enumerable的前面（越在前面，_beforeTokenTransfer就会在后面触发 ，但复写的自己逻辑在super之后，
// 所以super执行之后，才会执行自己的逻辑。在继承前面的，自己的逻辑越在前面被执行(ERC721之后)）
// 5、ERC721Enumerable和ERC721URIStorage属于两个独立的插件，没有先后顺序之分。但他俩都继承了ERC721，所以需要在ERC721后面。
contract MyToken is
    Initializable,
    ERC721Upgradeable,
    ERC721EnumerableUpgradeable,
    ERC721URIStorageUpgradeable
{
    uint256 private _nextTokenId;

    constructor() {}

    // 注意修饰器为initializer，意思是，如果当前合约正在执行这个初始化函数，
    // 那么别人无法再次进去这个函数（）。
    function initialize(
        bytes calldata _tokenName,
        bytes calldata _tokenSymbol
    ) public initializer {
        ERC721Upgradeable.__ERC721_init(
            string(_tokenName),
            string(_tokenSymbol)
        );
    }

    function safeMint(address to, bytes memory uri) public returns (uint256) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, string(uri));
        return tokenId;
    }

    function tokenURI(
        uint256 tokenId
    )
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable,ERC721URIStorageUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    )
        internal
        virtual
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
    {
        super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmZ3D7Ak6N6VM5cART2U1zWVPJhvdmaS2iyRh3ANDGCNML/";
    }

    // 烧掉发某个token,这里可以直接覆写ERC721Burnable的burn
    function burn(uint256 tokenId) public {
        // 安全检查
        _burn(tokenId);
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {
        // 增加了权限控制
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "ERC721: caller is not token owner or approved"
        );
        // super调用继承链上最近的父合约，也就是ERC721URIStorage中的burn。
        super._burn(tokenId);
    }
}
