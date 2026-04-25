import React, { useState } from 'react';

export default function InteractiveRating({ onRatingChange }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRating = (value) => {
        setRating(value);
        if (onRatingChange) {
            onRatingChange(value); // Sends the data back to the main Hotels page
        }
    };

    return (
        <div className='flex items-center gap-2 mb-4'>
            <span className='font-medium text-gray-700'>Your rating:</span>
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        type="button"
                        key={star}
                        className="bg-transparent border-none outline-none cursor-pointer transition-transform active:scale-90 px-0.5"
                        onClick={() => handleRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                    >
                        <span
                            className={`text-2xl transition-colors duration-150 ${star <= (hover || rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                                }`}
                        >
                            {star <= (hover || rating) ? '★' : '☆'}
                        </span>
                    </button>
                ))}
            </div>

            {/* Visual indicator of selection */}
            <span className={`text-xs font-bold ml-2 uppercase transition-opacity ${rating > 0 ? 'opacity-100' : 'opacity-0'}`}>
                <span className='text-gray-400'>{rating} / 5</span>
            </span>
        </div>
    );
}