import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { MdOutlineNightlight } from "react-icons/md";
import { useSelector } from 'react-redux';
import DropDown from './DropDown';
import { ThemeProvider } from '../theme/ThemeProvider';


const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const currentUser = useSelector((data) => data?.auth?.currentUser)
    const {theme} = useSelector((state) => state.theme);

   
    return (
        <header className={`${theme === 'light' ? "bg-white text-[#1f1f1f]" :"bg-[#1f1f1f] text-[#ffffff]"} shadow-md fixed top-0 lg:px-24 py-2 w-full z-50`}>
            {/* lg+ */}
            <div>
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between h-16 lg:h-20">
                        <div className="hidden lg:flex lg:items-center lg:space-x-6">
                            <Link to="/" className="text-base font-medium"> Home </Link>
                            <Link to="about" className="text-base font-medium "> About </Link>
                            <Link to="projects" className="text-base font-medium "> Projects </Link>
                            {
                                currentUser && <Link to="dashboard" className="text-base font-medium"> Dashboard </Link>
                            }
                            
                        </div>
                        <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                            <div className="flex-shrink-0">
                                <Link to="/" className="flex font-medium text-2xl" >
                                    Mern Blog
                                </Link>
                            </div>
                        </div>
                        {/* sm  */}
                        <div className=" flex flex-col absolute right-12 lg:hidden space-y-2 ">

                            <span className='rounded-full'>
                                {
                                    currentUser === undefined ? <Link to="sign-in" className="text-base font-medium "> <img src="https://i.pinimg.com/736x/4b/90/5b/4b905b1342b5635310923fd10319c265.jpg" className='w-12 h-12 z-50' alt="login" /></Link> : <DropDown userInfo={currentUser?.user} />
                                }
                            </span>
                        </div>
                        {/* sm  */}
                        <button onClick={() => setToggleNav(!toggleNav)} type="button" className="inline-flex p-2 ml-5 transition-all duration-200 rounded-md lg:hidden">
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


                        {/* xl  */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            <div className="flex items-center justify-center ml-auto rounded-full xl:block">
                                <input type="search" placeholder='serach for blog' className={`px-6 py-3 transition-all duration-300 text-slate-900 hidden xl:block xl:focus:w-96 ease-in-out delay-150 rounded-full focus:outline-none border border-1`} />
                            </div>
                            <div className="icons border-l pl-2 border-slate-300 flex item-center justify-center space-x-2">
                                <span className='rounded-full'>
                                    {
                                        currentUser === undefined ? <Link to="sign-in" className="text-base font-medium"> <img src="https://i.pinimg.com/736x/4b/90/5b/4b905b1342b5635310923fd10319c265.jpg" className='w-12 h-12' alt="login" />
                                        </Link> : <DropDown userInfo={currentUser?.user} />
                                    }
                                </span>
                            </div>
                        </div>
                        {/* xl  */}
                    </nav>
                </div>
            </div>
            {/* xs to lg */}
            {
                toggleNav && 
                

                <nav className={`py-4 shadow-xl z-50 ${theme === 'dark' ? 'bg-[#1f1f1f] text-slate-100 shadow-2xl' :'bg-white text-[#1f1f1f]'  }   min-h-full -right-2 w-2/4 rounded-bl-xl mt-2 lg:hidden fixed`}>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="mt-6">
                            <div className="flex flex-col space-y-2">
                                <Link to="/" className="py-2 text-base font-medium "> Home </Link>
                                <Link to="about" className="py-2 text-base font-medium "> About </Link>
                                <Link to="projects" className="py-2 text-base font-medium "> Projects </Link>
                                {
                                currentUser &&  <Link to="dashboard" className="py-2 text-base font-medium"> Dashboard </Link>
                                }
                               
                            </div>
                        </div>
                    </div>
                </nav>
            
            }

        </header>


    )
}

export default Navbar
