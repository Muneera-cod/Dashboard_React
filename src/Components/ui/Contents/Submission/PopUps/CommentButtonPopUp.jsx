import React from 'react'
import { IoLinkSharp } from "react-icons/io5";
import { IconEye,IconCalendarMonth,IconMessage } from '@tabler/icons-react';
function CommentButtonPopUp({handlePopUp}) {
  return (
    <div className='fixed z-10 top-[50%] left-[50%]  -translate-y-1/2 -translate-x-1/2 bg-[#141518] boxshadow rounded-[30px] flex flex-col max-w-[682px] sm:px-[50px] md:px-[100px] sm:py-[25px] md:py-[50px] items-center gap-[40px]'>
    <div className='flex flex-col gap-[20px]  w-full'>
      <h1 className='text-[16px] font-[700] text-[#1B94F6]'>Comment</h1>
   
      <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
           <IconMessage  color='#ffff' className='w-[20px] h-[20px] '/>
           <input type="text" className='text-[#8B8B8B] text-[14px] font-[700] bg-[#141518]' placeholder='Comment Your Remarks'></input>
     </div>
    </div>
    <div className='flex gap-[20px] items-center justify-center'>
         <button className='flex  w-[138px]  text-[14px] font-[700] px-[20px] py-[10px] items-center justify-center text-white boxshadow rounded-[10px]' onClick={()=>{handlePopUp(0)}}>Close</button>
         <button className='flex  w-[138px] bg-[#F31919] text-[14px] font-[700] px-[20px] py-[10px] items-center justify-center text-white boxshadow rounded-[10px]'>Save & Publish</button>
    </div>
 </div>
  )
}

export default CommentButtonPopUp