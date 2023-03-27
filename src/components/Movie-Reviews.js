import React from 'react'

const Reviews = (props) => {
  return (
    <div>
        <h3 className="text-xl font-semibold dark:text-white tracking-tight mb-2">
            Reviews
        </h3>
        <table className="rounded-lg overflow-hidden">
          <tbody>
            {props.reviews.map((movie, movieIdx) => (
              <tr key={movieIdx} style={{backgroundColor: movieIdx % 2 === 0 ? '#334155' : ''}}>
                <td>
                  <p className="mb-2 mt-4 ml-2 mr-2 text-gray-700 dark:text-gray-400 italic">
                    {movie.review} 
                  </p>
                  <p className="mb-4 ml-2 mr-2 text-gray-700 dark:text-gray-400 uppercase">
                    {movie.author}  
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Reviews