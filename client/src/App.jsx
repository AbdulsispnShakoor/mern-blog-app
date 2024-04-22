import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { toggleTheme } from './store/features/themeSlice/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const App = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state) => state.theme);

  return (
    <main>
      <Header />
      <Outlet />
      <span onClick={() => dispatch(toggleTheme())} className='p-3 fixed z-[999] bottom-8 right-8 flex items-center border justify-center shadow-lg rounded-full cursor-pointer'>
        {
          theme === 'light' ? <MdDarkMode size={18} /> : <MdLightMode  size={18} />
        }
      </span>
    </main>
  )
}

export default App;
