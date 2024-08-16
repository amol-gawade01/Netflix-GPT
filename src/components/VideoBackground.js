import React from 'react';
import { useSelector } from 'react-redux';

const VideoBackground = () => {
  const trailer = useSelector(store => store.movies?.trailerVideo);

  return (
    <div className='overflow-hidden max-w-[100%] z-0 '>
      <div className='relative pb-[56.25%] pt-[25px] w-[300%] left-[-100%] bottom-[80px]'>
        {trailer ? (
          <>
            <iframe
              className='aspect-video absolute top-0 left-0 w-full h-full'
              src={`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${trailer.key}&disablekb=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="YouTube Video Player"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ pointerEvents: 'none' }} // Disable pointer events on iframe
            ></iframe>
            {/* Invisible overlay to prevent interactions */}
            <div 
              className='absolute top-10 left-0 w-full h-full ' 
              style={{ pointerEvents: 'auto', backgroundColor: 'transparent' }} // Ensure pointer events on the overlay
            ></div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default VideoBackground;
