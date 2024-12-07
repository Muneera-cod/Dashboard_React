import React from 'react'
import Review from './Review'
import { FaRegHourglass } from 'react-icons/fa6'
function SubmissionRoadMap() {
  return (
    <>
    
      <div className='flex flex-col items-start p-[20px] gap-[10px] boxshadow rounded-[15px]  min-w-full   overflow-auto'>
       <h1 className='text-[#E6C100] font-[700] text-[16px]'>Submission Road Map</h1>
       <Review/>
    </div>
    <button 
    className='min-w-1/12 ml-auto bg-[#E6C100] text-black text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'>
      <FaRegHourglass/>Review & publish</button>
    </>
    
  )
}

export default SubmissionRoadMap