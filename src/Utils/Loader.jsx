import React from "react";
import "./loader.scss";
const Loader = () => {
  return (
    <div className="w-full h-screen scene dark:bg-background-dark">
      <div className="absolute text-sm translate-y-14 glitch-wrapper font-Accent text-DarkBlue">
        <div>Loading . . .</div>
      </div>

      <div className="relative cube-wrapper">
        <div className="cube">
          <div className="cube-faces">
            <div className="shadow cube-face"></div>
            <div className="cube-face bottom"></div>
            <div className="cube-face top"></div>
            <div className="cube-face left"></div>
            <div className="cube-face right"></div>
            <div className="cube-face back"></div>
            <div className="cube-face front"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
