import React, { useState } from 'react';
import Header from './Movie-Header'
import Image from './Movie-Image'
import Description from './Movie-Description'
import ReviewForm from './Review-Form'
import Rating from './Movie-Rating';

const StarRating = ({ rating }) => {
    const star = '★';
    const filledStars = star.repeat(Math.floor(rating));
    const emptyStars = star.repeat(5 - Math.floor(rating));
    return (
      <div>
        {filledStars}
        {emptyStars}
      </div>
    );
};

const Card = ({ title, imgURL, description, reviews }) => {
  const [movieReviews, setMovieReviews] = useState(reviews);
  
  const addReview = (author, reviewText, rating) => {
    const newReview = { author, review: reviewText, rating };
    setMovieReviews([...movieReviews, newReview]);
  };
    
  const onRate = (rating) => {
    console.log(`Selected rating: ${rating}`);
  };

    return (
        <div className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-5">
            <Header 
                title={title}
            />
            <Image 
            imgURL = {imgURL}
            />
            <Description 
            description={description}
            />
            <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div>
                <table className="rounded-lg overflow-hidden mb-5">
                    <tbody>
                        {movieReviews.map((review, idx) => (
                        <tr key={idx} style={{backgroundColor: idx % 2 === 0 ? '#334155' : ''}}>
                            <td>
                                <p className="mb-2 mt-4 ml-2 mr-2 text-gray-700 dark:text-gray-400 italic">
                                <StarRating 
                                    rating={review.rating} 
                                /> 
                                    <span className="block">{review.stars}</span>
                                    {review.review} 
                                </p>
                                <p className="mb-4 ml-2 mr-2 text-gray-700 dark:text-gray-400 uppercase">
                                    {review.author}  
                                </p>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <ReviewForm addReview={addReview} onRate={onRate} />
        </div>
        
      )
    }


export default Card
  