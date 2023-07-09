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
    }
}
export default actions;