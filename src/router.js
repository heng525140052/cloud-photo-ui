import Router from "vue-router"
import Vue from 'vue'

import user_signup from './views/user/signup'
import user_login from './views/user/login'

Vue.use(Router)


const routes = [
    // { path: '/', component: user_login },
    { path: '/user/login', component: user_login },
    { path: '/user/signup', component: user_signup }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
    routes // (缩写) 相当于 routes: routes
})

export default router