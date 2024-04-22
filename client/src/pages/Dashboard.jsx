import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import { ThemeProvider } from '../components/theme/ThemeProvider';
import Profile from './auth/Profile';


const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');

  // console.log(location);

  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
    // console.log(tabFromUrl);

  },[location.search])

  return (


    <div className='fixed top-0 right-0 bottom-0 left-0 pt-16 lg:pt-24 flex flex-col lg:flex-row w-full'>
      {/* Dashboard Sidebar */}
      <DashboardSidebar />
      {/* Profile */}
      <ThemeProvider>

      {
        tab === "profile" &&  <section className='w-[100vw] h-screen p-4'> <Profile /> </section>
      }
      </ThemeProvider>

    </div>

  )
}

export default Dashboard
