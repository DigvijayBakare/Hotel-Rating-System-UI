import React from 'react'

export default function FeaturedHotels() {
    return (
        <div>
            {/* Top Header */}
            <div className='flex justify-between m-12'>
                <p className='text-2xl font-bold'>Featured Hotels</p>
                <p>Handpicked stays with exceptional reviews</p>
            </div>

            {/* Hotel cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-12'>
                <div className=""><img src="src\assets\Image.png" alt="Image" /></div>
                <div className=""><img src="src\assets\Image1.png" alt="Image" /></div>
                <div className=""><img src="src\assets\Image2.png" alt="Image" /></div>
            </div>

            {/* Top rated hotels */}
            {/* Top header */}
            <div className='flex justify-between m-12'>
                <p>Top Rated Hotels</p>
                <p>Based on the recent guest reviews</p>
            </div>

            {/* Hotel cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-12">
                <div className=""><img src="src\assets\Image.png" alt="Image" /></div>
                <div className=""><img src="src\assets\Image1.png" alt="Image" /></div>
                <div className=""><img src="src\assets\Image2.png" alt="Image" /></div>
                <div className=""><img src="src\assets\Image.png" alt="Image" /></div>
                <div className=""><img src="src\assets\Image1.png" alt="Image" /></div>
                <div className=""><img src="src\assets\Image2.png" alt="Image" /></div>
            </div>
        </div>
    )
}
