const getters ={
    getBaseUrl : state =>{
        return state.localUrl;
    },
    getUsers:(state)=>{
        return state.users;
    }
}
export default getters;