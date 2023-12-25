import React from "react";
import AboutCard from "../components/aboutCards";

const School = () => {
  return (
    <div className="flex flex-col py-10 text-light-p dark:text-dark-p lg:px-20 px-3.5 justify-center bg-background-light dark:bg-background-dark">
      <div className="relative flex flex-col justify-between gap-10 md:flex-row items">
        <div data-aos="fade-up" data-aos-duration="500">
          <p className="py-1 text-xs font-Accent lg:translate-x-4 tracking-[50px] text-light-p dark:text-dark-p ">
            PAGE
          </p>
          <p className="mb-10 text-4xl text-up md:text-7xl font-Accent text-DarkBlue ">
            ABOUT
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="hidden text-sm md:flex font-primary">The page will show who i am</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex flex-row gap-2 lg:w-1/2 xl:w-auto">
          <div className="flex flex-col gap-2 -translate-y-5">
            <div data-aos="fade-right" data-aos-duration="800">
              <AboutCard
                year="Senior High School"
                location="80 Shaw Blvd"
                date="July 2018 - March 2020"
                school="Jose Rizal University (JRU)"
                color="#5844D7"
                fontColor="#FFFFFF"
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <AboutCard
                year="College"
                location="Boni Ave, Mandaluyong, 1550 Metro Manila"
                date="July 2021"
                school="Highway Hills Integrated School"
                color="#FFFFFF"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 translate-y-5">
            <div data-aos="fade-down" data-aos-duration="1500">
              <AboutCard
                year="College"
                location="Boni Ave, Mandaluyong, 1550 Metro Manila"
                date="July 2021"
                school="Rizal Technological University (RTU)"
                color="#FFFFFF"
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="w-full h-[250px] md:h-[350px] rounded-lg aboutpicture"></div>
            </div>
          </div>
        </div>
        <div className="mt-16 translate-x-0 md:pl-5 text-light-p dark:text-dark-p xl:w-auto lg:w-1/2">
          <div className="flex lg:w-[480px] flex-col items-start font-primary">
            <div>
              <p
                className="text-2xl font-Accent dark:text-teal"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Allow me to introduce myself
              </p>
            </div>
            <div>
              <p
                className="font-light tracking-[10px] mt-10"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Hello, I am
              </p>
              <h1
                className="mt-2 text-2xl font-Accent text-blue"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                Jason
              </h1>
            </div>
            <div>
              <p className="mt-5 " data-aos="fade-up" data-aos-duration="1200">
                Currently a 3rd year college student who aspire to be a
                <strong className="px-2 text-blue">Website Developer</strong>{" "}
                and a{" "}
                <strong className="px-2 text-blue">UI/UX Designer.</strong>
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-10 mb-10 font-light ">
              <div
                data-aos="fade-up"
                data-aos-duration="900"
                className="flex items-center justify-start gap-3 font-semibold duration-300 hover:translate-x-4"
              >
                <p className="text-lg ">01</p>
                <div className="w-12 border-b-2 border-light-s"></div>
                <p>Designer</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1700"
                className="flex items-center justify-start gap-3 font-semibold duration-300 hover:translate-x-4"
              >
                <p className="text-lg ">02</p>
                <div className="w-12 border-b-2 border-light-s"></div>
                <p>Developer</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1900"
                className="flex items-center justify-start gap-3 font-semibold duration-300 hover:translate-x-4"
              >
                <p className="text-lg ">03</p>
                <div className="w-12 border-b-2 border-light-s"></div>
                <p>Musician</p>
              </div>
            </div>
            <div>
              <p data-aos="fade-up" data-aos-duration="900">
                These skills are not just challenges for me – they're
                exhilarating adventures. I find immense joy in pushing my
                limits, embracing the difficulty, and emerging on the other side
                with newfound expertise and satisfaction. It's in these
                challenges that I discover the true thrill of what I do.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
