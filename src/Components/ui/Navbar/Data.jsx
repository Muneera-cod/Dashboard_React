import { BsPersonCircle } from "react-icons/bs";
import mentoring from '../../../assets/Images/mentoring.svg';
import meeting from '../../../assets/Images/Meeting.svg'
import {IconLogout,IconSettings,IconSmartHome,IconUsers} from '@tabler/icons-react'
export const navbardata=[
    {
        id:1,
        icon: <IconSmartHome className='hover:text-[#1B94F6] w-[24px] h-[24px]'/>,
        link:'/',
        tile:'home'
    },
    {
        id:2,
        icon: <BsPersonCircle className='hover:text-[#1B94F6] w-[24px] h-[24px]'/>,
        link:'',
        tile:'user'
    }, 
    {
        id:3,
        icon:<img src={mentoring} className='hover:text-[#1B94F6] w-[24px] h-[24px]'></img>,
        link:'',
        tile:'Mentoring'
    },
    {
        id:4,
        icon: <img src={meeting} className='hover:text-[#1B94F6] w-[24px] h-[24px]'></img>,
        link:'manageTasks',
        tile:'Manage Tasks'
    }
    ,
    {
        id:5,
        icon: <IconSettings className='hover:text-[#1B94F6] w-[24px] h-[24px]'/>,
        link:'',
        tile:'setting'
    }
    ,
    {
        id:6,
        icon: <IconLogout className='hover:text-[#1B94F6] w-[24px] h-[24px]'/>,
        link:'',
        tile:'LogOut'
    } ,
    {
        id:7,
        icon: <IconUsers className='hover:text-[#1B94F6] w-[24px] h-[24px]'/>,
        link:'',
        tile:'Employee'
    }
]