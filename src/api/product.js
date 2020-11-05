import request from '../plugins/axios'
// eslint-disable-next-line no-unused-vars
import {ENETUNREACH} from 'constants';


export function UserRegist(data) {
    return request({
        url: '/login/regist',
        method: 'post',
        data
    })
}
