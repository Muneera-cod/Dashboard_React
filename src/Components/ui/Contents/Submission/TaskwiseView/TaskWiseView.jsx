import React,{useState,useEffect} from 'react'
import greenShareInfoIcon from  '../../../../../assets/Images/greenshareInfoicon.svg'   
import { LuCalendarDays } from "react-icons/lu";
import { PiCubeBold } from "react-icons/pi";
import { IconListCheck, IconTriangleSquareCircleFilled} from '@tabler/icons-react'; 
import Top from './Top'; 
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { Data } from '../../ManageTask/PracticeHome/Data'
import { SubData } from '../SubmissionData';
function TaskWiseView() {
    const navigate=useNavigate()
    const view=useSelector((state)=>state.managetasks.setView)
    const[data,setData]=useState([])
    const {id}=useParams()
    console.log(`params${id}`)
    let getTask=Data.find((x)=>String(x.id)===id)
    useEffect(()=>{setData(SubData)},[])

    console.log(`s${getTask}`)
    console.log(`dataaa${data}`)

  return (
    <>
    <Top />
    { view===1 && <>
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px]  min-w-full   overflow-auto'>
    <div className='flex items-start justify-between w-full'>
        <div className='flex items-center gap-[20px]'>
             <button className='flex p-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
               <IconTriangleSquareCircleFilled  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                <p className='text-[#34A853] text-[12px] font-[700]'>All Submissions</p>
            </button>
        </div>
      
    </div>
    <div className='flex justify-between  min-w-full '>
     <table className='flex flex-col gap-[20px] '>
        <tbody className='flex flex-col gap-[20px] '>
     { 
     data && data.length?data.map((x,index)=>{return(
            <tr className='flex items-center gap-[20px] py-[5px] px-[15px] hover:bg-[rgb(255,255,255,0.1)] hover:scale-[1.002] rounded-md w-full' key={x.id} onClick={()=>{navigate(`${x.id}`)}}>
                <td className='min-w-6'>
                    <p className='text-[#52514E] text-[12px] font-[700] '>{(index+1)}</p>
                </td>
                <td className='flex items-center gap-[2px]'>
                  <IconListCheck stroke={2} className={`text-[#34A853] w-[16px] h-[16px] ${x.completed>10?'':x.completed>5?'text-[#E6C100]':'text-[#F31919]'}`}/>
                  <p className='text-[12px] font-[700]'>{x.completed<10?`0${x.completed}`:x.completed}/15</p>
                </td>
                <td className='flex min-w-[140px] max-w-[140px]'>
                  <div className='flex items-center  px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow max-w-[140px] '>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700] truncate'>{x.name}</p>
                  </div>
                </td>
                <td className='flex '>
                   <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow'>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700]'>{x.profession}</p>
                   </div>
                </td>
               <td className='w-fit'>
                  <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow w-[120px]'>
                        <LuCalendarDays color='#F31919' className='w-[20px] h-[20px]'/>
                        <p className='text-white text-[12px] font-[700]'>{x.date}</p>
                  </div>
               </td>
        
               <td className='flex justify-start items-center py-[3px] gap-[5px] rounded-[7px]   min-w-[260px] flex-1'>
                   
                   <img src={greenShareInfoIcon}  className='w-[20px] h-[20px]'/>
                   <p className='text-white text-[12px] font-[700]'>{getTask.practice_task}</p>
             
               </td>
                <td className='flex justify-end flex-1 py-[3px]  gap-[5px] rounded-[7px]   min-w-fit '>    
                     <p className='text-[12px] font-[700] text-[#52514E]'>Last Updated on {getTask.updated_date}</p>
                </td>
            </tr> 
        )}):<tr  className='text-white text-[12px] font-[700] text-[#52514E] w-full my-[30px] flex items-center justify-center'>No data</tr>}
        </tbody> 
     </table>
    </div> 
       
</div></>}
{view===2 && <Outlet/>}
</>
  )
}

export default TaskWiseView