import axios from "../axios";
const actions ={
    actionLaundry:({commit})=>{
        return new Promise((resolve,reject)=>{
            axios
                .get(`/laundry`)
                .then(response =>{
                    commit("getListLaundry",response.data);
                    resolve(response);
                })
                .catch(error =>{
                    reject(error)
                })
        })
    },
    actionAddLaundry:(_,{payload})=>{
        return new Promise ((resolve,reject)=>{
            axios.post(`/laundry`,payload,{
                headers:{'Content-Type':'multipart/form-data'}
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