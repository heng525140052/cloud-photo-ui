import Router from "vue-router"
import Vue from 'vue'

import foo from './views/foo'
import bar from './views/bar'

Vue.use(Router)


const routes = [
    { path: '/foo', component: foo },
    { path: '/bar', component: bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
    routes // (缩写) 相当于 routes: routes
})

export default router