import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

const NameSlice= createSlice({
    name:'saleem',
    initialState,
    reducers:{
        submit:(state,action)=>{

        }
    }
    
})

export default NameSlice.reducer
export const {submit}=NameSlice.actions