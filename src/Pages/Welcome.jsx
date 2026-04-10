import React from 'react'
import { useNavigate } from 'react-router';
const Welcome = () => {

    const navigate = useNavigate();

    const handleCreate = () =>{
        navigate('/create-account')
    }


  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
            <div className="w-full max-w-80 h-168  bg-white shadow-xl flex flex-col justify-end justify-items-start p-6 pb-12 font-sans">
                <div className="mb-8 ">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 cursor-default hover:text-gray-700">
                        Welcome to PopX
                    </h1>
                    <p className="text-gray-500 text-lg leading-relaxed cursor-default max-w-70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                
                <div className="flex flex-col gap-3">
                    <button
                        className="w-full bg-[#6C25FF] hover:bg-[#5a1ee0] active:scale-95 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                        onClick={handleCreate}
                    >
                        Create Account
                    </button>

                    <button
                        className="w-full bg-[#CBC9FF] hover:bg-[#b8b5ff] active:scale-95 text-[#1D2226] font-semibold py-3 px-4 rounded-lg transition-colors"
                        onClick={() => {
                            navigate('/login')
                        }}
                    >
                        Already Registered? Login
                    </button>
                </div>

            </div>
        </div>

  )
}

export default Welcome