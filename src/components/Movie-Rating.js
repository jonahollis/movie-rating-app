import React, { useState } from 'react';


const Rating = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onRate(value);
  }

  return (
    <div className="flex mb-2">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const starClass = starValue <= rating ? "text-yellow-400" : "text-gray-300";
        return (
          <svg key={index} onClick={() => handleClick(starValue)} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 cursor-pointer ${starClass}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 14.472l-4.282 2.16.815-4.74L2.99 8.328l4.512-.654L10 3.766l2.498 4.908 4.512.654-3.543 3.564.815 4.74L10 14.472z" clipRule="evenodd" />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;