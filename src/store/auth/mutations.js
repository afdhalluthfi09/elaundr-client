const mutations ={
    setErrors:(state,payload)=>{
        state.errors =payload
    },
    setMessage:(state,payload)=>{
        state.message = payload
    },
    setUser:(state,payload)=>{
        state.users =payload
        localStorage.setItem('data',JSON.stringify(payload));
        localStorage.setItem('token',JSON.stringify(payload.token));
    }
}
export default mutations;