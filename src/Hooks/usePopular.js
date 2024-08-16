import { useDispatch } from "react-redux"
import { addpopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"


const usePopular = () => {

    const dispatch = useDispatch()

    const getNowPlaying = async () => {
      
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
      const json = await data.json();
      dispatch(addpopularMovies(json.results))
  
    }
  
    useEffect(() => {
      getNowPlaying();
    
      
    }, [])
}


export default usePopular;