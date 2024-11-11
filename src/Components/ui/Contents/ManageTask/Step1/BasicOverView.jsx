import React from 'react'
import { BsCollectionPlay } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { TbUpload } from "react-icons/tb";
import icon from '../../../../../assets/Images/darksblueshareInfoicon.svg'
function BasicOverView() {
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
    <p className='text-[#E6C100] text-[12px] font-[700]'>Basic Overview</p>
     <div className='flex flex-wrap content-center items-center gap-[20px]'>
         <div className='flex flex-col gap-[5px] items-start justify-center'>
            <p className='text-white text-[12px] font-[700]'>Category</p>
            <div className='w-[180px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                <BsCollectionPlay  color='#077BD8' className='max-w-[20px] max-h-[20px] '/>
                <p className='text-[#8B8B8B] text-[14px] font-[700]'>Coding</p>
            </div>
          </div>
          <div className='flex flex-col gap-[5px] items-start justify-center flex-1'>
            <p className='text-white text-[12px] font-[700]'>Practice Task Name</p>
            <div className='min-w-[590px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] w-full'>
                <img  src={icon} className='max-w-[20px] max-h-[20px] '/>
                <p className='text-[#8B8B8B] text-[14px] font-[700]'>Deep Live into UI Research</p>
            </div>
          </div>
          <div className='flex flex-col gap-[5px] items-start justify-center'>
            <p className='text-white text-[12px] font-[700]'>Banner Image</p>
            <div className='w-[180px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                <TbUpload  color='#F31919' className='max-w-[20px] max-h-[20px] '/>
                <p className='text-[#8B8B8B] text-[14px] font-[700]'>Sample.jpg</p>
            </div>
          </div>
          <div className='flex flex-col gap-[5px] items-start justify-center'>
            <p className='text-white text-[12px] font-[700]'>Total Practice Perks</p>
            <div className='w-[180px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                <BsCollectionPlay  color='#077BD8' className='max-w-[20px] max-h-[20px] '/>
                <p className='text-[#8B8B8B] text-[14px] font-[700]'>30</p>
            </div>
          </div> 
          <div className='flex flex-col gap-[5px] items-start justify-center'>
            <p className='text-white text-[12px] font-[700]'>Deadline</p>
            <div className='w-[180px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                <BsCollectionPlay  color='#077BD8' className='max-w-[20px] max-h-[20px] '/>
                <p className='text-[#8B8B8B] text-[14px] font-[700]'>28-Aug-2024</p>
            </div>
          </div> 
          <div className='flex  gap-[10px] items-end '>
           <div className='flex flex-col gap-[5px] items-start '>
                <p className='text-white text-[12px] font-[700]'>Sub Categories</p>
                <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                    <BsCollectionPlay  color='#077BD8' className='max-w-[20px] max-h-[20px] '/>
                    <p className='text-[#8B8B8B] text-[14px] font-[700]'>HTML</p>
                </div>
            </div>  
            <div className='flex items-end gap-[10px]'>
               <div className=' flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                    <BsCollectionPlay  color='#077BD8' className='max-w-[20px] max-h-[20px] '/>
                    <p className='text-[#8B8B8B] text-[14px] font-[700]'>CSS</p>
                </div>
            </div>  
            <div className='flex items-end  gap-[10px]  '>
               <div className='flex  py-[10px] gap-[10px] items-center  '>
                   <FaPlus color='#F31919' className='max-w-[20px] max-h-[20px] '/>
                </div>
            </div>  
          </div>        
     </div>
     <div className='flex flex-col gap-[5px] items-start'>
            <p className='text-white text-[12px] font-[700]'>Task Description</p>
            <div className='min-w-[590px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                <p className='text-[#8B8B8B] text-[14px] font-[600] text-justify'>Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript. The UI should display real-time weather information for a user's specified location, including current conditions, hourly and daily forecasts. Implement a location search feature to allow users to easily find weather data for any desired location. Ensure the UI is user-friendly and functions seamlessly across various devices.</p>
            </div>
     </div>
     <div className='flex items-start gap-[20px]'>
           <div className='flex flex-col gap-[5px] items-start'>
                <p className='text-white text-[12px] font-[700]'>Task Objective</p>
                <div className='min-w-[590px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                    <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                    <p className='text-[#8B8B8B] text-[14px] font-[600] text-justify'>Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript. The UI should display real-time weather information for a user's specified location, including current conditions, hourly and daily forecasts. Implement a location search feature to allow users to easily find weather data for any desired location. Ensure the UI is user-friendly and functions seamlessly across various devices.</p>
                </div>
           </div>
           <div className='flex flex-col gap-[5px] items-start'>
                <p className='text-white text-[12px] font-[700]'>Assessment Overview</p>
                <div className='min-w-[590px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                    <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                    <p className='text-[#8B8B8B] text-[14px] font-[600] text-justify'>Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript. The UI should display real-time weather information for a user's specified location, including current conditions, hourly and daily forecasts. Implement a location search feature to allow users to easily find weather data for any desired location. Ensure the UI is user-friendly and functions seamlessly across various devices.</p>
                </div>
           </div>
     </div>      
  </div>
  )
}

export default BasicOverView