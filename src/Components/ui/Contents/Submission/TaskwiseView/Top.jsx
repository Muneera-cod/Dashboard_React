import React, {  useState } from 'react'
import { IconChevronDown ,IconChevronsLeft} from '@tabler/icons-react'
import { useNavigate, useParams } from 'react-router-dom'
import { PiCubeBold } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { useSelector } from 'react-redux'
import { SubData } from '../SubmissionData'
function Top() {
  const Data=useSelector((state)=>state.tasksData)
  const {id}=useParams()
  const select=Data.find((x)=>String(x.id)===id)
  console.log(select.practice_task)
  const [curvalue,setCurValue]=useState(select.practice_task)

  const {user_id}=useParams()
  const selected=SubData.find((x)=>String(x.id)===user_id)
    // const [tasks,setTasks]=useState([])
  const navigate=useNavigate()
//   const handleCurValue=(val)=>{
//     setCurValue(val)
//     onChange={(e)=>handleCurValue(e.target.value)}
// }
  // useEffect(()=>{
  //   setTasks(Data)
  // },[])


  const view=useSelector((state)=>state.managetasks.setView)
  return (
    <>
     <button className='flex gap-[5px] items-center  text-white text-opacity-50 hover:text-[#1B94F6]' onClick={()=>{view===1?navigate('/manageTasks/submissions'):navigate(`/manageTasks/submissions/tasks/${id}`)}}>
       <IconChevronsLeft className=' w-[18px] h-[18px]'/>
       <p className='text-[14px]'>back</p>
     </button>
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px]   min-w-full   overflow-auto'>
    <div className='flex items-center justify-between min-w-full'>
        <div className='flex items-center gap-[20px] sm:min-w-full md:min-w-fit'>
             <div className='flex justifiy-center items-center px-[20px] py-[10px] text-white text-[12px] font-[700] gap-[10px] boxshadowYellow rounded-[10px] text-white bg-[#141518] min-w-fit'>
                 {curvalue} 
                {/* {tasks && tasks.length?tasks.map((x)=><option className='mx-[10px]'  value={x.practice_task} key={x.id}>{x.practice_task}</option>):<option>No tasks</option>} */}
             </div> 
            {view===1 && <>
              <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] rounded-[10px] boxshadow'>
                 <p className='text-white text-[12px] font-[700]'>Top submissions</p>
                 <IconChevronDown className='w-[20px] h-[20px] text-white'/>
            </button> 
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] rounded-[10px]'>
            <IconChevronDown className='w-[20px] h-[20px] text-[#8B8B8B]'/>
            <p className='text-[#8B8B8B] text-[12px] font-[700]'>See All</p>
            </button>
            </>}
           {
            view===2 && <>
                 
                  <div className='flex items-center  px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow max-w-[140px] '>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700] truncate'>{selected?.name}</p>
                  </div>
                  <div className='flex items-center  px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow max-w-[140px] '>
                       <PiCubeBold color='#1B94F6' className='w-[20px] h-[20px]'/>
                       <p className='text-white text-[12px] font-[700] truncate'>{selected?.profession}</p>
                  </div>
                  <div className='flex items-center px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow min-w-[120px]'>
                        <LuCalendarDays color='#F31919' className='w-[20px] h-[20px]'/>
                        <p className='text-white text-[12px] font-[700]'>{selected?.date}</p>
                  </div>
            
            </>
           }

        </div>
      
    </div>
    </div>

    </>
  )
}

export default Top