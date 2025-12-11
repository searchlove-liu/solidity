安装 ts
npm install -D typescript

安装viem
npm install -D viem

生成tsconfig.json
tsc --init

在tsconfig.json中添加
"allowImportingTsExtensions": true,
"noEmit": true,

node .\decodeContractResult\decodeBatchURI.ts