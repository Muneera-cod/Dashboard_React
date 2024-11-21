import { createSlice } from "@reduxjs/toolkit";

const initialState={setView:0,setHeaderCreateTask:0,setCurDataforUpdate:null};

export const managetasksSlice=createSlice({
    name:'managetasks',
    initialState,
    reducers:{
        makeView:(state,action)=>{
            state.setView = action.payload
        },
        createTaskHeader:(state,action)=>{
             state.setHeaderCreateTask=action.payload},
        getIdOfDataToUpadate:(state,action)=>{
             state.setCurDataforUpdate=action.payload
        }
    }
})
export const {makeView,createTaskHeader,getIdOfDataToUpadate}=managetasksSlice.actions
export const managetasksReducer=managetasksSlice.reducer