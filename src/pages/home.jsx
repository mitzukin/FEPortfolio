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
      <motion.div variants={container} initial="hidden" animate="show" >
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="absolute dark:top-96 gradient from-[#9333ea] to-[#0ea5e9] inset-0 blur-[200px] md:blur-[600px] dark:md:blur-[300px] "
        ></motion.div>
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
