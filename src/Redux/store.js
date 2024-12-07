import { configureStore } from '@reduxjs/toolkit'
import { tabReducer } from './Slice/reducers/TabSlice'
import { managetasksReducer } from './Slice/reducers/Managetasks/ManageTaskSlice'
import { addnewtaskReducer } from './Slice/reducers/Managetasks/AddnewTask'
import { tasksDataReducer } from './Slice/reducers/Data/TasksDataSlice'
export const store = configureStore({
  reducer: {
    tab:tabReducer,
    managetasks:managetasksReducer,
    addnewtask:addnewtaskReducer,
    tasksData:tasksDataReducer
  },
})