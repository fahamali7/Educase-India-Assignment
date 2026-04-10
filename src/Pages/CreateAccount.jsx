import React from 'react'
import { useNavigate } from 'react-router'

const CreateAccount = () => {
    const navigate = useNavigate();



    const handleSubmit = (e) =>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const userData = {
        fullname: formData.get('Full Name'), 
        email: formData.get('Email address')
      };

      navigate('/account-setting', {state: userData});

    };

    

    const fields = [
        { label: 'Full Name', placeholder: 'Enter full name', required: true },
        { label: 'Phone number', placeholder: 'Enter phone number', required: true },
        { label: 'Email address', placeholder: 'Enter email address', required: true },
        { label: 'Password', placeholder: 'Enter password', required: true },
        { label: 'Company name', placeholder: 'Enter company name', required: false },
    ];

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
        <div className='w-full max-w-80 h-168  bg-white shadow-xl flex flex-col p-6 font-sans overflow-hidden'>
            <h1 className=' text-3xl font-bold text-gray-800 mb-6 leading-tight w-3/4'>
                Create your <br/> PopX Account
            </h1>
            <form className='space-y-5 flex flex-col h-full justify-between' onSubmit={handleSubmit} >
                <div className='space-y-5'>
                    {fields.map((field, idx) =>{
                        return (
                            <div key={idx} className='relative'>
                                <label className='absolute -top-2.5 left-3 bg-white px-1 text-sm text-[#6C25FF] '>
                                    {field.label}{field.required && <span className='text-red-500'>*</span>}
                                </label>
                                <input 
                                className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#6C25FF] transition-all'
                                    name = {field.label}
                                    type = {field.label === 'Password' ? 'password': 'text'}
                                    placeholder={field.placeholder}
                                    required = {field.required}
                                />

                            </div>
                        )
                    })}
                    <div>
                        <p className=' mb-2 text-sm font-semibold text-gray-800 '>Are you an Agency?<span className='text-red-500'>*</span> </p>
                        <div className='flex items-center gap-4'>
                            <label className='flex items-center gap-2 cursor-pointer'><input type="radio" name='agency' value="yes" className='w-4 h-4 accent-[#6C25FF]' required/><span className='text-sm text-gray-800'>Yes</span> </label>
                            <label className='flex items-center gap-2 cursor-pointer'><input type="radio" name='agency' value="no" className='w-4 h-4 accent-[#6C25FF]' required /><span className='text-sm text-gray-800'>No</span> </label>
                        </div>
                    </div>
                </div>
                <div className='pb-1 mb-0'>
                    <button type='submit' className=' w-full bg-[#6C25FF] hover:bg-[#5a1ee0]active:scale-95 text-white font-semibold py-3 px-4 rounded-lg transition-all cursor-pointer'>
                        Create Account
                    </button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default CreateAccount