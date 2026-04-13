import React from 'react'
import Navbar from '../components/Navbar'
import SearchEngine from '../components/SearchEngine'
import FeaturedHotels from '../components/FeaturedHotels'
import Footer from '../components/Footer'
import LoginPage from './LoginPage'
import CreateAccount from '../components/CreateAccount'


export default function Home() {


    return (
        <div>
            {/* <Navbar /> */}
            <SearchEngine />
            <FeaturedHotels />
            {/* <LoginPage /> */}
            {/* <CreateAccount /> */}
            {/* <Footer /> */}

        </div>

    )
}
