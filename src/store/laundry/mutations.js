const mutation ={
    getListLaundry:(state,payload)=>{
        state.laundry = payload.data
    }
}

export default mutation;