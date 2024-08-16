import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import useGetTrailer from '../Hooks/useGetTrailer';

const MainComponent = () => {
  const movies = useSelector(store => store.movies?.NowPlaying);
  const MovieForTrailer = movies ? movies[getRandomInt(0,movies.length - 1 )] : null;

  const { original_title, overview, id } = MovieForTrailer || {};

  useGetTrailer(id);

  return (
    <div>
      {MovieForTrailer ? (
        <>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default MainComponent;
