import { configureStore } from '@reduxjs/toolkit'
import { tabReducer } from './Slice/TabSlice'
import { managetasksReducer } from './Slice/ManageTaskSlice'
export const store = configureStore({
  reducer: {
    tab:tabReducer,
    managetasks:managetasksReducer
  },
})