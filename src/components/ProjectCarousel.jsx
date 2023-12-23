import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCarousel = ({ images }) => {
  // Ensure that images is always an array
  const imageArray = Array.isArray(images) ? images : [images];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {imageArray.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Project Image ${index + 1}`} className="w-full" />
        </div>
      ))}
    </Slider>
  );
};

export default ProjectCarousel;
