import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import Carousel from "./Carousel";
const TestimonialCard = ({ person }) => {
  return (
    <div
      data-aos="fade-up"
      duration="500"
      className="flex flex-col justify-between gap-3 p-5 border border-gray-200 rounded-lg text-light-p dark:text-dark-p dark:border-slate-900 dark:bg-dark-cards"
    >
      <div className="flex items-center justify-start gap-2">
        <img src={person.image} alt="" className="h-[50px] rounded-full" />
        <div>
          <h1 className="text-sm font-dark font-Accent text-blue">
            {person.name}
          </h1>
          <p className="text-xs font-normal">{person.relation}</p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 text-sm text-dark-s ">
        <FaDiscord />
        <FaFacebook />
        <FaTwitter />
      </div>
      <div></div>
      <p className="text-sm font-normal dark:font-light dark:text-dark-p text-light-p font-Roboto">
        {person.testimonial}
      </p>
      <p className="text-xs dark:font-light text-dark-s">{person.date}</p>
    </div>
  );
};

const TestimonialCards = () => {
  return (
    <div>
      <div className="flex-col items-center justify-center hidden w-full gap-5 my-10 md:flex lg:flex-row xl:px-32">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
          {Person.map((person, index) => (
            <div className="duration-500 hover:scale-105">
              <TestimonialCard key={index} person={person} />
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
          {Person.slice(0, 3).map((person, index) => (
            <SwiperSlide key={index}>
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
          {Person.slice(3).map((person, index) => (
            <SwiperSlide key={index}>
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
    image:
      "https://i.pinimg.com/564x/be/f3/62/bef36231be28b8c0bcd62d29bb7ca18f.jpg",
    name: "Kean",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "12/17/2023",
  },
  {
    image:
      "https://i.pinimg.com/564x/26/94/b8/2694b8e0e61e19620317a5307f56a03b.jpg",
    name: "Tajor",
    relation: "Friend",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
  {
    image:
      "https://i.pinimg.com/564x/c3/18/f6/c318f6ba10a18a4227b30394d79ad93f.jpg",
    name: "John Doe",
    relation: "Friend",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
  {
    image:
      "https://i.pinimg.com/564x/30/81/4e/30814e8ca05ce2b2db002cd77cce013e.jpg",
    name: "keann",
    relation: "Teammate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
  {
    image:
      "https://i.pinimg.com/736x/d4/0d/83/d40d830c171b3715688753f1478922a6.jpg",
    name: "Kin",
    relation: "Teammate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
  {
    image:
      "https://i.pinimg.com/564x/4a/42/a5/4a42a5c732474afcfd935cc46b34fc38.jpg",
    name: "Tajor",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
];

export default TestimonialCards;
