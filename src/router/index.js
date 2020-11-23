import Vue from 'vue'
import Router from 'vue-router'

// import { publicRoute, protectedRoute } from './config'
// const routes = protectedRoute
import LayoutDefault from '@/components/layouts/LayoutDefault.vue'


Vue.use(Router)
const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            LayoutDefault,
            default: () => import(/* webpackChunkName: "about" */ '../views/home/folders')
        }
    },
]

const router = new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    base: process.env.BASE_URL,
    routes: routes
})


export default router
