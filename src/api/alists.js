const axios = require('axios');
const urlencode = require('urlencode');
const CryptoJS = require('crypto-js');
const crypto = require('crypto');
const qs = require('qs');


export function aliSTS2() {

    const params = {
        Action: 'AssumeRole',
        Format: 'JSON',
        RoleArn: 'acs:ram::*:role/*',
        RoleSessionName: 'ann-sts-nodejs123412',
        SignatureMethod: 'HMAC-SHA1',
        SignatureNonce: new Date().getTime().toLocaleString(),//随机字符串吧
        SignatureVersion: '1.0',
        Timestamp: new Date().toISOString().replace(/\..+/, '') + 'Z',
        Version: '2015-04-01'
    };

    var CanonicalizedQueryString = qs.stringify(params)
    console.log('CanonicalizedQueryString')
    console.log(CanonicalizedQueryString)
    var StringToSign = 'GET' +'&' + urlencode('/') + '&' + urlencode(CanonicalizedQueryString)
    // StringToSign = urlencode(StringToSign)
    console.log('StringToSign')
    console.log(StringToSign)

    var sign = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(StringToSign,`${key}&`))
    console.log('签名')
    console.log(sign)
    // var signCode = new Buffer(sign).toString('base64');
    console.log('签名Base64')
    // console.log(signCode)

    const hmac = crypto.createHmac('sha1', `${key}&`);
    const signature = hmac.update(StringToSign)
        .digest("base64");
    console.log('const signature = ')
    console.log(signature)

    axios.default.get('https://sts.aliyuncs.com',
        {
            params: {
                ...params,
                Signature: signature ,//sign也可以 两种加密库的实现，浏览器环境和node环境的切换吧，自己选
            }
        }
    ).then((res)=>{
        console.log('axios then')
        console.log(res.data)
        console.log(res.data.Credentials.SecurityToken)
    }).catch((err)=>{
        console.log('axios 请求错误')
        console.log(err.response.data)//阿里云解析错误会返回信息的
    })
}

