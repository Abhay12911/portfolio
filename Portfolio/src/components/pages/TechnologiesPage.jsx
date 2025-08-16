
import React from 'react';
import TechBadge from '../Common/TechBadge';
import html from '../../image/html.png';
import css from '../../image/css.png';
import express from '../../image/express-js.png';
import javascript from '../../image/javascript.png';
import react from '../../image/react.png';
import node from '../../image/node.png';
import taiwind from '../../image/tailwind.png';
import mongo from '../../image/mongo.png';
import typescript from '../../image/typescript.png';
import github from '../../image/github.png';
import git from '../../image/git.png';
import c from '../../image/c.png';
import { Code, Server, Wrench } from 'lucide-react';

const TechnologiesPage = () => {
  const techStacks = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      description: "Building responsive and interactive user interfaces",
      gradient: "from-blue-500 to-purple-600",
      technologies: [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", icon: react },
        { name: "TypeScript", icon: typescript },
        { name: "JavaScript", icon: javascript },
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Tailwind CSS", icon: taiwind },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      description: "Creating robust server-side applications and APIs",
      gradient: "from-green-500 to-teal-600",
      technologies: [
        { name: "Node.js", icon: node },
        { name: "Express", icon: express },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: mongo },
        { name: "Prisma", icon: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg" },
        { name: "C++", icon: c },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      description: "Development tools and deployment technologies",
      gradient: "from-orange-500 to-red-600",
      technologies: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 inline-block mb-4">
            Technologies & Skills
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A snapshot of the technologies I use to craft scalable and modern applications.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className="group rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Card Header */}
              <div className={`p-6 border-b border-white/10`}>
                <div className={`flex items-center gap-3`}>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stack.gradient} text-white shadow-md`}>
                    {stack.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-white">{stack.title}</h2>
                </div>
                <p className="text-gray-400 text-sm mt-2">{stack.description}</p>
              </div>

              {/* Technologies Grid */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {stack.technologies.map((tech, techIndex) => (
                    <TechBadge
                      key={techIndex}
                      name={tech.name}
                      icon={tech.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Tag */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm">
            <span className="text-purple-400 text-sm font-medium">Always learning and exploring new technologies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesPage;
