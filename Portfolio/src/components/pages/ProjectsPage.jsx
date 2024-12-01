import React from 'react'
import Card from '../common/Card'
import img2 from '../../image/img2.jpg';
import Ximg from '../../image/Ximg.png';
import travel from '../../image/travel.png';
import weather from '../../image/weather.png';
import sps from '../../image/sps.png';
import login from '../../image/login.png';
import todo from '../../image/todo.png';





const ProjectsPage = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto mt-96 sm:mt-44 pl-8'>
        <h1 className='text-4xl sm:mt-40 font-bold border-b-4 inline border-sky-500'>Work/Projects</h1>
        <p className='py-6'>Check out some of the projects that I've made using technologies like React, Tailwind, and the MERN stack.</p>

        {/* Grid container to control the layout */}
        <div className='grid grid-cols-1 pl-4 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-8 justify-center items-center mt-9'>
          <Card
            imageLink={Ximg}
            projectName={"Twitter clone"}
            desc={"Created full stack twitter clone using the MERN stack also used reacr-query for satate management and tailwind css , dasiy ui for interactive design."}
            codeUrl={"https://github.com/Abhay12911/Twitter-clone"}
          />
          <Card
            imageLink={travel}
            projectName={"Travelblog Website"}
            desc={"Created travel blog website uisng MERN in which can post their blogs and images. Applied modern styling using tailwind"}
            codeUrl={"https://github.com/Abhay12911/Blog-Space"}
          />
          <Card
            imageLink={weather}
            projectName={"Weather App"}
            desc={"Created weather app using HTML,CSS and JS which gives the real time weahter of the place."}
            codeUrl={"https://github.com/Abhay12911/weather-app"}
          />
          <Card
            imageLink={sps}
            projectName={"Rock-Paper-Scissors Game"}
            desc={"Created rock-paper-scissors game using HTML,CSS and JS"}
            codeUrl={"https://github.com/Abhay12911/Rock-Paper-Scissors-game"}
          />
          <Card
            imageLink={login}
            projectName={"Login-Register froms"}
            desc={"Created login and register form and data of users is stored in database, for database MongoDB is used."}
            codeUrl={"https://github.com/Abhay12911/Login_register"}
          />
          <Card
            imageLink={todo}
            projectName={"Todo App"}
            desc={"Created todo management app using React.js with the local storage functionality."}
            codeUrl={"https://github.com/Abhay12911/Todo-app"}
          />
        </div>
     
      </div>
    </div>
  )
}

export default ProjectsPage;
