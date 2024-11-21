import React from 'react'
import Navbar from '../ui/Navbar/Navbar'
import Top from '../ui/Topbar/Top'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div className='min-w-full sm:mb-[90px] md:mb-0'>
       <Navbar/>
       <div className='sm:max-w-full md:max-w-[calc(100%-90px)] sm:min-w-full md:min-w-[calc(100%-90px)]   ml-[auto] bg-[#141518] sm:min-h-fit md:min-h-screen'>
          <Top/>
          <Outlet/>
       </div>
    </div>
  
  )
}

export default Main