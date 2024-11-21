import React from 'react'
import { IconChevronDown } from '@tabler/icons-react'

function Top() {
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px]   min-w-full   overflow-auto'>
    <div className='flex items-center justify-between min-w-full'>
        <div className='flex items-center gap-[20px] sm:min-w-full md:min-w-fit'>
             <select className='flex justifiy-center items-center px-[20px] py-[10px]  gap-[10px] boxshadowYellow rounded-[10px] text-white bg-[#141518]'>
                <img src={icon}  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                <option className='text-white text-[12px] font-[700] mx-[10px]' value=''>Roadmap to UI/UX</option>
             </select> 
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] rounded-[10px] boxshadow'>
                 <p className='text-white text-[12px] font-[700]'>Top submissions</p>
                 <IconChevronDown className='w-[20px] h-[20px] text-white'/>
            </button> 
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] rounded-[10px]'>
            <IconChevronDown className='w-[20px] h-[20px] text-[#8B8B8B]'/>
            <p className='text-[#8B8B8B] text-[12px] font-[700]'>See All</p>
            </button>
        </div>
      
    </div>
    </div>
  )
}

export default Top