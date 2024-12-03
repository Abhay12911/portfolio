import React from 'react'
import TechCard from '../common/TechCard';
import html from '../../image/html.png'
import css from '../../image/css.png'
import express from '../../image/express-js.png'
import javascript from '../../image/javascript.png'
import react from '../../image/react.png'
import node from '../../image/node.png'
import taiwind from '../../image/tailwind.png'
import mongo from '../../image/mongo.png'
import typescript from '../../image/typescript.png'
import github from '../../image/github.png'
import git from '../../image/git.png'
import c from '../../image/c.png'
import { IoLogoJavascript } from "react-icons/io5";
const TechnologiesPage = () => {
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black h-full md:h-full w-full md:py-[200px]'>  
      <div className="max-w-screen-lg flex flex-col justify-center p-4 mx-auto w-full h-full">
     <div className='mt-36 pl-6 sm:pl-0'>
      <h1 className='text-4xl font-bold border-b-4 inline  border-sky-500'>Technologies</h1>
    </div >
      <div className='grid gap-7 pt-8 md:grid-cols-2 pl-14 sm:pl-0 lg:grid-cols-3'>
        <TechCard
          url={html}
          title="HTML"
        />
        <TechCard
          url={css}
          title="CSS"
        />
        <TechCard
          url={javascript}
          title="Javascript"
        />
        <TechCard
          url={react}
          title="React"
        />
        <TechCard
          url={node}
          title="Node JS"
        />
        <TechCard
          url={taiwind}
          title="Tailwind CSS"
        />
        <TechCard
          url={express}
          title="Express"
        />
        <TechCard
          url={mongo}
          title="Mongo DB"
        />
        <TechCard
          url={typescript}
          title="Typescript"
        />
        <TechCard
          url={github}
          title="Github"
        />
        <TechCard
          url={git}
          title="Git"
        />
        <TechCard
          url={c}
          title="C++"
        />
      </div>
      </div>
      </div>
  )
}

export default TechnologiesPage