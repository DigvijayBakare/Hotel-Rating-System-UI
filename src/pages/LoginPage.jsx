import React from 'react'
import { Link } from 'react-router-dom';


export default function LoginPage() {
    return (

        <div className='flex mb-4'>
            {/* Login Form */}
            <div className='mx-12 p-8 w-120 shadow-xl rounded-2xl'>
                <p className='text-2xl font-bold'>Welcome back to StayRank</p>
                <p className='text-gray-500 text-sm'>Sign in to manage your bookings and discover curated hotels.</p>

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
                    <p className='text-gray-500 text-sm'>Please enter a valid email address like you@example.com</p>
                </div>

                <div className='flex justify-between mt-2'>
                    <div>
                        <input type="checkbox" name="checkIt" id="rememberMe" />
                        <label htmlFor="rememberMe" className='text-sm font-medium text-gray-700'>Remember Me </label>
                    </div>
                    <p className='text-blue-600'>Forget password?</p>
                </div>

                <div className='flex flex-col items-center justify-center mt-4 gap-2'>
                    <button type="submit" className='w-full py-2 bg-blue-600 rounded-2xl text-white' >Login</button>
                    <h1 className='text-gray-500 text-sm'>Don't have an account? <span className="text-blue-600 cursor-pointer"><Link to="/signup">Sign up </Link></span> </h1>
                </div>

                <div className='flex flex-row gap-4 mt-4'>
                    <button type="submit" className='shadow-xl px-5 py-2 rounded-2xl text-black'>Continue with Google</button>
                    <button type="submit" className='shadow-xl px-5 py-2 rounded-2xl text-black'>Continue with Apple</button>
                </div>
            </div>


            {/* Hotel Ad */}
            <div className='p-8 shadow-xl rounded-2xl mb-4 bg-gray-50'>
                <img src="src\assets\hotel.png" alt="Hotel photo" className='rounded-4xl' />
                <div className='flex flex-row gap-8 mt-2'>
                    <div>
                        <p>Top-rated hotels</p>
                        <p className='text-gray-500 text-sm'>Handpicked stays loved by guests for exceptional service and location.</p>

                        {/* const HotelItem = ({name, location, rating, desc, imgUrl}) => ( */}
                        <div className='flex items-center gap-6 p-4 hover:bg-gray-50 transition-colors cursor-pointer'>
                            <div className='w-32 h-24 shrink-0'>
                                <img src="src\assets\Image.png" alt="" className='w-full h-full object-cover rounded-4xl' />
                                {/* <img src="src\assets\Image.png" alt="" className='w-full h-full object-cover rounded-4xl' /> */}
                                {/* <img src="src\assets\Image.png" alt="" className='w-full h-full object-cover rounded-4xl' /> */}
                                {/* <img src="src\assets\Image.png" alt="" className='w-full h-full object-cover rounded-4xl' /> */}
                            </div>
                            <div className='flex flex-col'>
                                <h3 className="text-lg font-bold text-gray-800">Le Seine Boutique</h3>
                                <p className="text-gray-500 text-sm">Paris • 4.9 • Boutique stay near the Seine</p>

                                {/* <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                                <p className="text-gray-500 text-sm"> {location} • {rating} • {desc} </p> */}
                            </div>
                        </div>
                        {/* ); */}

                    </div>
                    <div>
                        <p className=''>Why book with StayRate?</p>
                        <p className='text-gray-500'>Verified guest reviews and trusted ratings</p>
                        <p className='text-gray-500'>Exclusive member prices and perks</p>
                        <p className='text-gray-500'>24/7 customer support and flexible cancellations</p>

                        <button type="submit" className='w-full py-2 bg-white mt-10 shadow-2xl rounded-2xl'>Explore hotels</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
