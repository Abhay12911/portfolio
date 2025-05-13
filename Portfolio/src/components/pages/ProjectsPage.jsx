// // import React from 'react'
// // import Card from '../common/Card'
// // import img2 from '../../image/img2.jpg';
// // import Ximg from '../../image/Ximg.png';
// // import travel from '../../image/travel.png';
// // import weather from '../../image/weather.png';
// // import sps from '../../image/sps.png';
// // import login from '../../image/login.png';
// // import todo from '../../image/todo.png';





// // const ProjectsPage = () => {
// //   return (
// //     <div className='bg-gradient-to-b from-black to-gray-800'>
// //       <div className='max-w-screen-lg mx-auto mt-96 sm:mt-44 pl-8'>
// //         <h1 className='text-4xl sm:mt-40 font-bold border-b-4 inline border-sky-500'>Work/Projects</h1>
// //         <p className='py-6'>Check out some of the projects that I've made using technologies like React, Tailwind, and the MERN stack.</p>

// //         {/* Grid container to control the layout */}
// //         <div className='grid grid-cols-1 pl-4 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-8 justify-center items-center mt-9'>
// //           <Card
// //             imageLink={Ximg}
// //             projectName={"Twitter clone"}
// //             desc={"Created full stack twitter clone using the MERN stack also used reacr-query for satate management and tailwind css , dasiy ui for interactive design."}
// //             codeUrl={"https://github.com/Abhay12911/Twitter-clone"}
// //           />
// //           <Card
// //             imageLink={travel}
// //             projectName={"Travelblog Website"}
// //             desc={"Created travel blog website uisng MERN in which can post their blogs and images. Applied modern styling using tailwind"}
// //             codeUrl={"https://github.com/Abhay12911/Blog-Space"}
// //           />
// //           <Card
// //             imageLink={weather}
// //             projectName={"Weather App"}
// //             desc={"Created weather app using HTML,CSS and JS which gives the real time weather of the place."}
// //             codeUrl={"https://github.com/Abhay12911/weather-app"}
// //           />
// //           <Card
// //             imageLink={sps}
// //             projectName={"Rock-Paper-Scissors Game"}
// //             desc={"Created rock-paper-scissors game using HTML,CSS and JS"}
// //             codeUrl={"https://github.com/Abhay12911/Rock-Paper-Scissors-game"}
// //           />
// //           <Card
// //             imageLink={login}
// //             projectName={"Login-Register froms"}
// //             desc={"Created login and register form and data of users is stored in database, for database MongoDB is used."}
// //             codeUrl={"https://github.com/Abhay12911/Login_register"}
// //           />
// //           <Card
// //             imageLink={todo}
// //             projectName={"Todo App"}
// //             desc={"Created todo management app using React.js with the local storage functionality."}
// //             codeUrl={"https://github.com/Abhay12911/Todo-app"}
// //           />
// //         </div>
     
// //       </div>
// //     </div>
// //   )
// // }

// // export default ProjectsPage;


// import React from 'react'
// import Card from '../common/Card'
// import img2 from '../../image/img2.jpg';
// import Ximg from '../../image/Ximg.png';
// import travel from '../../image/travel.png';
// import weather from '../../image/weather.png';
// import sps from '../../image/sps.png';
// import login from '../../image/login.png';
// import todo from '../../image/todo.png';

