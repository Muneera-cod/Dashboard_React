import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { FaRegHourglass } from "react-icons/fa";
import BasicOverView from '../Steps/BasicOverView'
import StepWiseDescription from '../Steps/StepWiseDescription'
import StepFinalPracticeAdd from '../Processes/StepFinalPracticeAdd'
import { Data } from '../PracticeHome/Data'
function UpdateTask() {
    const view=useSelector((state)=>state.managetasks.setView)
    const id=useSelector((state)=>state.managetasks.setCurDataforUpdate)
    console.log(`view${view}`)
    console.log(`ID${id}`)
    let toUpadteData=Data?.filter((x)=>x.id===id)
    const [datatupdate,setDataToUpdate]=useState(toUpadteData)
    console.log(`datatoupdate${datatupdate}`)
  return (
    <>
    <div className='flex flex-col items-start p-[20px] gap-[20px]  boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
    <BasicOverView datatupdate={datatupdate}/>
    <StepWiseDescription datatupdate={datatupdate}/>
  </div>
  <StepFinalPracticeAdd datatupdate={datatupdate}/>
  <button onClick={()=>saveAndNextFtn()}
      className='min-w-1/12 ml-auto bg-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'>
        <FaRegHourglass/>Update</button>
  </>
  )
}

export default UpdateTask