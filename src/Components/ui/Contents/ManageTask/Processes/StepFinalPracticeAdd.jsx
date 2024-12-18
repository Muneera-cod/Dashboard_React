import React, { useState } from 'react'
import Process from './Process';
import { makeView } from '../../../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice';
import { IconChevronsLeft } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
function StepFinalPracticeAdd({setPracticeCount}) {
  const[addMoreProcess,setAddMoreProcess]=useState([1])
  const handleAddMoreProcess=(a)=>{
     setAddMoreProcess([...addMoreProcess,a])
     setPracticeCount(a)
  }
  const dispatch=useDispatch()
  return (
    <>
    <button className='flex gap-[5px] items-center  text-white text-opacity-50 hover:text-[#1B94F6]' onClick={()=>dispatch(makeView(1))}>
       <IconChevronsLeft className=' w-[18px] h-[18px]'/>
       <p className='text-[14px]'>back</p>
    </button>
    <div className='flex flex-col items-start p-[20px] gap-[20px]  boxshadow rounded-[15px] min-h-[30vh]  w-full '>
    

      <p className='text-[#E6C100] text-[14px] font-[700]'>Task RoadMap</p>
       {addMoreProcess.map((x)=>{return(
         <div key={x} className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  w-full '>
          <Process  proccessCount={x} />
          {addMoreProcess[addMoreProcess.length-1]===x && <button onClick={()=>handleAddMoreProcess(addMoreProcess.length+1)} className=' ml-auto text-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[7px]  boxshadow'>Add More Processes</button>}
        </div> 
      
      )})}
       
   </div>
   {/* <button className='min-w-1/12 ml-auto bg-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'><FaRegHourglass/>Save & Next</button> */}
   </>
  )
}

export default StepFinalPracticeAdd