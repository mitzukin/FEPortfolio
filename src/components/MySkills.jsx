import React from "react";
import ItemsCard from "./itemsCard";
import Header from "./header";
const MySkills = () => {
  const textItem = [
    {
      Head: "Ipsum",
      smallText: "Lorem",
      paragraph:
        "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    },
    {
      Head: "Ipsum",
      smallText: "Lorem",
      paragraph:
        "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    },
    {
      Head: "Ipsum",
      smallText: "Lorem",
      paragraph:
        "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    },
  ];
  return (
    <div className="bg-background-light font-primary px-3.5 pt-10 lg:px-20 dark:bg-background-dark text-light-p dark:text-dark-p">
      <div className="flex flex-col max-w-6xl gap-3">
        <h1 className="text-3xl md:text-7xl">
          Explore <strong className="text-teal">My Skills</strong> Unveiling a
          tapestry of Expertise and{" "}
          <strong className="text-blue">Enthusiasm</strong>
        </h1>
        <p className="pt-10 xl:pl-10">A Latin professor </p>
        <p className="pb-10 xl:pl-10">
          A Latin professor at Hampden-Sydney College in Virginia, looked up one
          of the more obscureprofessor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur,{" "}
        </p>
      </div>
      <div className="xl:px-20">
        <ItemsCard />
      </div>

      <div>
        {textItem.map((Textitem, index) => (
          <div key={index} className="items-center gap-16 p-4 xl:gap-80 lg:flex">
            <h1 className="my-10 text-5xl font-semibold font-Accent">
              {Textitem.Head}
            </h1>
            <p className="text-sm">{Textitem.smallText}</p>
            <p>{Textitem.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
