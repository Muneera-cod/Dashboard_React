import React, { useEffect, useState } from 'react'
import { LuCalendarDays } from "react-icons/lu";
import { useSelector,useDispatch } from 'react-redux';
import { managetab } from '../../../Redux/Slice/reducers/TabSlice';
import { makeView ,createTaskHeader} from '../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice';
import { useNavigate } from 'react-router-dom';
function Dates() {
    const currtab=useSelector((state)=>state.tab)
    const arraytab=[{title:'Manage Practice Tasks',nav:'/manageTasks',color:'#F31919',tab:1},{title:'Submissions',nav:'/manageTasks/submissions',color:'#E6C100',tab:2},{title:'LeaderBoard',nav:'/manageTasks/leaderboard',color:'#34A853',tab:3}]
    const [tabArray,setTabArray]=useState(arraytab)
    const handleOpacity=(tab)=>currtab===tab?true:null
       
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleArray=(tab)=>{
       let currobj=arraytab.find((x)=>x.tab===tab)
       arraytab.splice(arraytab.indexOf(currobj),1)
      arraytab.unshift(currobj)
       setTabArray(arraytab)
    } 
    
   
    const handleTab=(action1,action2,action3,navPath)=>{
        dispatch(action1)
        dispatch(action2)
        dispatch(action3)
        navigate(navPath)
        
    }
    useEffect(()=>{
       
      currtab?handleArray(currtab):null
      
    },[currtab])
 
  console.log('curtab',currtab)
  console.log('arraytab',tabArray)
  return (
    <div className='flex py-[15px] sm:px-[5px] md:px-[20px] sm:gap-[10px] md:gap-[20px] items-center border-bottomSecond min-w-full'>
         {tabArray.map((x,index)=>{return(
         <div className={`flex items-center min-w-fit  sm:px-[2.5px] md:px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow ${(handleOpacity(x.tab)) ? '' : 'opacity-30'}`} onClick={()=>{handleTab(managetab(x.tab),makeView(0),createTaskHeader(0),x.nav);}}>
            <LuCalendarDays color={x.color} className='w-[20px] h-[20px]'/>
            <p className='text-white text-[12px] font-[700]'>{x.title}</p>
         </div>)})}
         {/* <div className={`flex  items-center  sm:px-[2.5px] md:px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow ${(handleOpacity(2)) ? '' : 'opacity-30'}`} onClick={()=>{handleTab(managetab(2),makeView(0),createTaskHeader(0),'/manageTasks/submissions');}}>
            <LuCalendarDays color='#E6C100' className='w-[20px] h-[20px]'/>
            <p className='text-white text-[12px] font-[700]'></p>
         </div>
         <div className={`flex items-center sm:px-[2.5px] md:px-[10px] py-[5px] gap-[5px] rounded-[7px] bg-[#23262B] opacity-100 boxshadow ${(handleOpacity(3)) ? '' : 'opacity-30'}`} onClick={()=>{handleTab(managetab(3),makeView(0),createTaskHeader(0),'/manageTasks/leaderboard');}}>
            <LuCalendarDays color='#34A853' className='w-[20px] h-[20px]'/>
            <p className='text-white text-[12px] font-[700]'></p>
         </div> */}
    </div>
  )
}

export default Dates