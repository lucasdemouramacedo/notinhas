
import {createRouter, createWebHistory} from "vue-router";
import HomePage from '@/views/HomePage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import AppPage from '@/views/AppPage.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/app',
        name: 'App',
        component: AppPage
    },
]

const router = createRouter({
    
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router