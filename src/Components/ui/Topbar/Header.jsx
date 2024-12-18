import React from 'react'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { MdOutlineNotificationsActive ,MdOutlineAddRoad} from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import dataCheck from '../../../assets/Images/data_check.svg'
import { useSelector } from 'react-redux';
function Header() {
  const createTaskHeader=useSelector((state)=>state.managetasks.setHeaderCreateTask)
  console.log(`header${createTaskHeader}`)
  return (
    <div className='flex py-[10px] sm:gap-[5px] md:gap-[10px] items-center justify-between border-bottom min-w-full'>
         <div className='flex sm:px-[10px] md:px-[20px] py-[5px] sm:gap-[3px] md:gap-[9px] items-center'>
            <div className='flex sm:gap-[5px] md:gap-[10px] items-center'>
              <BsFillGridFill className='text-[#34A853]  max-w-[20px] max-h-[20px]'/>      
              <p className='text-white sm:text-[10px] md:text-[12px] font-[700] text-left tracking-wide'>Challenges</p>
            </div>  
            <RiArrowRightDoubleLine className='text-[#8B8B8B] hover:text-[#3A0070]'/>
            <div className='flex sm:gap-[5px] md:gap-[10px] items-center'>
              <img src={dataCheck} width={'20px'} height={'20px'} ></img>
              <p className='text-white sm:text-[10px] md:text-[12px] font-[700] text-left tracking-wide'>Practice Mode</p>
            </div> 

          { createTaskHeader!==0 &&  <>
            <RiArrowRightDoubleLine className='text-[#8B8B8B] hover:text-[#3A0070]'/>
            <div className='flex sm:gap-[5px] md:gap-[10px] items-center'>
              <MdOutlineAddRoad color='#E6C100' width={'20px'} height={'20px'}/>
              {createTaskHeader===1?<p className='text-white sm:text-[10px] md:text-[12px] font-[700] text-left tracking-wide'>Create Task</p>:<p className='text-white text-[12px] font-[700]'>Manage Practise Task</p>}
            </div>
            </> }
         </div>
         <div className='flex px-[20px] py-[5px] sm:gap-[10px] md:gap-[20px] items-center'>
             <BsFillGridFill className='text-[#8B8B8B] hover:text-[#3A0070] max-w-[20px] max-h-[20px]'/>
             <MdOutlineNotificationsActive className='text-[#8B8B8B] hover:text-[#3A0070]'/>
         </div>

    </div>
  )
}

export default Header