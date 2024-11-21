import React from 'react'
import { IconChevronDown,IconArrowsUpDown } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import { makeView } from '../../../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice'
import { useDispatch } from 'react-redux'
function Top() {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleTaskWiseView=()=>{
    navigate('taskWiseView')
    dispatch(makeView(1))
  }
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px]   min-w-full   overflow-auto'>
    <div className='flex items-center justify-between min-w-full'>
        <div className='flex items-center gap-[20px] sm:min-w-full md:min-w-fit'>
             <button className='flex justifiy-center items-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
                <IconChevronDown  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                <p className='text-[#34A853] text-[12px] font-[700]'>Recent</p>
            </button>
            
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] rounded-[10px] boxshadow'>
                <p className='text-[#8B8B8B] text-[12px] font-[700]'>Sort</p>
                <IconArrowsUpDown className='w-[20px] h-[20px] text-[#F31919]'/>
            </button>
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] rounded-[10px] boxshadow'>
                 <p className='text-white text-[12px] font-[700]'>Status</p>
                 <IconChevronDown className='w-[20px] h-[20px] text-white'/>
            </button>
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
            <IconChevronDown  className='max-w-[15px] max-h-[15px] text-white'/>
            <p className='text-white text-[12px] font-[700]'>Update</p>
            </button>
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
            <IconChevronDown  className='max-w-[15px] max-h-[15px] text-white'/>
            <p className='text-white text-[12px] font-[700]'>Pratice</p>
            </button>
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
            <IconChevronDown  className='max-w-[15px] max-h-[15px] text-white'/>
            <p className='text-white text-[12px] font-[700]'>Category</p>
            </button>
            <button className='flex  items-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
            <IconChevronDown  className='max-w-[15px] max-h-[15px] text-white'/>
            <p className='text-white text-[12px] font-[700]'>Sub category</p>
            </button>
           
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] rounded-[10px]'>
            <IconChevronDown className='w-[20px] h-[20px] text-[#8B8B8B]'/>
            <p className='text-[#8B8B8B] text-[12px] font-[700]'>See All</p>
            </button>
        </div>
       <button onClick={()=>handleTaskWiseView()} title='Task Wise View' className='flex justifiy-center items-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
         <p className='text-[#8B8B8B] text-[12px] font-[700]'>Tasks Wise View</p>
        </button>
    </div>
    </div>
  )
}

export default Top