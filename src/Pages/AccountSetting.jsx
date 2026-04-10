import React from 'react'
import { useLocation } from 'react-router'
import profilePic from '../assets/profile.png';
import { CameraIcon} from 'lucide-react';

const AccountSetting = () => {
    const location = useLocation();

    const user = location.state || {
        fullName: 'Marry Doe',
        email: 'Marry@Gmail.Com'
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-80 h-168  bg-[#F7F8F9] shadow-lg flex flex-col font-sans overflow-hidden'>

                {/* Header */}
                <div className='px-5 py-4 border-b border-gray-200 bg-white'>
                    <h1 className='text-base font-semibold text-gray-600'>
                        Account Settings
                    </h1>
                </div>

                {/* Profile Section */}
                <div className="p-5 bg-[#F7F8F9]">
                    <div className="flex items-center gap-4 mb-5">

                        <div className="relative">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-16 h-16 rounded-full object-cover"
                            />

                            <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full border-2 border-white">
                                <CameraIcon className='w-3 h-3 text-white' />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-base font-semibold text-gray-900">
                                {user.fullName}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
                        Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>

                {/* Bottom dashed divider */}
                <div className="border-t border-dashed border-gray-300 mt-2"></div>

                {/* Empty space */}
                <div className="flex-1 bg-[#F7F8F9]  ">

                </div>
                <div className="border-t border-dashed border-gray-300 mb-7"></div>
                
            </div>

        </div>
    )
}

export default AccountSetting