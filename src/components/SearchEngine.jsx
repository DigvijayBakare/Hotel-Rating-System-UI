import { useState } from 'react';
import ToggleCheck from '../utilityClasses/ToggleCheck';

export default function SearchEngine() {
    const [value, setValue] = useState(1);
    return (
        <>
            <div className='shadow-2xl rounded-2xl p-4 mx-12'>
                {/* Upper part of the search bar */}
                <div className='flex p-5 justify-between'>
                    <div>
                        <p className='text-2xl font-bold'>Find your perfect stay</p>
                        <p>Search hotels by location, name, dates and guests</p>
                    </div>
                    <div className='flex'>
                        <p>Popular: New York - Paris - Tokyo</p>
                    </div>
                </div>


                {/* Lower part of the search bar */}
                <div className='flex p-5 justify-between'>
                    {/* Location search */}
                    <div className='flex flex-col gap-2'>
                        <h1>Location or Hotel:</h1>
                        <input className='w-90 px-1 py-1 bg-gray-100 shadow-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            type="search" name="location" id="lhs" placeholder='Search city, neighborhood or hotel name' />
                        <p>Try "Seabreez Grand Hotel" or "Downtown San Diego"</p>
                    </div>


                    {/* To - from Date */}
                    <div className='gap-4'>
                        <p>Dates (Optional)</p>
                        <div className='flex gap-3'>
                            <input type="date" name="fromDate" id="from" className='w-35 px-1 py-3  bg-gray-100 shadow-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
                            <input type="date" name="toDate" id="to" className='w-35 px-1 py-3  bg-gray-100 shadow-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
                        </div>
                    </div>

                    {/* Guest Option */}
                    <div>
                        <p>Guests</p>
                        <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value) || 0)} className='w-20 px-1 py-2  bg-gray-100 shadow-2xl rounded-md focus:outline-none' />
                        <span className="text-gray-400 text-sm border-l pl-3 ml-2">Rooms: 1</span>
                    </div>

                    {/* Flexible, search and clear button */}
                    <div>
                        <div className='flex gap-4'>
                            <p>Flexible</p>
                            <ToggleCheck />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button type="submit" className='w-20 h-10 bg-blue-600 rounded-full text-white '>Search</button>
                            <button type="submit" className='w-20 h-10 bg-gray-200 shadow-2xl rounded-full  text-blue-600 '>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
