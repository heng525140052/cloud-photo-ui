var oss = require('ali-oss');

var client = oss({
    accessKeyId: 'LTAI4GL1io43S3UJiv6TThRa',
    accessKeySecret: 'orbBayrElLLkXdGTJPWvSGSMFKty15',
    bucket: 'golong-cloud',
    region: 'oss-cn-beijing'
});



class AliOssController {

    async listBuckets() {
        try {
            const result = await client.listBuckets();
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = AliOssController;