import React from 'react'
import { useSelector } from 'react-redux'

export const ThemeProvider = ({children}) => {
    const {theme} = useSelector((state) => state.theme);
    
  return (
   
      <div className={`${theme === 'light' ? "bg-white text-gray-900" : "bg-[#1f1f1f] text-slate-100"}`}>
        {children}
      </div>
  )
}


