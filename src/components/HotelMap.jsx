import React from 'react';

export default function HotelMap({ location }) {
    // Encode the location string to handle spaces and special characters safely in a URL
    const encodedLocation = encodeURIComponent(location);
    const mapUrl = `https://maps.google.com/maps?q=${encodedLocation}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="w-full h-40 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner group relative">
            <iframe
                title="Hotel Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={mapUrl}
                className="grayscale-[0.1] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
            ></iframe>

            {/* Visual touch: a subtle inner gradient overlay to match a premium UI */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] rounded-2xl"></div>
        </div>
    );
}