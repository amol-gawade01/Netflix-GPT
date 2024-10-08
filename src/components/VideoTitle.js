import React, { useState } from 'react';

const VideoTitle = ({ title, overview }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className='absolute px-[30px] w-full my-[300px] pb-[250px]  mb-5  z-30 bg-gradient-to-t from-black '
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className='text-white font-bold text-4xl mb-2'>
        {title}
      </h1>
      <div className={`transition-all duration-300 ${isHovered ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
        <p className='text-lg text-white mb-2 '>
          {overview}
        </p>
      </div>
      <div className={`transition-all duration-300 ${isHovered ? 'mt-4' : 'mt-0'}`}>
        <button className='text-black bg-white font-semibold px-4 py-3 rounded-lg mr-4'>Play</button>
        <button className='text-white font-semibold bg-gray-500 bg-opacity-50 px-4 py-3 rounded-lg'>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
