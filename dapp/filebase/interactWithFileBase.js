import AWS from '@aws-sdk/client-s3';

const s3 = new AWS.S3({
    credentials: {
        accessKeyId: "076549A8799BEA4F7AD0",
        secretAccessKey: "hMYuxtbFD6eRhAQcN2OXAlRCItNySm9op2aMud52",
    },
    endpoint: 'https://s3.filebase.com',
    region: 'us-east-1',
    s3ForcePathStyle: true
});

async function listBuckets() {
    const result = await s3.listBuckets();
    console.log(result);
}


await listBuckets();