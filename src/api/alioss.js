import OSS from 'ali-oss'

var client = new OSS({
    accessKeyId: 'LTAI4G9VoRaPw9gpiZNLmfFy',
    accessKeySecret: 'fJ2Y0fA35HQDKW1NVn1tKRP0JfKWAY',
    bucket: 'golong-cloud',
    region: 'oss-cn-beijing'
});


class AliOssController {

    static async listBuckets() {
        try {
            return await client.listObjectVersions()
        } catch (err) {
            console.log(err);
        }
    }

    async isExistObject(name, options = {}) {
        try {
            await client.head(name, options);
            console.log('文件存在')
        } catch (error) {
            if (error.code === 'NoSuchKey') {
                console.log('文件不存在')
            }
        }
    }

    /*
    * 文档列表
    * */
    static async listDir(dir) {
        const result = await client.list({
            prefix: dir,
            delimiter: '/'
        });
        return result.prefixes
    }


    static async ObjectList(params) {

        try {
            // 不带任何参数，默认最多返回1000个文件。
            // let result = await client.list();
            // console.log(result);
            // 根据nextMarker继续列出文件。
            // if (result.isTruncated) {
            //     result = await client.list({
            //         marker: result.nextMarker
            //     });
            // }
            // 列举前缀为'my-'且在'my-object'之后的文件。
            return await client.list({
                prefix: params.prefix,
                marker: params.marker,
                'max-keys': params.max_keys
            })
        } catch (e) {
            console.log(e);
        }

    }
}

export default AliOssController
