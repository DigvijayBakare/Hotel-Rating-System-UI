import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div class="search-box">
                <h2>Find your perfect stay</h2>
                <div class="inputs">
                    <input type="text" placeholder="Search hotel" />
                    <input type="date" />
                    <input type="date" />
                    <button onclick="search()">Search</button>
                </div>
            </div>

            <h2 class="section-title">Featured Hotels</h2>
            <div class="cards">
                <div class="card">
                    <img src="https://picsum.photos/400/200?1" />
                    <div class="card-content">
                        <h3>Seabreeze Grand</h3>
                        <p class="rating">⭐ 4.9</p>
                        <button>Book Now</button>
                    </div>
                </div>

                <div class="card">
                    <img src="https://picsum.photos/400/200?2" />
                    <div class="card-content">
                        <h3>Old Quarter Inn</h3>
                        <p class="rating">⭐ 4.7</p>
                        <button>Book Now</button>
                    </div>
                </div>

                <div class="card">
                    <img src="https://picsum.photos/400/200?3" />
                    <div class="card-content">
                        <h3>Skyline Premier</h3>
                        <p class="rating">⭐ 4.8</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>

            <h2 class="section-title">Top Rated Hotels</h2>
            <div class="cards" id="topHotels"></div>

        </div>

        // </div>
    )
}
