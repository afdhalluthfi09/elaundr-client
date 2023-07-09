const mutations ={
    setUsers:(state,pyload)=>{
        state.users = pyload;
    },
    removeToken:()=>{
        localStorage.removeItem('token')
    }

}
export default mutations;