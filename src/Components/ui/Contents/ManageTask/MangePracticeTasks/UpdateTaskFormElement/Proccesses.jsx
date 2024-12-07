import React, { useState } from 'react'
import Process from '../../Processes/Process';
import { useDispatch } from 'react-redux';
function Proccesses() {
  const[addMoreProcess,setAddMoreProcess]=useState([1])
  const handleAddMoreProcess=(a)=>{
     setAddMoreProcess([...addMoreProcess,a])
  }
  const dispatch=useDispatch()
  return (
    <>
  
    <div className='flex flex-col items-start p-[20px] gap-[20px]  boxshadow rounded-[15px] min-h-[30vh]  w-full '>
    

      <p className='text-[#E6C100] text-[14px] font-[700]'>Task RoadMap</p>
       {addMoreProcess.map((x)=>{return(
         <div key={x} className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  w-full '>
          <Process  proccessCount={x}/>
          {addMoreProcess[addMoreProcess.length-1]===x && <button onClick={()=>handleAddMoreProcess(addMoreProcess.length+1)} className=' ml-auto text-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[7px]  boxshadow'>Add More Processes</button>}
        </div> 
      
      )})}
       
   </div>
   </>
  )
}

export default Proccesses