import VueRouter from "vue-router"
import Vue from 'vue'
import NavBar from '@/components/NavBar.vue'


Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            NavBar,
            default: () => import(/* webpackChunkName: "about" */ './views/home/my-drive')
        }
    },
    {
        path: '/folders',
        name: 'folders',
        components: {
            NavBar,
            default: () => import(/* webpackChunkName: "about" */ './views/home/folders')
        }
    },

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
