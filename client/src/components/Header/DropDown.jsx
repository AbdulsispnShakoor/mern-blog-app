import React, { useState } from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';




const DropDown = ({userInfo}) => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    const handleOptionClick = (option) => {
      console.log(`Selected option: ${option}`);
      // You can implement logic based on the selected option here

      if(option === "profile"){
        navigate("/profile")
      }else if(option === "logout"){
        console.log("logout")
      }
      };
      


  return (
    <div className="relative">
    <button
      className="inline-flex items-center justify-center rounded-full "
      onClick={toggleDropdown}
    >
     <img title={userInfo.name} src={userInfo.googlePhotoURL} alt={userInfo.name}  className='w-10 h-10 p-1 hover:scale-125 ml-2 border border-slate-500 rounded-full bg-cover bg-center'/>
    </button>

    {isOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
        <div className="py-1">
          <button
            onClick={() => handleOptionClick('profile')}
            className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Profile
           <CiLocationArrow1 />
          </button>
          <button
            onClick={() => handleOptionClick('logout')}
            className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
        
            Logout
           <CiLocationArrow1 />
          </button>
        </div>
      </div>
    )}
  </div>
  )
}

export default DropDown
