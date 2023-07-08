import  { useRouter } from 'vue-router';

export function requireAuth(to,from,next){
    const router =useRouter();
    let isLoggedIn =null;
    if(localStorage.getItem('token') !== null){
        isLoggedIn = localStorage.getItem('data');
    }else{
        isLoggedIn;
    }

    if(isLoggedIn){
        next();
    }else{
        router.push('/login');
    }
}