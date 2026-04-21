import React from 'react'
import CreateAccount from '../components/CreateAccount'

export default function SignUpPage() {
    return (
        <div className='flex flex-col lg:flex-row m-4 md:m-8 gap-4'>

            {/* Account creation form - Takes full width on mobile, fixed width on desktop */}
            <div className="w-full lg:w-162.5 shrink-0">
                <CreateAccount />
            </div>

            {/* Hotel side - Takes remaining space */}
            <div className="flex-1 flex flex-col gap-6">

                {/* Main Rooftop hotel card */}
                <div className='bg-white shadow-xl p-4 md:p-6 rounded-2xl'>
                    <img src="src/assets/I2.png" alt="Main Hotel" className="w-full rounded-xl object-cover h-64 md:h-80" />

                    <div className='flex flex-col sm:flex-row mt-4 justify-between items-start sm:items-center gap-4'>
                        <div>
                            <p className='text-xl md:text-2xl font-bold text-gray-900'>The Meridian Rooftop</p>
                            <p className='text-sm text-gray-500'>Barcelona, Spain — Stunning skyline views</p>
                        </div>
                        {/* Styled badge for rating/price */}
                        <div className='flex items-center gap-3 bg-gray-100 p-2 rounded-lg px-4'>
                            <span className="text-black font-bold">★ 4.9</span>
                            <span className="text-gray-300">|</span>
                            <span className="font-bold text-sm">$249/night</span>
                        </div>
                    </div>

                    {/* Small Gallery & Action */}
                    <div className='flex flex-col sm:flex-row items-center gap-36 mt-6'>
                        <div className="grid grid-cols-3 gap-3 flex-1 w-full">
                            {[1, 2, 3].map((item, i) => (
                                <img key={i} src="src/assets/I3.png" alt="Gallery" className='h-20 w-full object-cover rounded-xl' />
                            ))}
                        </div>
                        {/* Changed w-50 to w-full on mobile */}
                        <button className='w-full sm:w-32 bg-orange-300 hover:bg-orange-400 py-3 rounded-full font-bold transition-all'>
                            View
                        </button>
                    </div>
                </div>

                {/* Grid of smaller hotels: 1 col on mobile, 2 on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item, i) => (
                        <div key={i} className='flex items-center gap-4 bg-white shadow-md p-3 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer'>
                            <img src="src/assets/I4.png" alt="Small Hotel" className='h-16 w-16 sm:h-20 sm:w-24 object-cover rounded-xl shrink-0' />
                            <div className='flex flex-col'>
                                <p className='font-bold text-sm md:text-base'>Seabreeze Grand Hotel</p>
                                <span className='text-gray-500 text-xs italic'>Malibu, USA • $180/night</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
