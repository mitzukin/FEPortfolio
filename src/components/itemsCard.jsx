import React from "react";
const itemsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 py-10 mx-auto xl:px-10 place-content-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Items.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex border dark:border-none h-[150px] w-auto flex-col justify-between p-4 dark:bg-dark-cards"
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
