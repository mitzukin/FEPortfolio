import React from "react";
import ItemsCard from "./itemsCard";
import { motion } from "framer-motion";
const MySkills = () => {
  const textItem = [
    {
      Head: "Passion",
      smallText: "1",
      paragraph:
        "I love what I do. It's more than a job—it's my passion. This enthusiasm pushes me to always learn and do better. It turns challenges into chances for success. In every project, my passion keeps me dedicated and focused on making a real impact.",
    },
    {
      Head: "Dedicated",
      smallText: "2",
      paragraph:
        "Dedication is the backbone of who I am. It's my commitment to putting in the effort, staying focused, and giving my best in everything I undertake. This steadfast approach is more than just a quality—it's a principle that shapes my work ethic and drives me towards achieving meaningful results.",
    },
    {
      Head: "Continuous Learning",
      smallText: "3",
      paragraph:
        "I thrive on continuous learning—it's my ongoing journey of curiosity and growth. Embracing new knowledge, skills, and perspectives is not just a habit but a fundamental part of my professional identity. It keeps me adaptable, inspired, and always ready to navigate the ever-evolving landscape of knowledge in my pursuit of excellence.",
    },
  ];
  return (
    <div className="relative bg-background-light font-primary px-3.5 pt-10 lg:px-20 dark:bg-background-dark text-light-p dark:text-dark-p">
      <div className="flex flex-col max-w-6xl gap-3">
        <h1
          className="text-3xl md:text-7xl"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Discover <strong className="text-teal">My Skills</strong> I showcase a
          canvas of expertise and
          <strong className="text-blue"> Enthusiasm</strong>
        </h1>
        <p className="pt-10 " data-aos="fade-up" data-aos-duration="500">
          This is a collection of my experiences using it.{" "}
        </p>
        <p className="pb-10 " data-aos="fade-up" data-aos-duration="500">
          Even though I have experience using it, I am still seeking ways to
          improve my skills and knowledge. I find that hands-on practice is more
          effective than just reading and analyzing.{" "}
        </p>
      </div>
      <div className="xl:px-20">
        <ItemsCard />
      </div>

      <div>
        {textItem.map((Textitem, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="items-start gap-16 overflow-hidden lg:p-10 lg:items-center xl:gap-80 lg:flex"
          >
            <h1 className="my-10 text-2xl font-semibold lg:text-5xl font-Accent">
              {Textitem.Head}
            </h1>
            <p className="pb-2 text-sm text-dark-s">{Textitem.smallText}</p>
            <p>{Textitem.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
