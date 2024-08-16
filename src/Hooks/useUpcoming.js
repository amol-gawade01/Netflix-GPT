import { useDispatch } from "react-redux"
import {  addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"


const useUpcoming = () => {

    const dispatch = useDispatch()

    const getNowPlaying = async () => {
      
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results))
  
    }
  
    useEffect(() => {
      getNowPlaying();
    
      
    }, [])
}


export default useUpcoming;