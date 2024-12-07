import React from 'react'
import { leaderDropdownData } from './LeaderBoardData'
function DropDown({setOpen,setPractice}) {
    
  return (
   
            
              <div className='flex flex-col    bg-[#141518] ' onClick={()=>{setOpen(0)}}> 
                    {leaderDropdownData.map((x)=><p key={x.id}  className='px-[20px] py-[10px]' onClick={()=>{setPractice(x.title)}}>{x.title}</p>)}
                 


                </div> 
            
             
           
  )
}

export default DropDown