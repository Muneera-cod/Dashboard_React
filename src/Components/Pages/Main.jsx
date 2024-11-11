import React from 'react'
import Navbar from '../ui/Navbar/Navbar'
import Top from '../ui/Topbar/Top'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
       <Navbar/>
       <div className='w-[calc(100%-90px)] ml-[auto] bg-[#141518] min-h-screen'>
          <Top/>
          <Outlet/>
       </div>
    </>
  
  )
}

export default Main