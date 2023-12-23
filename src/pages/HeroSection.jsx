import React from "react";
import ResumeButton from "../components/ResumeButton";
import HeroText from "/WebsiteIcon.png";
import Profile from "/KinProfile.png";
import ShapesRandom from "../components/ShapesRandom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen pt-20 transition-all duration-300 ease-in-out font-primary bg-background-light dark:bg-background-dark">
      <div className="flex w-full relative flex-col items-center justify-between h-[600px] md:h-[750px]">
        <div className="flex flex-col items-center justify-center gap-2 mt-16 text-center md:gap-8 text-light-p">
          <div className="absolute xl:w-[50rem]  top-14 px-3.5 xl:top-28">
            <img
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              src={HeroText}
              alt=""
              className=""
            />
          </div>
          <div className="translate-x-2">
            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="500"
              data-aos-offset="0"
              className="md:text-1xl font-Accent font-light tracking-[10px]  md:tracking-[10px] dark:text-dark-p"
            >
              FRONT END
            </p>
          </div>
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="700"
            className="text-3xl font-bold Designer dark:text-teal font-Accent text-DarkBlue"
          >
            & UI DESIGNER
          </h1>
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="3900"
            data-aos-offset="0"
            className="px-3.5 md:font-semibold text-1xl font-Accent md:text-6xl text-dark-p dark:text-dark-p"
          >
            Step Into The World Of Mine
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mb-5 text-center">
          <img
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1200"
            data-aos-offset="0"
            src={Profile}
            alt=""
            className="h-[50px] w-[50px] Kinprofile"
          />
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1500"
            className="text-center dark:text-dark-p"
          >
            K&emsp;I&emsp;N&emsp;.&emsp;D&emsp;E&emsp;V
          </h1>
          <motion.div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1700"
            data-aos-offset="0"
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ResumeButton />
          </motion.div>
        </div>
        <div className="flex -translate-y-5 flex-col items-start justify-between w-full gap-10 px-3.5 text-xs font-light font-Accent dark:text-dark-p lg:px-20 md:text-sm md:flex-row">
          <p className="hidden md:flex">LEARN</p>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="flex justify-between w-full md:w-auto md:gap-10"
          >
            <p>EXPLORE</p>
            <p>BELIEVE</p>
            <p>ACHIEVE</p>DDF
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
