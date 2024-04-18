import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { app } from '../../FirebaseConfig';
import {GoogleAuthProvider, signInWithPopup,getAuth} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../store/features/authSlice/authSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const OAuth = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleGoogleLogin = async() => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'});
        try {
            const result = await signInWithPopup(auth, provider);
            // console.log(result)
            const user = await fetch('/api/auth/google',{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    googlePhotoURL:result.user.photoURL,
                })
            });
            const data = await user.json();
            if(data.status === 'success'){
                dispatch(signInSuccess(data));
                toast.success(data.message);
                navigate("/")
            }else{
                console.log(data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button onClick={handleGoogleLogin} type="button" className="inline-flex items-center justify-center gap-2 w-full px-4 py-4 text-base font-semibold text-blue-600 outline border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 border border-transparent rounded-md focus:outline-none">
            <FcGoogle size={24} /> Continue with Google
        </button>
    )
}

export default OAuth
