import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { BsPersonFillGear } from "react-icons/bs";
import OngoingSubmission from './OngoingSubmission';
import { makeView,createTaskHeader } from '../../../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function PracticeHome() {
  const view=useSelector((state)=>state.managetasks.setView)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  console.log(`cjanckn ${view}`)
  const handle=(dispch1,dispch2,nav)=>{
    dispatch(makeView(dispch1))
    dispatch(createTaskHeader(dispch2))
    navigate(nav)
  }
  return (
    <>
    <div className='flex items-center gap-[20px]'>
            <button className='flex   items-center sm:gap-[8px] md:gap-[10px] p-[10px] boxshadow rounded-[10px]' onClick={()=>{handle(1,1,'createPraticeTasks')}}>
                <FaPlus color='#34A853' className='w-[20px] h-[20px]'/>
                <p className='text-white sm:text-[10px] md:text-[12px] font-[700] text-left'>Create an Practice Task</p>
            </button>
            <button className='flex   items-center sm:gap-[8px] md:gap-[10px] p-[10px] boxshadow rounded-[10px]' onClick={()=>{handle(1,2,'managePracticeTasks')}}>
                <BsPersonFillGear color='#34A853' className='w-[20px] h-[20px]'/>
                <p className='text-white sm:text-[10px] md:text-[12px] font-[700] text-left'>Manage Practice Tasks</p>
            </button>
        </div>
       <OngoingSubmission/>
       {/* <RecentSubmissions/> */}
        </>
  )
}

export default PracticeHome