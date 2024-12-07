import React from 'react'
import { navbardata } from './Data'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate=useNavigate()
  return (
    <div className='z-20 flex sm:flex-row md:flex-col items-center sm:justify-center md:justify-start sm:px-[20px] md:px-[0] md:pt-[110px]  md:pb-[406px] sm:h-[90px] md:h-screen md:w-[90px] bg-[#141518]  fixed bottom-0 left-0 right-0 overscroll-auto  text-white text-opacity-50 border-right'>
       <div className='flex  md:flex-col items-center py-[20px]  sm:gap-[25px] md:gap-[50px] '>
           {navbardata.map((x)=>{
            return(
             <div onClick={()=>navigate(x.link)} key={x.id} title={x.tile}>
               {x.icon}
             </div>
          )}) }      
       </div>
      
      
    </div>
  )
}

export default Navbar