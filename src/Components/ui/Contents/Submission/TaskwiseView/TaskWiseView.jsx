import React,{useState,useEffect} from 'react'
// import greenShareInfoIcon from  '../../../../../assets/Images/greenshareInfoicon.svg'   
import { LuCalendarDays } from "react-icons/lu";
import { PiCubeBold } from "react-icons/pi";
import { Data } from '../../ManageTask/PracticeHome/Data'
import { IconTriangleSquareCircleFilled} from '@tabler/icons-react'; 
import Top from './Top';  
function TaskWiseView() {
    const[data,setData]=useState([])
    let getdata= Data?.filter((x)=>x.submissions.status==='submitted')
    useEffect(()=>{setData(getdata)},[])
    console.log(`dataaa${data}`)
  return (
    <>
    <Top/>
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px]  min-w-full   overflow-auto'>
    <div className='flex items-start justify-between w-full'>
        <div className='flex items-center gap-[20px]'>
             <button className='flex p-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
               <IconTriangleSquareCircleFilled  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                <p className='text-[#34A853] text-[12px] font-[700]'>All Submissions</p>
            </button>
        </div>
      
    </div>
    <div className='flex justify-between  w-full overflow-auto'>
     <table className='flex flex-col gap-[20px] w-full'>
        <tbody className='flex flex-col gap-[20px]'>
     { 
     data && data.length?data.map((x,index)=>{return(
            <tr className='flex items-center gap-[20px]  w-full' key={x.id}>
                <td>
                    <p className='text-[#52514E] text-[12px] font-[700]'>{(index+1)}</p>
                </td>
                <td className='flex min-w-[140px] max-w-[140px]'>
                  <div className='flex items-center  px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow max-w-[140px] '>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700] truncate'>{x.submissions.name}</p>
                  </div>
                </td>
                <td className='flex '>
                   <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow'>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.submissions.profession}</p>
                   </div>
                </td>
               <td className='w-fit'>
                  <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow w-[120px]'>
                        <LuCalendarDays color='#F31919' className='w-[20px] h-[20px]'/>
                        <p className='text-white text-[12px] font-[700]'>{x.date}</p>
                  </div>
               </td>
        
                <td className='flex '>
                    <div className='flex justify-start items-center py-[3px] gap-[5px] rounded-[7px]  ' >
                       <img src={greenShareInfoIcon}  className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.taskname}</p>
                   </div>
                </td>
                <td className='flex justify-end flex-1 '>
                  <div className='flex  py-[3px] gap-[5px] rounded-[7px]  ' >
                       
                       <div className='flex items-center justify-center h-[30px] gap-[10px]'>
                         <p className='text-white text-[12px] font-[700] text-[#52514E]'>Last Updated on {x.lastUpdatedDate}</p>
                       </div>
                   </div>
                </td>
            </tr> 
        )}):<div  className='text-white text-[12px] font-[700] text-[#52514E] w-full my-[30px] flex items-center justify-center'>No data</div>}
        </tbody> 
     </table>
    </div> 
       
</div>
</>
  )
}

export default TaskWiseView