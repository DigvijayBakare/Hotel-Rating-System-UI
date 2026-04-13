import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <div className='flex bg-white-200 shadow-sm justify-between items-center mb-6'>
                <div className='flex gap-8 px-5 m-3 text-xl items-center '>
                    {/* <div><img src='src\assets\AppLogo.png' alt="Logo here" className='h-16 w-auto' /></div> */}
                    <div><img src='src\assets\logo.svg' alt="Logo here" className='h-16 w-auto' /></div>
                    <div>
                        <ul className='flex gap-4'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/hotel">Hotel</Link></li>
                            {/* <li><Link to="/deals">Deals</Link></li> */}
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className='flex gap-4 m-3 text-xl justify-between'>
                        <li><Link to="/help">Help</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
