

import React from 'react';
import { FaGithub } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="group h-full">
      <div className="h-full rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={props.imageLink} 
            alt={props.projectName}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Tags overlay on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            {props.tags && props.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-600/80 text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {props.projectName}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {props.desc}
          </p>
          
          {/* Links */}
          <div className="flex items-center space-x-4 mt-auto">
            <a 
              href={props.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="h-5 w-5 mr-1" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;