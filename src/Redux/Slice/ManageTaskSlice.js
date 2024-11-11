import { createSlice } from "@reduxjs/toolkit";

const initialState=0;

export const managetasksSlice=createSlice({
    name:'managetasks',
    initialState,
    reducers:{
        createtaskstep1:(state,action)=>state = 1,
        createtaskstep2:(state,action)=>state = 2,
        backtoPracticeHome:(state,action)=>state = 0
    }
})
export const {createtaskstep1,createtaskstep2,backtoPracticeHome}=managetasksSlice.actions
export const managetasksReducer=managetasksSlice.reducer