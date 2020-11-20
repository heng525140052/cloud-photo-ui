import cookies from './util.cookies'
import db from './util.db'
import log from './util.log'

const util = {
    cookies,
    db,
    log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function (titleText) {
    const processTitle = process.env.VUE_APP_TITLE || 'D2Admin'
    window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function (url) {
    var a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    a.setAttribute('id', 'd2admin-link-temp')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(document.getElementById('d2admin-link-temp'))
}

// 根据文件名后缀区分 文件类型
/*
 * @param: fileName - 文件名称
 * @param: 数据返回 1) 无后缀匹配 - false
 * @param: 数据返回 2) 匹配图片 - image
 * @param: 数据返回 3) 匹配 txt - txt
 * @param: 数据返回 4) 匹配 excel - excel
 * @param: 数据返回 5) 匹配 word - word
 * @param: 数据返回 6) 匹配 pdf - pdf
 * @param: 数据返回 7) 匹配 ppt - ppt
 * @param: 数据返回 8) 匹配 视频 - video
 * @param: 数据返回 9) 匹配 音频 - radio
 * @param: 数据返回 10) 其他匹配项 - other
 */
util.matchType = function (fileName) {
    // 后缀获取
    var suffix = '';
    // 获取类型结果
    var result = '';
    try {
        var flieArr = fileName.split('.');
        suffix = flieArr[flieArr.length - 1];
    } catch (err) {
        suffix = '';
    }
    // fileName无后缀返回 false
    if (!suffix) {
        result = false;
        return result;
    }
    // 图片格式
    var imglist = ['image/png', 'image/jpg', 'image/jpeg', 'image/bmp', 'image/gif'];
    // 进行图片匹配
    result = imglist.some(function (item) {
        return item === suffix;
    });
    if (result) {
        result = 'image';
        return result;
    }
    // 匹配txt
    var txtlist = ['txt'];
    result = txtlist.some(function (item) {
        return item === suffix;
    });
    if (result) {
        result = 'txt';
        return result;
    }
    // 匹配 excel
    var excelist = ['xls', 'xlsx'];
    result = excelist.some(function (item) {
        return item === suffix;
    });
    if (result) {
        result = 'excel';
        return result;
    }
    // 匹配 word
    var wordlist = ['doc', 'docx'];
    result = wordlist.some(function (item) {
        return item === suffix;
    });
    if (result) {
        result = 'word';
        return result;
    }
    // 匹配 pdf
    var pdflist = ['pdf'];
    result = pdflist.some(function (item) {
        return item === suffix;
    })
    if (result) {
        result = 'pdf';
        return result;
    }
    // 匹配 ppt
    var pptlist = ['ppt'];
    result = pptlist.some(function (item) {
        return item === suffix;
    })
    if (result) {
        result = 'ppt';
        return result;
    }
    // 匹配 视频
    var videolist = ['mp4', 'm2v', 'mkv'];
    result = videolist.some(function (item) {
        return item === suffix;
    });
    if (result) {
        result = 'video';
        return result;
    }
    // 匹配 音频
    var radiolist = ['mp3', 'wav', 'wmv'];
    result = radiolist.some(function (item) {
        return item == suffix;
    })
    if (result) {
        result = 'radio';
        return result;
    }
    // 其他 文件类型
    result = 'other';
    return result;
}


export default util
