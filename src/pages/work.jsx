// src/components/Work.js

import React from "react";
import Carousel from "../components/Carousel";
const Work = () => {
  return (
    <div className="py-10 px-3.5 lg:px-20 pt-10 font-Accent text-light-p dark:text-dark-p bg-background-light dark:bg-background-dark">
      <p className="text-xl font-thin md:pt-10">Discover</p>
      <h1 className="text-3xl md:text-5xl font-light max-w-[900px] ">
        Projects <strong className="font-semibold text-teal">Showcasing</strong>{" "}
        a Collection of My{" "}
        <strong className="font-semibold text-blue">Achievements</strong>
      </h1>
      <div className="py-10">
        <Carousel />
      </div>
      <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 lg:grid-cols-3 place-content-center mx-auto max-w-[90rem]">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="max-w-[500px] border p-5 dark:border-slate-800 flex flex-col gap-5 "
          >
            <img src={project.img} alt="" />
            <h1 className="text-xl text-blue">{project.PageName}</h1>
            <p className="text-sm font-medium dark:font-light font-primary">
              {project.Description}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="p-2 w-[130px] text-xs text-center bg-DarkBlue">
                Check Sample
              </button>
            </a>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = [
  {
    img: ["Project_1.1.png"],
    PageName: "ENDRNK",
    Description:
      "looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    link: "https://mitzukin.github.io/FEPortfolio",
  },
  {
    img: "Project_1.1.png",
    PageName: "ENDRNK",
    Description:
      "looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    link: "",
  },
  {
    img: "Project_1.2.png",
    PageName: "ENDRNK",
    Description:
      " Via looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    link: "",
  },
  {
    img: "Project_1.png",
    PageName: "ENDRNK",
    Description:
      "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    link: "",
  },
  {
    img: "Project_1.png",
    PageName: "ENDRNK",
    Description:
      "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    link: "https://mitzukin.github.io/FEPortfolio",
  },
  {
    img: "Project_1.png",
    PageName: "ENDRNK",
    Description:
      "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    link: "https://mitzukin.github.io/FEPortfolio",
  },
  {
    img: "Project_1.png",
    PageName: "ENDRNK",
    Description:
      "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    link: "",
  },
  {
    img: "Project_1.png",
    PageName: "ENDRNK",
    Description:
      "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    link: "",
  },
  {
    img: "Project_1.png",
    PageName: "ENDRNK",
    Description:
      "A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
    link: "",
  },
];
export default Work;
