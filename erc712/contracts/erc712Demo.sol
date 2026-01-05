// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EIP712Demo {
    // 1. 定义结构体
    struct Person {
        string name;
        address wallet;
    }

    struct Mail {
        Person from;
        Person to;
        string contents;
    }

    // 2. 定义类型哈希
    bytes32 private constant PERSON_TYPEHASH =
        keccak256("Person(string name,address wallet)");

    bytes32 private constant MAIL_TYPEHASH =
        keccak256(
            "Mail(Person from,Person to,string contents)Person(string name,address wallet)"
        );

    // 3. 定义域分隔符
    bytes32 private constant DOMAIN_TYPEHASH =
        keccak256(
            "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
        );

    bytes32 private immutable DOMAIN_SEPARATOR;

    // 4. 存储已验证的签名，防止重放攻击
    mapping(bytes32 => bool) public usedSignatures;

    constructor() {
        // 初始化域分隔符
        DOMAIN_SEPARATOR = keccak256(
            abi.encode(
                DOMAIN_TYPEHASH,
                keccak256("MailDApp"), // name
                keccak256("1.0.0"), // version
                block.chainid, // chainId
                address(this) // verifyingContract
            )
        );
    }

    // 5. 主验证函数
    function verifyMail(
        Mail memory mail,
        bytes32 r,
        bytes32 vs
    ) public returns (bool) {
        // 恢复签名者
        address signer = recover(mail, r, vs);

        // 检查签名是否已使用
        bytes32 signatureHash = keccak256(abi.encodePacked(r, vs));
        require(!usedSignatures[signatureHash], "Signature already used");
        usedSignatures[signatureHash] = true;

        // 验证签名者是否与 mail.from.wallet 匹配
        require(signer == mail.from.wallet, "Invalid signature");

        // 执行业务逻辑
        _processMail(mail);

        return true;
    }

    // 6. 恢复签名者
    function recover(
        Mail memory mail,
        bytes32 r,
        bytes32 vs
    ) public view returns (address) {
        // 生成消息哈希
        bytes32 digest = hashMail(mail);

        // 恢复签名者
        uint8 v = uint8((uint256(vs) >> 255)) + 27;
        bytes32 s = vs &
            bytes32(
                0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            );

        return ecrecover(digest, v, r, s);
    }

    // 7. 计算邮件哈希
    function hashMail(Mail memory mail) public view returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(
                    "\x19\x01", // EIP-712 前缀
                    DOMAIN_SEPARATOR, // 域分隔符
                    _hashStruct(mail) // 结构体哈希
                )
            );
    }

    // 8. 计算结构体哈希
    function _hashStruct(Mail memory mail) private pure returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    MAIL_TYPEHASH,
                    _hashPerson(mail.from),
                    _hashPerson(mail.to),
                    keccak256(bytes(mail.contents))
                )
            );
    }

    function _hashPerson(Person memory person) private pure returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    PERSON_TYPEHASH,
                    keccak256(bytes(person.name)),
                    person.wallet
                )
            );
    }

    // 9. 业务逻辑
    function _processMail(Mail memory mail) private {
        emit MailReceived(mail.from.wallet, mail.to.wallet, mail.contents);
    }

    event MailReceived(
        address indexed from,
        address indexed to,
        string contents
    );
}
