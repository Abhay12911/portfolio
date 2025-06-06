

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 3, link: "projects" },
    { id: 4, link: "technologies" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-gray-800 to-gray-800 bg-opacity-90 z-50">
      <div className="flex justify-between items-center h-16 px-4 md:justify-center text-white">
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-2xl font-semibold text-gray-400">
          {links.map(({ id, link }) => (
            <li key={id} className="hover:text-purple-500 duration-200 hover:scale-105 capitalize cursor-pointer">
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div onClick={() => setNav(!nav)} className="md:hidden z-50 text-gray-400 cursor-pointer">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-3xl font-semibold text-gray-400 transform duration-300 ease-in-out ${nav ? "translate-y-0 opacity-100 z-40" : "-translate-y-full opacity-0 z-[-1]"}`}>
        {links.map(({ id, link }) => (
          <li key={id} className="py-6 hover:text-purple-500 duration-200 hover:scale-105 capitalize cursor-pointer">
            <Link to={link} smooth duration={500} onClick={() => setNav(false)}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;



