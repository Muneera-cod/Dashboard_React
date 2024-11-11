import React from 'react'
import { LuCalendarDays } from "react-icons/lu";
import { useSelector,useDispatch } from 'react-redux';
import { managePraticeTasktab,submissionTab,leaderboardTab } from '../../../Redux/Slice/TabSlice';
import { backtoPracticeHome } from '../../../Redux/Slice/ManageTaskSlice';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Dates() {
  
    const location=useLocation()
    const currtab=useSelector((state)=>state.tab)
    const dispatch=useDispatch()
    const handleTab=(action)=>{
        dispatch(action)
    }
    console.log(currtab)
    
  console.log()
    const navigate=useNavigate()
  return (
    <div className='flex py-[15px] px-[20px] gap-[20px] items-center border-bottomSecond'>
         <div className={`flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow ${(currtab===1 || (location.pathname ==='/manageTasks')) ? '' : 'opacity-30'}`} onClick={()=>{handleTab(managePraticeTasktab()); navigate('manageTasks'); dispatch(backtoPracticeHome())}}>
            <LuCalendarDays color='#F31919' className='w-[20px] h-[20px]'/>
            <p className='text-white text-[12px] font-[700]'>Manage Practice Tasks</p>
         </div>
         <div className={`flex  items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow ${(currtab===2 || (location.pathname ==='/submissions')) ? '' : 'opacity-30'}`} onClick={()=>{handleTab(submissionTab()); navigate('submissions')}}>
            <LuCalendarDays color='#E6C100' className='w-[20px] h-[20px]'/>
            <p className='text-white text-[12px] font-[700]'>Submissions</p>
         </div>
         <div className={`flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow ${(currtab===3 || (location.pathname ==='/leaderboard')) ? '' : 'opacity-30'}`} onClick={()=>{handleTab(leaderboardTab()); navigate('leaderboard')}}>
            <LuCalendarDays color='#34A853' className='w-[20px] h-[20px]'/>
            <p className='text-white text-[12px] font-[700]'>Leaderboard</p>
         </div>
    </div>
  )
}

export default Dates