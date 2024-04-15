import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineNightlight } from "react-icons/md";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <header className='lg:px-8'>
            {/* lg+ */}
            <div>
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between h-16 lg:h-20">
                        <div className="hidden lg:flex lg:items-center lg:space-x-6">
                            <Link to="/" className="text-base font-medium text-black"> Home </Link>
                            <Link to="about" className="text-base font-medium text-black"> About </Link>
                            <Link to="projects" className="text-base font-medium text-black"> Projects </Link>
                            <Link to="dashboard" className="text-base font-medium text-black"> Dashboard </Link>
                        </div>
                        <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                            <div className="flex-shrink-0">
                                <Link to="/" className="flex font-medium text-2xl" >
                                    Mern Blog
                                </Link>
                            </div>
                        </div>
                        <button onClick={() => setToggleNav(!toggleNav)} type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            {
                                toggleNav ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    :
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                            }
                        </button>
                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            <div className="flex items-center justify-center ml-auto rounded-full xl:block">
                                <input type="search" placeholder='serach for blog' className={`px-6 py-3 transition-all duration-300 hidden xl:block xl:focus:w-96 ease-in-out delay-150 rounded-full focus:outline-none border border-1`} />
                            </div>
                            <div className="icons border-l-2 border-slate-300 pl-2 flex item-center justify-center space-x-2">
                               
                                <span className='p-2  rounded-full'>

                                    <Link to="sign-in" className="text-base font-medium text-black"> <VscAccount size={24} /></Link>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* xs to lg */}
            {
                toggleNav && <nav className="py-4 bg-white lg:hidden">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">

                        <div className="mt-6">
                            <div className="flex flex-col space-y-2">
                                <Link to="/" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Home </Link>
                                <Link to="about" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> About </Link>
                                <Link to="projects" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Projects </Link>
                                <Link to="dashboard" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Dashboard </Link>
                            </div>
                            <hr className="my-4 border-gray-200" />
                            <div className="flex flex-col space-y-2">
                            
                                <Link to="sign-in" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600">  <VscAccount size={24} /></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            }

        </header>


    )
}

export default Navbar
