const getters ={
    getBaseUrl : state =>{
        // return state.prodUrl;
        return state.localUrl;
    },
    getUsers:(state)=>{
        return state.users;
    }
}
export default getters;