import React from 'react'
import InteractiveRating from '../components/InteractiveRating'
import ImageGallery from '../components/ImageGallery'
import { FaMapMarkerAlt } from 'react-icons/fa';
import HotelMap from '../components/HotelMap';

export default function Hotels() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="max-w-360 mx-auto px-4 py-8">
            {/* Main Layout Grid: 70% Left, 30% Right with Gap 8 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT SIDE: 70%  */}
                <div className="lg:col-span-8 flex flex-col gap-8">

                    {/* 1. Hotel Image Gallery */}
                    <section className='bg-white shadow-2xl rounded-3xl p-4 border border-gray-100'>
                        <div className="relative group overflow-hidden rounded-2xl">
                            <img src="src/assets/Rooftop.png" alt="Rooftop" className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>

                        {/* Image gallery */}
                        <div id="gallery-section">
                            <ImageGallery />
                        </div>

                        {/* <div className='flex flex-col sm:flex-row items-center justify-between mt-4 gap-4 px-1'>
                            <div className='flex gap-3'>
                                {[1, 2, 3].map((item, i) => (
                                    <button key={i} className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all shadow-sm active:scale-95">
                                        <img src="src/assets/rft1.png" alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                                        {i === 2 && (
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-bold">+12</div>
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 group cursor-pointer">
                                <span className="text-xs md:text-sm font-medium group-hover:text-blue-600 transition-colors">Click any image to open lightbox</span>
                                <span className="text-lg">↗</span>
                            </div>
                        </div> */}
                    </section>

                    {/* 2. Hotel Title & Summary Info */}
                    <section className='flex flex-col md:flex-row justify-between bg-white shadow-2xl rounded-3xl p-6 gap-6 border border-gray-100'>
                        <div className='flex-1'>
                            <div className='flex flex-wrap items-center gap-3 mb-2'>
                                <h1 className='text-3xl font-extrabold text-gray-900'>The Meridian Grand</h1>
                                <span className='px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase rounded-full tracking-wider'>Boutique • 5 floors</span>
                            </div>
                            <p className='text-gray-500 font-medium mb-4 flex items-center gap-2'>
                                <span className="text-red-500">
                                    <FaMapMarkerAlt size={16} />
                                </span>
                                Riverside, Lisbon, Portugal
                            </p>

                            <p className='text-gray-600 leading-relaxed mb-6'>
                                A riverside boutique hotel blending Portuguese charm with contemporary design.
                                Steps from historic Alfama and a short ferry ride to the vibrant waterfront.
                            </p>
                            <div className='flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400'>
                                {['Wi-Fi', 'Pool', 'Breakfast', 'Gym', 'AC'].map((item) => (
                                    <span key={item} className='border border-gray-200 px-3 py-1 rounded-md hover:border-blue-300 hover:text-blue-500 transition-colors cursor-default'>{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col items-start md:items-end shrink-0'>
                            <div className='bg-gray-50 p-4 rounded-2xl border border-gray-100 w-full md:w-auto text-center md:text-right'>
                                <div className='text-yellow-400 text-xl font-bold mb-1'>★★★★☆</div>
                                <p className='text-2xl font-black text-gray-900'>4.6 <span className='text-sm font-medium text-gray-400'>/ 5</span></p>
                                <p className='text-xs font-bold text-blue-600 underline cursor-pointer mt-1'>1,268 Verified Reviews</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. Local Navigation */}
                    <nav className='bg-white shadow-2xl p-4 rounded-2xl border border-gray-100'>
                        <ul className='flex gap-8 font-semibold text-gray-600'>
                            <li onClick={() => document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' })} className="hover:text-blue-600 cursor-pointer">Gallery</li>
                            <li onClick={() => scrollToSection('reviews')} className="hover:text-blue-600 cursor-pointer transition-colors">Reviews</li>
                            <li onClick={() => scrollToSection('add-review')} className="hover:text-blue-600 cursor-pointer transition-colors">Add Review</li>
                        </ul>
                    </nav>

                    {/* 4. About Property Section */}
                    <section className='bg-white shadow-2xl rounded-3xl p-6 md:p-8 border border-gray-100'>
                        <h2 className='text-2xl font-extrabold text-gray-900 mb-4'>About this property</h2>
                        <p className='text-gray-600 leading-relaxed mb-8'>
                            Located on the tranquil riverside, The Meridian Grand offers modern rooms with panoramic views, locally-sourced breakfast, and personalized concierge services.
                        </p>
                        <div>
                            <p className='font-bold text-lg mb-4'>Amenities</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {[
                                    { title: "Wifi", desc: "Free high-speed Wi-Fi" },
                                    { title: "Rooftop Pool", desc: "Heated rooftop pool" },
                                    { title: "On-site parking", desc: "Valet & secure parking" },
                                    { title: "Breakfast included", desc: "Daily continental buffet" },
                                    { title: "Fitness center", desc: "Open 24/7 for guests" },
                                    { title: "Concierge services", desc: "Tours & recommendations" }
                                ].map((amenity, i) => (
                                    <div key={i} className='flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100'>
                                        <div className='p-2 bg-blue-100 text-blue-600 rounded-lg text-xs font-bold shrink-0'>✓</div>
                                        <div>
                                            <p className='font-bold text-sm text-gray-800'>{amenity.title}</p>
                                            <p className='text-xs text-gray-500'>{amenity.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 5. Guest Reviews */}
                    <section id="reviews" className="scroll-mt-24">
                        <div className='flex items-center justify-between mb-6 px-2'>
                            <h1 className='text-2xl font-bold text-gray-900'>Guest Reviews (1,268)</h1>
                            <button className="text-blue-600 font-semibold hover:underline">View all</button>
                        </div>
                        <div className='flex flex-col gap-6'>
                            {[1, 2].map((item, i) => (
                                <div key={i} className="bg-white border border-gray-100 shadow-sm p-6 rounded-3xl">
                                    <div className='flex items-start gap-4'>
                                        <img src="src/assets/pics.png" alt="User" className="w-12 h-12 rounded-full object-cover border-2 border-blue-50" />
                                        <div className='flex-1'>
                                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1'>
                                                <h3 className='font-bold text-gray-800 text-lg'>Mariana Silva</h3>
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-yellow-400 font-bold'>★★★★☆</span>
                                                    <span className='text-sm font-bold text-gray-900'>4.5</span>
                                                </div>
                                            </div>
                                            <p className='text-xs text-gray-400 mt-0.5 mb-3 font-medium uppercase tracking-wide'>Stayed April 2026</p>
                                            <p className='text-gray-600 leading-relaxed text-sm'>
                                                "Amazing location and the rooftop pool had the best view of the river."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 6. Rating & Feedback Input */}
                    <section id="add-review" className='scroll-mt-24 bg-white shadow-2xl rounded-3xl p-6 md:p-8 border border-gray-100'>
                        <h2 className='text-2xl font-extrabold text-gray-900 mb-4'>Add Rating and Feedback</h2>
                        {/* <div className='flex items-center gap-2 mb-4'>
                            <span className='font-medium text-gray-700'>Your rating:</span>
                            <span className='text-yellow-400 text-xl font-bold tracking-widest'>★★★★★</span>
                        </div> */}
                        <InteractiveRating />
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="feedback" className='font-medium text-gray-700'>Your feedback:</label>
                            <textarea id="feedback" className='w-full min-h-30 bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none' placeholder='How was your stay?' />
                            <p className='text-xs text-gray-400 italic'>Minimum 20 characters</p>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 items-center mt-6'>
                            <button type="submit" className='w-full sm:w-auto px-8 py-3 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition-all active:scale-95'>Submit Review</button>
                            <button type="reset" className='w-full sm:w-auto px-8 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl shadow-sm transition-all'>Reset</button>
                        </div>
                    </section>
                </div>

                {/* RIGHT SIDE: 25% (1 out of 4 columns) */}
                <aside className="lg:col-span-4">
                    <div className="sticky top-8 flex flex-col gap-6">

                        {/* Main Booking Card */}
                        <div className='flex flex-col gap-6 shadow-2xl rounded-3xl p-6 bg-white border border-gray-100'>

                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='text-sm font-bold text-blue-600 uppercase tracking-tight'>Deluxe Room</p>
                                    <div className='flex items-baseline gap-1'>
                                        <span className='text-2xl font-black'>€179</span>
                                        <span className='text-gray-500 text-sm'>/ night</span>
                                    </div>
                                </div>
                                <span className='px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase rounded-full border border-green-100'>
                                    Free cancellation
                                </span>
                            </div>

                            {/* Date Inputs */}
                            <div className='grid grid-cols-1 gap-4'>
                                <div className='flex flex-col gap-1.5'>
                                    <label className='text-xs font-bold text-gray-500 uppercase ml-1'>Check In</label>
                                    <input type="date" className='w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm' />
                                </div>
                                <div className='flex flex-col gap-1.5'>
                                    <label className='text-xs font-bold text-gray-500 uppercase ml-1'>Check Out</label>
                                    <input type="date" className='w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm' />
                                </div>
                                <div className='flex flex-col gap-1.5'>
                                    <label className='text-xs font-bold text-gray-500 uppercase ml-1'>Guests</label>
                                    <input type="number" defaultValue={2} className='w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm' />
                                </div>
                            </div>

                            <div className='pt-2'>
                                <p className='text-sm text-gray-500 flex justify-between mb-2'>
                                    <span>Est. total (3 nights)</span>
                                    <span className='font-bold text-gray-900'>€537</span>
                                </p>
                                <div className='flex flex-col gap-3'>
                                    <button className='w-full py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-black/20'>
                                        Reserve Now
                                    </button>
                                    <button className='w-full py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 transition-all'>
                                        Request Info
                                    </button>
                                </div>
                            </div>

                            {/* Special Offers Section */}
                            <div className='bg-blue-50/50 rounded-2xl p-4 border border-blue-100'>
                                <p className='text-xs font-bold text-blue-700 uppercase mb-2 tracking-wide'>Special Offers</p>
                                <ul className='text-xs text-blue-800 space-y-1 font-medium'>
                                    <li className='flex items-center gap-2'>• Early bird: -10% (30+ days)</li>
                                    <li className='flex items-center gap-2'>• Member rate: Free breakfast</li>
                                </ul>
                            </div>

                            {/* Location/Map Placeholder */}
                            {/* <div>
                                <p className='text-sm font-bold text-gray-900 mb-3'>Location</p>
                                <div className='w-full h-32 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-xs font-medium border border-gray-300 italic'>
                                    Google Map Integration
                                </div>
                            </div> */}
                            <div>
                                <div className="flex justify-between items-center mb-3 px-1">
                                    <p className='text-sm font-bold text-gray-900'>Location</p>
                                    <button className="text-[10px] text-blue-600 font-bold uppercase hover:underline tracking-tighter">
                                        Get Directions
                                    </button>
                                </div>

                                {/* Using the component with a specific address */}
                                <HotelMap location="Riverside, Lisbon, Portugal" />

                                <p className='text-[11px] text-gray-400 mt-3 px-1 leading-tight'>
                                    📍 Riverside, Lisbon, Portugal — <span className="italic">15 min from Airport</span>
                                </p>
                            </div>
                        </div>

                        {/* Policy Card */}
                        <div className='bg-gray-50 border border-gray-100 rounded-3xl p-6'>
                            <p className='text-sm font-bold text-gray-900 mb-2'>Cancellation Policy</p>
                            <p className='text-xs text-gray-500 leading-relaxed'>
                                Free cancellation up to 48 hours before check-in. Prepaid rates are non-refundable.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}