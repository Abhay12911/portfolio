import React from 'react';
import Card from '../Common/Card';
import travel from '../../image/travel.jpg';
import twitter from '../../image/twitter.jpg';
import job from '../../image/job.jpg';
import youtube from '../../image/youtube.jpg';
import payment from '../../image/payment.jpg';
import draw from '../../image/draw.svg';

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
            imageLink={draw}
            projectName="Collaborative Drawing App"
            desc={
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Real-time collaborative whiteboard with multi-user drawing.</li>
                <li>Custom tools: pencil, shapes, eraser, pan, and zoom.</li>
                <li>Built from scratch using Canvas API.</li>
                <li>Monorepo architecture with separated frontend, backend, and WebSocket services.</li>
                <li>Type-safe synchronization with TypeScript & PostgreSQL.</li>
              </ul>
            }
            codeUrl="https://github.com/Abhay12911/draw-app"
            liveUrl="#"
            tags={["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Canvas 2D", "Monorepo","Express"]}
            featured={true}
          />

          <Card
            imageLink={payment}
            projectName="Full-Stack Payment Application"
            desc={
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Production-grade payment system with a mock banking server.</li>
                <li>On-ramp transactions with secure webhook-based bank integration.</li>
                <li>Service-oriented architecture with PostgreSQL for scalability.</li>
                <li>Implemented CI/CD automation pipelines.</li>
                <li>Focused on modern security & handling high concurrency.</li>
              </ul>
            }
            codeUrl="https://github.com/Abhay12911/Paytm-project"
            liveUrl="#"
            tags={["Next.js", "PostgreSQL", "Express.js", "Tailwind CSS", "Node.js", "CI/CD"]}
            featured={true}
          />

          <Card
            imageLink={job}
            projectName="AI-Powered Job Recommendation System"
            desc={
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>AI-driven platform for personalized job recommendations.</li>
                <li>Analyzes resume content using Natural Language Processing.</li>
                <li>Machine learning models for intelligent job matching.</li>
                <li>Interactive and intuitive user interface for job seekers.</li>
              </ul>
            }
            codeUrl="https://github.com/Abhay12911/ai-job-recommendation"
            liveUrl="https://ai-job-recommendation-ztr8.vercel.app/"
            tags={["Next.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "OpenAI API"]}
          />

          <Card
            imageLink={twitter}
            projectName="EchoSphere – Social Networking Platform"
            desc={
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Real-time feed with personalized post suggestions.</li>
                <li>Secure authentication & follower/following relationships.</li>
                <li>Media uploads, like/dislike system, and content discovery.</li>
                <li>Built with React Query for efficient state synchronization.</li>
                <li>Scalable MERN backend for production-grade performance.</li>
              </ul>
            }
            codeUrl="https://github.com/Abhay12911/Twitter-clone"
            liveUrl="#"
            tags={["React.js", "MongoDB", "Express.js", "Node.js", "React Query"]}
          />

          <Card
            imageLink={travel}
            projectName="Trip Tales - Blogging Platform"
            desc={
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Full-stack blogging platform for sharing travel stories.</li>
                <li>Rich content support with image uploads & comments.</li>
                <li>Features like likes, dislikes, and user interaction.</li>
                <li>Secure authentication and content management system.</li>
                <li>Responsive modern UI built with Tailwind CSS.</li>
              </ul>
            }
            codeUrl="https://github.com/Abhay12911/Blog-Space"
            liveUrl="https://blog-space-frontend.onrender.com/"
            tags={["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"]}
          />

        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
