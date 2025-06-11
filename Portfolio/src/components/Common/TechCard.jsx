import React from 'react';

const TechCard = (props) => {
  return (
    <div className="relative w-72 h-48 mt-10 group">
      <div className="h-full w-full rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 shadow-lg shadow-red-400 group-hover:scale-105 duration-300">
        <img className="h-32 w-44 mx-auto pt-3" src={props.url} alt="tech" />
        <h1 className="grid place-items-center mt-4 text-2xl text-white">{props.title}</h1>
      </div>
    </div>
  );
};

export default TechCard;
