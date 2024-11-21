import React, { useState } from 'react'
import Process from './Process';
function StepFinalPracticeAdd() {
  const[addMorePratice,setAddMorePratices]=useState([1])
  const handleAddMorePractice=(a)=>{
     setAddMorePratices([...addMorePratice,a])
  }
  return (
    <>
    <div className='flex flex-col items-start p-[20px] gap-[20px]  boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
      <p className='text-[#E6C100] text-[14px] font-[700]'>Task RoadMap</p>
       {addMorePratice.map((x)=>{return(
         <div key={x} className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
          <Process  proccessCount={x}/>
          {addMorePratice[addMorePratice.length-1]===x && <button onClick={()=>handleAddMorePractice(addMorePratice.length+1)} className=' ml-auto text-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[7px]  boxshadow'>Add More Processes</button>}
        </div> 
      
      )})}
       
   </div>
   {/* <button className='min-w-1/12 ml-auto bg-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'><FaRegHourglass/>Save & Next</button> */}
   </>
  )
}

export default StepFinalPracticeAdd