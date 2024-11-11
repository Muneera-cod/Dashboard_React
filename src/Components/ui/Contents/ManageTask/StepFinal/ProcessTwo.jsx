import React from 'react'
import icon from '../../../../../assets/Images/blueshareInfoicon.svg'
import icon1 from '../../../../../assets/Images/darksblueshareInfoicon.svg'
import { IoLinkSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
function ProcessTwo() {
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
    <p className='text-[#1B94F6] text-[12px] font-[700]'>Process 1</p>
    
     <div className='flex flex-col gap-[5px] items-start w-full'>
        <p className='text-white text-[12px] font-[700]'>Process Name</p>
            <div className='min-w-[590px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] w-full'>
                <img  src={icon1} className='max-w-[20px] max-h-[20px] self-start'/>
                <p className='text-[#8B8B8B] text-[14px] font-[600] text-justify line-clamp-1'>Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript..</p>
            </div>
     </div>
     
           <div className='flex flex-col gap-[5px] items-start  w-full'>
                <p className='text-white text-[12px] font-[700]'>Task Description</p>
                <div className='min-w-[590px] flex px-[20px] py-[10px] gap-[25px] items-center boxshadow rounded-[7px]  w-full'>
                    <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                     <ul className='text-[#8B8B8B] text-[14px] font-[600] text-justify list-disc'>
                       
                          <li>Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.</li>
                          <li> The UI should display real-time weather information for a user's specified location, including current conditions, hourly and daily forecasts.</li>
                          <li>Implement a location search feature to allow users to easily find weather data for any desired location. Ensure the UI is user-friendly and functions seamlessly across various devices.</li>
                    </ul>
                </div>
           </div>
           <div className='flex items-end gap-[10px]'>
                <div className='flex flex-col gap-[5px] items-start'>
                    <p className='text-white text-[12px] font-[700]'>URL Field Required</p>
                    <div className='flex gap-[5px] items-start'>
                        <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                            <IoLinkSharp  color='#414ECA' className='w-[20px] h-[20px] '/>
                            <p className='text-[#8B8B8B] text-[14px] font-[700]'>Miro Board Attachment</p>
                         </div>
                         <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                            <IoLinkSharp  color='#414ECA' className='min-w-[20px] min-h-[20px] '/>
                         </div>  
                    </div>
                </div>
                <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                            <IoLinkSharp  color='#414ECA' className='w-[20px] h-[20px] '/>
                            <p className='text-[#8B8B8B] text-[14px] font-[700]'>Notion Workplace</p>
                </div>
                <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                            <IoLinkSharp  color='#414ECA' className='min-w-[20px] min-h-[20px] '/>
                </div> 
                <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                            <IoLinkSharp  color='#414ECA' className='w-[20px] h-[20px] '/>
                            <p className='text-[#8B8B8B] text-[14px] font-[700]'>Figma Design File</p>
                </div>
                <div className='flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]'>
                            <IoLinkSharp  color='#414ECA' className='min-w-[20px] min-h-[20px] '/>
                </div> 
                <div className='flex items-end  gap-[10px]  '>
               <div className='flex  py-[10px] gap-[10px] items-center  '>
                   <FaPlus color='#F31919' className='max-w-[20px] max-h-[20px] '/>
                </div>
            </div>  
           </div>
           <button  className=' ml-auto text-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[7px]  boxshadow'>Add More Processes</button>

        
     </div>   
  )
}

export default ProcessTwo