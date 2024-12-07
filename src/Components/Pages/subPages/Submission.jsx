import React, { useEffect } from 'react'
import SubmissionHome from '../../ui/Contents/Submission/SubmissionHome/SubmissionHome'
import { useSelector,useDispatch} from 'react-redux'
import { makeView } from '../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice'
import { managetab } from '../../../Redux/Slice/reducers/TabSlice'
import { Outlet, useLocation, useParams } from 'react-router-dom'
function Submission() {
    const view=useSelector((state)=>state.managetasks.setView)
    const tab=useSelector((state)=>state.tab)
    const dispatch=useDispatch()
    const location=useLocation()
    const {id}=useParams()
    const {user_id}=useParams()
    useEffect(()=>{
      dispatch(managetab(2));
      if (location.pathname === "/manageTasks/submissions") {
        dispatch(makeView(0));
      }
      else   if (location.pathname === `/manageTasks/submissions/tasks/${id}`) {
        dispatch(makeView(1));
         
      }
      else   if (location.pathname === `/manageTasks/submissions/tasks/${id}/${user_id}`) {
        dispatch(makeView(2));
         
      }
    },[location.pathname])
    console.log(`view${view}`)
  return (
    <>
     {tab===2 &&
          <div className='flex flex-col p-[20px] gap-[20px] min-w-full '>
             {view===0 &&  <SubmissionHome/> }
             {view!==0 && <Outlet/>}
          </div>}
    </>
    
  )
}

export default Submission