import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full">
            <hr className="border-gray-200" />
            
            {/* Main Footer Content: 1 col on mobile, 2 on tablet, 5 on desktop */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6 md:px-12 py-10'>
                
                {/* 1. Logo and Desc */}
                <div className='flex flex-col gap-4'>
                    <img src='/src/assets/logo.svg' alt="Logo" className='h-12 w-fit' />
                    <p className='text-gray-600 text-sm max-w-xs'>
                        Discover & book the best stays worldwide — honest reviews, transparent prices.
                    </p>
                </div>

                {/* 2. Company */}
                <div>
                    <p className='text-lg font-bold mb-4'>Company</p>
                    <ul className='space-y-2 text-gray-600 text-sm'>
                        <li className="hover:text-blue-600 cursor-pointer">Home</li>
                        <li className="hover:text-blue-600 cursor-pointer">Hotels</li>
                        <li className="hover:text-blue-600 cursor-pointer">About Us</li>
                        <li className="hover:text-blue-600 cursor-pointer">Careers</li>
                    </ul>
                </div>

                {/* 3. Support */}
                <div>
                    <p className='text-lg font-bold mb-4'>Support</p>
                    <ul className='space-y-2 text-gray-600 text-sm'>
                        <li className="hover:text-blue-600 cursor-pointer">Help Us</li>
                        <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
                        <li className="hover:text-blue-600 cursor-pointer">Safety Updates</li>
                    </ul>
                </div>

                {/* 4. Legal */}
                <div>
                    <p className='text-lg font-bold mb-4'>Legal</p>
                    <ul className='space-y-2 text-gray-600 text-sm'>
                        <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-blue-600 cursor-pointer">Cookies</li>
                    </ul>
                </div>

                {/* 5. Newsletter */}
                <div className='flex flex-col gap-4'>
                    <p className='text-lg font-bold'>Newsletter</p>
                    <p className="text-sm text-gray-600">Get curated hotel deals and travel tips.</p>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <input type="email" placeholder='you@example.com' className='p-2 border border-gray-200 rounded-xl flex-1 text-sm' />
                        <button className='bg-blue-600 p-2 rounded-xl text-white text-sm font-bold'>Subscribe</button>
                    </div>
                    
                    {/* Social Icons */}
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all"><FaLinkedin size={20} /></a>
                        <a href="#" className="p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-all"><FaInstagram size={20} /></a>
                        <a href="#" className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all"><FaWhatsapp size={20} /></a>
                    </div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Bottom Bar: Stacks on mobile */}
            <div className='flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-12 text-sm text-gray-500 gap-4 text-center'>
                <p>© 2026 StayRank, Inc. All rights reserved.</p>
                <p className="space-x-4">
                    <span className="hover:underline cursor-pointer">Terms</span>
                    <span className="hover:underline cursor-pointer">Privacy</span>
                    <span className="hover:underline cursor-pointer">Cookies</span>
                </p>
            </div>
        </footer>
    )
}