// const ProjectsPage = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-800">
//       {/* Background with subtle pattern */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 inline-block">
//             Work/Projects
//           </h1>
//           <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
//             Check out some of the projects that I've built using technologies like React, Tailwind, and the MERN stack.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <Card
//             imageLink={Ximg}
//             projectName="Twitter Clone"
//             desc="Created full stack twitter clone using the MERN stack also used react-query for state management and tailwind css, daisyUI for interactive design."
//             codeUrl="https://github.com/Abhay12911/Twitter-clone"
//             tags={["React", "MongoDB", "Express", "Node.js"]}
//           />
//           <Card
//             imageLink={travel}
//             projectName="Travelblog Website"
//             desc="Created travel blog website using MERN in which can post their blogs and images. Applied modern styling using tailwind"
//             codeUrl="https://github.com/Abhay12911/Blog-Space"
//             tags={["React", "MongoDB", "Express", "Node.js"]}
//           />
//           <Card
//             imageLink={weather}
//             projectName="Weather App"
//             desc="Created weather app using HTML, CSS and JS which gives the real time weather of the place."
//             codeUrl="https://github.com/Abhay12911/weather-app"
//             tags={["HTML", "CSS", "JavaScript"]}
//           />
          
//           <Card
//           imageLink={img2}
//           projectName="AI powered Job Recommendation System"
//           desc="Built an AI-Powered Job recommendation System - a smart tool that helps job seekers find relevant opportunities based on their resume content!"
//           codeUrl="https://github.com/Abhay12911/ai-job-recommendation"
//           tags={["Nextjs", "MongoDB", "Express", "Node.js", "Tailwind", "OpenAI",]}
//           />
//          <Card
//          imageLink={}
//          projectName="Youtube Clone"
//          desc="Created a Youtube clone using React.js and Tailwind CSS. The app allows users to search for videos and view video details."
//          codeUrl="https://github.com/Abhay12911/Youtube-Clone"
//          tags={["React", "Tailwind CSS"]}
//          />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsPage;

import React from 'react';
import Card from '../common/Card';
import travel from '../../image/travel.jpg';
import twitter from '../../image/twitter.jpg';
import job from '../../image/job.jpg';
import youtube from '../../image/youtube.jpg';
import payment from '../../image/payment.jpg';

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-800">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 inline-block">
            Work/Projects
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Check out some of the projects that I've built using technologies like React, Tailwind, and the MERN stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
         imageLink={payment}
          projectName="Paymemt App"
          desc="A full-stack payment application enabling seamless peer-to-peer (P2P) transfers, On-ramp transactions, bank webhook server and robust backend"
          codeUrl="https://github.com/Abhay12911/Paytm-project"
          tags={["Nextjs", "Postgress", "Express", "Tailwind", "Node.js","CI"]}
        />
        <Card
            imageLink={job}
            projectName="AI powered Job Recommendation System"
            desc="Built an AI-Powered Job recommendation System - a smart tool that helps job seekers find relevant opportunities based on their resume content!"
            codeUrl="https://github.com/Abhay12911/ai-job-recommendation"
            tags={["Nextjs", "MongoDB", "Express", "Node.js", "Tailwind", "OpenAI"]}
          />
          <Card
            imageLink={twitter}
            projectName="Twitter Clone"
            desc="Created full stack twitter clone using the MERN stack also used react-query for state management and tailwind css, daisyUI for interactive design."
            codeUrl="https://github.com/Abhay12911/Twitter-clone"
            tags={["React", "MongoDB", "Express", "Node.js"]}
          />
          <Card
            imageLink={travel}
            projectName="Travelblog Website"
            desc="Created travel blog website using MERN in which can post their blogs and images. Applied modern styling using tailwind"
            codeUrl="https://github.com/Abhay12911/Blog-Space"
            tags={["React", "MongoDB", "Express", "Node.js"]}
          />
          
          
         
          <Card
            imageLink={youtube}
            projectName="Youtube Clone"
            desc="Created a Youtube clone using React.js and Tailwind CSS. The app allows users to search for videos and view video details."
            codeUrl="https://github.com/Abhay12911/Youtube-Clone"
            tags={["React", "Tailwind CSS"]}
          />

<Card
            imageLink={travel}
            projectName="Weather App"
            desc="Created weather app using HTML, CSS and JS which gives the real time weather of the place."
            codeUrl="https://github.com/Abhay12911/weather-app"
            tags={["HTML", "CSS", "JavaScript"]}
          />
        
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;