import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Navbar from './Navbar';

const Header = () => {

   
  return (
    <header className='lg:px-8 bg-slate-50 py-2 border-b-2'>
      <Navbar />
    </header>
  )
}

export default Header
