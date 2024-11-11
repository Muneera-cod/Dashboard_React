import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Pages/Main";
import ManageTask from "../Components/ui/Contents/ManageTask/ManageTask";
import Submission from "../Components/ui/Contents/Submission/Submission";
import LeaderBoard from "../Components/ui/Contents/Leaderboard/LeaderBoard";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'manageTasks',
                element:<ManageTask/>
            },
            {
                path:'submissions',
                element:<Submission/>
            },{
                path:'leaderboard',
                element:<LeaderBoard/>
            }
        ]
    }
])