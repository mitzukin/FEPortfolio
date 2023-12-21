import React from "react";
import { RiSingleQuotesL } from "react-icons/ri";
import Testimonialcards from "../components/Testimonialcards";

const Testimonial = () => {
  return (
    <div className="px-2 pt-56 transition-all duration-300 ease-in-out font-primary bg-background-light dark:bg-background-dark">
      <div className="flex flex-col font-light md:flex-row text-light-p dark:text-dark-p lg:px-20">
        <p className="w-1/2 mb-10">My Testimonial</p>
        <div className="relative">
          <span className="absolute top-0 flex -left-4">
            <RiSingleQuotesL
              size={40}
              className="translate-x-3 -translate-y-4"
            /><RiSingleQuotesL
              size={40}
              className="-translate-x-3 -translate-y-4"
            />
          </span>
          <p className="relative z-10 text-2xl lg:text-3xl">
            &emsp; &emsp;Thrilled to share my experience with web development,
            where every project is a learning journey. The process of turning
            ideas into code has been both challenging and rewarding. Grateful
            for the opportunity to continually grow and contribute. Excited for
            what's ahead in my web development journey!
          </p>

          <p className="mt-10 text-2xl ">Jason Kean</p>  
          <p>Aspiring to be a WebDeveloper</p>
        </div>
      </div>

      <div className="flex flex-col mt-32 font-light lg:mt-56 text-light-p dark:text-dark-p lg:px-20">
        <p className="font-semibold">Speak</p>
        <p className="text-4xl">Testimonials</p>
      </div>

      <div className="overflow-hidden lg:px-20">
        <Testimonialcards/>
      </div>
    </div>
  );
};

export default Testimonial;
