import React, { useEffect } from "react";
import ResumeButton from "../components/ResumeButton";
import HeroText from "/WebsiteIcon.png";
import Profile from "/KinProfile.png";
import ShapesRandom from "../components/ShapesRandom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen transition-all duration-300 ease-in-out font-primary bg-background-light dark:bg-background-dark">
      <div className="flex relative flex-col items-center justify-between h-[400px] md:h-[500px]">
        <div className="flex flex-col items-center justify-center gap-2 text-center md:gap-6 text-light-p">
          <div className="absolute xl:w-[50rem]  top-10 px-3 xl:top-11">
            <img src={HeroText} alt="" className="" />
          </div>
          <p className="md:text-3xl font-light translate-x-4 tracking-[25px] dark:text-dark-p">
            FRONT END
          </p>
          <h1 className="text-3xl font-bold z-2 Designer dark:text-teal font-secondary text-DarkBlue">
            & UI DESIGNER
          </h1>
          <p className="px-3 text-sm font-light md:text-lg dark:text-dark-p">
            Press spacebar, enter a hexcode or change theHSL values to create a
            custom color scale
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <img src={Profile} alt="" className="h-[60px]" />
          <h1 className="translate-x-4 tracking-trackmod dark:text-dark-p">
            {" "}
            KIN.DEV
          </h1>
          <div>
            <ResumeButton />
          </div>
        </div>
      </div>

      <div>
        <ShapesRandom />
      </div>
    </div>
  );
};

export default Home;
