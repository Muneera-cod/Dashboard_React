import { configureStore } from '@reduxjs/toolkit'
import { tabReducer } from './Slice/reducers/TabSlice'
import { managetasksReducer } from './Slice/reducers/Managetasks/ManageTaskSlice'
export const store = configureStore({
  reducer: {
    tab:tabReducer,
    managetasks:managetasksReducer,
  
  },
})