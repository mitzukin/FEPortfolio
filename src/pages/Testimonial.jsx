import React from "react";
import { RiSingleQuotesL } from "react-icons/ri";
import Testimonialcards from "../components/Testimonialcards";

const Testimonial = () => {
  return (
    <div className="relative pt-56 transition-all duration-300 ease-in-out font-primary bg-background-light dark:bg-background-dark">
      <div className="flex flex-col gap-10 px-2 font-light xl:flex-row text-light-p dark:text-dark-p lg:px-20">
        <div className="flex flex-col w-full mb-5 ">
          <p className="mb-5 font-Accent">My Testimonial</p>
          <div className="md:border-b  w-[400px]"></div>
        </div>
        <div className="relative">
          <span className="absolute top-0 flex -left-4">
            <RiSingleQuotesL
              size={40}
              className="translate-x-3 -translate-y-4"
            />
            <RiSingleQuotesL
              size={40}
              className="-translate-x-3 -translate-y-4"
            />
          </span>
          <p className="relative text-xl lg:text-3xl">
            &emsp; &emsp;Thrilled to share my experience with web development,
            where every project is a learning journey. The process of turning
            ideas into code has been both challenging and rewarding. Grateful
            for the opportunity to continually grow and contribute. Excited for
            what's ahead in my web development journey!
          </p>

          <p className="mt-10 lg:text-2xl ">- Jason Kean</p>
          <p className="text-sm">Aspiring to be a WebDeveloper</p>
        </div>
      </div>

      <div className="flex flex-col px-2 mt-32 font-light lg:mt-32 text-light-p dark:text-dark-p lg:px-20">
        <p className="text-5xl font-Accent text-blue">Testimonials</p>
      </div>

      <div className="pb-10 overflow-hidden lg:px-20">
        <Testimonialcards />
      </div>
      <div className="inset-3  top-32 z-0 Testimonial-Grad md:h-[500px] rounded-full blur-[200px] -left-96 w-[200px]  lg:w-[500px] absolute"></div>
        
      </div>
  );
};

export default Testimonial;
