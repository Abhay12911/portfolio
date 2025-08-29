


import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const Card = ({ 
  imageLink, 
  projectName, 
  desc, 
  codeUrl, 
  liveUrl, 
  tags, 
  featured = false 
}) => {
  return (
    <div className="group relative">
      {/* Featured badge */}
      {/* {featured && (
        <div className="absolute -top-3 left-8 z-20 flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          <FaStar className="mr-2 h-4 w-4" />
          Featured Project
        </div>
      )}
       */}
      <div className="rounded-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl transition-all duration-500 hover:shadow-purple-500/25 hover:-translate-y-1 hover:border-purple-400/30">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="lg:w-2/5 relative overflow-hidden">
            <div className="aspect-video lg:aspect-auto lg:h-full relative">
              <img 
                src={imageLink} 
                alt={projectName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Floating tech stack preview */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <div className="flex flex-wrap gap-2 max-w-48">
                  {tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {/* {tags.length > 3 && (
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                      +{tags.length - 3}
                    </span>
                  )} */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {projectName}
                </h3>
              </div>
              
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                {desc}
              </p>
              
              {/* Technology Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-purple-400 mb-3 uppercase tracking-wider">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-600/30 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-6">
              <a 
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-600 hover:border-gray-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FaGithub className="h-5 w-5 mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">View Code</span>
              </a>
              
              {liveUrl && liveUrl !== "#" && (
                <a 
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <FaExternalLinkAlt className="h-4 w-4 mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span className="font-semibold">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;