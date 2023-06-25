import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/HomeView.vue';
const routes =[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/pesanan',
        name:'pesanan',
        component:()=>import('../views/PesananView.vue')
    },
    {
        path:'/setting',
        name:'setting',
        component:()=>import('../views/SettingView.vue')
    }
]

const router =createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router