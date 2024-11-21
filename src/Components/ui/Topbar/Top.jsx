import React from 'react'
import Header from './Header';
import Topbar from './Topbar';
import Dates from './Dates'
function Top() {
  return (
    <div className='min-w-full overflow-hidden'>
        <Topbar/>
         <Header/>
         <Dates/>
    </div>
  )
}

export default Top