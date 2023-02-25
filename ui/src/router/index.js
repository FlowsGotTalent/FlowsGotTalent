import {createRouter, createWebHistory} from 'vue-router'
import index from '@/pages/index.vue'
import login from '@/pages/login.vue'
import play from '@/pages/play.vue'
import settings from '@/pages/account-settings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: index
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/settings',
            name: 'settings',
            component: settings,
        },
        {
            path: '/play',
            name: play,
            component: play,
        },
    ],
    scrollBehavior() {
        return {top: 0}
    },
})
export default router
