import React from 'react'
import BasicOverView from './BasicOverView'
import StepWiseDescription from './StepWiseDescription'
import { FaRegHourglass } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { createtaskstep2 } from '../../../../../Redux/Slice/ManageTaskSlice';
function StepOnePrimaryAdd() {
 
  const dispatch=useDispatch()
  return (
    <>
    <div className='flex flex-col items-start p-[20px] gap-[20px]  boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
     <BasicOverView/>
     <StepWiseDescription/>
   </div>
   <button onClick={()=>dispatch(createtaskstep2())}
       className='w-1/12 ml-auto bg-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'>
        <FaRegHourglass/>Save & Next</button>
   </>
  )
}

export default StepOnePrimaryAdd