import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainComponenet from "./MainComponenet";
import SecondaryComponent from "./SecondaryComponent";
import usePopular from "../Hooks/usePopular";
// import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

const gptFlag = useSelector((store) => store.gpt.showGptSearch)
 useNowPlayingMovies();
 usePopular();
//  useTopRated();
 useUpcoming();
  
  return (
    <div>
      <Header/>
    { gptFlag ?   <GptSearch/>:
    <>
     <MainComponenet/>
     <SecondaryComponent/>
     </>
   }
    </div>
  );
};

export default Browse;
