import Profile from "/KinProfile.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const TestimonialCard = ({ person }) => {
  return (
    <div className="flex flex-col justify-between gap-5 p-5 border rounded-lg text-light-p dark:text-dark-p dark:border-none dark:bg-dark-cards">
      <div className="flex items-center justify-start gap-2">
        <img src={person.image} alt="" className="h-[50px]" />
        <div>
          <h1 className="text-xl font-light">{person.name}</h1>
          <p className="text-xs font-light">{person.relation}</p>
        </div>
      </div>
      <p className="text-sm font-light">{person.testimonial}</p>
      <p className="text-xs font-light text-dark-s">{person.date}</p>
    </div>
  );
};

const TestimonialCards = () => {
  return (
    <div>
      <div className="flex-col items-center justify-center hidden w-full gap-10 px-2 my-10 md:flex lg:flex-row xl:px-20">
        <div className="xl:w-1/4">
          <p className="my-2 text-5xl text-start font-secondary text-blue">
            Transforming Visions into Digital Realities
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 ">
          {Person.map((person, index) => (
            <TestimonialCard key={index} person={person} />
          ))}
        </div>
      </div>
      <div className="px-2 my-10 md:hidden">
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
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {Person.map((person, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard person={person} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="font-light text-center text-light-p dark:text-dark-p">"I express gratitude to them for consistently supporting me."</p>
    </div>
  );
};

const Person = [
  {
    image: Profile,
    name: "John Doe",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
  {
    image: Profile,
    name: "Rosalyn",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
  {
    image: Profile,
    name: "Kin",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
  {
    image: Profile,
    name: "Tajor",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
  {
    image: Profile,
    name: "John Doe",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
  {
    image: Profile,
    name: "Rosalyn",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    date: "12/17/2023",
  },
];

export default TestimonialCards;
