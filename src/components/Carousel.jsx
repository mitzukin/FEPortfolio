import React, { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Carousel = ({ items }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: isSmallScreen ? 2 : 5,
      autoScroll: {
        speed: 1,
      },
      arrows: false,
      pagination: false,
    });

    splide.mount({ AutoScroll });

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
      splide.options.perPage = isSmallScreen ? 2 : 5;
      splide.refresh();
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      splide.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [items, isSmallScreen]);

  return (
    <div className="absolute py-5 splide gradient from-primary to-secondary">
      <div className="splide__track">
        <ul className="splide__list ">
          {items.map((item, index) => (
            <li key={index} className="flex gap-10 splide__slide">
          
                <img
                  src={item.img}
                  alt={`Slide ${index + 1}`}
                  className="h-[30px] w-auto"
                />
          
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
