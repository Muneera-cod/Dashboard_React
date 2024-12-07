import React from 'react'
import { MdOutlineSegment,MdUpdate } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import greenShareInfoIcon from  '../../../../../assets/Images/greenshareInfoicon.svg'   
import { IconAdjustmentsHorizontal,IconArrowsUpDown,IconTriangleSquareCircleFilled } from '@tabler/icons-react';    
import { LuCalendarDays } from "react-icons/lu";
import { PiCubeBold } from "react-icons/pi";
import { useSelector } from 'react-redux';
// import { Data } from './Data'
function OngoingSubmission() {
    let Data=useSelector((state)=>state.tasksData)
    let data=Data?.filter((x)=>x.no_day_left!==0)
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  min-w-full   overflow-auto'>
    <div className='flex items-start justify-between min-w-full'>
        <div className='flex items-center gap-[20px] sm:min-w-full md:min-w-fit'>
             <button className='flex p-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
               <IconTriangleSquareCircleFilled  className='max-w-[15px] max-h-[15px] text-[#E6C100]'/>
                <p className='text-[#E6C100] text-[12px] font-[700]'>Ongoing Practice Tasks</p>
            </button>
            <button className='flex p-[10px] gap-[10px] rounded-[10px] items-center'>
               <MdOutlineSegment className='w-[20px] h-[20px] text-[#8B8B8B]'/>
                <p className='text-[#8B8B8B] text-[12px] font-[700]'>See All</p>
            </button>
        </div>
        {/* <div className='flex items-center gap-[20px]'>
            <button className='flex p-[10px] gap-[10px] rounded-[10px] boxshadow'>
                 <p className='text-[#8B8B8B] text-[12px] font-[700]'>Filter</p>
                 <IconAdjustmentsHorizontal className='w-[20px] h-[20px] text-[#F31919]'/>
            </button>
            <button className='flex p-[10px] gap-[10px] rounded-[10px] boxshadow'>
                <p className='text-[#8B8B8B] text-[12px] font-[700]'>Sort</p>
                <IconArrowsUpDown className='w-[20px] h-[20px] text-[#F31919]'/>
            </button>
        </div> */}
    </div>
    <div className='flex justify-between  min-w-full '>
     <table className='flex flex-col gap-[20px]  w-full'>
        <tbody className='flex flex-col gap-[20px] '>
        {data && data.length?data.map((x,index)=>{return(      
            <tr className=' flex items-center gap-[20px] min-w-full hover:bg-[rgb(255,255,255,0.1)] hover:scale-[1.004] py-[5px] px-[10px] rounded-md' key={x.id}>
                <td>
                    <p className='text-[#52514E] text-[12px] font-[700]'>{(index+1)}</p>
                </td>
               <td className='w-fit'>
                  <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow w-[120px]'>
                        <LuCalendarDays color='#F31919' className='w-[20px] h-[20px]'/>
                        <p className='text-white text-[12px] font-[700]'>{x.deadline}</p>
                  </div>
               </td>
               <td className='flex min-w-[140px]'>
                  <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow max-w-[140px]'>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700] truncate'>{x.category}</p>
                  </div>
                </td>
                <td className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow min-w-fit'>
                 
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'> {`${x.no_of_processes?(x.no_of_processes < 10 ? `0${x.no_of_processes}` : x.no_of_processes):'No'}`} Processes</p>
              
                </td>
                <td className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow min-w-fit'>
            
                       <RiVerifiedBadgeLine   className='text-[#F31919] w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.perks} Perks</p>
                </td>
                <td className='flex justify-start items-center py-[3px] gap-[5px] rounded-[7px]   min-w-[260px] flex-1'>
                   
                       <img src={greenShareInfoIcon}  className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.practice_task}</p>
                 
                </td>
                <td className='flex justify-end items-center flex-1 py-[3px]  gap-[5px] rounded-[7px]   min-w-fit '>    

                       
                  {x.updated_date?
                  <>
                     <p className='text-[12px] font-[700] text-[#52514E]'>Last Updated on {x.updated_date}</p>
                     <div className='p-[10px] w-[30px] h-[30px] flex items-center justify-center'>
                            <MdUpdate  className='min-w-[20px] min-h-[20px] text-[#1B94F6]'/>
                        </div>
                  </>
                       
                       :null}
                  
                </td>
            </tr>
            
        )}):<td className='text-white text-[12px] font-[700] text-[#52514E] w-full my-[30px] flex items-center justify-center'>No data</td>} 
        </tbody>
     </table>
    </div> 
       
</div>
  )
}
export default OngoingSubmission