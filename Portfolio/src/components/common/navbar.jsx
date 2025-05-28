import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {

  // To toggle hamburger and cross, and various things that change accordingly
  const [nav, SetNav] = useState(false);




  
  // To display about, work, resume and contact
  let links = [
    {
      id: 1,
      link: "home"
    },
   
    {
      id: 3,
      link: "projects"
    },
    {
      id: 4,
      link: "technologies"
    },
    {
      id: 5,
      link: "contact"
    }
  ]

  return (
    <nav className='flex text-black h-16  items-center md:justify-center bg-gradient-to-b from-gray-800  to-gray-800 bg-opacity-90 top-0  z-10'>

      {/* Menu in greater than medium screens */}
      <ul className='hidden text-gray-400 md:flex items-center mx-6 text-2xl font-semibold'>

        {links.map(({ id, link }) => (
          <li key={id} className='hover:text-purple-500 duration-200 hover:scale-105 cursor-pointer mx-4 capitalize'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}

      </ul>

      {/* To toggle bw the hamburger and cross icons */}
      <div onClick={() => SetNav(!nav)} className='md:hidden pr-6 z-10 cursor-pointer text-gray-500 ' >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* To only display this menu when "nav" is true on smaller screens */}
      <ul className={`flex flex-col justify-center items-center md:hidden text-gray-400 absolute ${nav ? "h-screen" : "h-0"} w-full top-0 left-0 ${nav ? "translate-y-0" : "-translate-y-40"} bg-gradient-to-b from-black to-gray-800 z-[-1] text-3xl duration-300 ease-in-out`}>
        {links.map(({ id, link }) => (
          <li key={id} className='hover:text-purple-500 duration-200 hover:scale-105 cursor-pointer mx-4 capitalize py-4'>
            <Link onClick={()=>SetNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar



