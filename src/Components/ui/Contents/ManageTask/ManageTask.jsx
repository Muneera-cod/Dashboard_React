import React from 'react'
import PracticeHome from './PracticeHome/PracticeHome'
import { useSelector } from 'react-redux'
import StepOnePrimaryAdd from './Step1/StepOnePrimaryAdd'
import { useLocation } from 'react-router-dom'
function ManageTask() {
  const view=useSelector((state)=>state.managetasks)
  const location=useLocation()
  
  return (
    <div className='flex flex-col p-[20px] gap-[20px] min-w-full'>
        {view === 0 && <PracticeHome/>}
        {view === 1 && <StepOnePrimaryAdd/>}

    </div>
  )
}

export default ManageTask