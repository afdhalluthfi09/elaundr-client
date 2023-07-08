const getters ={
    getBaseUrl : state =>{
        return state.prodUrl;
    },
    getUsers:(state)=>{
        return state.users;
    }
}
export default getters;