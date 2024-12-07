import React, { useState } from 'react'
import { BsCollectionPlay } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { TbUpload } from "react-icons/tb";
import icon from '../../../../../../assets/Images/darksblueshareInfoicon.svg'
function Overview({datatupdate}) {
    const [subCategories,setSubCategories]=useState([1])
    const handleSubCategories=(a)=>{
      a<=5?setSubCategories([...subCategories,a]):null
    }
    // id:11,
    //     practice_task:'Roadmap to be a UIUX Designer',
    //     deadline:'10 Sept 2024',
    //     category:'coding',
    //     no_of_processes:5,
    //     perks:35,
    //     updated_date:'17-07-2024',
    //     no_day_left:20
    console.log(datatupdate)
  return (
    <form className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  w-full '>
    <p className='text-[#E6C100] text-[12px] font-[700]'>Basic Overview</p>
     <div className='flex flex-wrap content-center items-center gap-[20px]'>
         <div className='flex flex-col gap-[5px] items-start justify-center '>
            <p className='text-white text-[12px] font-[700]'>Category</p>
            <div className='w-[180px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] '>
                <BsCollectionPlay  color='#077BD8' className='max-w-[20px] max-h-[20px] '/>
                 {/* Category input */}
                <input type='text' name="category" value={datatupdate.category}  className='text-[#8B8B8B] text-[14px] font-[700] bg-[#141518] w-full' placeholder='Eg: Coding' required></input>
            </div>
          </div>
          <div className='flex flex-col gap-[5px] items-start justify-center w-full'>
            <p className='text-white text-[12px] font-[700]'>Practice Task Name</p>
            <div className='md:min-w-[590px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] w-full'>
                <img  src={icon} className='max-w-[20px] max-h-[20px] '/>
                 {/* Task Name input */}
                <input type='text' name='practice_task' value={datatupdate.practice_task}  className='text-[#8B8B8B] text-[14px] font-[700]  bg-[#141518] w-full'  placeholder='Eg: Deep Live into UI Research' required></input>
            </div>
          </div>
          <div className='flex flex-col gap-[5px] items-start justify-center'>
            <p className='text-white text-[12px] font-[700]'>Banner Image</p>
            <div className='w-[180px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                <TbUpload  color='#F31919' className='max-w-[20px] max-h-[20px] '/>
                  {/* Banner Image  input*/}
                <input type='file' name='bannerImage'   placeholder='No file' className='text-[#8B8B8B] text-[14px] font-[700] bg-[#141518] w-full' ></input>
            </div>
          </div>
          <div className='flex flex-col gap-[5px] items-start justify-center'>
            <p className='text-white text-[12px] font-[700]'>Total Practice Perks</p>
            <div className='w-[180px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                <BsCollectionPlay  color='#077BD8' className='max-w-[20px] max-h-[20px] '/>
                 {/* Total Practice Perks input */}
                <input type='number' name="perks" value={datatupdate.perks}   placeholder='Eg: 30' className='text-[#8B8B8B] text-[14px] font-[700] bg-[#141518] w-full' required></input>
            </div>
          </div> 
          <div className='flex flex-col gap-[5px] items-start justify-center'>
            <p className='text-white text-[12px] font-[700]'>Deadline</p>
            <div className='w-[180px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                <BsCollectionPlay  color='#077BD8' className='max-w-[20px] max-h-[20px] '/>
                <input type='date' name='deadline' value={datatupdate.deadline}  placeholder='28-Aug-2024' className='text-[#8B8B8B] text-[14px] font-[700] bg-[#141518] w-full' required></input>
            </div>
          </div> 
          {/* subCategories  */}
          <div className='flex flex-col  gap-[10px] items-start '>
          <p className='text-white text-[12px] font-[700]'>Sub Categories</p>
           <div className='flex sm:flex-col md:flex-row  gap-[10px] items-center '>
                {subCategories.map((x)=>{return(
                <div className='flex  px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] md:w-1/2' key={x}>
                    <BsCollectionPlay  color='#077BD8' className='max-w-[20px] max-h-[20px] '/>
                      {/* Subcategories input*/}
                    <input type='text' name='subcategory' placeholder='eg: HTML' className='text-[#8B8B8B] text-[14px] font-[700] bg-[#141518] w-full' ></input>
                </div>)})}
                {subCategories.length<5 && (<div className='flex items-end  gap-[10px] ' onClick={()=>handleSubCategories(subCategories.length+1)}>
                  <div className='flex  py-[10px] gap-[10px] items-center  '>
                      <FaPlus color='#F31919' className='max-w-[20px] max-h-[20px] ' stroke={2}/>
                    </div>
                </div>)}   
            </div>  
          </div>  
          {/* ///       */}
     </div>
     <div className='flex flex-col gap-[5px] items-start min-w-full'>
            <p className='text-white text-[12px] font-[700]'>Task Description</p>
            <div className='min-w-full flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                {/* Task Description  input*/}
                <textarea  name='task_description' className='text-[#8B8B8B] text-[14px] font-[600] text-justify bg-[#141518] w-full'></textarea>
            </div>
     </div>
     <div className='flex sm:flex-col md:flex-row items-start gap-[20px] w-full'>
           <div className='sm:w-full md:basis-1/2 flex flex-col gap-[5px] items-start '>
                <p className='text-white text-[12px] font-[700]'>Task Objective</p>
                <div className=' flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] w-full'>
                    <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                    {/* Task Objective  input*/}
                    <textarea name='task_objective'  className='text-[#8B8B8B] text-[14px] font-[600] text-justify bg-[#141518] w-full'></textarea>
                </div>
           </div>
           <div className='sm:w-full md:basis-1/2 flex flex-col gap-[5px] items-start '>
                <p className='text-white text-[12px] font-[700]'>Assessment Overview</p>
                <div className=' flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] w-full'>
                    <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                         {/*Assessment Overview  input*/}
                       <textarea name='assesment_overview' className='text-[#8B8B8B] text-[14px] font-[600] text-justify bg-[#141518] w-full'></textarea>
                </div>
           </div>
     </div>      
  </form>
  )
}

export default Overview