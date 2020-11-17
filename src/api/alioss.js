import OSS from 'ali-oss'



const client = new OSS({
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

    static async put(params) {
        try {
            //object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
            return await client.put(params.name, params.file)
        } catch (e) {
            console.log(e);
        }
    }

}

export default AliOssController
