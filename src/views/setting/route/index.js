import { requireAuth } from '@/router/auth';
import {Setting} from '../pages';
export default [
    {
        path:'/setting',
        name:'setting',
        component:Setting,
        meta:{
            middleware:[requireAuth]
        }
    }
]