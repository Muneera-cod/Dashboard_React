import React from 'react'
import { MdOutlineSegment } from "react-icons/md";
import { IconAdjustmentsHorizontal,IconArrowsUpDown,IconTriangleSquareCircleFilled } from '@tabler/icons-react';    
function TopPart() {
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px]   min-w-full   overflow-auto'>
    <div className='flex items-start justify-between min-w-full'>
        <div className='flex justifiy-center items-center gap-[20px] sm:min-w-full md:min-w-fit'>
             <button className='flex justifiy-center items-center p-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
                <IconTriangleSquareCircleFilled  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                <p className='text-[#34A853] text-[12px] font-[700]'>Ongoing</p>
            </button>
            <button className='flex justifiy-center items-center p-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
            <IconTriangleSquareCircleFilled  className='max-w-[15px] max-h-[15px] text-[#E6C100]'/>
            <p className='text-[#E6C100] text-[12px] font-[700]'>Completed</p>
            </button>
            <button className='flex p-[10px] gap-[10px] rounded-[10px]'>
            <MdOutlineSegment className='w-[20px] h-[20px] text-[#8B8B8B]'/>
            <p className='text-white text-[12px] font-[700]'>See All</p>
            </button>
        </div>
        <div className='flex justifiy-center items-center items-center gap-[20px]'>
            <button className='flex p-[10px] gap-[10px] rounded-[10px] boxshadow'>
                 <p className='text-[#8B8B8B] text-[12px] font-[700]'>Filter</p>
                 <IconAdjustmentsHorizontal className='w-[20px] h-[20px] text-[#F31919]'/>
            </button>
            <button className='flex justifiy-center items-center p-[10px] gap-[10px] rounded-[10px] boxshadow'>
                <p className='text-[#8B8B8B] text-[12px] font-[700]'>Sort</p>
                <IconArrowsUpDown className='w-[20px] h-[20px] text-[#F31919]'/>
            </button>
        </div>
    </div>
    </div>
  )
}

export default TopPart