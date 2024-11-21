import React, { useEffect } from 'react'
import PracticeHome from '../../ui/Contents/ManageTask/PracticeHome/PracticeHome'
import { useSelector,useDispatch } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { makeView } from '../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice'
function ManageTask() {
  const dispatch=useDispatch()
  const view=useSelector((state)=>state.managetasks.setView)
  const location=useLocation()
  useEffect(() => {
    if (location.pathname === "/manageTasks") {
      dispatch(makeView(0));
    } else if (location.pathname === "/manageTasks/steps") {
      dispatch(makeView(1));
    }else if(location.pathname === "/manageTasks/managePracticeTasks"){
      dispatch(makeView(1));
    }
  }, [location.pathname]);
  console.log(`view${view}`)
 
  const navigate=useNavigate()
  return (
    <div className='flex flex-col p-[20px] gap-[20px] min-w-full ' >
        {view===0 && <PracticeHome/>}
        {view!==0 &&<Outlet/>}
    </div>
  )
}

export default ManageTask