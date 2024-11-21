import React from 'react'
import BasicOverView from './Steps/BasicOverView'
import StepWiseDescription from './Steps/StepWiseDescription'
import { FaRegHourglass } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux'
import { makeView } from '../../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice';
import { Outlet, useNavigate } from 'react-router-dom';
import StepFinalPracticeAdd from './Processes/StepFinalPracticeAdd';
import { useLocation } from 'react-router-dom';
function CreatePraticeTask() {
 const navigate=useNavigate()
  const dispatch=useDispatch()
  const location=useLocation()
  const view=useSelector((state)=>state.managetasks.setView)
console.log(`view${view}`)

const saveAndNextFtn=()=>{
  dispatch(makeView(2))
  navigate('processess')
}

  return (
    <>
    { view === 1 && <div className='flex flex-col items-start p-[20px] gap-[20px]  boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
     <BasicOverView/>
     <StepWiseDescription/>
   </div>}
   {view === 2 && <StepFinalPracticeAdd/>}
   <button onClick={()=>saveAndNextFtn()}
      className='min-w-1/12 ml-auto bg-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'>
        <FaRegHourglass/>Save & Next</button>
   </>
  )
}

export default CreatePraticeTask