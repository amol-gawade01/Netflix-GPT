import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainComponenet = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  const movies = useSelector(store => store.movies?.NowPlaying)
  if(!movies) return ;
  const MovieForTrailer = movies[getRandomInt(0,12)];
  
  const {original_title,overview,id} = MovieForTrailer;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainComponenet