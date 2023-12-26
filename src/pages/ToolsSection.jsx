import React from "react";
import FigmaIcon from "/FigmaIcon.png";
import VsIcon from "/VsIcon.png";
import PhotoshopIcon from "/PhotoshopIcon.png";
import SlackIcon from "/SlackIcon.png";
import CubeTools from "/CubeTools.1.png";

const ToolsSection = () => {
  return (
    <div className="flex flex-col px-3.5  pt-10 transition-all duration-300 ease-in-out xl:px-20 font-primary bg-background-light dark:bg-background-dark">
      <div className="">
        <div
          className="flex flex-col items-center justify-between w-full mt-10 mb-5 md:items-start lg:flex-row"
          data-aos="fade-zoom-in"
          data-aos-delay="100"
        >
          <div className="lg:max-w-[900px]">
            <h1 className="my-5 text-4xl font-light lg:text-6xl text-light-p dark:text-dark-p">
              Tools for{" "}
              <strong className="text-blue font-Accent">Personal</strong> &
              Professional{" "}
              <strong className="text-blue font-Accent">Improvement</strong>{" "}
            </h1>
            <p className="font-normal text-light-p dark:text-dark-p">
              This tool holds immense power for me as it enables
              self-exploration, aiding in skill and knowledge enhancement.
              Through hands-on experience, it has been pivotal in shaping my
              professional growth journey.
            </p>
          </div>
          <img
            className="h-[50px] lg:animate-none mt-10 animate-spin w-[50px] lg:w-[200px] lg:h-[200px]"
            src={CubeTools}
            alt=""
          />
        </div>
        <div className="grid gap-2 xl:px-32 text-light-p dark:text-dark-p lg:grid-cols-8 lg:grid-rows-4">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="col-span-2 rounded-lg bg-gradient-to-tr dark:from-dark-cards  border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none  dark:to-light-p  flex p-2 xl:px-1 row-span-2 md:col-span-2 md:row-span-2 h-[250px] "
          >
            <div className="flex flex-col items-start justify-center gap-2 p-3 text-xs md:text-sm xl:p-4 md:flex-col">
              <img src={[CardItems[0].img]} alt="" className="pb-5 h-[60px] " />
              <div className="flex flex-col gap-2">
                <p className="text-xl lg:px-3">{CardItems[0].title}</p>
                <p className="font-normal lg:px-3">
                  {CardItems[0].description}
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            className="col-span-2 rounded-lg bg-gradient-to-tr dark:from-dark-cards border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none  dark:to-light-p flex p-2 xl:px-1 row-span-2 md:col-span-2 md:row-span-2 h-[250px] "
          >
            <div className="flex flex-col items-start justify-center gap-2 p-3 text-xs md:text-sm xl:p-4 md:flex-col">
              <img src={[CardItems[1].img]} alt="" className="pb-5 h-[60px]" />
              <div className="flex flex-col gap-2">
                <p className="text-xl lg:px-3">{CardItems[1].title}</p>
                <p className="font-normal lg:px-3">
                  {CardItems[1].description}
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            className="col-span-2 justify-center items-center  AiGpt rounded-lg bg-gradient-to-tr dark:from-dark-cards border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none   dark:to-light-p flex p-2 xl:px-1 row-span-2 md:col-span-2 md:row-span-2 min-w-[200px] h-[250px] "
          >
            <img src="Google3d.png" alt="" className="absolute h-[100px] w-auto" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            className="col-span-2 rounded-lg bg-gradient-to-tr dark:from-dark-cards border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none  dark:to-light-p  flex p-2 xl:px-1 row-span-2  md:col-span-2 md:row-span-4 h-[250px] md:h-auto "
          >
            <div className="flex flex-col items-start justify-center gap-2 p-3 text-xs md:text-sm xl:p-4 md:flex-col">
              <img
                src={[CardItems[3].img]}
                alt=""
                className="pb-5 h-[60px] md:h-auto"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xl lg:px-2">{CardItems[3].title}</p>
                <p className="font-normal lg:px-2">
                  {CardItems[3].description}
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="col-span-2  rounded-lg  bg-gradient-to-tr dark:from-dark-cards  border border-gray-200 border-t-1 border-r-1 border-b-1 border-l-1 dark:border-none  dark:to-light-p   flex p-2 xl:px-1 row-span-2 md:col-span-2 md:row-span-2 h-[250px] "
          >
            <div className="flex flex-col items-start justify-center gap-2 p-3 text-xs md:text-sm xl:p-4 md:flex-col">
              <img src={[CardItems[4].img]} alt="" className="pb-5 h-[60px] " />
              <div className="flex flex-col gap-2">
                <p className="text-xl lg:px-3">{CardItems[4].title}</p>
                <p className="font-normal lg:px-3">
                  {CardItems[4].description}
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="col-span-2 Div-6 rounded-lg bg-gradient-to-tr dark:from-DarkBlue from-green to-teal  dark:to-light-s flex p-2 xl:px-1  text-xs md:text-sm row-span-2 md:col-span-4 md:row-span-2 h-[250px] "
          ></div>
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
    description:
      "In UI, this is where I design with Figma's collaborative features.",
  },
  {
    img: SlackIcon,
    title: "Slack",
    description: "Slack is where I get design and code tips from my team.",
  },
  {
    img: "",
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
