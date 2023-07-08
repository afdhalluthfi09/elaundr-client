import axios from "axios";
const actions ={
     actionLogin:({commit,rootGetters},{payload})=>{
        let baseUrl = rootGetters;
        return new Promise((resolve,reject)=>{
            axios.post(`${baseUrl.getBaseUrl}/login-kostumer`,payload,{
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            })
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
    }
}
export default actions;