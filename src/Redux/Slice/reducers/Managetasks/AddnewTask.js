import { createSlice } from "@reduxjs/toolkit";
const initialState=null
export const addnewtaskSlice=createSlice({
    name:'addnewtask',
    initialState,
    reducers:{
        newTAsk:(state,action)=>{
              state=action.payload
        }
    }
})
export const {newTAsk}=addnewtaskSlice.actions
export const addnewtaskReducer=addnewtaskSlice.reducer