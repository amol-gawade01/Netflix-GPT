import React from 'react'
import { MOVIE_CARDS } from '../utils/constant'

const MovieCards = ({poster}) => {
  return (
    <div className='w-[200px] h-[200px] mr-4 '>
        <div>
          <img src={MOVIE_CARDS+poster}  alt='movie-img' className='w-[200px] h-[200px] rounded-md'/>
        </div>
    </div>
  )
}

export default MovieCards