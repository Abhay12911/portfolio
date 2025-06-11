

import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Mail, Code } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'technologies', label: 'Tech', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <nav 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'scale-95' : 'scale-100'
      }`}
    >
      <div className="relative">
        {/* Background with glassmorphism effect */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div>
        
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 p-[1px]">
          <div className="h-full w-full rounded-2xl bg-white/5 backdrop-blur-xl"></div>
        </div>

        {/* Navigation content */}
        <div className="relative px-3 py-2 sm:px-4 sm:py-2">
          <ul className="flex items-center justify-center space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative flex items-center space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 ${
                      isActive
                        ? 'bg-white/20 text-white shadow-lg'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-sm"></div>
                    )}
                    
                    {/* Icon */}
                    <IconComponent 
                      size={16} 
                      className={`relative z-10 transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-110'
                      }`} 
                    />
                    
                    {/* Label - hidden on very small screens */}
                    <span className={`relative z-10 hidden sm:inline-block text-sm font-medium transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-white/90 group-hover:text-white'
                    }`}>
                      {item.label}
                    </span>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Floating orbs for extra visual appeal */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400/60 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400/60 rounded-full blur-sm animate-pulse delay-1000"></div>
      </div>
    </nav>
  );
};

export default Navbar;