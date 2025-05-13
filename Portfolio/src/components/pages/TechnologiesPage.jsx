
import React from 'react'
import TechBadge from '../common/TechBadge';
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

const TechnologiesPage = () => {
  const techStacks = [
    {
      // title: "Frontend Development",
      technologies: [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", colorClass: "bg-gray-800" },
        { name: "TypeScript", icon: typescript, colorClass: "bg-blue-600" },
        { name: "Node.js", icon: node, colorClass: "bg-green-600" },
        { name: "Express", icon: express, colorClass: "bg-gray-600" },
        { name: "React", icon: react, colorClass: "bg-blue-400" },
        { name: "Prisma", icon: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg", colorClass: "bg-indigo-600" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", colorClass: "bg-blue-500" },
        { name: "HTML", icon: html, colorClass: "bg-orange-500" },
        { name: "CSS", icon: css, colorClass: "bg-blue-500" },
        { name: "JavaScript", icon: javascript, colorClass: "bg-yellow-500" },
        { name: "Tailwind CSS", icon: taiwind, colorClass: "bg-sky-500" },
        { name: "MongoDB", icon: mongo, colorClass: "bg-green-500" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", colorClass: "bg-blue-600" },
        { name: "C++", icon: c, colorClass: "bg-blue-700" },
        { name: "Git", icon: git, colorClass: "bg-orange-600" },
        { name: "GitHub", icon: github, colorClass: "bg-gray-700" },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-800 to-black py-24">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 inline-block">
            Technologies & Skills
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            I'm proficient with these technologies and constantly expanding my skillset to build better applications.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {techStacks.map((stack, index) => (
            <div key={index} className="relative">
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                  {stack.title}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                  {stack.technologies.map((tech, techIndex) => (
                    <TechBadge
                      key={techIndex}
                      name={tech.name}
                      icon={tech.icon}
                      colorClass={tech.colorClass}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesPage;