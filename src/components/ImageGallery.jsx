import React, { useState } from 'react';

export default function ImageGallery() {
    // We need to always make this dynamic for all the pages that require this kind of function
    const images = ["src/assets/Image.png", "src/assets/Image1.png", "src/assets/Image2.png"];

    // Track the index of the image currently being viewed (null means closed)
    const [activeIndex, setActiveIndex] = useState(null);

    const openLightbox = (index) => setActiveIndex(index);
    const closeLightbox = () => setActiveIndex(null);

    const showNext = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className='flex flex-col sm:flex-row items-center justify-between mt-4 gap-4 px-1'>
            {/* THUMBNAILS */}
            <div className='flex gap-3'>
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => openLightbox(i)}
                        className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all shadow-sm active:scale-95 group"
                    >
                        <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                        {i === 2 && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-bold group-hover:bg-black/20 transition-colors">
                                +12
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* HINT TEXT */}
            <div className="flex items-center gap-2 text-gray-400">
                <span className="text-xs md:text-sm font-medium">Click to expand</span>
            </div>

            {/* LIGHTBOX OVERLAY */}
            {activeIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-8 right-8 text-white/70 text-4xl font-light hover:text-white transition-colors z-[110]"
                        onClick={closeLightbox}
                    >
                        &times;
                    </button>

                    {/* Navigation - Previous */}
                    <button
                        onClick={showPrev}
                        className="absolute left-4 md:left-10 text-white/50 hover:text-white text-5xl transition-all p-4 z-[110]"
                    >
                        &#8249;
                    </button>

                    {/* Main Image */}
                    <div className="relative max-w-5xl w-full flex flex-col items-center gap-4">
                        <img
                            src={images[activeIndex]}
                            alt="Enlarged view"
                            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                        {/* Image Counter */}
                        <p className="text-white/60 font-medium text-sm tracking-widest">
                            {activeIndex + 1} / {images.length}
                        </p>
                    </div>

                    {/* Navigation - Next */}
                    <button
                        onClick={showNext}
                        className="absolute right-4 md:right-10 text-white/50 hover:text-white text-5xl transition-all p-4 z-[110]"
                    >
                        &#8250;
                    </button>
                </div>
            )}
        </div>
    );
}