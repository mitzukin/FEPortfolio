import React from "react";
import FigmaIcon from "/FigmaIcon.png";
import CanvaIcon from "/CanvaIcon.png";
import VsIcon from "/VsIcon.png";
import PhotoshopIcon from "/PhotoshopIcon.png";
import SlackIcon from "/SlackIcon.png";
import CubeTools from "/CubeTools.png";

const ToolsSection = () => {
  return (
    <div className="flex flex-col px-2 pt-10 transition-all duration-300 ease-in-out xl:px-20 font-primary bg-background-light dark:bg-background-dark">
      <div className="xl:px-32">
        <div className="flex flex-col mt-10 lg:flex-row">
          <div>
            <h1 className="my-5 text-5xl font-light lg:text-6xl text-light-p dark:text-dark-p">
              Tools for <strong className="text-blue font-Accent">Personal</strong> &
              Professional <strong className="text-blue font-Accent">Improvement</strong>{" "}
              
            </h1>
            <p className="font-light text-light-p dark:text-dark-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <img src={CubeTools} alt="" className="hidden lg:flex" />
        </div>
        <div className="grid gap-2 text-light-p dark:text-dark-p lg:grid-cols-8 lg:grid-rows-4">
          <div className="col-span-2 rounded-lg bg-gradient-to-tr dark:from-dark-cards  border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none  dark:to-light-p  flex p-2 xl:px-1 row-span-2 md:col-span-2 md:row-span-2 h-[250px] ">
          <div className="flex flex-col items-start justify-center gap-2 p-3 text-xs md:text-sm xl:p-4 md:flex-col">
              <img src={[CardItems[0].img]} alt="" className="pb-5" />
              <div className="flex flex-col gap-2">
                <p className="text-xl lg:px-3">{CardItems[0].title}</p>
                <p className="font-light lg:px-3">{CardItems[0].description}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 rounded-lg bg-gradient-to-tr dark:from-dark-cards border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none  dark:to-light-p flex p-2 xl:px-1 row-span-2 md:col-span-2 md:row-span-2 h-[250px] ">
          <div className="flex flex-col items-start justify-center gap-2 p-3 text-xs md:text-sm xl:p-4 md:flex-col">
              <img src={[CardItems[1].img]} alt="" className="pb-5" />
              <div className="flex flex-col gap-2">
                <p className="text-xl lg:px-3">{CardItems[1].title}</p>
                <p className="font-light lg:px-3">{CardItems[1].description}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 AiGpt rounded-lg bg-gradient-to-tr dark:from-dark-cards border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none   dark:to-light-p flex p-2 xl:px-1 row-span-2 md:col-span-2 md:row-span-2 min-w-[200px] h-[250px] ">
         
          </div>
          <div className="col-span-2 rounded-lg bg-gradient-to-tr dark:from-dark-cards border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none  dark:to-light-p  flex p-2 xl:px-1 row-span-2  md:col-span-2 md:row-span-4 h-[250px] md:h-auto ">
          <div className="flex flex-col items-start justify-center gap-2 p-3 text-xs md:text-sm xl:p-4 md:flex-col">
              <img src={[CardItems[3].img]} alt="" className="pb-5 h-[60px] md:h-auto" />
              <div className="flex flex-col gap-2">
                <p className="text-xl lg:px-2">{CardItems[3].title}</p>
                <p className="font-light lg:px-2">{CardItems[3].description}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2  rounded-lg  bg-gradient-to-tr dark:from-dark-cards  border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none  dark:to-light-p   flex p-2 xl:px-1 row-span-2 md:col-span-2 md:row-span-2 h-[250px] ">
          <div className="flex flex-col items-start justify-center gap-2 p-3 text-xs md:text-sm xl:p-4 md:flex-col">
              <img src={[CardItems[4].img]} alt="" className="pb-5" />
              <div className="flex flex-col gap-2">
                <p className="text-xl lg:px-3">{CardItems[4].title}</p>
                <p className="font-light lg:px-3">{CardItems[4].description}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 Div-6 rounded-lg bg-gradient-to-tr dark:from-DarkBlue from-green to-teal  dark:to-light-s flex p-2 xl:px-1  text-xs md:text-sm row-span-2 md:col-span-4 md:row-span-2 h-[250px] ">
         
          </div>
          <div className="col-span-4  row-span-2  md:col-span-4 md:row-span-2 h-[0px]  bg-div6"></div>
        </div>
      </div>
   
    </div>
  );
};

const CardItems = [
  {
    img: FigmaIcon,
    title: "Figma",
    description: "In UI, this is where I design with Figma's collaborative features.",
  },
  {
    img: SlackIcon,
    title: "Slack",
    description: "Slack is where I get design and code tips from my team.",
  },
  {
    img: CanvaIcon,
    title: "Canva",
    description: "Canva is where I create and experiment simple graphics.",
  },
  {
    img: VsIcon,
    title: "VsCode",
    description: "This is where i compile my all codes into reality ",
  },
  {
    img: PhotoshopIcon,
    title: "Adobe Photoshop",
    description: "This is where i design and make Magazines or any graphics",
  },
 
  // Add your remaining items here
];

export default ToolsSection;
