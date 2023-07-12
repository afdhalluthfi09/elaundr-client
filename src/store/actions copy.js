import axios from "axios";
const actions ={
    removeActionToken:({commit,rootGetters},{payload})=>{
        return new Promise((reslove,reject)=>{
            axios.post(`${rootGetters.getBaseUrl}/logout-costumers/${payload.tokenId}`,{
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            })
            .then((res)=>{
                localStorage.removeItem('token')
                localStorage.removeItem('data')
                if(res.status == 202){
                    commit('removeToken')
                    reslove(res)
                }else{
                    reslove(res)
                }
            })
            .catch((error)=>{
                if(error.response === 422){
                    reject(error);
                }else{
                    reject(error);
                }
            })
        });
    },
    updateActionProfile:({rootGetters},{payload})=>{
        return new Promise((resolve,reject)=>{
            axios.patch(`/costumers/${payload.tokenId}`,payload,{
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            }).then((response)=>{
                console.log(response);
                resolve(response.data)
            }).catch((error)=>{
                reject(error)
            })
        })
    },
    getActionProfile:({rootGetters},{payload})=>{
        return new Promise((resolve,reject)=>{
            axios.get(`${rootGetters.getBaseUrl}/costumers/${payload.tokenId}`,{
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            }).then((response)=>{
                resolve(response.data)
            }).catch((error)=>{
                reject(error);
            })
        })
    }
}
export default actions;