import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { MdOutlineNightlight } from 'react-icons/md'

const App = () => {
  return (
    <main className='relative min-h-screen'>
      <Header />
      <Outlet />
      <span className='p-3 fixed bottom-8 right-8 flex items-center justify-center bg-slate-200 rounded-full cursor-pointer'>
        <MdOutlineNightlight size={18} />
      </span>
    </main>
  )
}

export default App
