import React from 'react'
import icon from '../../../../../assets/Images/yellowshareInfoicon.svg'
function StepWiseDescription() {
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  min-w-full overflow-auto'>
    <p className='text-[#E6C100] text-[12px] font-[700]'>Stepwise Description</p>
     <p className='text-[#E6C100] text-[12px] font-[700]'>Step 1</p>
     <div className='flex flex-col gap-[5px] items-start w-full'>
            <p className='text-white text-[12px] font-[700]'>Task Description</p>
            <div className='min-w-[590px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] w-full'>
                <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                <p className='text-[#8B8B8B] text-[14px] font-[700] text-justify line-clamp-1'>Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript..</p>
            </div>
     </div>
     
           <div className='flex flex-col gap-[5px] items-start  w-full'>
                <p className='text-white text-[12px] font-[700]'>Description</p>
                <div className='min-w-[590px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px]  w-full'>
                    <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                     <ul className='text-[#8B8B8B] text-[14px] font-[700] text-justify'>
                       
                          <li>Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.</li>
                          <li> The UI should display real-time weather information for a user's specified location, including current conditions, hourly and daily forecasts.</li>
                          <li>Implement a location search feature to allow users to easily find weather data for any desired location. Ensure the UI is user-friendly and functions seamlessly across various devices.</li>
                    </ul>
                </div>
           </div>
        
     </div>      
  
  )
}

export default StepWiseDescription