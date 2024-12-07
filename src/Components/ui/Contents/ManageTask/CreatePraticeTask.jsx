import React,{useState} from 'react'
import BasicOverView from './Steps/BasicOverView'
import StepWiseDescription from './Steps/StepWiseDescription'
import { FaRegHourglass } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux'
import { makeView } from '../../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice';
import { addTask } from '../../../../Redux/Slice/reducers/Data/TasksDataSlice';
import StepFinalPracticeAdd from './Processes/StepFinalPracticeAdd';
import { useNavigate } from 'react-router-dom';

function CreatePraticeTask() {
  const [values,setValues]=useState({
    practice_task:'',
    deadline:'',
    category:'',
    bannerImage:[],
    perks:0,
    subcategory:[''],
    task_description:'',
    task_objective:'',
    assesment_overview:'' 
  })
  const [praticeCount,setPracticeCount]=useState(0)
const dispatch=useDispatch() 
const navigate=useNavigate()
const view=useSelector((state)=>state.managetasks.setView)
const tasks=useSelector((state)=>state.tasksData)
const last_id=tasks[tasks.length-1].id

console.log(`view${view}`)
console.log(`last_id${last_id}`)

const saveAndNextFtn=()=>{
  if(values.practice_task && values.category && values.deadline){
  dispatch(makeView(2))
  setValues(values)}
  else{
    window.alert('Please enter Task name , Deadline ,Category')
  }

}

const handleChange=(e)=>{
  setValues({...values,[e.target.name]:e.target.value})
}

const publish=(value)=>{
  const today=new Date()
  const deadline=new Date(value.deadline)
  const day_left=Math.ceil(Math.abs(deadline-today)/(1000 * 60 * 60 * 24))
  dispatch(addTask({id:last_id+1,...value,no_of_processes:praticeCount,no_day_left:day_left}))
  window.alert('Praticed Added successfully')
  
  navigate('/managetasks')
  dispatch(makeView(0))
}
  return (
    <>
    { view === 1 && <div className='flex flex-col items-start p-[20px] gap-[20px]  boxshadow rounded-[15px] min-h-[30vh]  min-w-full '>
     <BasicOverView values={values}  handleChange={handleChange}/>
     <StepWiseDescription/>
   </div>}
   {view === 2 && <StepFinalPracticeAdd setPracticeCount={setPracticeCount} />}
  {view === 1?<button onClick={()=>saveAndNextFtn()}
      className='min-w-1/12 ml-auto bg-[#E6C100] text-black text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'>
        <FaRegHourglass/>Save & Next</button>:
        <button onClick={()=>publish(values)}
      className='min-w-1/12 ml-auto bg-[#E6C100] text-black text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'>
        <FaRegHourglass/>Save & publish</button>}
   </>
  )
}

export default CreatePraticeTask