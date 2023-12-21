import React from "react";
import ResumeButton from "../components/ResumeButton";
import HeroText from "/WebsiteIcon.png";
import Profile from "/KinProfile.png";
import ShapesRandom from "../components/ShapesRandom";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen transition-all duration-300 ease-in-out font-primary bg-background-light dark:bg-background-dark">
      <div className="flex w-full relative flex-col items-center justify-between h-[550px] md:h-[750px]">
        <div className="flex flex-col items-center justify-center gap-2 mt-10 text-center md:gap-6 text-light-p">
          <div className="absolute xl:w-[50rem]  top-16 px-3 xl:top-16">
            <img src={HeroText} alt="" className="" />
          </div>
          <p className="md:text-3xl font-light translate-x-4 tracking-[25px] dark:text-dark-p">
            FRONT END
          </p>
          <h1 className="text-3xl font-bold Designer dark:text-teal font-secondary text-DarkBlue">
            & UI DESIGNER
          </h1>
          <p className="px-3 text-sm font-thin tracking-[10px] md:text-lg dark:text-dark-p">
            Step Into The World Of Mine
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
          <img src={Profile} alt="" className="h-[50px]" />
          <h1 className="translate-x-4 tracking-trackmod dark:text-dark-p">
            {" "}
            KIN.DEV
          </h1>
          <div>
            <ResumeButton />
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-full gap-2 px-3 text-xs font-light dark:text-dark-p lg:px-20 md:text-sm md:flex-row">
          <p className="hidden md:flex">Lorem Ipsum</p>
          <div className="flex justify-between w-full md:w-auto md:gap-10">
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div>
        <ShapesRandom />
      </div>
    </div>
  );
};

export default HeroSection;
