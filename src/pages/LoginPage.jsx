import { FaGoogle, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const hotelData = [
        { id: 1, name: "Le Seine Boutique", location: "Paris", rating: "4.9", desc: "Boutique stay near the Seine", img: "src/assets/Image1.png" },
        { id: 2, name: "The Grand Plaza", location: "New York", rating: "4.8", desc: "Luxury in the heart of the city", img: "src/assets/Image2.png" },
        { id: 3, name: "Sunset Resort", location: "Maldives", rating: "5.0", desc: "Overwater villas with ocean views", img: "src/assets/Image.png" },
    ];

    return (
        <div className='flex flex-col lg:flex-row gap-8 p-4 md:p-8'>
            {/* Login Form */}
            <div className='mx-auto lg:mx-12 p-10 w-full max-w-125 bg-white shadow-2xl rounded-3xl flex flex-col justify-center h-fit self-center'>
                <div className="mb-8">
                    <p className='text-3xl font-extrabold text-gray-900'>Welcome back to StayRank</p>
                    <p className='text-gray-500 mt-2'>Sign in to manage your bookings and discover curated hotels.</p>
                </div>

                {/* Enter email */}
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="email-address" className='text-sm font-semibold text-gray-700'>Email Address </label>
                        <input id="email-address" type="email" placeholder="you@example.com" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" required />
                        <p className='text-gray-500 text-sm'>Please enter a valid email address like you@example.com</p>
                    </div>

                    {/* Enter pass */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="pass" className='text-sm font-semibold text-gray-700'>Password </label>
                        <input id="pass" type="password" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all" placeholder="••••••••" required />
                        <p className='text-gray-500 text-sm'>Please enter a valid email address like you@example.com</p>
                    </div>
                </div>

                {/* Utilities */}
                <div className='flex justify-between items-center mt-6'>
                    <label className='flex items-center gap-2 cursor-pointer group'>
                        <input type="checkbox" id="rememberMe" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className='text-sm text-gray-600 group-hover:text-gray-900 transition-colors'>Remember Me</span>
                    </label>
                    <button className='text-sm font-semibold text-blue-600 hover:underline'>Forget password?</button>
                </div>

                {/* Actions */}
                <div className='mt-8 flex flex-col gap-4'>
                    <button type="submit" className='w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all transform active:scale-[0.98]'>
                        Sign In
                    </button>

                    <p className='text-center text-gray-500 text-sm'>
                        Don't have an account? <Link to="/signup" className="text-blue-600 font-bold hover:underline ml-1">Sign up</Link>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-2">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-xs text-gray-400 font-medium uppercase">Or continue with</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-3'>
                        {/* Google Button */}
                        <button className='flex-1 flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all font-medium text-sm'>
                            <span className="p-1.5 bg-green-100 text-green-600 rounded-full">
                                <FaGoogle size={16} />
                            </span>
                            Google Login
                        </button>

                        {/* Apple Button */}
                        <button className='flex-1 flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all font-medium text-sm'>
                            <span className="p-1.5 bg-blue-100 text-blue-600 rounded-full">
                                <FaApple size={16} />
                            </span>
                            Apple Login
                        </button>
                    </div>

                </div>
            </div>


            {/* Hotel Ad */}
            <div className='p-8 shadow-xl rounded-2xl mb-4 bg-gray-50 w-full lg:w-1/2'>
                <img src="src\assets\hotel.png" alt="Hotel photo" className='rounded-3xl w-full h-auto object-cover' />
                <div className='flex flex-col xl:flex-row gap-8 mt-4'>
                    <div className='flex-1'>
                        <p className='font-bold'>Top-rated hotels</p>
                        <p className='text-gray-500 text-sm'>Handpicked stays loved by guests for exceptional service and location.</p>

                        <div className="flex flex-col">
                            {hotelData.map((hotel) => (
                                <div key={hotel.id} className='flex items-center gap-6 p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100 last:border-0'>
                                    {/* Image Section */}
                                    <div className='w-32 h-24 shrink-0'>
                                        <img
                                            src={hotel.img}
                                            alt={hotel.name}
                                            className='w-full h-full object-cover rounded-4xl'
                                        />
                                    </div>

                                    {/* Text Section */}
                                    <div className='flex flex-col'>
                                        <h3 className="text-lg font-bold text-gray-800">{hotel.name}</h3>
                                        <p className="text-gray-500 text-sm">
                                            {hotel.location} • {hotel.rating} • {hotel.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-1'>
                        <p className='font-bold'>Why book with StayRate?</p>
                        <div className="mt-2 space-y-2 text-sm text-gray-500">
                            <p>✓ Verified guest reviews</p>
                            <p>✓ Exclusive member prices</p>
                            <p>✓ 24/7 customer support</p>
                        </div>
                        <button type="submit" className='w-full py-2 bg-white mt-6 shadow-lg rounded-2xl hover:bg-gray-100 transition-colors'>Explore hotels</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
