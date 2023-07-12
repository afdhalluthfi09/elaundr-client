import axios from "../axios";
const actions ={
     actionLogin:({commit},{payload})=>{
        return new Promise((resolve,reject)=>{
            axios.post(`/login-kostumer`,payload)
            .then((res)=>{
                if(res.status == 202){
                    commit('setUser',res.data.data);
                    commit('setMessage',res.data.message);
                    resolve(res);
                }else{
                    commit('setMessage',res.data.message);
                    resolve(res);
                }
            })
            .catch((error)=>{
                if (error.response && error.response.status === 422){
                    commit('setErrors',error.response.data)
                    reject(error);
                }else{
                    reject(error);
                }
            })
        })
    },
    registerActionAccoun:(_,{payload})=>{
        console.log(payload);
        return new Promise((reslove,reject)=>{
            axios.post(`/register-kostumer`,payload).then((response)=>{
                // console.log(response);
                reslove(response.data)
            }).catch((error)=>{
                console.log(error);
                reject(error)
            })
        })
    }
}
export default actions;