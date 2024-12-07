import React,{useEffect} from 'react'
import PracticeHome from '../../ui/Contents/ManageTask/PracticeHome/PracticeHome'
import { Outlet} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { makeView,createTaskHeader } from '../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice'
import { managetab } from '../../../Redux/Slice/reducers/TabSlice'
import { useLocation } from 'react-router-dom'
function ManageTask() {
  const location=useLocation()
  const dispatch=useDispatch()
  const view=useSelector((state)=>state.managetasks.setView)
  const tab=useSelector((state)=>state.tab)
  useEffect(() => {
    dispatch(managetab(1));
    if (location.pathname === "/manageTasks") {
      dispatch(makeView(0));
      
      dispatch(createTaskHeader(0))
    } else if (location.pathname === "/manageTasks/createPraticeTasks") {
      dispatch(makeView(1));
      dispatch(createTaskHeader(1))
    }else if(location.pathname === "/manageTasks/managePracticeTasks"){
      dispatch(makeView(1));
      dispatch(createTaskHeader(2))
    }
   }, [location.pathname]);
   
   console.log(`view${view}`)
   console.log(tab)
    return (
        <>   
    
        {(tab!==2 && tab !==3) &&
        <div className='flex flex-col p-[20px] gap-[20px] min-w-full ' >
            {view===0 && <PracticeHome/>}
            {view!==0 &&<Outlet/>}
        </div>}
      
        </>
      
   
  )
}

export default ManageTask