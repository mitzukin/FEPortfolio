import React from "react";
import ResumeButton from "../components/ResumeButton";
import HeroText from "/WebsiteIcon.png";
import Profile from "/KinProfile.png";
import ShapesRandom from "../components/ShapesRandom";
import { motion } from "framer-motion";




const HeroSection = () => {
  return (
    
    <div className="flex items-center justify-center h-screen pt-20 transition-all duration-300 ease-in-out font-primary bg-background-light dark:bg-background-dark">
      <div  className="flex w-full relative flex-col items-center justify-between h-[600px] md:h-[750px]">
        <div className="flex flex-col items-center justify-center gap-2 mt-16 text-center md:gap-8 text-light-p">
          <div className="absolute xl:w-[50rem]  top-14 px-3 xl:top-28">
            <img src={HeroText} alt="" className="" />
          </div>
          <p className="md:text-1xl font-Accent font-thin tracking-[10px] translate-x-1 md:tracking-[30px] dark:text-dark-p">
          FRONT END
          </p>
          <h1 className="text-3xl font-bold Designer dark:text-teal font-Accent text-DarkBlue">
            & UI DESIGNER
          </h1>
          <p className="px-3 text-3xl font-semibold font-Accent md:text-6xl text-light-p dark:text-dark-p">
            Step Into The World Of Mine
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
          <img src={Profile} alt="" className="h-[50px]" />
          <h1 className="translate-x-4 tracking-trackmod dark:text-dark-p">
            {" "}
            KIN.DEV
          </h1>
          <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <ResumeButton />
          </motion.div>
        </div>
        <div className="flex flex-col items-start justify-between w-full gap-10 px-3 text-xs font-light font-Accent dark:text-dark-p lg:px-20 md:text-sm md:flex-row">
          <p className="hidden md:flex">LEARN</p>
          <div className="hidden w-full translate-y-2 border-b border-blue dark-border-dark-p md:flex"></div>
          <div className="flex justify-between w-full md:w-auto md:gap-10">
            <p>EXPLORE</p>
            <p>BELIEVE</p>
            <p>ACHIEVE</p>
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
