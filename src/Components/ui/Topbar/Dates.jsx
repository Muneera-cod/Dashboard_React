import React from 'react'
import { LuCalendarDays } from "react-icons/lu";
import { useSelector,useDispatch } from 'react-redux';
import { managePraticeTasktab,submissionTab,leaderboardTab } from '../../../Redux/Slice/reducers/TabSlice';
import { makeView ,createTaskHeader} from '../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Dates() {
    
    const location=useLocation()
    const currtab=useSelector((state)=>state.tab)
    const handleOpacity=(tab,path)=>{
      if(currtab===tab || (location.pathname.split('/')[1] ===path)){
        return true
      }
      else{
        return null
      }
    }
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleTab=(action,navPath,fn)=>{
        dispatch(action)
        navigate(navPath)
    }
    
  
  return (
    <div className='flex py-[15px] px-[20px] gap-[20px] items-center border-bottomSecond min-w-full'>
         <div className={`flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow ${(handleOpacity(1,'manageTasks')) ? '' : 'opacity-30'}`} onClick={()=>{handleTab(managePraticeTasktab(),'manageTasks');  dispatch(makeView(0));dispatch(createTaskHeader(0))}}>
            <LuCalendarDays color='#F31919' className='w-[20px] h-[20px]'/>
            <p className='text-white text-[12px] font-[700]'>Manage Practice Tasks</p>
         </div>
         <div className={`flex  items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow ${(handleOpacity(2,'submissions')) ? '' : 'opacity-30'}`} onClick={()=>{handleTab(submissionTab(),'submissions');}}>
            <LuCalendarDays color='#E6C100' className='w-[20px] h-[20px]'/>
            <p className='text-white text-[12px] font-[700]'>Submissions</p>
         </div>
         <div className={`flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow ${(handleOpacity(3,'leaderboard')) ? '' : 'opacity-30'}`} onClick={()=>{handleTab(leaderboardTab(),'leaderboard');}}>
            <LuCalendarDays color='#34A853' className='w-[20px] h-[20px]'/>
            <p className='text-white text-[12px] font-[700]'>Leaderboard</p>
         </div>
    </div>
  )
}

export default Dates