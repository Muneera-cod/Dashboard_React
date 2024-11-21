import { createBrowserRouter } from "react-router-dom";
import CreatePraticeTask from "../Components/ui/Contents/ManageTask/CreatePraticeTask";
import StepFinalPracticeAdd from "../Components/ui/Contents/ManageTask/Processes/StepFinalPracticeAdd";
import ManagePracticeTasks from "../Components/ui/Contents/ManageTask/MangePracticeTasks/ManagePracticeTasks";
import UpdateTask from "../Components/ui/Contents/ManageTask/MangePracticeTasks/UpdateTask";
import { lazy, Suspense } from "react";
import Loading from "../Components/ui/Loading";
import TaskWiseView from "../Components/ui/Contents/Submission/TaskwiseView/TaskWiseView";
const Main=lazy(()=>import("../Components/Pages/Main"));
const ManageTask=lazy(()=>import("../Components/Pages/subPages/ManageTask"));
const Submission=lazy(()=>import("../Components/Pages/subPages/Submission"));
const LeaderBoard=lazy(()=>import("../Components/ui/Contents/Leaderboard/LeaderBoard"));

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Suspense fallback={<Loading/>}> <Main/></Suspense>
       ,
        children:[
            {
                path:'manageTasks',
                element:<Suspense fallback={<Loading/>}><ManageTask/></Suspense>,
                children:[
                    {
                        path:'steps',
                        element:<CreatePraticeTask/>      
                       ,children:[
                        {
                            path:'processess',
                            element:<StepFinalPracticeAdd/>
                        }
                                ]
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
                        path:'taskWiseView',
                        element:<TaskWiseView/>
                    }
                ]
            },
            {
                path:'leaderboard',
                element:<Suspense fallback={<Loading/>}><LeaderBoard/></Suspense>
            }
        ]
    }
])