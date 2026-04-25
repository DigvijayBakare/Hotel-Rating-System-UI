import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='flex flex-col md:flex-row bg-white shadow-sm justify-between items-center px-4 md:px-10 py-3 mb-6'>
            {/* Logo and Left Links */}
            <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto'>
                <Link to="/">
                    <img src='/src/assets/logo.svg' alt="Logo" className='h-12 md:h-16 w-auto' />
                </Link>

                <ul className='flex gap-6 text-base md:text-lg font-medium'>
                    <li className="hover:text-blue-600"><Link to="/">Home</Link></li>
                    <li className="hover:text-blue-600"><Link to="/hotels">Hotel</Link></li>
                </ul>
            </div>

            {/* Right Links (Login/Help) */}
            <div className='mt-3 md:mt-0 font-medium'>
                <ul className='flex gap-6 text-base md:text-lg'>
                    <li className="hover:text-blue-600"><Link to="/help">Help</Link></li>
                    <li className="hover:text-blue-600"><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}