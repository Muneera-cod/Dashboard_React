import React from 'react'
import PracticeHome from './PracticeHome/PracticeHome'
import { useSelector } from 'react-redux'
import StepOnePrimaryAdd from './Step1/StepOnePrimaryAdd'
import StepFinalPracticeAdd from './StepFinal/StepFinalPracticeAdd'
function ManageTask() {
  const view=useSelector((state)=>state.managetasks.setView)
  console.log(view)
  return (
    <div className='flex flex-col p-[20px] gap-[20px] min-w-full'>
        {view === 0 && <PracticeHome/>}
        {view === 1 && <StepOnePrimaryAdd/>}
        {view === 2 && <StepFinalPracticeAdd/>}

    </div>
  )
}

export default ManageTask