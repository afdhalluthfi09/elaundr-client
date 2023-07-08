import {createRouter,createWebHistory} from 'vue-router'
import auth from '../views/auth/router';
import home from '../views/home/router';
import pesanan from '../views/pesanan/route';
import setting from '../views/setting/route';
import { requireAuth } from './auth';
const routes =[
    ...auth,
    ...home.map(route =>({...route,meta:{middleware:[requireAuth]}})),
    ...pesanan,
    ...setting
]

const router =createRouter({
    history:createWebHistory(process.env.BASE_URL),
    base:__dirname,
    routes:routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
      const middleware = to.meta.middleware;
      const context = { to, from, next };
      return middleware[0]({ ...context }); // Gunakan middleware pertama dalam daftar
    }
    return next();
  });

export default router