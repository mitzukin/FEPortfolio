import React from "react";
import HeroSection from "./HeroSection";
import ToolsSection from "./ToolsSection";
import Testimonial from "./Testimonial";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Home = () => {
  return (
    <>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="absolute gradient inset-20 blur-[100px] h-[200px]  w-[200px] lg:h-[200px]  lg:w-[200px] rounded-full md:blur-[100px] dark:md:blur-[100px] "
        ></motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="absolute right-0 top-96 gradient2 blur-[100px] h-[200px]  w-[200px]  lg:h-[400px]  lg:w-[500px] rounded-full md:blur-[150px] dark:md:blur-[100px] "
        ></motion.div>
        <div class="parent inset-0 absolute opacity-5  dark:opacity-40 ">
          <div class="magicpattern h-[100%] w-[100%] " />
        </div>
        <motion.div variants={item}>
          <HeroSection />
        </motion.div>
        <motion.div variants={item}>
          <ToolsSection />
        </motion.div>
        <motion.div variants={item}>
          <Testimonial />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
