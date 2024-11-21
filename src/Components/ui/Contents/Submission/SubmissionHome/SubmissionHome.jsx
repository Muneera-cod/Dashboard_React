import React from 'react'
import { useSelector } from 'react-redux'
import Top from './Top'
import Ongoing from './Ongoing'
import Completed from './Completed'
function SubmissionHome() {
    const view=useSelector((state)=>state.managetasks.setView)
    console.log(`view${view}`)
  return (
    <>
    <Top/>
    <Completed/>
    <Ongoing/>
   
    </>
  )
}

export default SubmissionHome