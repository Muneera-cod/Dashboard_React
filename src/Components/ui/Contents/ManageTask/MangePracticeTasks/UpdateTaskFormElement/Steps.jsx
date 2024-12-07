import React,{useState} from 'react'
import icon from '../../../../../../assets/Images/yellowshareInfoicon.svg'
function Steps() {
  const [addStep,setAddStep]=useState([1]);
  const handleStep=(a)=>{
        setAddStep([...addStep,a])
  }
  console.log(addStep)
  return (
    <div className='flex flex-col items-start p-[20px] gap-[20px] boxshadow rounded-[15px] min-h-[30vh]  w-full '>
    <p className='text-[#E6C100] text-[12px] font-[700]'>Stepwise Description</p>

     {/* steps   */}
   {addStep.map((x)=>{
    return(
    <div className='flex flex-col gap-[20px] w-full' key={x}>
        <p className='text-[#E6C100] text-[12px] font-[700]'>Step {x}</p>
         <div className='flex flex-col gap-[5px] items-start w-full'>
             <p className='text-white text-[12px] font-[700]'>Step Name</p>
             <div className='md:min-w-[590px] flex px-[20px] py-[10px] gap-[10px] items-center boxshadow rounded-[7px] w-full'>
                <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                <textarea className='text-[#8B8B8B] text-[14px] font-[600] text-justify line-clamp-1 bg-[#141518] w-full'></textarea>
             </div>
         </div>
     
          <div className='flex flex-col gap-[5px] items-start  w-full'>
                <p className='text-white text-[12px] font-[700]'>Description</p>
                <div className='md:min-w-[590px] flex px-[20px] py-[10px] gap-[25px] items-center boxshadow rounded-[7px]  w-full'>
                    <img  src={icon} className='max-w-[20px] max-h-[20px] self-start'/>
                     <textarea className='text-[#8B8B8B] text-[14px] font-[600] text-justify bg-[#141518] w-full'>
                    </textarea>
                </div>
           </div>
        </div>  )})}


         <button onClick={()=>handleStep(addStep.length+1)} className=' mr-auto text-[#E6C100] text-[12px] font-[700] flex items-center justify-center gap-[10px] p-[10px] rounded-[7px]  boxshadow'>Add More Steps Description</button>
     </div>      
  )
}

export default Steps