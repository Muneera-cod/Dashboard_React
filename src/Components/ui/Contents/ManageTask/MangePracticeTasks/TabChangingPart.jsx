import React ,{useEffect, useState} from 'react'
import { PiCubeBold } from "react-icons/pi";
import { IconEdit } from '@tabler/icons-react'
import { RiVerifiedBadgeLine } from "react-icons/ri";
import greenShareInfoIcon from  '../../../../../assets/Images/greenshareInfoicon.svg'   
import { useSelector} from 'react-redux';
import { LuCalendarDays } from "react-icons/lu";
function TabChangingPart({goToUpadteForm}) {
   const Data=useSelector((state)=>state.tasksData)
   let categories=[...new Set(Data.map((x)=>x.category))]
   const [tab,setTab]=useState(0)
   const [sliceData,SetSliceData]=useState([])
   const handleTab=(index)=>{
    setTab(index)
   }
   useEffect(()=>SetSliceData(Data.filter((x)=>x.category===categories[tab])),[tab])
   console.log(tab)
  console.log(categories)
   console.log(`qwert${sliceData}`)
  
  return (
    <>
    {/* Categories Tabs */}
    <div className='flex gap-[20px] overflow-auto py-6'>
        {categories.map((x,index)=>{
            return(
         <div onClick={()=>handleTab(index)} 
         className={`flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow max-w-[140px] ${tab===index?'':'opacity-30'}`}>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700] truncate'>{x}</p>
        </div>)})}
    </div>
    {/*  */}

    {/* Datas */}
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  min-w-full   overflow-auto'>
    <div className='flex justify-between  w-full'>
     <table className='flex flex-col gap-[20px] w-full'>
        <tbody className='flex flex-col gap-[20px]'>
        {sliceData.length?sliceData.map((x,index)=>{return(      
            <tr className='flex items-center gap-[20px]  w-full' key={x.id}>
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
                <td className='flex min-w-fit'>
                   <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow'>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'> {`${x.no_of_processes < 10 ? `0${x.no_of_processes}` : x.no_of_processes}`} Processes</p>
                   </div>
                </td>
                <td className='flex min-w-fit'>
                   <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow' >
                       <RiVerifiedBadgeLine   className='text-[#F31919] w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.perks} Perks</p>
                   </div>
                </td>
                <td className='flex min-w-fit'>
                    <div className='flex justify-start items-center py-[3px] gap-[5px] rounded-[7px]  ' >
                       <img src={greenShareInfoIcon}  className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.practice_task}</p>
                   </div>
                </td>
                <td className='flex justify-end flex-1 min-w-fit'>
                  <div className='flex  py-[3px] gap-[5px] rounded-[7px] ' >
                       
                       <div className='flex items-center justify-center h-[30px] gap-[10px]'>
                       <p className='text-white text-[12px] font-[700] text-[#52514E]'>{x.updated_date?'Last Updated on':'No updation'} {x.updated_date}</p>
                         <button onClick={()=>goToUpadteForm(x.id)} className='boxshadow rounded-[5px] p-[10px] w-[30px] h-[30px] flex items-center justify-center'>
                            <IconEdit  className='min-w-[20px] min-h-[20px] text-[#1B94F6]'/>
                        </button>
                       </div>
                   </div>
                </td>
            </tr>
            
        )}):<div className='text-white text-[12px] font-[700] text-[#52514E] w-full h-full flex items-center justify-center'>No data</div>} 
        </tbody>
     </table>
    </div> 
</div>
    {/*  */}
    </>
  )
}

export default TabChangingPart