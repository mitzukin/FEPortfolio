import React from 'react'
import Carousel from './Carousel';
const logocarousel = () => {
  return (
         <div className="w-full font-semibold md:pb-10 text-DarkBlue dark:text-teal ">
        <Carousel items={imageItems} />
        </div>
  )
}
const imageItems = [
    { img: "workLogo.png" },
    { img: "workLogo1.png" },
    { img: "workLogo2.png" },
    { img: "workLogo3.png" },
    { img: "workLogo4.png" },
  ];
  
export default logocarousel
