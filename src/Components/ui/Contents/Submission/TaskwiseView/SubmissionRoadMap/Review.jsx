import React, { useState } from 'react'
import { IoLinkSharp } from "react-icons/io5";
import {IconEye,IconListCheck,IconRefresh,IconMessage} from "@tabler/icons-react"
import { ReviewData } from './ReviewData';
import { createPortal } from 'react-dom';
import ResubmissionPopUp from '../../PopUps/ResubmissionPopUp';
import ApprovePopUp from '../../PopUps/ApprovePopUp';
import InfoButtonPopUp from '../../PopUps/InfoButtonPopUp';
import CommentButtonPopUp from '../../PopUps/CommentButtonPopUp';
function Review() {
     const [popUp,setPopUp]=useState(0)
     const handlePopUp=(popUp)=>{
            setPopUp(popUp)
     }
     console.log(popUp)
  return (
    <>
    {ReviewData?.map((x)=>{return(
        <div key={x.id} className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px]  min-w-full   overflow-auto'>
     <p className='text-[#1B94F6] text-[16px] font-[700]'>{x.heading}</p>
     {x.other.map((y)=>{return(<div  key={y.id} className='flex flex-col gap-[20px] w-full'>
          <div className='flex flex-col gap-[5px] w-full'>
            <p className='text-[12px] font-[700] text-white'>{y.title}</p>
            <div className='flex sm:flex-col md:flex-row gap-[10px] w-full '>
            <div className='flex gap-[10px] sm:w-full md:w-fit'>
                <button className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                           <IoLinkSharp  color='#414ECA' className='w-[20px] h-[20px] '/>
                            {y.link?<a href={y.link?'#':null}><p className='text-[#8B8B8B] text-[14px] font-[700]'>{y.link}</p></a>:<p className='text-[#F31919] text-[14px] font-[700]'>Empty</p>}
                </button>
                <button   onClick={()=>{setPopUp(4)}}   className={`flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] ${y.link ? " ":"opacity-40 cursor-not-allowed"}`}>
                    <IconEye  stroke={2} color='#414ECA' className='w-[20px] h-[20px] ' />
                </button>
                </div>
                <div className='flex gap-[10px]'>
                <button className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]' onClick={()=>{setPopUp(2)}}>
                     <IconListCheck  stroke={2} color='#34A853' className='w-[20px] h-[20px] '/>
                     <p className='text-[#8B8B8B] text-[14px] font-[700]'>Approve</p>

                </button>
                <button onClick={()=>{setPopUp(1)}} className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                     <IconRefresh  stroke={2} color='#F31919' className='w-[20px] h-[20px] '/>
                     <p className='text-[#8B8B8B] text-[14px] font-[700]'>Re Submission</p>

                </button>
                <button className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]' onClick={()=>{setPopUp(3)}}>
                    <IconMessage  stroke={2} color='#ffff' className='w-[20px] h-[20px] '/>
                </button>
                </div>
            </div>
          </div>
     </div>)})}
</div>)})}
  {createPortal(popUp===1?<ResubmissionPopUp handlePopUp={handlePopUp}/>:(popUp===2?<ApprovePopUp handlePopUp={handlePopUp}/>:(popUp===3?<CommentButtonPopUp handlePopUp={handlePopUp}/>:(popUp===4?<InfoButtonPopUp handlePopUp={handlePopUp}/>:null))),document.body)}
    </>
  )
}

export default Review