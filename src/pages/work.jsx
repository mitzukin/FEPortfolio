import React from "react";
import Carousel from "../components/Carousel";
const Work = () => {
  return (
    <div className="py-10 pt-10 md:px-0 font-Accent text-light-p dark:text-dark-p bg-background-light dark:bg-background-dark">
      <p data-aos="fade-down"
                data-aos-duration="1000" className="px-3.5 text-xl font-thin md:pt-10 lg:px-20">Discover</p>
      <h1 data-aos="fade-right"
                data-aos-duration="1000" className="px-3.5 lg:px-20 text-3xl md:text-5xl font-light max-w-[900px] ">
        Projects <strong className="font-semibold text-teal">Showcasing</strong>{" "}
        a Collection of My{" "}
        <strong className="font-semibold text-blue">Achievements</strong>
      </h1>

      <div className="px-3.5 grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center mx-auto max-w-[110rem]">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="max-w-[500px] border p-5 dark:border-slate-800 flex flex-col gap-5 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={project.img} alt="" className="contain" />
            <h1 className="text-xl text-blue">{project.PageName}</h1>
            <p className="text-sm font-medium dark:font-light font-primary">
              {project.Description}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="p-2 w-[130px] text-xs text-center text-dark-p bg-DarkBlue">
                Check Sample
              </button>
            </a>{" "}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-10 item "data-aos="fade-up"
                data-aos-duration="1000">
        
        <p className="font-primary text-center text-sm px-3.5 lg:px-20 ">
          Even though I'm still getting the hang of web UI design , I've worked
          on a few projects. Just a heads up, some use existing brand designs,
          and I've made sure to give credit where it's due. Not all my stuff is
          here since I'm sticking to GitHub Pages for now for the web, but I'm
          happy to show you more if you're interested. They might not be super
          fancy, but each project is a step in my learning journey.
        </p>
        <p className="font-primary font-semibold px-3.5 text-center  lg:px-[300px] ">
          Thank you for taking the time to explore each project! Your interest
          means a lot, and I'm thrilled to share the creative journey with you.
          Stay tuned for more exciting designs and projects in the future!{" "}
        </p>
      </div>
      <div className="relative py-20 ">
        <Carousel items={imageItems} />
      </div>
    </div>
  );
};
const imageItems = [
  { img: "workLogo.png" },
  { img: "workLogo1.png" },
  { img: "workLogo2.png" },
  { img: "workLogo3.png" },
  { img: "workLogo4.png" },
];

const Projects = [
  {
    img: "Project_1.png",
    PageName: "EndDrnk",
    Description:
      "EndDrnk redefines beverages, blending nature's flavors into a refreshing symphony. My minimalist design reflects purity, offering an elevated sensory journey. More than a drink, it's an innovation-driven celebration of transforming moments.",
    link: "https://www.figma.com/proto/amYMv3V4fWldfF9wEB12ws/DRNK?type=design&node-id=1-10&t=Yt7Qk2Jmgaq5oaq5-0&scaling=min-zoom&page-id=0%3A1",
  },
  {
    img: "Burger.png",
    PageName: "Burger",
    Description:
      "Burger is my culinary canvas, inspired to reimagine fast food. The fusion of burgers, chicken pasta, and Coke embodies my vision for diverse, satisfying menus. It's more than a meal; it's a celebration of inspired design and a symphony of eclectic flavors.",
    link: "https://www.figma.com/proto/UFEz1rarMGcE8532puLq5B/Untitled?type=design&node-id=42-1029&t=AkJNAMfgk0p65jeh-1&scaling=min-zoom&page-id=0%3A1&mode=design",
  },
  {
    img: "iCus.png",
    PageName: "iCus",
    Description:
      "With precision and care, I aim to capture the essence of iPhone and Mac interfaces, infusing a touch of sophistication into every digital interaction. Welcome to iCus, where each pixel reflects the timeless beauty of Apple's design language.",
    link: "https://www.figma.com/proto/UFEz1rarMGcE8532puLq5B/Untitled?type=design&node-id=42-1220&t=k6HTHrcfzgN3x955-1&scaling=min-zoom&page-id=0%3A1&mode=design",
  },
  {
    img: "TheTesla.png",
    PageName: "The Tesla",
    Description:
      "I create UI designs inspired by Tesla's innovation. With simplicity and careful attention, each design reflects the ease and elegance seen in Tesla's cutting-edge technology. The interface mirrors the intuitive experience of Tesla's groundbreaking vision.",
    link: "https://www.figma.com/proto/UFEz1rarMGcE8532puLq5B/Untitled?type=design&node-id=76-25&t=DCmhBHf2hq0qXmfp-1&scaling=min-zoom&page-id=0%3A1&mode=design",
  },
  {
    img: "Codebility.png",
    PageName: "Codebility",
    Description:
      "Led by our team lead, UI team to design a website in Figma. This platform is dedicated to individuals keen on learning and gaining hands-on experience. At Codebility, our UI team ensures that even a Figma design can be an immersive experience for those ready to explore and grow.",
    link: "https://www.figma.com/proto/5tqG6TS2dhTAlEjOuKcWLy/Untitled?type=design&node-id=39-2793&t=LTzouhes528qtRf3-1&scaling=min-zoom&page-id=0%3A1&mode=design",
  },
  {
    img: "Godz.png",
    PageName: "Greek Style",
    Description:
      "GreekCrafted is a straightforward webpage where I've woven the essence of Greek inspiration into every detail. It's a digital page reflecting the simple elegance of Greek aesthetics. Welcome to a page where each pixel tells a story inspired by the beauty of Greece.",
    link: "https://www.figma.com/proto/3WLRcX4oC2tG7wrX4yt3gq/Untitled?type=design&node-id=16-298&t=KeNGYdnjpeSBzfps-1&scaling=contain&page-id=0%3A1&starting-point-node-id=16%3A331&mode=design",
  },
  {
    img: "ReasonStore.png",
    PageName: "ReasonStore",
    Description:
      "ReasonStore is my design sanctuary for kicks with a story. Inspired by the belief that every pair should carry a reason and narrative. Step into ReasonStore, where each design is a testament to the idea that footwear can be a canvas for personal expression and meaningful stories.",
    link: "https://www.figma.com/proto/U1h9uSv9ndPQOxYV95HlRU/Untitled?type=design&node-id=1-2&t=C09fo8hO2Rtgke6e-1&scaling=min-zoom&page-id=0%3A1&mode=design",
  },
  {
    img: "Music.png",
    PageName: "MsC",
    Description:
      "Music is my project dedicated to designing music playlists with intention. Each playlist is carefully curated to evoke specific vibes and emotions, transforming the art of playlist creation into a purposeful and personalized experience.",
    link: "https://www.figma.com/proto/CZ19EiliGFnzrFyXBrtTam/Untitled?type=design&node-id=2-200&t=9cHTMyNsIZtStq5c-1&scaling=contain&page-id=0%3A1&mode=design",
  },
];

export default Work;
