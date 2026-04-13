import React from 'react'

export default function CreateAccount() {
    return (
        <>
            <div className='mb-4'>
                {/* Create an account */}
                <div className='mx-12 p-8 w-120 shadow-xl rounded-2xl'>
                    <div>
                        <p className='text-2xl font-bold'>Create your StayRank account</p>
                        <p className='text-sm text-gray-500'>Sign up to discover great hotels, manage bookings and access member-only deals.</p>
                    </div>
                    <div className='flex flex-row gap-4 mt-4'>
                        <button type="submit" className='shadow-xl px-5 py-2 rounded-2xl text-black'>Continue with Google</button>
                        <button type="submit" className='shadow-xl px-5 py-2 rounded-2xl text-black'>Continue with Apple</button>
                    </div>
                    <p>-------------------------or--------------------------------</p>

                    <div>
                        {/* Full Name */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="fullName" className='text-sm font-medium text-gray-700 mt-2'>Email Address </label>
                            <input id="fullName" type="text" placeholder="Ava Thompson" className="px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" required />
                            <p className='text-red-500 text-sm'>Please enter your full name (first and last).</p>

                        </div>
                        {/* Enter email */}
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="email-address" className='text-sm font-medium text-gray-700 mt-2'>Email Address </label>
                            <input id="email-address" type="email" placeholder="you@example.com" className="px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" required />
                            <p className='text-gray-500 text-sm'>Please enter a valid email address like you@example.com</p>
                        </div>

                        {/* Enter pass */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="pass" className='text-sm font-medium text-gray-700 mt-2'>Password </label>
                            <input id="pass" type="password" className="px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" required />
                            <p className='text-gray-500 text-sm'>Password must be at least 8 characters including a number</p>
                        </div>

                        {/* Confirm pass */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="conf-pass" className='text-sm font-medium text-gray-700 mt-2'>Confirm Password </label>
                            <input id="conf-pass" type="password" className="px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" required />
                            <p className='text-gray-500 text-sm'>Please enter a valid email address like you@example.com</p>
                        </div>

                        <div className='flex justify-between mt-2'>
                            <div>
                                <input type="checkbox" name="checkIt" id="termsncond" />
                                <label htmlFor="termsncond" className='text-sm font-medium text-gray-700'>I agree to the Terms & Conditions </label>
                            </div>
                            <p className='text-blue-600'>Privacy Policy</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-4 gap-2'>
                            <button type="submit" className='w-full py-2 bg-blue-600 rounded-2xl text-white' >Create account</button>
                            <h1 className='text-gray-500 text-sm'>Already have an account? <span className="text-blue-600 cursor-pointer">Log in </span> </h1>
                        </div>
                    </div>
                </div>

                {/* Side top hotel  */}
                <div></div>
            </div>
        </>
    )
}
