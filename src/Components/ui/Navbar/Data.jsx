import { GoHome } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import mentoring from '../../../assets/Images/mentoring.svg';
import meeting from '../../../assets/Images/Meeting.svg'
import logout from '../../../assets/Images/logout.svg'
import employee from '../../../assets/Images/Employee.svg'
export const navbardata=[
    {
        id:1,
        icon: <GoHome className='hover:text-[#1B94F6] w-[24px] h-[24px]'/>
    },
    {
        id:2,
        icon: <BsPersonCircle className='hover:text-[#1B94F6] w-[24px] h-[24px]'/>
    }, 
    {
        id:3,
        icon:<img src={mentoring} className='w-[24px] h-[24px]'></img>
    },
    {
        id:4,
        icon: <img src={meeting} className='w-[24px] h-[24px]'></img>
    }
    ,
    {
        id:5,
        icon: <CiSettings className='hover:text-[#1B94F6] w-[24px] h-[24px]'/>
    }
    ,
    {
        id:6,
        icon: <img src={logout} className='w-[24px] h-[24px]'></img>
    } ,
    {
        id:7,
        icon: <img src={employee} className='w-[24px] h-[24px]'></img>
    }
]