// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home.vue'
import LoginPage from '../views/auth/login.vue'
import RegisterPage from '../views/auth/register.vue'
import Clientarea from '../views/user/clientarea.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
    {
        path: '/user/clientarea',
        name: 'ClientArea',
        component: Clientarea
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/' // 未匹配路由重定向到首页
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router