import { requireAuth } from '@/router/auth';
import {Pesanan} from '../pages';
export default[
    {
        path:'/pesanan',
        name:'pesanan',
        component:Pesanan,
        meta:{
            middleware:[requireAuth]
        }
    }
]