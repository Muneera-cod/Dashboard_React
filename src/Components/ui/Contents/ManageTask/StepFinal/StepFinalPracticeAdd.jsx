import React from 'react'
import { FaRegHourglass } from "react-icons/fa";
import ProcessOne from './ProcessOne';
import ProcessTwo from './ProcessTwo';
function StepFinalPracticeAdd() {

  return (
    <>
    <div className='flex flex-col items-start p-[20px] gap-[20px]  boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
      <p className='text-[#E6C100] text-[14px] font-[700]'>Task RoadMap</p>
       <ProcessOne/>
       <ProcessTwo/>
   </div>
   <button className='w-1/12 ml-auto bg-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'><FaRegHourglass/>Save & Next</button>
   </>
  )
}

export default StepFinalPracticeAdd