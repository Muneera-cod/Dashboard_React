import React from 'react'
import actionKey from '../../../assets/Images/action_key.svg'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import addroad from '../../../assets/Images/add_road.svg'
import dataCheck from '../../../assets/Images/data_check.svg'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
function Header() {
  const step1CreateTask=useSelector((state)=>state.managetasks)
  return (
    <div className='flex py-[10px] gap-[10px] items-center justify-between border-bottom'>
         <div className='flex px-[20px] py-[5px] gap-[9px] items-center'>
            <div className='flex gap-[10px] items-center'>
              <img src={actionKey} width={'20px'} height={'20px'}></img>
              <p className='text-white text-[12px] font-[700]'>Challenges</p>
            </div>  
            <RiArrowRightDoubleLine className='text-[#8B8B8B] hover:text-[#3A0070]'/>
            <div className='flex gap-[10px] items-center'>
              <img src={dataCheck} width={'20px'} height={'20px'}></img>
              <p className='text-white text-[12px] font-[700]'>Practice Mode</p>
            </div> 

          {step1CreateTask === 1 &&  <>
            <RiArrowRightDoubleLine className='text-[#8B8B8B] hover:text-[#3A0070]'/>
            <div className='flex gap-[10px] items-center'>
              <img src={addroad} width={'20px'} height={'20px'}></img>
              <p className='text-white text-[12px] font-[700]'>Create Task</p>
            </div>
            </> }
         </div>
         <div className='flex px-[20px] py-[5px] gap-[20px] items-center'>
             <MdOutlineNotificationsActive className='text-[#8B8B8B] hover:text-[#3A0070]'/>
         </div>

    </div>
  )
}

export default Header