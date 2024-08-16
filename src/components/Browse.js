import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainComponenet from "./MainComponenet";
import SecondaryComponent from "./SecondaryComponent";
import usePopular from "../Hooks/usePopular";
// import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";

const Browse = () => {


 useNowPlayingMovies();
 usePopular();
//  useTopRated();
 useUpcoming();
  
  return (
    <div className="bg-black">
      <Header/>
      <MainComponenet/>

   <SecondaryComponent/>
    </div>
  );
};

export default Browse;
