import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {user} = useSelector((state) => state.auth.currentUser);
  const {theme} = useSelector((state) => state.theme);

  const [userInfo, setUserInfo] = useState({

  });


//  console.log(user);
  return (
    <div className='w-full lg:h-full flex lg:items-center lg:justify-center '>
     <form className='shadow-xl lg:w-1/3 border rounded-md p-4 flex items-center flex-col gap-4 justify-center mx-auto'>
      <img src={user.googlePhotoURL} alt="user" className='border rounded-full'/>
      <input className={`p-3 rounded-md w-full ${theme === "dark" ? "bg-[#1f1f1f] border border-slate-400  text-slate-100" : "text-[#1f1f1f] bg-slate-100" }`} type="text" defaultValue={user.name}/>
      <input className={`p-3 rounded-md w-full ${theme === "dark" ? "bg-[#1f1f1f] border border-slate-400  text-slate-100" : "text-[#1f1f1f] bg-slate-100" }`} type="email" defaultValue={user.email}/>
      <input className={`p-3 rounded-md w-full ${theme === "dark" ? "bg-[#1f1f1f] border border-slate-400  text-slate-100" : "text-[#1f1f1f] bg-slate-100" }`} type="password" placeholder='password'/>
      <input type="submit" Value="Update" className='border w-full p-2 rounded bg-blue-600 text-white'/>
      <div className="btns flex items-center justify-between w-full">
        <button className='p-2 px-4 border rounded-md m-1'>Delete Account</button>
        <button className='p-2 px-4 border rounded-md m-1'>Sign Out</button>
      </div>
     </form>
    </div>
  )
}

export default Profile
