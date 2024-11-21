import React from 'react'
import TopPart from './TopPart'
import TabChangingPart from './TabChangingPart'
import {makeView,getIdOfDataToUpadate} from '../../../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import UpdateTask from './UpdateTask'
function ManagePracticeTasks() {
  const view=useSelector((state)=>state.managetasks.setView)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const goToUpadteForm=(index)=>{
    dispatch(makeView(2))
    dispatch(getIdOfDataToUpadate(index))
    navigate('updateTask')
  }
  console.log(`view${view}`)
  return (
   <>{view===1 && <><TopPart/>
   <TabChangingPart goToUpadteForm={goToUpadteForm}/>
   </>}
   {view===2 && <UpdateTask/>}
   </>
  )
}

export default ManagePracticeTasks