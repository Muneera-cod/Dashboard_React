import {useState} from 'react'
import { useSelector } from 'react-redux'
import { FaRegHourglass } from "react-icons/fa";
import { IconChevronsLeft } from '@tabler/icons-react';
import { makeView } from '../../../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice';
import { useDispatch } from 'react-redux';
import { Data } from '../PracticeHome/Data'
import Overview from './UpdateTaskFormElement/Overview';
import Steps from './UpdateTaskFormElement/Steps';
import Proccesses from './UpdateTaskFormElement/Proccesses';
import { useNavigate } from 'react-router-dom';
function UpdateTask() {
    const view=useSelector((state)=>state.managetasks.setView)
    const id=useSelector((state)=>state.managetasks.setCurDataforUpdate)
    console.log(`view${view}`)
    console.log(`ID${id}`)
    let toUpadteData=Data?.find((x)=>x.id===id)
    const [datatupdate,setDataToUpdate]=useState(toUpadteData)
    console.log(`datatoupdate${datatupdate}`)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
  return (
    <>
      <button className='flex gap-[5px] items-center  text-white text-opacity-50 hover:text-[#1B94F6]' onClick={()=>{dispatch(makeView(1));navigate('/manageTasks/managePracticeTasks')}}>
       <IconChevronsLeft className=' w-[18px] h-[18px]'/>
       <p className='text-[14px]'>back</p>
    </button>
    <div className='flex flex-col items-start p-[20px] gap-[20px]  boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
   <Overview  datatupdate={datatupdate}/>
    <Steps datatupdate={datatupdate}/>
  </div>
  <Proccesses datatupdate={datatupdate}/>
  <button 
      className='min-w-1/12 ml-auto bg-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[10px]  boxshadow'>
        <FaRegHourglass/>Update</button>
  </>
  )
}

export default UpdateTask