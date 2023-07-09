import axios from "axios";
const actions ={
    actionLaundry:({commit,rootGetters})=>{
        let baseUrl =rootGetters;
        return new Promise((resolve,reject)=>{
            axios
                .get(`${baseUrl.getBaseUrl}/laundry`,{
                    headers:{
                        'Content-Type':'application/json',
                        'Accept':'application/json'
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
    }
    /* costumer
    weightFirst
    weightSecond
    photo
    status
    priceFirst
    priceSecond
    locationDefault
    locationNow */
    // step 2 bagaiamana cara ambil location sekarang
}

export default actions;