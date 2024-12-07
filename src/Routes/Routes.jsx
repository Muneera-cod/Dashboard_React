import { createBrowserRouter } from "react-router-dom";
import CreatePraticeTask from "../Components/ui/Contents/ManageTask/CreatePraticeTask";
import ManagePracticeTasks from "../Components/ui/Contents/ManageTask/MangePracticeTasks/ManagePracticeTasks";
import UpdateTask from "../Components/ui/Contents/ManageTask/MangePracticeTasks/UpdateTask";
import { lazy, Suspense } from "react";
import Loading from "../Components/ui/Loading";
import TaskWiseView from "../Components/ui/Contents/Submission/TaskwiseView/TaskWiseView.jsx";
import Selectuser from "../Components/ui/Contents/Submission/TaskwiseView/Selectuser.jsx";
const Main=lazy(()=>import("../Components/Pages/Main"));
const ManageTask=lazy(()=>import("../Components/Pages/subPages/ManageTask.jsx"));
const Submission=lazy(()=>import("../Components/Pages/subPages/Submission.jsx"));
const LeaderBoard=lazy(()=>import("../Components/Pages/subPages/LeaderBoard.jsx"));
const Login=lazy(()=>import("../Components/Pages/Login"))
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Suspense fallback={<Loading/>}><Login/></Suspense>
    },
    {
        path:'/manageTasks',
        element:<Suspense fallback={<Loading/>}><Main/></Suspense>,
        children:[
   
        {
            path:'',
            element:<Suspense fallback={<Loading/>}><ManageTask/></Suspense>,
            children:[
                    {
                        path:'createPraticeTasks',
                        element:<CreatePraticeTask/>
                    },
                    {
                        path:'managePracticeTasks',
                        element:<ManagePracticeTasks/>,
                        children:[
                            {
                                path:'updateTask',
                                element:<UpdateTask/>
                            }
                         ]
                    }  
                   ]
       },
       {
            path:'submissions',
            element:<Suspense fallback={<Loading/>}><Submission/></Suspense>,
            children:[
                    {
                        path:'tasks/:id',
                        element:<TaskWiseView/>,
                        children:[
                            {
                                path:':user_id',
                                element:<Selectuser/>
                            }
                        ]
                    }
                ]
       },
       {
            path:'leaderboard',
            element:<Suspense fallback={<Loading/>}><LeaderBoard/></Suspense>
       }]
 },
 {
    path: '*',
    element: <div>Page Not Found</div>, 
 },
])