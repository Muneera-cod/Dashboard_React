import React,{useEffect} from 'react'
import SubmissionHome from '../../ui/Contents/Submission/SubmissionHome/SubmissionHome'
import { useSelector,useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { makeView } from '../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice'
import TaskWiseView from '../../ui/Contents/Submission/TaskwiseView/TaskWiseView'
function Submission() {
    const dispatch=useDispatch()
    const view=useSelector((state)=>state.managetasks.setView)
    const location=useLocation()
    useEffect(() => {
      
        if (location.pathname==="/submissions") {
          dispatch(makeView(0));
        } else if (location.pathname === "/manageTasks/taskWiseView") {
          dispatch(makeView(1));
        }
    }, [location.pathname]);
    console.log(`view${view}`)
  return (
    <>
    <div className='flex flex-col p-[20px] gap-[20px] min-w-full '>
    {view===0 && 
     <SubmissionHome/>  
   }
   {view===1 && <TaskWiseView/>}
   </div>
    </>
    
  )
}

export default Submission