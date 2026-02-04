"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon,
  CodeBracketIcon, 
  BeakerIcon, 
  CommandLineIcon, 
  AcademicCapIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import BlogSection from './BlogSection';

// Type definition for experience items
type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: any;
  skills: string[];
  link?: string;
};

// Data for different sections
const workExperience: ExperienceItem[] = [
  {
    title: "Full-Stack Developer Intern",
    company: "The TryItFirst Labs",
    period: "Oct 2025 - Dec 2025",
    description: "Working on Full-Stack projects and contributing to innovative solutions.",
    icon: CodeBracketIcon,
    skills: ["React", "Node.js", "MongoDB" , "Express.js","Cloudinary",],
  },
  {
    title: "AI & ML  Intern",
    company: "IncuX Ai",
    period: "Feb 2026 - Apr 2026",
    description: "AIML Intern working on ML models, data pipelines, and AI-powered solutions.",
    icon: CpuChipIcon,
    skills: ["Python", "Machine Learning", "Deep Learning" , "Fast Api",],
  },
];

const education: ExperienceItem[] = [
  {
    title: "Computer Science",
    company: "University College of Engineering, Osmania University",
    period: "2023 - 2027",
    description: "Studied Computer Science with a focus on AI/ML and software engineering. Participated in multiple hackathons and coding competitions.",
    icon: AcademicCapIcon,
    skills: ["Algorithms", "Data Structures", "Software Engineering","Database Management","object Oriented Programming","Operating Systems"],
  },
];

const certifications: ExperienceItem[] = [
  {
    title: "OCI 2025 Certified DevOps Professional",
    company: "Oracle",
    period: "2025",
    description:
      "Demonstrates expertise in implementing DevOps practices on Oracle Cloud Infrastructure, including CI/CD pipelines, infrastructure automation, monitoring, logging, and secure cloud-native deployments.",
    icon: DocumentTextIcon,
    skills: ["OCI", "DevOps", "CI/CD", "Infrastructure as Code"],
    link: "/assets/devOps.pdf"
  },
  {
    title: "OCI 2025 Certified Data Science Professional",
    company: "Oracle",
    period: "2025",
    description:
      "Validates proficiency in data science workflows on Oracle Cloud Infrastructure, including data preparation, machine learning model development, analytics, and deploying data-driven solutions.",
    icon: DocumentTextIcon,
    skills: ["Data Science", "Machine Learning", "OCI", "Data Analytics"],
    link: "/assets/datascience.pdf"
  },
  {
    title: "OCI 2025 Certified AI Foundations Associate",
    company: "Oracle",
    period: "2025",
    description:
      "Demonstrates a foundational understanding of artificial intelligence concepts, machine learning basics, and the use of OCI AI services to build intelligent cloud applications.",
    icon: DocumentTextIcon,
    skills: ["AI Fundamentals", "Machine Learning Basics", "OCI AI Services"],
    link: "/assets/AiFound.pdf"
  }
];


const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  // Function to get data based on active tab
  const getActiveData = () => {
    switch (activeTab) {
      case 'work':
        return workExperience;
      case 'education':
        return education;
      case 'certifications':
        return certifications;
      case 'blogs':
        return [];
      default:
        return workExperience;
    }
  };
  
  const tabVariants = {
    active: {
      backgroundImage: "linear-gradient(to right, rgba(0, 221, 235, 0.1), rgba(255, 0, 255, 0.1))",
      border: "1px solid rgba(255, 0, 255, 0.3)",
      y: 0,
    },
    inactive: {
      background: "rgba(0, 0, 0, 0.3)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      y: 5,
    }
  };
  
  return (
    <section id="experience" className="min-h-screen py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.5),transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[url('/demon-pattern.svg')] bg-repeat opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4" 
            style={{
              background: "linear-gradient(to right, #00DDEB, #FF00FF)", 
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Experience
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A comprehensive overview of my professional journey, education, certifications, and blogs.
          </p>
        </motion.div>
        
        {/* Tabs navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {['work', 'education', 'certifications', 'blogs'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg text-white font-medium backdrop-blur-sm
                         transition-all duration-300`}
              variants={tabVariants}
              animate={activeTab === tab ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>
        
        {/* Timeline or Blogs */}
        {activeTab === 'blogs' ? (
          <BlogSection />
        ) : (
          <div className="max-w-4xl mx-auto space-y-16 relative">
            {/* Vertical Line */}
            <div className="absolute left-[7.5rem] top-0 w-px h-full bg-gradient-to-b from-[#00DDEB]/50 via-[#FF00FF]/30 to-transparent" />

            {getActiveData().map((experience, index) => (
              <motion.div 
                key={experience.title} 
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative flex items-start gap-8">
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-3 bg-gradient-to-r from-[#00DDEB]/20 to-[#FF00FF]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-black to-zinc-900
                                border-2 border-zinc-800 flex items-center justify-center
                                group-hover:border-[#FF00FF]/50 transition-colors duration-300">
                      <experience.icon className="w-10 h-10 text-zinc-400 group-hover:text-[#00DDEB] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-grow">
                    <div className="relative p-8 rounded-lg bg-gradient-to-br from-black/90 to-zinc-900/80
                                border border-zinc-800 group-hover:border-[#FF00FF]/30 transition-all duration-300
                                backdrop-blur-sm group-hover:shadow-[0_0_20px_rgba(255,0,255,0.1)]">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                        {experience.title}
                      </h3>
                      
                      <p className="text-zinc-400 mb-2 font-semibold">{experience.company} • {experience.period}</p>
                      <p className="text-zinc-500 mb-4 leading-relaxed">{experience.description}</p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-1.5 text-sm bg-black/50 text-zinc-400 rounded-full
                                     border border-zinc-800 hover:border-[#00DDEB]/50 hover:text-[#00DDEB]
                                     transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Certificate Link Button */}
                      {activeTab === 'certifications' && experience.link && (
                        <motion.a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#00DDEB] 
                                   bg-black/50 rounded-lg border border-[#00DDEB]/30 hover:border-[#00DDEB]/50
                                   transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,221,235,0.2)]"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Certificate
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      {/* Add CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection; 
