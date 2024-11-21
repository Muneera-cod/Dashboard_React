import { createSlice } from "@reduxjs/toolkit";

const initialState=0;

export const tabSlice=createSlice({
    name:'tab',
    initialState,
    reducers:{
        managePraticeTasktab:(state,action)=>  state = 1,
        submissionTab:(state,action)=>  state = 2,
        leaderboardTab:(state,action)=> state = 3
    }
})
export const {managePraticeTasktab,submissionTab,leaderboardTab}=tabSlice.actions
export const tabReducer=tabSlice.reducer