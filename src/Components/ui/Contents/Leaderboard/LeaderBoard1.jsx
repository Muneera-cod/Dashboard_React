import React,{useState} from 'react'
import { SubData } from '../Submission/SubmissionData'
import { useSelector } from 'react-redux'
import { PiCubeBold } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { IconTriangleSquareCircleFilled,IconChevronDown,IconChevronUp,IconChevronsUp } from '@tabler/icons-react';
import DropDown from './DropDown';
function LeaderBoard1() {
    const view=useSelector((state)=>state.managetasks.setView)
    const [open,setOpen]=useState(0)
    const [pratice,setPractice]=useState('Practice')

  return (
    <>
   
    { view===0 && <>
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px]  min-w-full min-h-screen  overflow-auto relative'>
    <div className='flex items-start justify-between w-full'>
        <div className='flex items-center gap-[20px] relative'>
             <div className='flex flex-col p-[10px] gap-[10px]  text-[12px] font-[700]  bg-[#141518] boxshadow rounded-[10px] min-w-[300px] absolute top-0 z-10' onClick={()=>{open===0?setOpen(1):setOpen(0)}}>
               <div className='flex items-center justify-between gap-2 '>
                 <IconTriangleSquareCircleFilled  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                 <p className='text-white'>{pratice}</p>
                 {open===1 ? <IconChevronUp stroke={2} className='text-[#34A853] max-w-[15px] max-h-[15px] '/>:<IconChevronDown stroke={2} className='text-[#34A853] max-w-[15px] max-h-[15px] '/>}
                </div>
                {open===1 && <DropDown setOpen={setOpen} setPractice={setPractice}/>}
            </div>

            <button className='flex p-[10px] gap-[10px] boxshadow rounded-[10px] absolute left-[350px] top-0 '>
               <IconTriangleSquareCircleFilled  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                <p className='text-white text-[12px] font-[700]'>Weekly</p>
            </button>
            {/* <button className='flex p-[10px] gap-[10px] boxshadow rounded-[10px]'>
               <IconTriangleSquareCircleFilled  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                <p className='text-white text-[12px] font-[700]'>Monthly</p>
            </button> */}
        </div>
      
    </div>
    <div className='flex justify-between  w-full  absolute top-[80px]'>
     <table className='flex flex-col gap-[20px] w-full'>
        <tbody className='flex flex-col gap-[20px] '>
     { 
     SubData && SubData.length?SubData.map((x,index)=>{return(
            <tr className='flex items-center gap-[20px] hover:bg-[rgb(255,255,255,0.1)] hover:scale-[1.004] py-[5px] px-[10px] rounded-md w-full' key={x.id} >
                <td className='min-w-6'>
                    <p className='text-[#52514E] text-[12px] font-[700] '>{(index+1)}</p>
                </td>
                <td className='flex items-center  px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow '>
                       <IconChevronsUp  className='text-[#34A853] w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700] truncate'>222</p>
                </td>
                <td className='flex items-center  px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow  min-w-[140px] max-w-[140px]'>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700] truncate'>{x.name}</p>
                </td>
                <td className='flex items-center  gap-[5px] rounded-[7px]  px-[10px] bg-[#23262B] opacity-100 boxshadow py-[5px]'>
                  
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.profession}</p>
                  
                </td>
               
               <td className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow min-w-[120px]'>

                        <LuCalendarDays color='#F31919' className='w-[20px] h-[20px]'/>
                        <p className='text-white text-[12px] font-[700]'>{x.date}</p>
                
               </td>    
            </tr> 
        )}):<tr  className='text-white text-[12px] font-[700] text-[#52514E] w-full my-[30px] flex items-center justify-center'>No data</tr>}
        </tbody> 
     </table>
    </div> 
       
</div></>}
</>
  )
}

export default LeaderBoard1