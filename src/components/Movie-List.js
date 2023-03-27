import React from 'react'
import { useState } from 'react'
import Card from './Movie-Card'



const MovieList = () => {

    const [movies, setMovies] = useState(
 [
            {
                id: 0,
                title: 'Jurassic Park',
                imgURL: "https://cdn.shopify.com/s/files/1/0747/3829/products/HP3040_e8e2c6c7-c2af-4655-9ed4-dcf48f055633_1024x1024.jpg?v=1571445096",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                reviews: 
                    [
                    {
                    author: 'Jim',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                    stars: '★★★',
                    },
                    {
                    author: 'james',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                    stars: '★★★★',
                    },
                    ]
            },
            {
                id: 1,
                title: 'Men in Black',
                imgURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/618Uf1CmV4L._AC_UF894,1000_QL80_.jpg",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                reviews: 
                    [
                    {
                    author: 'Fred',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                    stars: '★★★★★',
                    },
                    {
                    author: 'Bob',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                    stars: '★★',
                    },
                    ]
            },
            {
                id: 3,
                title: 'Moon',
                imgURL: "https://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_.jpg",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                reviews: 
                [
                    {
                    author: 'Fred',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                    stars: '★★★★★',
                    },
                    {
                    author: 'Bob',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                    stars: '★★',
                    },
                    ]
            },
            {
                id: 4,
                title: 'Aliens',
                imgURL: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91TYB8gep+L._AC_SY741_.jpg",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                reviews: 
                [
                    {
                    author: 'Fred',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                    stars: '★★★★★',
                    },
                    {
                    author: 'Bob',
                    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum inventore perspiciatis, ullam ut neque fugiat!',
                    stars: '★★',
                    },
                    ]
            }
        ]
    )
  return (
    <div className="flex flex-wrap">
        {movies.map((movie, movieIdx) => (
        <Card 
        key={movieIdx}
        title={movie.title}
        imgURL={movie.imgURL}
        description={movie.description}
        reviews={movie.reviews}/>
        ))}
    </div>
  )
}



export default MovieList