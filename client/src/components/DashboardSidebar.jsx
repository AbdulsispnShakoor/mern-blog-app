import React from 'react'
import { ThemeProvider } from './theme/ThemeProvider';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";

const DashboardSidebar = () => {
  return (
    <ThemeProvider>
      <div className='shadow-xl shadow-slate-200 py-8 lg:py-16 min-h-full z-0 px-4 lg:w-[15vw] flex items-start justify-between lg:flex-col gap-2'>
       <Link to={'/dashboard?tab=profile'}>
        <button className='p-2 px-4 border rounded flex gap-2 items-center justify-center'><CgProfile size={24}/> Profile</button>
       </Link> 
        <button className='p-2 px-4 border rounded flex gap-2 items-center justify-center'><AiOutlineLogout size={24}/>Log Out</button>
      </div>
    </ThemeProvider>
  )
}

export default DashboardSidebar;
