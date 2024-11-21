import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { BsPersonFillGear } from "react-icons/bs";
import OngoingSubmission from './OngoingSubmission';
import RecentSubmissions from './RecentSubmissions';
import { makeView,createTaskHeader } from '../../../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function PracticeHome() {
  const view=useSelector((state)=>state.managetasks.setView)
 const navigate=useNavigate()
  const dispatch=useDispatch()
  console.log(`cjanckn ${view}`)

  return (
    <>
    <div className='flex items-center gap-[20px]'>
            <button className='flex   items-center gap-[10px] p-[10px] boxshadow rounded-[10px]' onClick={()=>{dispatch(makeView(1)); dispatch(createTaskHeader(1));navigate('steps')}}>
                <FaPlus color='#34A853' className='w-[20px] h-[20px]'/>
                <p className='text-white text-[12px] font-[700]'>Create an Practice Task</p>
            </button>
            <button className='flex   items-center gap-[10px] p-[10px] boxshadow rounded-[10px]' onClick={()=>{dispatch(makeView(1));dispatch(createTaskHeader(2)); navigate('managePracticeTasks')}}>
                <BsPersonFillGear color='#34A853' className='w-[20px] h-[20px]'/>
                <p className='text-white text-[12px] font-[700]'>Manage Practice Tasks</p>
            </button>
        </div>
       <OngoingSubmission/>
       <RecentSubmissions/>
        </>
  )
}

export default PracticeHome