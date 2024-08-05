import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addMovieTrailer } from '../utils/moviesSlice';

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector(store => store.movies?.trailerVideo);
  const dispatch = useDispatch();

  const getMovies = useCallback(async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const json = await response.json();
      const filterData = json.results.filter(video => video.type === 'Trailer');
      const trailer = filterData[0];
      dispatch(addMovieTrailer(trailer));
    } catch (error) {
      console.error('Failed to fetch trailer:', error);
    }
  }, [movieId, dispatch]);

  useEffect(() => {
    if (movieId) {
      getMovies();
    }
  }, [movieId, getMovies]);

  return (
    <div className='overflow-hidden max-w-[100%] z-0'>
      <div className='relative pb-[56.25%] pt-[25px] w-[300%] left-[-100%] bottom-[80px]'>
        {trailer ? (
          <iframe
            className='aspect-video absolute top-0 left-0 w-[100%] h-[100%]'
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${trailer.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="YouTube Video Player"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default VideoBackground;
