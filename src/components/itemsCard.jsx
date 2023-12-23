import React from "react";
import Figma from "/figma.png";
const itemsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mx-auto place-content-center md:grid-cols-3 lg:grid-cols-5">
      {Items.map((item, index) => (
        <div
          key={index}
          className="flex h-[200px] w-auto flex-col justify-between p-4 dark:bg-dark-cards"
        >
          <img src={item.img} alt={item.name} className="w-[15px] h-auto" />
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    img: "figma.png",
    name: "FIGMA",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default itemsCard;
