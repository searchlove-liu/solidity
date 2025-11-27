1. 燃烧token
1. 可暂停
1. 增加修改uri逻辑
1. 可升级
1. 在智能合约中自动生成nft属性





## init

不支持constructor，所以在部署合约之后调用initialize函数来初始化token name和token symbol



## baseUri

可以通过内置一个`baseURI`，格式为`https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmZ3D7Ak6N6VM5cART2U1zWVPJhvdmaS2iyRh3ANDGCNML/`

1. 调用`safeMint`函数创建NFT时，就不需要输入uri。你调用`tokenURI`来获取某个token的URI时，代码会自动创建一个uri，格式为`baseURI+tokenID`，例如`https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmZ3D7Ak6N6VM5cART2U1zWVPJhvdmaS2iyRh3ANDGCNML/0`。在这个URI后面加个`.json`，如`https://crowded-harlequin-skunk.myfilebase.com/ipfs/QmZ3D7Ak6N6VM5cART2U1zWVPJhvdmaS2iyRh3ANDGCNML/0.json`就可以访问`metadata`数据了。
2. 如果你调用`safeMint`时，穿入了uri。你调用`tokenURI`来获取某个token的URI时，代码会自动创建一个uri，格式为`baseURI+uri`
3. 如果你不设置`baseURI`，在`safeMint`时传入了一个uri，那么你调用`tokenURI`来获取某个token的URI时，会返回你传入的值。
4. 如果你既没有设置`baseURI`，在`safemint`时也没有传入uri，那么你调用`tokenURI`来获取某个token的URI时，会返回空。



