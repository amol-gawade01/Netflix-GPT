import React from "react";
import { BACKGROUND_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import LangConst from "../utils/languageConstant";

const GptSearchBar = () => {
  const lang = useSelector(store => store.config.currentLang);

  return (
      <div className="w-full h-[50%]">
        <div className="-z-10 absolute">
          <img
            className="brightness-50 "
            src={BACKGROUND_URL}
            alt="net-bg"
          ></img>
        </div>
        <div className="">
        <form className="flex justify-center pt-[10%] ">
            <input type="text" placeholder={LangConst[lang].placeholderText} className="p-3 mr-5 rounded-lg w-[600px]"></input>
            <button className="bg-red-600 text-white p-3 rounded-lg">{LangConst[lang].search}</button>
        </form>
        </div>
      </div>
  );
};

export default GptSearchBar;
