import React from 'react'
import  yellowdots from '../../../../../assets/Images/yellow3dots.svg'
import  seeAll from '../../../../../assets/Images/clear_all.svg'
import  perksicon from '../../../../../assets/Images/perks.svg'
import greenShareInfoIcon from  '../../../../../assets/Images/greenshareInfoicon.svg'   
import updatedIcon from '../../../../../assets/Images/app_registration.svg' 
import { IconAdjustmentsHorizontal,IconArrowsUpDown } from '@tabler/icons-react';    
import { LuCalendarDays } from "react-icons/lu";
import { PiCubeBold } from "react-icons/pi";
import { ongoingSubmissionData } from './Data'
function OngoingSubmission() {
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  min-w-full   overflow-auto'>
    <div className='flex items-start justify-between w-full'>
        <div className='flex items-center gap-[20px] w-full'>
             <button className='flex p-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
                <img src={yellowdots} className='w-[20px] h-[20px]'/>
                <p className='text-[#E6C100] text-[12px] font-[700]'>Ongoing Practice Tasks</p>
            </button>
            <button className='flex p-[10px] gap-[10px] rounded-[10px]'>
               <img src={seeAll} className='w-[20px] h-[20px]'/>
                <p className='text-[#8B8B8B] text-[12px] font-[700]'>See All</p>
            </button>
        </div>
        <div className='flex items-center gap-[20px]'>
            <button className='flex p-[10px] gap-[10px] rounded-[10px] boxshadow'>
                 <p className='text-[#8B8B8B] text-[12px] font-[700]'>Filter</p>
                 <IconAdjustmentsHorizontal className='w-[20px] h-[20px] text-[#F31919]'/>
            </button>
            <button className='flex p-[10px] gap-[10px] rounded-[10px] boxshadow'>
                <p className='text-[#8B8B8B] text-[12px] font-[700]'>Sort</p>
                <IconArrowsUpDown className='w-[20px] h-[20px] text-[#F31919]'/>
            </button>
        </div>
    </div>
    <div className='flex justify-between  w-full'>
     <table className='flex flex-col gap-[20px] w-full'>
        {ongoingSubmissionData.map((x)=>{return(      
            <tr className='flex items-center gap-[20px]  w-full'>
                <td>
                    <p className='text-[#52514E] text-[12px] font-[700]'>{x.Sno}</p>
                </td>
               <td className='w-fit'>
                  <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow w-[120px]'>
                        <LuCalendarDays color='#F31919' className='w-[20px] h-[20px]'/>
                        <p className='text-white text-[12px] font-[700]'>{x.date}</p>
                  </div>
               </td>
               <td className='flex min-w-[140px]'>
                  <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow max-w-[140px]'>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700] truncate'>{x.category}</p>
                  </div>
                </td>
                <td className='flex '>
                   <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow'>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.processes} Processes</p>
                   </div>
                </td>
                <td className='flex '>
                   <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow' >
                       <img src={perksicon}  className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.perks} Perks</p>
                   </div>
                </td>
                <td className='flex '>
                    <div className='flex justify-start items-center py-[3px] gap-[5px] rounded-[7px]  ' >
                       <img src={greenShareInfoIcon}  className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.userInfo}</p>
                   </div>
                </td>
                <td className='flex justify-end flex-1'>
                  <div className='flex  py-[3px] gap-[5px] rounded-[7px]  ' >
                       
                       <div className='flex items-center justify-center h-[30px] gap-[10px]'>
                         <p className='text-white text-[12px] font-[700] text-[#52514E]'>Last Updated on {x.lastUpdatedDate}</p>
                         <button className='p-[10px] w-[30px] h-[30px] flex items-center justify-center'><img src={updatedIcon} className='max-w-[20px] max-h-[20px]'/></button>
                       </div>
                   </div>
                </td>
            </tr>
            
        )})} 
        
     </table>
    </div> 
       
</div>
  )
}
export default OngoingSubmission