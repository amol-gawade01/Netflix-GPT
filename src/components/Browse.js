import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainComponenet from "./MainComponenet";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {

 useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
      <MainComponenet/>
      <SecondaryComponent/>
    </div>
  );
};

export default Browse;
