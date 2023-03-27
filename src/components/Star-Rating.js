import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating, onRate }) => {
  const handleClick = (value) => {
    onRate(value);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass =
      i <= rating ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500';
    stars.push(
      <span
        className={`cursor-pointer ml-1 fas fa-star ${starClass}`}
        key={i}
        onClick={() => handleClick(i)}
      ></span>
    );
  }

  return <>{stars}</>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
};

export default StarRating;







// import React from 'react'

// const Rating = ({ stars }) => {
//     const rating = [];
//     for (let i = 0; i < stars; i++) {
//       rating.push(
//         <svg
//           aria-hidden="true"
//           key={i}
//           className="w-5 h-5 text-yellow-400"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <title>Star</title>
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//         </svg>
//       );
//     }
//     return <div className="flex items-center mt-10">{rating}</div>;
//   };

// export default Rating