import React from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate=useNavigate()
  return (
    <div className='min-h-screen flex flex-col gap-4 items-center justify-center'>
     
      <div className='flex flex-col gap-2 w-1/4 p-10'>
         <input type='text' className='p-2 rounded-md text-black w-full'/>
         <input  type='text' className='p-2 rounded-md text-black w-full'/>
      </div>
      <button onClick={()=>navigate('/manageTasks')} className='rounded-md bg-[#451a03] px-[20px] py-[10px] font-[700] text-[#e7e5e4]'>Login</button>
    </div>
  )
}

export default Login