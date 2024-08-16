import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-60 relative z-50 ">
        {movies.NowPlaying && (
          <MovieList movies={movies.NowPlaying} title={"Now Playing"} />
        )}
        {movies.popularMovies && (
          <MovieList movies={movies.popularMovies} title={"Popular"} />
        )}
        {movies.topRatedMovies && (
          <MovieList movies={movies.topRatedMovies} title={"Top Rated"} />
        )}
        {movies.upcomingMovies && (
          <MovieList movies={movies.upcomingMovies} title={"Upcoming"} />
        )}
      </div>
    </div>
  );
};

export default SecondaryComponent;
