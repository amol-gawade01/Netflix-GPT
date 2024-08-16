import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({movies,title}) => {

  return (
      <div className='px-6 mt-6'>
        <h1 className='text-white text-2xl pb-2'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
            {
                movies.map(movie => 
                    <MovieCards poster={movie.poster_path} key={movie.id}/>
                )

            }
        </div>
        </div>
    </div>
  )
}

export default MovieList