
import React from 'react';

const TechBadge = ({ name, icon }) => {
  return (
    <div className="relative group flex justify-center group-hover:z-20">
      {/* Badge Box */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105">
        <img 
          src={icon} 
          alt={name} 
          className="w-8 h-8 object-contain" 
        />
      </div>

      {/* Tooltip */}
      <div className="pointer-events-none absolute left-1/2 -top-10 -translate-x-1/2 translate-y-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
        <span className="px-2 py-1 text-xs rounded-md bg-black/90 text-gray-100 whitespace-nowrap shadow-lg border border-white/10">
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechBadge;
