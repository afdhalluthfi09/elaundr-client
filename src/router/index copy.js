import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/home/pages/HomeView.vue';
const routes =[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/pesanan',
        name:'pesanan',
        component:()=>import('../views/pesanan/pages/PesananView.vue')
    },
    {
        path:'/setting',
        name:'setting',
        component:()=>import('../views/setting/pages/SettingView.vue')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/auth/pages/LoginView.vue')
    },
    {
        path:'/register',
        name:'register',
        component:()=>import('../views/auth/pages/RegisterView.vue')
    },
]

const router =createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router