import React, { useEffect } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Carousel = () => {
  useEffect(() => {
    // Create a Splide instance
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
      arrows: false,

    });
    splide.mount({ AutoScroll });
    return () => {
      splide.destroy();
    };
  }, []); 
  return (
    <div className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">Slide 1</li>
          <li className="splide__slide">Slide 2</li>
          <li className="splide__slide">Slide 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
