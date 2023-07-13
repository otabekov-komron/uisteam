import React from "react";

const Loading = () => {
  return (
    <div class="loader">
      <div className="lines">
        <div class="line-1 line"></div>
        <div class="line-2 line"></div>
        <div class="line-3 line"></div>
        <div class="line-4 line "></div>
        <div class="line-5 line"></div>
      </div>
      <div class="horizontal-line"></div>
    </div>
  );
};

export default Loading;
