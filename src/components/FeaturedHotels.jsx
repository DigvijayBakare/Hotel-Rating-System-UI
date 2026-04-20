import React from 'react'

export default function FeaturedHotels() {
    return (
        <div>
            <div>
                {/* Top Header */}
                <div className='flex justify-between m-12'>
                    <p className='text-2xl font-bold'>Featured Hotels</p>
                    <p>Handpicked stays with exceptional reviews</p>
                </div>

                {/* Hotel cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-12'>
                    {[1, 2, 3].map((item, i) => {
                        return <div key={i} className="flex bg-[url('/src/assets/Image.png')] bg-cover bg-center h-80 bg-no-repeat w-full flex-col justify-end rounded-2xl overflow-hidden">
                            <div className='bg-blue-600/70 h-fit rounded-t-3xl text-white flex flex-col justify-between'>
                                <div className='px-5 py-4'>
                                    <p className='text-2xl font-bold leading-tight'>Seabreeze Grand Hotel</p>
                                    <p className='text-sm mt-1 opacity-90'>Oceanfront luxury with rooftop pool & sunset views</p>
                                </div>
                                <div className='flex px-5 pb-5 justify-between items-center gap-2'>
                                    <div className='flex items-center gap-2 text-sm whitespace-nowrap'>
                                        <span className="text-yellow-400">★★★★★ </span>4.9
                                        <span className="opacity-50">|</span>
                                        <span>Location</span>
                                    </div>
                                    <button type="submit" className='bg-orange-300 text-blue-900 font-bold py-2 px-4 rounded-full text-sm hover:bg-orange-400 transition-colors'>Book now</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            {/* Top rated hotels */}
            <div>
                {/* Top header */}
                <div className='flex justify-between m-12'>
                    <p className='text-2xl font-bold'>Top Rated Hotels</p>
                    <p>Based on the recent guest reviews</p>
                </div>

                {/* Hotel cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-12">
                    {[1, 2, 3].map((item, i) => {
                        return <div key={i} className="flex flex-col bg-white shadow-2xl min-h-80 w-full p-4 rounded-2xl overflow-hidden">
                            <div className='flex flex-col sm:flex-row justify-start gap-4'>
                                <img src="src\assets\Image1.png" alt="Image" className='h-32 w-full sm:w-40 object-cover rounded-xl' />
                                <div className='flex flex-col'>
                                    <p className='text-2xl font-bold'>Seabreeze Grand Hotel</p>
                                    <span className='text-yellow-500 font-bold text-xl'>★★★★★ </span>
                                    <span>4.9</span>
                                    <span className='text-gray-500 text-sm italic'>Malibu, Pacific Beach</span>
                                </div>
                            </div>
                            <div className='mt-3 text-gray-600 text-sm flex-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti praesentium eos architecto cupiditate quidem soluta perferendis magnam nostrum impedit?</div>
                            <button type="submit" className='mt-4 w-full bg-orange-300 hover:bg-orange-400 py-3 rounded-full font-bold transition-colors'>View</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
