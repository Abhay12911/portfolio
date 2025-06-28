
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { Github, Linkedin, Code2, Twitter, Mail } from 'lucide-react';

const HomePage = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer.', 'Full Stack Developer.', 'Coder.'],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50
  });

  return (
    <div name='home' className='relative min-h-screen bg-gradient-to-b from-gray-800 via-black to-black pt-20 pt-60 '>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col h-full items-center justify-center px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full x-sm:mt-40 md:mt-0 md:w-3/5'>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">Abhay Mishra</span>
          </h1>

          <h2 className='h-20 text-white text-2xl md:text-3xl lg:text-4xl font-medium'>
            I'm a <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400'>
              {text}
            </span>
            <span className="text-purple-400"><Cursor /></span>
          </h2>

          <p className='py-8 text-lg text-gray-300 leading-relaxed max-w-2xl'>
            I'm a passionate full-stack developer who loves building scalable and user-friendly web applications. 
            I enjoy learning and adapting to new technologies, constantly expanding my skills to stay current 
            in the fast-evolving tech landscape. I also strengthen my problem-solving abilities by practicing 
            data structures and algorithms in C++.
          </p>

          <div className="space-y-6 sm:space-y-0 sm:flex sm:items-center sm:gap-6">
            <Link 
              to='contact' 
              smooth 
              duration={800}
              className="group flex cursor-pointer items-center gap-2 bg-gradient-to-r from-purple-500 to-sky-500 hover:from-purple-600 hover:to-sky-600 
                text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Contact Me
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <div className='flex gap-6 items-center'>
              <a 
                href='https://github.com/Abhay12911' 
                target="_blank"
                rel="noopener noreferrer"
                className='group relative p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-purple-400 rounded-full transition-all duration-300'
              >
                <Github className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GitHub
                </span>
              </a>
              <a 
                href='https://www.linkedin.com/in/abhay-mishra-1976092a3' 
                target="_blank"
                rel="noopener noreferrer"
                className='group relative p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-sky-400 rounded-full transition-all duration-300'
              >
                <Linkedin className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  LinkedIn
                </span>
              </a>
              <a 
                href='https://leetcode.com/u/Abhay21234/' 
                target="_blank"
                rel="noopener noreferrer"
                className='group relative p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-orange-400 rounded-full transition-all duration-300'
              >
                <Code2 className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  LeetCode
                </span>
              </a>
              <a 
                href='https://x.com/abhaystp30' 
                target="_blank"
                rel="noopener noreferrer"
                className='group relative p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-orange-400 rounded-full transition-all duration-300'
              >
                <Twitter className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Twitter
                </span>
              </a>
              <a 
                href='mailto:abhaystp30@gmail.com' 
                target="_blank"
                rel="noopener noreferrer"
                className='group relative p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-orange-400 rounded-full transition-all duration-300'
              >
                <Mail className="w-6 h-6" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Gmail
                </span>
              </a>
            </div>
          </div>
        </div>

       <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center">
  <div className="relative group">
    {/* Glow ring */}
    <div className="absolute inset-0 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500 to-sky-500 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

    {/* Profile circle with gradient and border */}
    <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-lg shadow-black/40">
      <div className="flex items-center justify-center w-full h-full rounded-full bg-gray-900 border border-gray-700">
        <span className="text-8xl animate-wave origin-[70%_70%]">👋</span>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default HomePage;