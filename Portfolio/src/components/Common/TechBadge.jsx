
import React from 'react';

const TechBadge = ({ name, icon }) => {
  return (
    <div className="relative group">
      {/* Badge Box */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105">
        <img 
          src={icon} 
          alt={name} 
          className="w-8 h-8 object-contain" 
        />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-2 py-1 text-xs rounded-md bg-black/80 text-gray-200 whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechBadge;
