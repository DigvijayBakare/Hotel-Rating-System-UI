import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <div>
            <hr />
            <div className='flex justify-between mt-4 ml-12 mr-12 mb-12'>
                {/* Logo and Desc */}
                <div className=''>
                    <div><img src='src\assets\logo.svg' alt="Logo here" className='h-16 w-auto' /></div>
                    <p className='w-75'>Discover & book the best stays worldwide — honest reviews, transparent prices.</p>
                </div>

                {/* Company */}
                <div>
                    <p className='text-xl font-bold'>Company</p>
                    <ul>
                        <li>Home</li>
                        <li>Hotels</li>
                        <li>About Us</li>
                        <li>Careers</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <p className='text-xl font-bold'>Support</p>
                    <ul>
                        <li>Help Us</li>
                        <li>Contact Us</li>
                        <li>Safety Updates</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <p className='text-xl font-bold'>Legal</p>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookies</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-bold'>Newsletter</p>
                    <p>Get curated hotel deals and travel tips.</p>
                    <div className='flex flex-row gap-4'>
                        <input type="email" name="email" id="toUsEmail" placeholder='you@example.com' className='p-2 shadow-2xl rounded-xl' />
                        <button type='submit' className='bg-blue-600 p-2 rounded-xl text-white'>Subscribe</button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-fit mx-auto">
                        {/* LinkedIn */}
                        <a href="https://linkedin.com" className="p-3 bg-blue-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com" className="p-3 bg-pink-100 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
                            <FaInstagram size={24} />
                        </a>

                        {/* WhatsApp (MessageCircle is the Lucide icon for WhatsApp) */}
                        <a href="https://wa.me" className="p-3 bg-green-100 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex justify-between my-4 mx-12'>
                <p>© 2026 StayRank, Inc. All rights reserved. Registered in USA.</p>
                <p>Terms · Privacy · Cookies</p>
            </div>
        </div>
    )
}
