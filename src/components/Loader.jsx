import React from "react";
import { dot, i, s, u } from "../assets/images";

const Loader = () => {
  return (
    <div className="loading-container bg-transparent flex items-center gap-3 justify-center">
      <img className="u animate-pulse" src={u} alt="" />
      <div className="i-elements flex flex-col pb-12 gap-1">
        <img className="animate-bounce  " src={dot} alt="" />
        <img className="animate-pulse" src={i} alt="" />
      </div>
      <img className="s animate-pulse" src={s} alt="" />
    </div>
  );
};

export default Loader;
