import React from 'react'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import logo from '../../../assets/Images/icon.svg'
function Topbar() {
  return (
   
        <div className=' flex py-[15px] gap-[10px] items-center border-bottom w-full'>
            <div className='flex px-[20px] gap-[5px]'>
                <img src={logo} width={'20px'} height={'20px'}></img>
                
                    <p className='text-white text-[12px] font-[700]'>ShareInfo Super Admin Panel</p>
                
                <div className='flex gap-[10px] items-center'>
                    <RiArrowRightDoubleLine className='text-[#8B8B8B] hover:text-[#3A0070]'/>
                    <p className='text-white text-[12px] font-[700]'>Akshay Ashokan Pothan</p>
                </div>
            
            </div>
        </div>
       
   
  )
}

export default Topbar