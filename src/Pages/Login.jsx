import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = ({setUserData}) => {
    const navigate = useNavigate();

    const formData = new FormData();
    // const [email, setEmail] = useState(' ');
    // const [password, setPassword] = useState(' ');

    const handleLogin = (e) =>{
        e.preventDefault();
        const formData = new formData(e.currentTarget);
        const emailVal = formData.get('Email address');

        if(setUserData){
            setUserData({
                fullName: emailVal ? emailVal.split('@')[0] : 'User', 
                email: emailVal
            });
           
        }
        navigate('/account-setting');
    };
  return (

    <div className='flex items-center justify-center min-h-screen  bg-gray-100 '>
        <div className='w-full max-w-80 h-168  bg-white shadow-xl flex flex-col p-6 font-sans'>
            <div className='mt-4 mb-8'>

           
            <h1 className=' text-3xl font-bold text-gray-800 mb-4 leading-tight w-3/4'>
                Signin to your<br/>PopX Account
            </h1>
            <p className='text-gray-500 font-bold text-sm mt-0'>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
            </p>

        </div>

            <form className='space-y-5' onSubmit={handleLogin}>
                <div className='relative'>
                    <label className='absolute -top-2.5 left-3 bg-[#F9F9F9] px-1 text-[#6C25FF] text-xs font-semibold z-10 '>Email Address
                    </label>  
                    <input type="email" 
                    name='Email address'
                    placeholder='Enter email address'
                    required
                    className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 bg-transparent outline-none  focus:border-[#6C25FF] transition-all'
                    />
                </div>
                <div className='relative'>
                    <label className='absolute -top-2.5 left-3 bg-[#F9F9F9] px-1 text-[#6C25FF] text-xs font-semibold z-10 '>Password
                    </label>  
                    <input type="password" 
                    name='password'
                    placeholder='Enter password'
                    required
                    className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 bg-transparent outline-none  focus:border-[#6C25FF] transition-all'
                    />
                </div>
                <button
                        type="submit"
                        className="w-full bg-[#CBCBCB] hover:bg-[#b8b8b8] active:scale-95 text-white font-semibold py-3.5 rounded-lg transition-all mt-2"
                    >
                        Login

                </button>

            </form>
        </div>
    </div>
  )
}

export default Login