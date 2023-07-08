const getters ={
    getErrors:(state)=>{
        return state.errors;
    },
    getMessage:(state)=>{
        return state.message;
    },
    getUsers:(state)=>{
        return state.users;
    }
}
export default getters;