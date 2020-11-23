import Vue from 'vue'
import Router from 'vue-router'

import { publicRoute, protectedRoute } from './config'
const routes = protectedRoute

Vue.use(Router)
const router = new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    base: process.env.BASE_URL,
    routes: routes
})


export default router
