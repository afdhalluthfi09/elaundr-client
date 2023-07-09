import axios from "axios";
const actions ={
    actionLaundry:({commit,rootGetters})=>{
        let baseUrl =rootGetters;
        return new Promise((resolve,reject)=>{
            axios
                .get(`${baseUrl.getBaseUrl}/laundry`,{
                    headers:{
                        'Content-Type':'application/json',
                        'Accept':'application/json',
                        'Access-Control-Allow-Origin' :'*'
                    }
                })
                .then(response =>{
                    commit("getListLaundry",response.data);
                    resolve(response);
                })
                .catch(error =>{
                    reject(error)
                })
        })
    },
    actionAddLaundry:({rootGetters},{payload})=>{
        // console.log(payload);
        let baseUrl =rootGetters;
        return new Promise ((resolve,reject)=>{
            axios.post(`${baseUrl.getBaseUrl}/laundry`,payload,{
                headers:{
                    'Content-Type':'multipart/form-data',
                    'Accept':'application/json',
                    'Access-Control-Allow-Origin' :'*'
                }
            })
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }

    // step 2 bagaiamana cara ambil location sekarang
}

export default actions;