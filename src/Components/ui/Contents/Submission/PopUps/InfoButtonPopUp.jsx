import React from 'react'
function InfoButtonPopUp({handlePopUp}) {
  return (
    <div className='fixed z-10 top-[50%] left-[50%]  -translate-y-1/2 -translate-x-1/2 bg-[#141518] boxshadow rounded-[30px] flex flex-col max-w-[682px] sm:px-[50px] md:px-[100px] sm:py-[25px] md:py-[50px] items-center gap-[40px]'>
    <div className='flex flex-col gap-[20px] items-center justiy-center'>
      <h1 className='text-[16px] font-[700] text-[#1B94F6]'>Information</h1>
      <div className='w-[638px] px-[20px] py-[10px] flex gap-[10px] justify-center items-end boxshadow rounded-[20px]'>
          <ul className='list-disc mx-[20px] my-[10px] text-[#8B8B8B] text-[14px] font-[700] '>
            <li>Create a visually appealing and responsive user interface for a weather application using HTML, CSS, and JavaScript.</li>
            <li> The UI should display real-time weather information for a user's specified location, including current conditions, hourly and daily forecasts.</li>
            <li>Implement a location search feature to allow users to easily find weather data for any desired location. Ensure the UI is user-friendly and functions seamlessly across various devices.</li>
          </ul>
      </div>
     
    </div>
    <button className='w-[138px] flex  text-[12px] font-[700] px-[20px] py-[10px] items-center justify-center text-white boxshadow rounded-[10px]' onClick={()=>{handlePopUp(0)}}>Close</button>

 </div>
  )
}

export default InfoButtonPopUp