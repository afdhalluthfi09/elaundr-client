import axiosbase from 'axios';

/* configurasi costume axios agar mengurangi refactory */
// step 1: buat variable configure

/* 
    https://api.e-laundry.site/api/v1
    http://elaundry-api.test/api/v1
*/
const axios =axiosbase.create({  
    baseURL:'https://api.e-laundry.site/api/v1',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin' :'*'
    }
})

// kondisi untuk yang tidak harus pake token
axios.interceptors.request.use((config)=>{
    if(config.url === '/login-kostumer'){
        delete config.headers.Authorization;
    }else if(config.url === '/register-kostumer'){
        delete config.headers.Authorization;
    }else {
        // Jika endpoint memerlukan token, set header Authorization
        config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`; // Gantikan dengan token yang valid
      }

    return config;
},(error)=>{
    return Promise.reject(error)
});

export default axios;