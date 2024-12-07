import React,{useState} from 'react'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useSelector } from 'react-redux'
function Top({practice,setPractice,category,setCategory}) {
  const Data=useSelector((state)=>state.tasksData)
  const [open,setOpen]=useState(0)
  
  const handlePractice=(pract)=>{
     let selected=Data.filter((x)=>x.practice_task===pract)
     setPractice(selected)
  }
  const handleCategory=(cat)=>{
    let selected=Data.filter((x)=>x.category===cat)
    setCategory(selected)
 }
 
 let categories=[...new Set(Data.map((x)=>x.category))]
 console.log('catt',categories)
 console.log('cattstate',category)

 console.log('praa',practice)
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px]   min-w-full sm:min-h-[100px] md:min-h-[80px]   overflow-auto'>
    <div className='flex items-center justify-between min-w-full'>
        <div className='flex  items-center gap-[20px] w-full'>
             {/*<button className='flex justifiy-center items-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
                <IconChevronDown  className='max-w-[15px] max-h-[15px] text-[#34A853]'/>
                <p className='text-[#34A853] text-[12px] font-[700]'>Recent</p>
            </button>
            
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] rounded-[10px] boxshadow'>
                <p className='text-[#8B8B8B] text-[12px] font-[700]'>Sort</p>
                <IconArrowsUpDown className='w-[20px] h-[20px] text-[#F31919]'/>
            </button> */}
            {/* <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] rounded-[10px] boxshadow'>
                 <p className='text-white text-[12px] font-[700]'>Status</p>
                 <IconChevronDown className='w-[20px] h-[20px] text-white'/>
            </button>
            <button className='flex  items-center justifiy-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
            <IconChevronDown  className='max-w-[15px] max-h-[15px] text-white'/>
            <p className='text-white text-[12px] font-[700]'>Update</p>
            </button> */}
            <div className='flex flex-wrap absolute top-[200px]  w-full'>
             <div className='flex flex-col z-10 text-white text-[12px] font-[700] items-center justifiy-center px-[15px] py-[10px] gap-[15px] boxshadowYellow rounded-[10px] absolute bg-[#141518] w-[240px] '>
               <div className='flex  items-start gap-[10px]    w-full max-h-[20px]  overflow-hidden' onClick={()=>{open===0?setOpen(1):setOpen(0)}}>
                  {open===1 ? <IconChevronUp className='max-w-[15px] max-h-[15px] text-white'/>:<IconChevronDown  className='max-w-[15px] max-h-[15px] text-white'/>}
                   {practice.length!==0?<p >{practice?.map((x)=>x.practice_task)}</p>:<p className='text-white text-[14px] font-[700]'>Pratice</p>}
               </div>
                {open===1 && <div className='flex flex-col  ' onClick={()=>{setOpen(0)}}> 
                   {Data.map((x)=><p key={x.id} className=' py-[10px]' onClick={()=>{handlePractice(x.practice_task)}}>{x.practice_task}</p>)}
                </div>}
             </div>
              <div className='flex flex-col text-white text-[12px] font-[700] items-center justifiy-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px] absolute bg-[#141518] left-[250px]'>
               <div className='flex  items-center justifiy-center  gap-[10px]' onClick={()=>{open===0?setOpen(2):setOpen(0)}}>
                   {open===2 ? <IconChevronUp className='max-w-[15px] max-h-[15px] text-white'/>:<IconChevronDown  className='max-w-[15px] max-h-[15px] text-white'/>}
                   {category.length!==0?<p className=''>{category?.find((x)=>x.category).category}</p>:<p className='text-white text-[14px] font-[700]'>Category</p>}
               </div>
               {open===2 && <div className='flex flex-col text-[10px]' onClick={()=>{setOpen(0)}}> 
                   {categories?.map((x)=><p className='px-[20px] py-[10px]' onClick={()=>{handleCategory(x)}}>{x}</p>)}
               </div>}

            </div>
            </div>
            {/* <button className='flex  items-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
            <IconChevronDown  className='max-w-[15px] max-h-[15px] text-white'/>
            <p className='text-white text-[12px] font-[700]'>Sub category</p>
            </button> */}
           
            <button className='flex  items-center justifiy-center  px-[20px] py-[10px] gap-[10px] rounded-[10px] absolute sm:top-[240px] md:top-[200px] right-4' onClick={()=>{setPractice([]);setOpen(0)}}>
              <IconChevronDown className='w-[20px] h-[20px] text-[#8B8B8B]'/>
              <p className='text-[#8B8B8B] text-[12px] font-[700]'>See All</p>
            </button>
        </div>
       {/* <button  title='Task Wise View' className='flex justifiy-center items-center px-[20px] py-[10px] gap-[10px] boxshadowYellow rounded-[10px]'>
         <p className='text-[#8B8B8B] text-[12px] font-[700]'>Tasks Wise View</p>
        </button> */}
    </div>
    </div>
  )
}

export default Top