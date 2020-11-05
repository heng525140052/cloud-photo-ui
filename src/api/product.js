import request from '../plugins/axios'
import {ENETUNREACH} from 'constants';


export function UserRegist(data) {
    return request({
        url: '/login/regist',
        method: 'post',
        data
    })
}
