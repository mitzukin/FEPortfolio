import React from "react";
import School from "../components/School";
import MySkills from "../components/MySkills";
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

const about = () => {
  return (
    <>  
    <div className="py-10 bg-background-light dark:bg-background-dark">
    <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="absolute md:left-56 dark:top-[300px] h-[100px] w-[100px] /AboutGradient/ inset-0 blur-[200px] md:blur-[100px] dark:md:blur-[50px] "
        ></motion.div>
      <School />
      <MySkills/>
      </div>
    </>
  );
};

export default about;
