import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa';

export default function CreateAccount() {
    return (
        <div className='flex justify-center items-center min-h-screen p-4 md:p-8 rounded-2xl'>
            {/* Changed w-120 to w-full max-w-lg and mx-12 to mx-auto */}
            <div className='w-full max-w-lg bg-white p-6 md:p-10 shadow-xl rounded-3xl'>

                <div className='mb-6'>
                    <p className='text-2xl md:text-3xl font-bold text-gray-900'>Create your account</p>
                    <p className='text-sm text-gray-500 mt-2'>Sign up to discover great hotels and member-only deals.</p>
                </div>

                {/* Social Buttons: Stacks on mobile, side-by-side on tablet */}
                <div className='flex flex-col sm:flex-row gap-3 mb-6'>
                    <button className='flex-1 flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all font-medium text-xs md:text-sm'>
                        <span className="p-1.5 bg-green-100 text-green-600 rounded-full shrink-0">
                            <FaApple size={16} />
                        </span>
                        <span>Continue With Apple</span>
                    </button>

                    <button className='flex-1 flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all font-medium text-xs md:text-sm'>
                        <span className="p-1.5 bg-blue-100 text-blue-600 rounded-full shrink-0">
                            <FaGoogle size={16} />
                        </span>
                        <span>Continue With Google</span>
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-gray-100"></div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Or email</span>
                    <div className="flex-1 h-px bg-gray-100"></div>
                </div>

                {/* Form Fields: Using gap-4 for better vertical spacing */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="fullName" className='text-xs font-bold text-gray-700 uppercase'>Full Name</label>
                        <input id="fullName" type="text" placeholder="Ava Thompson" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="email-address" className='text-xs font-bold text-gray-700 uppercase'>Email Address</label>
                        <input id="email-address" type="email" placeholder="you@example.com" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="pass" className='text-xs font-bold text-gray-700 uppercase'>Password</label>
                        <input id="pass" type="password" placeholder="••••••••" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="pass" className='text-xs font-bold text-gray-700 uppercase'>Confirm password</label>
                        <input id="pass" type="password" placeholder="••••••••" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                    </div>

                    {/* Checkbox and Links */}
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-2'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" id="termsncond" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
                            <span className='text-xs text-gray-600 font-medium'>Agree to Terms & Conditions</span>
                        </label>
                        <p className='text-xs text-blue-600 font-bold hover:underline cursor-pointer'>Privacy Policy</p>
                    </div>

                    <div className='mt-4 flex flex-col items-center gap-4'>
                        <button type="submit" className='w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold shadow-lg shadow-blue-100 transition-all'>
                            Create Account
                        </button>
                        <p className='text-gray-500 text-sm'>
                            Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline ml-1">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
