import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../../../Components/ui/Contents/ManageTask/PracticeHome/Data";
import UpdateTask from "../../../../Components/ui/Contents/ManageTask/MangePracticeTasks/UpdateTask";
const initialState=[...Data];

export const tasksDataSlice=createSlice({
    name:'tasksData',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload)
        },
        updateTask:(state,action)=>{
            state.find((x)=>x.id===action.payload.id)
            
        }
    }
})
export const {addTask}=tasksDataSlice.actions
export const tasksDataReducer=tasksDataSlice.reducer