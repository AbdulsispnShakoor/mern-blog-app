import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { MdOutlineNightlight } from 'react-icons/md'
import { toggleTheme } from './store/features/themeSlice/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
const App = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state) => state.theme);

  return (
    <main className=''>
      <Header />
      <Outlet />
      <span onClick={() => dispatch(toggleTheme())} className='p-3 fixed bottom-8 right-8 flex items-center border justify-center shadow-lg rounded-full cursor-pointer'>
      {
        theme === 'light' ? <MdDarkMode size={18} /> : <MdLightMode  size={18} />
      }
       
      </span>
    </main>
  )
}

export default App
