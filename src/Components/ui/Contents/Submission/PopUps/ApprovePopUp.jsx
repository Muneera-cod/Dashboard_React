import React from 'react'
import { IoLinkSharp } from "react-icons/io5";
import { IconEye,IconListCheck,IconMessage } from '@tabler/icons-react';
function ApprovePopUp({handlePopUp}) {
  return (
    <div className='fixed z-10 top-[50%] left-[50%]  -translate-y-1/2 -translate-x-1/2 bg-[#141518] boxshadow rounded-[30px] flex flex-col max-w-[682px] sm:px-[50px] md:px-[100px] sm:py-[25px] md:py-[50px] items-center gap-[40px]'>
    <div className='flex flex-col gap-[20px] items-center'>
      <h1 className='text-[16px] font-[700] text-[#1B94F6]'>Task Approval</h1>
      <div className='flex sm:flex-col md:flex-row gap-[10px] justify-center md:items-end'>
          <div className='flex flex-col gap-[5px]'>
             <h1 className='text-[12px] font-[700] text-white'>Miro URL</h1>
             <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                        <IoLinkSharp  color='#414ECA' className='w-[20px] h-[20px] '/>
                        <p className='text-[#8B8B8B] text-[14px] font-[700]'>www.browserstack.com/browsertesting.</p>
             
                  <a href={null}><IconEye  stroke={2} color='#414ECA' className='w-[20px] h-[20px] '/></a>
             </div>
          </div>
          <div className='flex flex-col gap-[5px] w-fit'>
             <h1 className='text-[12px] font-[700] text-white flex gap-2 items-center'>Perks<span className='text-[10px] text-[#8B8B8B]'>(Max. 5)</span></h1>
             <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
             <IconListCheck  stroke={2} color='#34A853' className='w-[20px] h-[20px] '/>
             <p className='text-[#8B8B8B] text-[14px] font-[700]'>Perks</p>
             </div>
          </div>
      </div>
      <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] sm:w-full md:w-fit'>
           <IconMessage  color='#ffff' className='w-[20px] h-[20px] '/>
           <p className='text-[#8B8B8B] text-[14px] font-[700]'>Comment Your Remarks here</p>
     </div>
    </div>
    <div className='flex gap-[20px] items-center justify-center'>
         <button className='w-[138px] flex  text-[12px] font-[700] px-[20px] py-[10px] items-center justify-center text-white boxshadow rounded-[10px]' onClick={()=>{handlePopUp(0)}}>Close</button>
         <button className='w-[138px] flex bg-[#34A853] text-[12px] font-[700] px-[20px] py-[10px] items-center justify-center text-white boxshadow rounded-[10px]'>Save & Reject</button>
    </div>
 </div>
  )
}

export default ApprovePopUp