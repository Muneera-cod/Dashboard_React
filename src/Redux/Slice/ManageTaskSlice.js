import { createSlice } from "@reduxjs/toolkit";

const initialState={setView:0,setHeaderCreateTask:false};

export const managetasksSlice=createSlice({
    name:'managetasks',
    initialState,
    reducers:{
        createtaskstep1:(state,action)=>{
            state.setView = 1 
        },
        createtaskstep2:(state,action)=>{
            state.setView = 2},
        backtoPracticeHome:(state,action)=>{
            state.setView = 0
        },
        createTaskHeaderVisible:(state,action)=>{
            state.setHeaderCreateTask=true}
    }
})
export const {createtaskstep1,createtaskstep2,backtoPracticeHome,createTaskHeaderVisible}=managetasksSlice.actions
export const managetasksReducer=managetasksSlice.reducer