import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import RogerImage from "/Roger.jpg";
import RosalynImage from "/Rosalyn.png";
import EzekielImage from "/Ezekiel.jpg";
import AdrianneImage from "/Adrianne.jpg";

const TestimonialCard = ({ person }) => {
  return (
    <div
      data-aos="fade-up"
      duration="500"
      className="flex flex-col min-h-[200px] justify-between gap-3 p-5 border border-gray-200 rounded-lg text-light-p dark:text-dark-p dark:border-slate-900 dark:bg-dark-cards"
    >
      <div className="flex items-center justify-start gap-2">
        <img src={person.image} alt="" className="h-[40px]  rounded-full" />
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
      <p className="overflow-hidden text-sm font-normal dark:font-light dark:text-dark-s text-light-s font-Roboto">
        {person.testimonial}
      </p>
    </div>
  );
};

const TestimonialCards = () => {
  return (
    <div>
      <div className="flex-col items-center justify-center hidden w-full gap-5 my-10 md:flex lg:flex-row xl:px-32">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
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
    image:
      "https://i.pinimg.com/564x/c3/18/f6/c318f6ba10a18a4227b30394d79ad93f.jpg",
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
      "Jason's had a talent for designs and many other things, characterized by an unwavering determination and creativity that consistently breathe life into each of your projects.",
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
    image: AdrianneImage,
    name: "Adrianne",
    relation: "Neighborhood Friend",
    testimonial:
      "Jason and I collaborated on a Front End project, and I'm thrilled to share his impactful contributions. His technical skills and teamwork greatly enhanced the project. Working with Jason was a pleasure due to his seamless cooperation and willingness to share information.",
    date: "12/17/2023",
  },
  {
    image: EzekielImage,
    name: "Ezekiel",
    relation: "Teammate",
    testimonial:
      "A front-end student who loves making user-friendly interfaces. Always ready to learn and contribute to cool projects. Excited to see their journey in design unfold",
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
