import Vue from 'vue'
import Router from 'vue-router'

// import { publicRoute, protectedRoute } from './config'
// const routes = protectedRoute
import LayoutDefault from '@/components/layouts/LayoutDefault.vue'


Vue.use(Router)
const routes = [
    {
        path: '/',
        name: 'index',
        component: LayoutDefault,
        meta: {title: '主页'},
        children: [
            {
                path: '/drive',
                name: 'drive',
                component:  () => import('../views/home/my-drive'),
                // meta: {title: '仪表盘', permission: ['dashboard']},
            },
            {
                path: '/folders',
                name: 'folders',
                component:  () => import('../views/home/folders'),
                // meta: {title: '仪表盘', permission: ['dashboard']},
            },
        ]

    },
]

const router = new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    base: process.env.BASE_URL,
    routes: routes
})


export default router
