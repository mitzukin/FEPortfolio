import React from "react";
import Shape1 from "/shape1.png";
import Shape2 from "/shape2.png";
import Shape3 from "/shape3.png";
import Shape4 from "/shape4.png";
import Shape5 from "/shape5.png";
import Shape6 from "/shape6.png";

const ShapesRandom = () => {
  return (
    <div>
      <div className="absolute top-20 left-20">
        <img src={Shape1} alt="" className="pulse shape h-[25px] lg:h-[35px]" />
      </div>
      <div className="absolute bottom-30 left-20">
        <img src={Shape2} alt="" className="pulse shape  h-[25px] lg:h-[35px]" />
      </div>
      <div className="absolute top-30 left-20">
        <img src={Shape2} alt="" className="pulse shape h-[25px] lg:h-[35px]" />
      </div>
      <div className="absolute top-20 right-20">
        <img src={Shape3} alt="" className="pulse shape h-[25px] lg:h-[35px]" />
      </div>
      <div className="absolute top-100 left-[400px]">
        <img src={Shape1} alt="" className="pulse shape h-[25px] lg:h-[20px]" />
      </div>
      <div className="absolute bottom-10 right-20">
        <img src={Shape4} alt="" className="pulse shape h-[25px] lg:h-[35px]" />
      </div>
      <div className="absolute top-40 left-50">
        <img src={Shape5} alt="" className="pulse shape h-[25px] lg:h-[35px]" />
      </div>
      <div className="absolute top-90 right-10 md:right-48">
        <img src={Shape6} alt="" className="pulse shape h-[25px] lg:h-[35px]" />
      </div>
      <div className="absolute bottom-40 left-10 md:left-80">
        <img src={Shape4} alt="" className="pulse shape h-[25px] lg:h-[35px]" />
      </div>
      <div className="absolute bottom-80 left-100">
        <img src={Shape1} alt="" className="pulse shape h-[25px] lg:h-[35px]" />
      </div>
      <div className="absolute top-40 left-[600px]">
        <img src={Shape2} alt="" className="pulse shape h-[25px] lg:h-[20px]" />
      </div>
    </div>
  );
};

export default ShapesRandom;
