import { createSlice } from "@reduxjs/toolkit";

const initialState=0;

export const tabSlice=createSlice({
    name:'tab',
    initialState,
    reducers:{
        managetab:(state,action)=> state=action.payload,
       
    }
})
export const {managetab}=tabSlice.actions
export const tabReducer=tabSlice.reducer