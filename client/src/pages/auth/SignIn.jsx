import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure,signInSuccess,signInStart } from '../../store/features/authSlice/authSlice';
import {useDispatch,useSelector} from "react-redux"

const SignIn = () => {
    const [userLogin, setUserLogin] = useState({
        email:"",
        password:""
    });
    const authData = useSelector((state)=> state.auth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

        const handleChange = (e) => {
            const {name,value} = e.target;
            setUserLogin({...userLogin,[name]:value})
        };

    const handleSubmit = async(e) => {
        e.preventDefault();
    try {
            
            const {email,password} = userLogin;

            if( !email || !password){
                toast.error("Please enter your credentials first to continue.");
            }else{
                dispatch(signInStart());
                    const res = await fetch("/api/auth/login",{
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body:JSON.stringify(userLogin)

                });
                const data = await res.json()
                if(data.status === "success"){
                    toast.success(data.message)
                    setUserLogin({
                        email:"",
                        password:"",
                    });
                    dispatch(signInSuccess(data))
                    navigate("/")
                }else{
                    dispatch(signInFailure(data.message));
                    toast.error(data.message)
                }

            }

        } catch (error) {
            console.log(error.message)   
        }
    };


    if(authData.loading){
        <h1 className='text-2xl font-bold text-center'>loading....</h1>
    };


    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Welcome Back!</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Login to your account</p>
                </div>
                <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                    {/*if error  */}
                    {
                        authData.error !==  null && <h1 className='text-sm font-bold text-center text-red-600'>{authData.error}</h1>
                    }
                    {/* error  */}
                    <div className="overflow-hidden bg-white rounded-md shadow-md">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="email" className="text-base font-medium text-gray-900"> Email address </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div>
                                            <input type="email" name="email" id="email" value={userLogin.email} onChange={handleChange} autoComplete='off' placeholder="Enter email to get started" className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-base font-medium text-gray-900"> Password </label>
                                        </div>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                                </svg>
                                            </div>
                                            <input type="password" name="password" value={userLogin.password} onChange={handleChange} autoComplete='off' id="password" placeholder="Enter your password" className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                        <Link to="/forgot-password" className="text-sm text-right font-medium text-blue-600 transition-all duration-200 hover:text-blue-600 focus:text-blue-600 hover:underline"> Forgot password? </Link>
                                    </div>
                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Log in
                                        </button>
                                        <div className="flex items-center justify-center gap-4 my-4">
                                            <div className='w-full h-[1px] bg-slate-300 rounded-full my-3'></div>  or <div className='w-full h-[1px] bg-slate-300 rounded-full my-3'></div>
                                        </div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none">
                                            Google
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-base text-gray-600">Don’t have an account? <Link to="/sign-up" className="font-medium text-blue-500 transition-all duration-200 hover:text-blue-600 hover:underline">Create a free account</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default SignIn
