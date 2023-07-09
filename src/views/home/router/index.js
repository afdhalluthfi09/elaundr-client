import { requireAuth } from '@/router/auth';
import {Home} from '../pages';
export default[
    {
        path:'',
        name:'home',
        component:Home,
        meta:{
            middleware:[requireAuth]
        }
    }
]