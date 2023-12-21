import React from "react";
import Profile from "/KinProfile.png";
import { useEffect } from 'react';

const TestimonialCards = () => {
   
  return (
        
        <div className="flex flex-col items-center justify-center gap-2 my-10 lg:flex-row">
          {Person.map((person, index) => (
            <div
              key={index}
              className={`flex flex-col w-[400px] justify-between gap-5 p-5 rounded-lg mover-${
                index + 1
              } text-light-p dark:text-dark-p bg-dark-cards`}
            >
              <div className="flex items-center justify-start gap-2">
                <img src={person.image} alt="" className="h-[50px]" />
                <div>
                  <h1 className="text-xl font-light">{person.name}</h1>
                  <p className="text-xs font-light">{person.relation}</p>
                </div>
              </div>
              <p className="text-sm font-light">{person.testimonial}</p>
              <p className="text-xs font-light text-dark-s">{person.date}</p>
            </div>
          ))}
        </div>
      
    
  );
};

const Person = [
  {
    image: Profile,
    name: "John Doe",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "12/17/2023",
  },
  {
    image: Profile,
    name: "Rosalyn",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "12/17/2023",
  },
  {
    image: Profile,
    name: "Kin",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "12/17/2023",
  },
  {
    image: Profile,
    name: "Tajor",
    relation: "Classmate",
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "12/17/2023",
  },

];

export default TestimonialCards;
