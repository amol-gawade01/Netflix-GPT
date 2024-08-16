import  { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constant';

const useGetTrailer = (id) => {
   
    const dispatch = useDispatch();
  
    const getMovies = useCallback(async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
        const json = await response.json();
        const filterData = json.results.filter(video => video.type === 'Trailer');
        const trailer = filterData[0];
        dispatch(addMovieTrailer(trailer));
      } catch (error) {
        console.error('Failed to fetch trailer:', error);
      }
    }, [id, dispatch]);
  
    useEffect(() => {
      if (id) {
        getMovies();
      }
    }, [id, getMovies]);
}

export default useGetTrailer