import React from 'react';
import HomePage from './components/pages/HomePage';
import Navbar from './components/common/Navbar'
// import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/Contactpage';
import ProjectsPage from './components/pages/ProjectsPage';
import TechnologiesPage from './components/pages/TechnologiesPage';





import './App.css';

function App() {
   return (
      <div >
          <Navbar />
         <div id="home" className="section">
           
            <HomePage />
         </div>
        
         {/* <div id="about" className="section">
            <AboutPage />
         </div> */}
         <div id="projects" className="section">
            <ProjectsPage />
         </div>
         <div id="technologies" className="section">
            <TechnologiesPage />
         </div>
         <div id="contact" className="section">
            <ContactPage />
         </div>
      </div>
   );
}

export default App;
