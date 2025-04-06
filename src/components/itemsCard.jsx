import React from "react";
import Figma from "../assets/figma.png";
import CanvaIcon from "../assets/CanvaIcon.png";
import HtmlIcon from "../assets/HtmlIcon.png";
import CssIcon from "../assets/CssIcon.png";
import MaterialUi from "../assets/MaterialUi.png";
import javascriptIcon from "../assets/javascriptIcon.png";
import reactvite from "../assets/reactvite.png"
import FramerIcon from "../assets/FramerIcon.png"
import Tailwindcss from "../assets/Tailwindcss.png"
import PhpIcon from "../assets/PhpIcon.png"
import Flowbite from "../assets/Flowbite.png"
import AnimateOnScroll from "../assets/AnimateOnScroll.png"
import Python from "../assets/Python.png"
import Mysql from "../assets/Mysql.png"
import Firebase from "../assets/Firebase.png"
const itemsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 py-10 mx-auto place-content-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
        </div>
      ))}
    </div>
  );
};

const Items = [
  {
    img: Figma,
    name: "FIGMA",
    description: "Where i created my UI DESIGN",
  },
  {
    img: CanvaIcon,
    name: "CANVA",
    description: "For my simple graphics like magazines and infographics",
  },
  {
    img: HtmlIcon,
    name: "HTML 5",
    description: "Where i started to learn in webdevelopment",
  },
  {
    img: CssIcon,
    name: "CSS",
    description: "Where i decide to make my website more attractive",
  },
  {
    img: MaterialUi,
    name: "MATERIAL UI",
    description:
      "This is for my library for more complex components that is new for me ",
  },
  {
    img: javascriptIcon,
    name: "JAVASCRIPT",
    description:
      "Vanilla Js is very simple for others but for me since i am a newbie it is hard for me",
  },
  {
    img: reactvite,
    name: "REACT + VITE",
    description: "This is the first framework that i have learn using it",
  },
  {
    img: FramerIcon,
    name: "FRAMER MOTION",
    description: "I use this when i'm developing this portfolio of mine",
  },
  {
    img: Tailwindcss,
    name: "TAILWINDCSS",
    description:
      "Tailwind is my very first framework that i learn to make my project more responsive",
  },
  {
    img: PhpIcon,
    name: "PHP",
    description: "I experience using it in my past project in school",
  },
  {
    img: Flowbite,
    name: "FLOWBITE",
    description:
      "I use flowbite too for my referrence too for its wonderful free components",
  },
  {
    img: AnimateOnScroll,
    name: "ANIMATE ON SCROLL",
    description:
      "This animate on scroll is the best animation for me as of now since i am new to Framer motion",
  },
  {
    img: Python,
    name: "PYTHON",
    description:
      "Python are good when i started to learn the basic since it is more shorter syntax than other languages",
  },
  {
    img: Mysql,
    name: "MYSQL",
    description:
      "I use Mysql and Phpmyadmin for our projects before in my 3rd Year",
  },
  {
    img: Firebase,
    name: "FIREBASE",
    description:
      "Firebase is my second database that i use for our login Authentication and some basic databases",
  },
];

export default itemsCard;
