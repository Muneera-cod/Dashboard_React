import React from 'react'
import { navbardata } from './Data'
function Navbar() {
  return (
    <div className='flex flex-col items-center pt-[110px] pb-[406px] w-[90px] bg-[#141518] min-h-screen fixed overscroll-auto  text-white text-opacity-50 border-right'>
       <div className='flex flex-col  items-center py-[20px] gap-[50px] '>
           {navbardata.map((x)=>{
            return(
             <>
               {x.icon}
             </>
          )}) }      
       </div>
      
    </div>
  )
}

export default Navbar