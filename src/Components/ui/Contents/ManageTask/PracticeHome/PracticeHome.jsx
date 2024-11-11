import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import  icon from '../../../../../assets/Images/managePracticeTaskicon.svg'
import OngoingSubmission from './OngoingSubmission';
import RecentSubmissions from './RecentSubmissions';
import { createtaskstep1,createtaskstep2 } from '../../../../../Redux/Slice/ManageTaskSlice';
import { useDispatch,useSelector } from 'react-redux';
function PracticeHome() {
  const step1CreateTask=useSelector((state)=>state.managetasks)
  const dispatch=useDispatch()
  console.log(`cjanckn ${step1CreateTask}`)
  return (
    <>
    <div className='flex items-center gap-[20px]'>
            <button className='flex   items-center gap-[10px] p-[10px] boxshadow rounded-[10px]' onClick={()=>dispatch(createtaskstep1())}>
                <FaPlus color='#34A853' className='w-[20px] h-[20px]'/>
                <p className='text-white text-[12px] font-[700]'>Create an Practice Task</p>
            </button>
            <button className='flex   items-center gap-[10px] p-[10px] boxshadow rounded-[10px]'>
                <img  src={icon} className='w-[20px] h-[20px]'/>
                <p className='text-white text-[12px] font-[700]'>Manage Practice Tasks</p>
            </button>
        </div>
       <OngoingSubmission/>
       <RecentSubmissions/>
        </>
  )
}

export default PracticeHome