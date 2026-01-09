"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: "Web Development" | "AI/ML";
}

const projects: Project[] = [
  {
    title: "Fraud Detector",
    description: "Built a Website for Fraud Detection using Gemini Model and Gen AI",
    image: "/assets/fd.png",
    technologies: ["Python","Flask","Gen AI" , "Gemini-1.5-flash"],
    githubUrl: "https://github.com/Tejmul/Fraud-Detector",
    liveUrl: "https://github.com/Tejmul/Fraud-Detector",
    category: "AI/ML"
  },
  {
    title: "E-commerce Virtual Try-On",
    description: "Interactive e-commerce feature enabling users to virtually try products in real time, enhancing user experience and purchase confidence.",
    image: "/assets/digital-environment-scene.jpg",
    technologies: ["Api Integration","React","Node.js","Express.js", "MongoDB","Tailwind CSS","cloudinary"],
    githubUrl: "https://github.com/Sricharan-2690/TryOn-Website-TryItFirstLabs",
    liveUrl: "https://github.com/Sricharan-2690/TryOn-Website-TryItFirstLabs",
    category: "Web Development"
  },
  {
    title: "LeetCollege",
    description: "A real-time LeetCode analytics platform offering college-wise and global leaderboards.Designed to help students analyze progress and benchmark their coding performance.",
    image: "/assets/leetcollege.jpg",
    technologies: ["React","Tailwind","Supabase", "TypeScript"],
    githubUrl: "https://github.com/Sricharan-2690/dev-leaderboard",
    liveUrl: "https://leetcollege.vercel.app//",
    category: "Web Development"
  },
  
  {
    title: "Audio 2 Art",
    description: "Created an interactive 3D visualization tool for neural network architectures and training processes.",
    image: "/assets/Audio.jpeg",
    technologies: ["HuggingFace", "Model-Integration", "Javascript"],
    githubUrl: "https://github.com/Tejmul/Audio2Art",
    liveUrl: "https://tejmul.github.io/Audio2Art/",
    category: "AI/ML"
  },
  {
    title: "Student Appointment Backend System Server",
    description: "Designed and built the backend for a college appointment system to streamline scheduling between students and faculty.",
    image: "/assets/appointment.png",
    technologies: ["Node.js","Express.js", "MySQL", "Prisma" , "Supertest"],
    githubUrl: "https://github.com/Tejmul/college-appointment-system-server",
    liveUrl: "https://college-appointment-system-server.vercel.app/",
    category: "Web Development"
  },
  {
    title: "NotesShare",
    description: "Real-time note sharing web app enabling collaborative creation and access to notes with authentication and live database sync.",
    image: "/assets/notesshare.jpg",
    technologies:["React","Tailwind","Supabase", "TypeScript"],
    githubUrl: "https://github.com/Sricharan-2690/grad-grove",
    liveUrl: "https://notes-share-delta.vercel.app/",
    category: "Web Development"
  },
  {
    title: "Hoverly-Agency Website",
    description: "Hoverly is a website agency platform showcasing professional web development services.Designed to present services clearly, build trust, and convert visitors into clients.",
    image: "/assets/hoverly.png",
    technologies: ["Tailwind CSS","React js","Shadcn UI"],
    githubUrl: "https://github.com/Sricharan-2690/Hoverly-Spline-3d-website-",
    liveUrl: "https://hoverly-spline-3d-website.vercel.app/",
    category: "Web Development"
  },
  {
    title: "Multi-Threaded Proxy Server",
    description: "High-performance HTTP proxy server built in C using socket programming, multithreading, and LRU caching to handle concurrent clients.",
    image: "/assets/proxyserver.jpg",
    technologies: ["C","Pthreads","Socket Programming", "LRU Caching","Semaphores"],
    githubUrl: "https://github.com/Sricharan-2690/MultiThreadedProxyServer",
    liveUrl: "https://github.com/Sricharan-2690/MultiThreadedProxyServer",
    category: "Web Development"
  },
  {
    title: "Amazon Backend",
    description: "Backend with MVC architecture for Amazon Music Clone",
    image: "/assets/amazon1.png",
    technologies: ["Node.js","Express.js", "MySQL", "Prisma"],
    githubUrl: "https://github.com/Tejmul/Amazon-Backend",
    liveUrl: "https://amazon-backend-ecru.vercel.app/",
    category: "Web Development"
  },
  {
    title: "Movie Deck",
    description: "Movie Deck is a dynamic platform offering curated movie recommendations with personalized ratings and reviews.",
    image: "/assets/Movie.png",
    technologies: ["HTML","CSS","JavaScript"],
    githubUrl: "https://github.com/Tejmul/Movie-Deck",
    liveUrl: "https://tejmul.github.io/Movie-Deck/",
    category: "Web Development"
  },
  {
    title: "2048",
    description: "2048 is a challenging sliding puzzle game where players combine numbered tiles to reach the 2048 tile while strategizing to maximize their score.",
    image: "/assets/2048.png",
    technologies: ["HTML","CSS","JavaScript"],
    githubUrl: "https://github.com/Tejmul/2048-game",
    liveUrl: "https://tejmul.github.io/2048-game/",
    category: "Web Development"
  },
  
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-black border border-zinc-700 rounded-xl p-6 shadow-lg flex flex-col h-full min-h-[28rem] min-w-[20rem] transition-transform duration-300 hover:scale-105 hover:border-[#00DDEB] hover:shadow-[0_0_24px_#00DDEB33]">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
      <div className="relative w-full aspect-video overflow-hidden mb-4 rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/20 text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white/80 hover:text-cyan-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          Github Repo →
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white/80 hover:text-pink-400 transition-colors border border-white/20 rounded-lg px-3 py-1 bg-white/5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" /></svg>
          Live Link
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"Web Development" | "AI/ML">("Web Development");

  return (
    <div className="relative min-h-screen w-full py-32">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.5),transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[url('/demon-pattern.svg')] bg-repeat opacity-5" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00DDEB] to-[#FF00FF] bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Explore some of my best work in web development and AI/ML.
          </p>
        </div>
        {/* Category Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800">
            <button
              onClick={() => setActiveCategory("Web Development")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeCategory === "Web Development"
                  ? "bg-gradient-to-r from-[#00DDEB]/20 to-[#FF00FF]/20 text-white shadow-lg border border-[#00DDEB]/30"
                  : "text-zinc-400 hover:text-zinc-300"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveCategory("AI/ML")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeCategory === "AI/ML"
                  ? "bg-gradient-to-r from-[#00DDEB]/20 to-[#FF00FF]/20 text-white shadow-lg border border-[#00DDEB]/30"
                  : "text-zinc-400 hover:text-zinc-300"
              }`}
            >
              AI/ML
            </button>
          </div>
        </div>
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto px-4">
              {projects
                .filter((p) => p.category === activeCategory)
                .map((project, idx) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="h-full flex flex-col"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 