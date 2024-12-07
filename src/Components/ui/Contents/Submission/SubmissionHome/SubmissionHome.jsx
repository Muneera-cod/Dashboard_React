import React ,{useState} from 'react'
import Top from './Top'
import Ongoing from './Ongoing'
import Completed from './Completed'
function SubmissionHome() {
 const [practice,setPractice]=useState([])
 const [category,setCategory]=useState([])

  return (
    <>
    <Top practice={practice} setPractice={setPractice} category={category} setCategory={setCategory}/>
    <Completed practice={practice}  category={category} />
    <Ongoing practice={practice}   category={category}/>
   
    </>
  )
}

export default SubmissionHome