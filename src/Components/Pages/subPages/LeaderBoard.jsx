import React ,{useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { makeView } from '../../../Redux/Slice/reducers/Managetasks/ManageTaskSlice'
import { managetab } from '../../../Redux/Slice/reducers/TabSlice'
import LeaderBoard1 from '../../ui/Contents/Leaderboard/LeaderBoard1'
function LeaderBoard() {
  const dispatch=useDispatch()
  const tab=useSelector((state)=>state.tab)
  const view=useSelector((state)=>state.managetasks.setView)
   
  useEffect(() => {
    dispatch(managetab(3));
    if (location.pathname === "/leaderboard") {
      dispatch(makeView(0));
    } 
   }, [location.pathname]);
  return (
    <>
     {
      tab===3 &&  
      <div className='flex flex-col p-[20px] gap-[20px] min-w-full ' >
      {view===0 && <LeaderBoard1/>}
      {/* {view!==0 &&<Outlet/>} */}
  </div>}

        
    </>  
  )
}

export default LeaderBoard