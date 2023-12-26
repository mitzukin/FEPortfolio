import React from "react";
const itemsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 py-10 mx-auto xl:px-10 place-content-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Items.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col w-auto gap-4 p-4 border rounded-lg dark:border-none justify-evenly dark:bg-dark-cards"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-[25px] md:w-[40px] h-auto"
          />
          <h3 className="font-semibold dark:text-dark-p">{item.name}</h3>
          <p className="text-xs dark:text-dark-s">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const Items = [
  {
    img: "figma.png",
    name: "FIGMA",
    description: "Where i created my UI DESIGN",
  },
  {
    img: "CanvaIcon.png",
    name: "CANVA",
    description: "For my simple graphics like magazines and infographics",
  },
  {
    img: "HtmlIcon.png",
    name: "HTML 5",
    description: "Where i started to learn in webdevelopment",
  },
  {
    img: "CssIcon.png",
    name: "CSS",
    description: "Where i decide to make my website more attractive",
  },
  {
    img: "MaterialUi.png",
    name: "MATERIAL UI",
    description:
      "This is for my library for more complex components that is new for me ",
  },
  {
    img: "javascriptIcon.png",
    name: "JAVASCRIPT",
    description:
      "Vanilla Js is very simple for others but for me since i am a newbie it is hard for me",
  },
  {
    img: "reactvite.png",
    name: "REACT + VITE",
    description: "This is the first framework that i have learn using it",
  },
  {
    img: "FramerIcon.png",
    name: "FRAMER MOTION",
    description: "I use this when i'm developing this portfolio of mine",
  },
  {
    img: "Tailwindcss.png",
    name: "TAILWINDCSS",
    description:
      "Tailwind is my very first framework that i learn to make my project more responsive",
  },
  {
    img: "PhpIcon.png",
    name: "PHP",
    description: "I experience using it in my past project in school",
  },
  {
    img: "Flowbite.png",
    name: "FLOWBITE",
    description:
      "I use flowbite too for my referrence too for its wonderful free components",
  },
  {
    img: "AnimateOnScroll.png",
    name: "ANIMATE ON SCROLL",
    description:
      "This animate on scroll is the best animation for me as of now since i am new to Framer motion",
  },
  {
    img: "Python.png",
    name: "PYTHON",
    description:
      "Python are good when i started to learn the basic since it is more shorter syntax than other languages",
  },
  {
    img: "Mysql.png",
    name: "MYSQL",
    description:
      "I use Mysql and Phpmyadmin for our projects before in my 3rd Year",
  },
  {
    img: "Firebase.png",
    name: "FIREBASE",
    description:
      "Firebase is my second database that i use for our login Authentication and some basic databases",
  },
  
];

export default itemsCard;
