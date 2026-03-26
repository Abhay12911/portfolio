import React from 'react';
import Card from '../Common/Card';
import travel from '../../image/travel.jpg';
import twitter from '../../image/twitter.jpg';
import job from '../../image/job.jpg';
import youtube from '../../image/youtube.jpg';
import payment from '../../image/payment.jpg';
import draw from '../../image/draw.svg';

const ProjectsPage = () => {
  const ladderAiLogo = "https://framerusercontent.com/images/HgkGQPwjHXAZ4X67Lk0VBuFsR2o.svg";
  const authServiceImage = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80";
  const saasServiceImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80";
  const apiServiceImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 inline-block mb-4">
            Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Professional work where I shipped production-ready systems and solved real business problems.
          </p>
        </div>

        <div className="mb-20">
          <Card
            imageLink={ladderAiLogo}
            projectName="Full-Stack Developer Intern • The Ladder"
            desc={
              <div className="space-y-3 text-gray-300">
                <p className="text-gray-200 font-medium">Oct 2025 - Mar 2025 • Remote </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Built and deployed a production-grade full-stack application end-to-end using Next.js 15 and TypeScript with a modular and scalable backend supporting 500+ real users.</li>
                  <li>Designed and implemented a custom CMS platform with 15+ secure API routes, role-based access control, and media upload pipelines, reducing manual content operations by 70%.</li>
                  <li>Optimized backend APIs and data-fetching logic to achieve &lt;200ms average response time, handle 1,000+ daily requests, and ensure zero downtime during deployments.</li>
                </ul>
              </div>
            }
            codeUrl="#"
            liveUrl="#"
            tags={["Next.js 15", "TypeScript", "CMS", "RBAC", "API Design", "Performance Optimization"]}
            sectionTitle="Core Highlights"
            hideActions={true}
          />
        </div>

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
            liveUrl="https://collaborative-draw-app-excelidraw-f.vercel.app/"
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

        <div className="text-center mt-24 mb-16">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 inline-block mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Client-focused solutions I offer to build secure, scalable, and production-ready digital products.
          </p>
        </div>

        <div className="space-y-12">
          <Card
            imageLink={authServiceImage}
            projectName="Authentication & Backend Systems"
            desc={
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>NextAuth / JWT implementation with role-based access control.</li>
                <li>Secure and scalable auth flows with protected routes.</li>
                <li>Session handling, refresh token strategy, and middleware guards.</li>
              </ul>
            }
            codeUrl="#"
            liveUrl="#"
            tags={["NextAuth", "JWT", "RBAC", "Node.js", "Security"]}
            sectionTitle="What You Get"
            hideActions={true}
          />

          <Card
            imageLink={saasServiceImage}
            projectName="SaaS MVP Development"
            desc={
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>End-to-end MVP development using modern full-stack architecture.</li>
                <li>Rapid delivery with clean code, reusable components, and CI-ready setup.</li>
                <li>Built for iteration speed and long-term maintainability.</li>
              </ul>
            }
            codeUrl="#"
            liveUrl="#"
            tags={["Next.js", "React", "TypeScript", "PostgreSQL", "Deployment"]}
            sectionTitle="What You Get"
            hideActions={true}
          />

          <Card
            imageLink={apiServiceImage}
            projectName="API Design & Performance Optimization"
            desc={
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>REST API architecture for reliability, observability, and scale.</li>
                <li>Query and backend optimization for low-latency responses.</li>
                <li>Production deployment practices focused on stability and uptime.</li>
              </ul>
            }
            codeUrl="#"
            liveUrl="#"
            tags={["REST APIs", "Database Tuning", "Caching", "Monitoring", "Scalability"]}
            sectionTitle="What You Get"
            hideActions={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
