import axios from "./axios.js";
const actions ={
    removeActionToken:({commit},{payload})=>{
        return new Promise((reslove,reject)=>{
            axios.post(`/logout-costumers/${payload.tokenId}`)
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
    updateActionProfile:(_,{payload})=>{
        console.log(payload);
        return new Promise((resolve,reject)=>{
            axios.patch(`/costumers/${payload.tokenId}`,payload).then((response)=>{
                // console.log(response);
                resolve(response.data)
            }).catch((error)=>{
                reject(error)
            })
        })
    },
    getActionProfile:(_,{payload})=>{
        return new Promise((resolve,reject)=>{
            axios.get(`/costumers/${payload.tokenId}`).then((response)=>{
                resolve(response.data)
            }).catch((error)=>{
                reject(error);
            })
        })
    },
    updateActionPassword:(_,{payload})=>{
        return new Promise((resolve,reject)=>{
            axios.post(`/change-password/${payload.tokenId}`,payload).then((response)=>{
                resolve(response.data);
            }).catch((error)=>{
                console.log(error);
                reject(error)
            })
        })
    },
    
}
export default actions;