import React from 'react';

const TechBadge = ({ name, icon, colorClass }) => {
  return (
    <div className="group flex flex-col items-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${colorClass} bg-opacity-20 backdrop-blur-sm p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-30 shadow-lg`}>
        <img src={icon} alt={name} className="w-10 h-10" />
      </div>
      <span className="mt-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default TechBadge;