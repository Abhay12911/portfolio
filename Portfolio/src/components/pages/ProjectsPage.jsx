
import React from 'react';
import Card from '../Common/Card';
import travel from '../../image/travel.jpg';
import twitter from '../../image/twitter.jpg';
import job from '../../image/job.jpg';
import youtube from '../../image/youtube.jpg';
import payment from '../../image/payment.jpg';

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 inline-block mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore my carefully crafted projects that showcase technical expertise, innovation, and attention to detail.
          </p>
        </div>

        <div className="space-y-12">
          <Card
            imageLink={payment}
            projectName="Full-Stack Payment Application"
            desc="A comprehensive payment platform featuring seamless peer-to-peer transfers, secure on-ramp transactions, sophisticated bank webhook integration, and a robust backend architecture. Built with modern technologies and industry best practices for scalability and security."
            codeUrl="https://github.com/Abhay12911/Paytm-project"
            liveUrl="#"
            tags={["Next.js", "PostgreSQL", "Express.js", "Tailwind CSS", "Node.js", "CI/CD"]}
            featured={true}
          />
          
          <Card
            imageLink={job}
            projectName="AI-Powered Job Recommendation System"
            desc="Intelligent job matching platform that leverages advanced AI algorithms to analyze resume content and provide personalized job recommendations. Features natural language processing, machine learning models, and intuitive user interface for optimal job-seeking experience."
            codeUrl="https://github.com/Abhay12911/ai-job-recommendation"
            liveUrl="#"
            tags={["Next.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "OpenAI API"]}
          />
          
          <Card
            imageLink={twitter}
            projectName="Twitter Clone - Social Platform"
            desc="Feature-rich social media platform replicating Twitter's core functionality with real-time updates, user authentication, tweet interactions, and responsive design. Implemented using modern React patterns and state management solutions."
            codeUrl="https://github.com/Abhay12911/Twitter-clone"
            liveUrl="#"
            tags={["React.js", "MongoDB", "Express.js", "Node.js", "React Query"]}
          />
          
          <Card
            imageLink={travel}
            projectName="Travel Blog Platform"
            desc="Dynamic content management system for travel enthusiasts to share their experiences through rich blog posts and stunning imagery. Features user authentication, content creation tools, and modern responsive design."
            codeUrl="https://github.com/Abhay12911/Blog-Space"
            liveUrl="#"
            tags={["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"]}
          />
          
          {/* <Card
            imageLink={youtube}
            projectName="YouTube Clone Interface"
            desc="Pixel-perfect recreation of YouTube's interface with video search functionality, detailed video pages, and responsive design. Demonstrates mastery of modern frontend development and API integration."
            codeUrl="https://github.com/Abhay12911/Youtube-Clone"
            liveUrl="#"
            tags={["React.js", "Tailwind CSS", "YouTube API"]}
          />

          <Card
            imageLink={travel}
            projectName="Real-Time Weather Application"
            desc="Clean and intuitive weather application providing accurate real-time weather information with location-based forecasting, interactive UI elements, and responsive design for all devices."
            codeUrl="https://github.com/Abhay12911/weather-app"
            liveUrl="#"
            tags={["HTML5", "CSS3", "JavaScript", "Weather API"]}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;