"use client";

import HeroSection from '../components/HeroSection';
import { WavyBackground } from "@/components/WavyBackground";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Code, Database, Cloud, Brain, Zap, Star, TrendingUp } from "lucide-react";

// Enhanced skill categories with proficiency levels
const skillCategories = {
  "Frontend": {
    icon: Code,
    color: "from-blue-600 to-blue-700",
    skills: [
      { name: "React", level: 95, image: "/techstack/React.png", years: 3 },
      { name: "Next.js", level: 90, image: "/techstack/NextJS.png", years: 2 },
      { name: "TypeScript", level: 88, image: "/techstack/Typescript.png", years: 2.5 },
      { name: "Tailwind", level: 92, image: "/techstack/Tailwind.png", years: 2 },
      { name: "JavaScript", level: 93, image: "/techstack/js.png", years: 4 },
      { name: "HTML", level: 96, image: "/techstack/html.png", years: 5 },
      { name: "CSS", level: 90, image: "/techstack/CSS3.jpg", years: 4 }
    ]
  },
  "Backend": {
    icon: Database,
    color: "from-emerald-600 to-emerald-700",
    skills: [
      { name: "Node.js", level: 90, image: "/techstack/NodeJS.png", years: 3 },
      { name: "Express.js", level: 88, image: "/techstack/Express.png", years: 2.5 },
      { name: "MySQL", level: 85, image: "/techstack/mysql.png", years: 2 },
      // { name: "Prisma", level: 82, image: "/techstack/prisma.jpg", years: 1.5 },
      { name: "Python", level: 87, image: "/techstack/python.png", years: 3 }
    ]
  },
  "Cloud/DevOps": {
    icon: Cloud,
    color: "from-slate-600 to-slate-700",
    skills: [
      { name: "AWS", level: 85, image: "/techstack/aws123.png", years: 2 },
      { name: "Docker", level: 80, image: "/techstack/Docker.png", years: 1.5 },
      { name: "Git", level: 90, image: "/techstack/git.png", years: 4 }
    ]
  },
  "AI/ML": {
    icon: Brain,
    color: "from-amber-600 to-amber-700",
    skills: [
      { name: "Python", level: 87, image: "/techstack/python.png", years: 3 },
      { name: "Numpy", level: 80, image: "/assets/numpy .png", years: 1 },
      { name: "Pandas", level: 80, image: "/assets/pandas .png", years: 1 },
      { name: "Matplotlib", level: 75, image: "/techstack/matplotlib.png", years: 1.5 },
      { name: "Scikit-learn", level: 80, image: "/assets/SK learn .png", years: 1 },
      { name: "Machine Learning", level: 82, image: "/techstack/Ml.jpg", years: 2 },
      { name: "PyTorch", level: 80, image: "/assets/pytorch.png", years: 1 },
      { name: "TensorFlow", level: 80, image: "/assets/Tensorflow.png", years: 1 },
      { name: "Deeplearning", level: 80, image: "/assets/dl.png", years: 1 },
      { name: "Gen AI", level: 80, image: "/assets/gen ai .jpeg", years: 1 },
      { name: "HuggingFace", level: 80, image: "/assets/huggingface.png", years: 1 },
      { name: "Opencv", level: 80, image: "/assets/open cv .png", years: 1 },
    ]
  }
};



// Floating skill particles
const FloatingSkill = ({ skill, delay }: { skill: string, delay: number }) => (
  <motion.div
    className="absolute text-slate-600/15 text-sm font-mono pointer-events-none"
    initial={{ opacity: 0, y: 100 }}
    animate={{ 
      opacity: [0, 0.6, 0],
      y: [100, -100],
      x: Math.random() * 200 - 100
    }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 8
    }}
  >
    {skill}
  </motion.div>
);

// Skill proficiency bar component
const SkillBar = ({ skill, index }: { skill: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group p-4 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-blue-600/50 transition-all duration-300 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="relative flex items-center justify-center w-10 h-10 bg-slate-800/50 rounded-lg overflow-hidden">
        <img src={skill.image} alt={skill.name} className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform" />
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-white font-medium">{skill.name}</span>
          <div className="flex items-center gap-2">
            <span className="text-blue-600 text-sm font-semibold">{skill.level}%</span>
            <span className="text-zinc-500 text-xs">{skill.years}y</span>
          </div>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillCategories>("Frontend");
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      
      {/* Enhanced Skills Section */}
      <div className="relative min-h-screen w-full py-32 bg-black">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.5),transparent_50%)] opacity-30" />
          <WavyBackground className="absolute inset-0 opacity-30" />
        </div>

        {/* Floating skill particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Object.entries(skillCategories).flatMap(([category, cat]) => 
            cat.skills.map(skill => ({ ...skill, category }))
          ).map((skill, i) => (
            <FloatingSkill key={`${skill.category}-${skill.name}`} skill={skill.name} delay={i * 0.8} />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Mastering cutting-edge technologies to build exceptional digital experiences
            </p>


          </motion.div>

          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex p-2 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700">
              {Object.entries(skillCategories).map(([category, data]) => {
                const IconComponent = data.icon;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category as keyof typeof skillCategories)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? `bg-gradient-to-r ${data.color} text-white shadow-lg`
                        : "text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="hidden sm:inline">{category}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full text-white font-semibold mb-4`}>
                  {React.createElement(skillCategories[activeCategory].icon, { className: "w-6 h-6" })}
                  <span>{activeCategory} Development</span>
                </div>
                <p className="text-slate-400">
                  {activeCategory === "Frontend" && "Creating beautiful, responsive, and interactive user interfaces"}
                  {activeCategory === "Backend" && "Building robust, scalable, and secure server-side applications"}
                  {activeCategory === "Cloud/DevOps" && "Deploying and managing applications in the cloud"}
                  {activeCategory === "AI/ML" && "Developing intelligent systems and machine learning models"}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Show All Skills Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600/20 to-slate-600/20 border border-blue-600/30 text-white rounded-full font-medium hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              {showAllSkills ? 'Show Categories' : 'View All Skills'}
            </button>
          </motion.div>

          {/* All Skills View */}
          <AnimatePresence>
            {showAllSkills && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 overflow-hidden"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Complete Technology Stack</h3>
                  <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                    {Object.entries(skillCategories).flatMap(([category, cat]) => 
                      cat.skills.map(skill => ({ ...skill, category }))
                    ).map((skill, i) => (
                      <motion.div
                        key={`${skill.category}-${skill.name}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full hover:border-blue-600/50 transition-all duration-300 group"
                      >
                        <img src={skill.image} alt={skill.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                        <span className="text-white text-sm">{skill.name}</span>
                        <span className="text-blue-600 text-xs">{skill.level}%</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
} 