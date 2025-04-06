import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import RogerImage from "../assets/Roger.jpg";
import RosalynImage from "../assets/Rosalyn.png";
import EzekielImage from "../assets/Ezekiel.jpg";
import AdrianneImage from "../assets/Adrianne.jpg";
import RobertImage from "../assets/Robert.jpg";
import JeroneImage from "../assets/Jerone.jpg";

const TestimonialCard = ({ person }) => {
  return (
    <div
      data-aos="fade-up"
      duration="500"
      className="flex flex-col min-h-[200px]  justify-between gap-3 p-5 border border-gray-200 rounded-lg text-light-p dark:text-dark-p dark:border-slate-900 dark:bg-dark-cards"
    >
      <div className="flex items-center justify-start gap-2">
        <div className="p-[2px] rounded-full bg-DarkBlue icon">
        <img src={person.image} alt="" className="h-[40px]  rounded-full " />
        </div>
        <div>
          <h1 className="text-sm font-dark font-Accent text-blue">
            {person.name}
          </h1>
          <p className="text-xs font-normal">{person.relation}</p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 text-sm text-light-s dark:text-dark-s ">
        <FaFacebook />
        <FaTwitter />
      </div>
      <div></div>
      <p className="overflow-hidden text-sm font-normal transition rounded-lg md:line-clamp-3 hover:line-clamp-none dark:font-light dark:text-dark-s text-light-s font-Roboto ">
        {person.testimonial}
      </p>
    </div>
  );
};

const TestimonialCards = () => {
  return (
    <div className="">
      <div className="flex-col items-center justify-center hidden w-full gap-5 my-10 md:flex lg:flex-row xl:px-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {Person.map((person, i) => (
            <div className="duration-500 hover:scale-105">
              <TestimonialCard key={i} person={person} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 md:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {Person.slice(0, 3).map((person, j) => (
            <SwiperSlide key={j}>
              <TestimonialCard person={person} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="my-5 md:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {Person.slice(3).map((person, k) => (
            <SwiperSlide key={k}>
              <TestimonialCard person={person} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-xs text-center md:hidden dark:text-teal font-Accent">
        Swipe To See More
      </p>

      <p className="mt-5 text-center font-Accent text-DarkBlue">
        "I express gratitude to them for consistently supporting me."
      </p>
    </div>
  );
};

const Person = [
  {
    image: RobertImage,
    name: "John Robert",
    relation: "Office In Charge in Comfoods",
    testimonial:
      "While overseeing operations at Factory Comfoods, working with with Jason has been remarkable. His strong work ethic and unwavering dedication truly set him apart.",
    date: "12/17/2023",
  },
  {
    image: RosalynImage,
    name: "Rosalyn",
    relation: "College Classmate",
    testimonial:
      "He had a talent for designs and many other things, characterized by an unwavering determination and creativity that consistently breathe life into each of your projects.",
    date: "12/17/2023",
  },

  {
    image: EzekielImage,
    name: "Ezekiel",
    relation: "Friend",
    testimonial:
      "A front-end student who loves making user-friendly interfaces. Always ready to learn and contribute to cool projects. Excited to see their journey in design unfold",
    date: "12/17/2023",
  },
  {
    image: AdrianneImage,
    name: "Adrianne",
    relation: "Friend",
    testimonial:
      "Jason and I collaborated on a Front End project, and I'm thrilled to share his impactful contributions. His technical skills and teamwork greatly enhanced the project. Working with Jason was a pleasure due to his seamless cooperation and willingness to share information.",
    date: "12/17/2023",
  },

  {
    image: RogerImage,
    name: "Roger ",
    relation: "College Classmate",
    testimonial:
      "Working with my friend Jason has been an awesome experience! He's not just hardworking but also a design genius. His creativity and knack for web development always attracts my eye. If you need a talented and passionate designer, Jason is your go-to guy.",
    date: "12/17/2023",
  },
  {
    image: JeroneImage,
    name: "Jerone",
    relation: "Friend",
    testimonial:
      "I can vouch for the fact that his innovative thinking, strong work ethic, and problem-solving abilities were crucial to reaching objectives. Their constant delivery of excellent outcomes made them a valuable part of the team.",
    date: "12/17/2023",
  },
];

export default TestimonialCards;
