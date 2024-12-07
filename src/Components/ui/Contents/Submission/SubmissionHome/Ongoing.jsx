import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { RiVerifiedBadgeLine } from "react-icons/ri";
import greenShareInfoIcon from  '../../../../../assets/Images/greenshareInfoicon.svg'   
import { IconChevronDown,IconAlignBoxCenterStretch,IconCopyCheckFilled } from '@tabler/icons-react';    
import { LuCalendarDays } from "react-icons/lu";
import { PiCubeBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
function Ongoing({practice,category}) {
    const [data,setData]=useState([])
    const Data=useSelector((state)=>state.tasksData)
    let getdata=Data?.filter((x)=>x.no_day_left!==0)

    useEffect(()=>{
      
        setData(getdata)
        if(practice.length!==0){
            let praticeTask;
            practice.map((x)=>praticeTask=x.practice_task)
            let updatedData=getdata.filter((x)=>x.practice_task===praticeTask)
            setData(updatedData)
        }
    },[practice])
    useEffect(()=>{
      
       
    
        if(category.length!==0){
            let getCategory;
            category?.map((x)=>getCategory=x.category)
            let updatedData=data.filter((x)=>x.category===getCategory)
            setData(updatedData)
        }
        
    },[category])
        console.log('abcd',getdata)
        console.log(data)
        const navigate=useNavigate()
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  min-w-full   overflow-auto'>
    <div className='flex items-start justify-between min-w-full'>
        <div className='flex items-center gap-[20px] sm:min-w-full md:min-w-fit'>
             <button className='flex px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
               <IconChevronDown  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                <p className='text-[#34A853] text-[12px] font-[700]'>Ongoing</p>
            </button>
        </div>
    </div>
    <div className='flex justify-between  min-w-full'>
     <table className='flex flex-col gap-[20px] '>
        <tbody className='flex flex-col gap-[20px] w-full'>
        {data && data.length?data.map((x,index)=>{return(      
            <tr className='flex items-center gap-[20px]  py-[5px] px-[15px] hover:bg-[rgb(255,255,255,0.1)] hover:scale-[1.002] rounded-md w-full' key={x.id} onClick={()=>{navigate(`tasks/${x.id}`)}}>
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
                <td className='flex justify-start items-center py-[3px] gap-[5px] rounded-[7px]   min-w-[260px] flex-1'>
                   
                       <img src={greenShareInfoIcon}  className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.practice_task}</p>
                 
                </td>
                <td className='flex min-w-fit'>
                   <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow' >
                       <IconAlignBoxCenterStretch   className='text-[#E6C100] w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.enrolled} Enrolled</p>
                   </div>
                </td>
                <td className='flex min-w-fit'>
                   <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow' >
                       <IconCopyCheckFilled   className='text-[#34A853] w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.submitted} Submitted</p>
                   </div>
                </td>
                <td className='flex justify-end flex-1 py-[3px]  gap-[5px] rounded-[7px]   min-w-fit '>    
                     <p className='text-[12px] font-[700] text-[#52514E]'>Last Updated on {x.updated_date}</p>
                </td>
            </tr>
            
        )}):<tr className='text-white text-[12px] font-[700] text-[#52514E] w-full my-[30px] flex items-center justify-center'><td>No data</td></tr>} 
        </tbody>
     </table>
    </div> 
       
</div>
  )
}

export default Ongoing