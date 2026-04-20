import { useState } from 'react';
import ToggleCheck from '../utilityClasses/ToggleCheck';

export default function SearchEngine() {
    const [value, setValue] = useState(1);

    return (
        <div className='shadow-2xl rounded-2xl p-4 mx-4 md:mx-12 bg-white'>
            {/* Upper part: Stacks on mobile, justify-between on desktop */}
            <div className='flex flex-col md:flex-row p-5 justify-between gap-4'>
                <div>
                    <p className='text-xl md:text-2xl font-bold'>Find your perfect stay</p>
                    <p className='text-gray-600 text-sm md:text-base'>Search hotels by location, name, dates and guests</p>
                </div>
                <div className='text-sm text-gray-500'>
                    <p>Popular: <span className="text-blue-500">New York - Paris - Tokyo</span></p>
                </div>
            </div>

            {/* Lower part: Grid layout (1 col mobile, 2 col tablet, 4 col desktop) */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-6 items-start'>

                {/* 1. Location search */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="lhs" className='font-bold text-sm'>Location or Hotel:</label>
                    <input className='w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="search" id="lhs" placeholder='Search city...'
                    />
                    <p className='text-xs text-gray-400'>Try "Seabreeze Grand Hotel"</p>
                </div>

                {/* 2. To - from Date */}
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-sm'>Dates (Optional)</p>
                    <div className='flex gap-2'>
                        <input type="date" className='w-1/2 px-2 py-2 bg-gray-100 rounded-md text-sm' />
                        <input type="date" className='w-1/2 px-2 py-2 bg-gray-100 rounded-md text-sm' />
                    </div>
                </div>

                {/* 3. Guest Option */}
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-sm'>Guests</p>
                    <div className='flex items-center bg-gray-100 px-3 py-2 rounded-md'>
                        <input
                            type="number"
                            value={value}
                            onChange={(e) => setValue(parseInt(e.target.value) || 0)}
                            className='w-12 bg-transparent focus:outline-none'
                        />
                        <span className="text-gray-400 text-xs border-l border-gray-300 pl-3 ml-2">Rooms: 1</span>
                    </div>
                </div>

                {/* 4. Action Section */}
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center justify-between md:justify-start gap-4'>
                        <p className='text-sm font-medium'>Flexible</p>
                        <ToggleCheck />
                    </div>
                    <div className='flex gap-2'>
                        <button type="submit" className='flex-1 h-10 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition-colors'>Search</button>
                        <button type="button" className='flex-1 h-10 bg-gray-200 rounded-full text-blue-600 font-medium hover:bg-gray-300 transition-colors'>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
