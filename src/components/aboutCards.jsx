import React from "react";

const AboutCard = (props) => {
  const { location, date, school, description, color, fontColor, dark } = props;

  const cardStyle = {
    backgroundColor: dark ? "#111423" : color, // Dark theme background color is #333, change it to your preferred dark background color
    color: fontColor,
  };

  return (
    <div
      className={`flex rounded-lg  flex-col justify-between p-5 h-[250px] md:h-[350px] max-w-[350px] dark:bg-dark-cards  text-light-p font-Accent`}
      style={cardStyle}
    >
      <div className="flex flex-col gap-1 ">
        <p className="hidden text-sm font-light font-primary md:flex">
          {location}
        </p>
        <p className="text-sm font-light font-primary">{date}</p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-sm md:text-xl">{school}</h2>
        <p className="hidden text-sm font-light md:flex font-primary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
