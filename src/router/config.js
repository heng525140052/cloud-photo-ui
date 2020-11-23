import {
    LayoutDefault,
} from '@/components/layouts'

export const publicRoute = [
    {
        path: '*',
        component: () => import('@/views/error/NotFound.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: 'Not Found'
        },
        component: () => import('@/views/error/NotFound.vue')
    },

    {
        path: '/500',
        name: '500',
        meta: {
            title: 'Server Error'
        },
        component: () => import('@/views/error/Error.vue')
    }
]

export const protectedRoute = [
    {
        path: '/',
        component: LayoutDefault,
        meta: {
            title: 'home',
            group: 'apps',
            icon: ''
        },
        redirect: '/',
        children: [
            {
                path: '/folders',
                name: 'folders',
                meta: {
                    title: 'folders',
                    group: 'folders',
                    icon: 'mdi-view-dashboard'
                },
                component: () => import('@/views/home/folders')
            },
        ]
    }
]