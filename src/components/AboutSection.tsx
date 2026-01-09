"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownIcon, TrophyIcon, RocketLaunchIcon, UserGroupIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const AboutSection = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [activeEmbedIndex, setActiveEmbedIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  const achievements = [
    {
      icon: TrophyIcon,
      title: "Founder",
      subtitle: "VidTing & Hoverly",
      description: "Built and scaled digital ventures focused on content creation, web development, and creative services. Gained hands-on experience across strategy, execution, client collaboration, and business operations while learning how to turn ideas into sustainable, real-world solutions."
    },
    {
      icon: RocketLaunchIcon,
      title: "3-Month Paid Internship",
      subtitle: "Cracked in 3rd Year",
      description: "Secured a prestigious internship opportunity in my academic journey, demonstrating exceptional skills and determination.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: UserGroupIcon,
      title: "10+ Freelance Projects",
      subtitle: "Completed Successfully",
      description: "Delivered high-quality solutions for diverse clients, building a strong portfolio and reputation in the freelance community.",
      color: "from-green-500 to-emerald-500"
    },
    // {
    //   icon: CodeBracketIcon,
    //   title: "100 Days of Code Award",
    //   subtitle: "By Ankit Bayampuria",
    //   description: "Recognized for consistent dedication to coding practice, showing commitment to continuous learning and improvement.",
    //   color: "from-orange-500 to-red-500"
    // },
    {
      icon: AcademicCapIcon,
      title: "Open Source Contributor",
      subtitle: "Active Participation",
      description: "Contributed to the open-source community, collaborating with developers worldwide and giving back to the tech ecosystem.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const storySections = [
    {
      title: "The Beginning",
      content: "Every great journey starts with a single step. Mine began with an insatiable curiosity that pushed me toward DSA, content creation, and an entrepreneurial mindset. Exploring these paths helped me understand how problem-solving, building, and thinking beyond code come together.",
      highlight: "Passion meets Purpose",
      image: "/assets/IMG_20240403_161156.jpg"
    },
    {
      title: "Giving Back",
      content: "Contributing to open source repositories which helps in building their Bussiness.",
      highlight: "Community First",
      image: "/assets/Contri.png"
    },
    {
      title: "Proving Excellence",
      content: "From cracking a 3-month internship to completing 10+ freelance projects, every achievement was a testament to dedication and skill.",
      highlight: "Results Speak",
      image: "/assets/imagecopy.png"
    },
    {
      title: "Identifying Problems",
      content: "Identifying the problem statements of real world and solving them by building applications for users.",
      highlight: "Problem Solver",
      image: "/assets/noteshare.png"
    },
    {
      title: "Creating Impact",
      content: "I discovered the power of content creation as a tool for leverage and distribution. Sharing knowledge became my way of multiplying impact.",
      highlight: "Content is King",
      // Replace static image with Instagram reel embed
      instagramUrl: "https://youtube.com/shorts/luFfxRV5fTI?si=4ow3jnXTAw7NNeSa",
      previewImage: "/assets/image .svg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(Math.min(section, storySections.length - 1));
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setLightboxUrl(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />
        <motion.div 
          style={{ y }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Profile Image */}
            <div className="mb-8">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                  <Image
                    src="/assets/dp img.png"
                    alt="Sri Charan Profile Picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
            >
              <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
               SriCharan
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I’m a student developer who believes in learning through consistency and hands-on work.
From solving problems to building projects and creating content, this portfolio reflects my growth and ongoing journey.
            </p>

            {/* Tags Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {[
                "Student",
                "Open Source Contributor", 
                "Software Engineer",
                "Freelancer",
                "Founder",
                "Content Creator",
                "Entrepreneur"
              ].map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-cyan-400 font-medium text-sm group-hover:text-cyan-300 transition-colors duration-300">
                    {tag}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <ArrowDownIcon className="w-8 h-8 text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

             {/* Story Sections with Timeline Path */}
       {storySections.map((section, index) => (
         <section key={index} className="min-h-screen flex items-center justify-center relative">
           <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />
           
           {/* Timeline Path */}
           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-pink-500 to-cyan-500 opacity-30 hidden lg:block">
             {/* Timeline Nodes */}
             <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full border-2 border-white shadow-lg"></div>
             
             {/* Connecting Lines */}
             {index < storySections.length - 1 && (
               <div className="absolute top-full w-1 h-screen bg-gradient-to-b from-pink-500 to-cyan-500"></div>
             )}
           </div>
           
           <motion.div
             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="container mx-auto px-4 relative z-10"
           >
             <div className="max-w-6xl mx-auto">
               <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                 <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-pink-500" />
                 <span className="text-cyan-400 font-medium">Chapter {index + 1}</span>
               </div>
               
               <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>
                 {/* Content */}
                 <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                   <h2 className="text-4xl md:text-6xl font-bold mb-6">
                     <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
                       {section.title}
                     </span>
                   </h2>
                   
                   <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                     {section.content}
                   </p>
                   
                   <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 rounded-full">
                     <span className="text-cyan-400 font-semibold">{section.highlight}</span>
                   </div>
                 </div>
                 
                 {/* Image */}
                 <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                   <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     viewport={{ once: true }}
                     className="relative"
                   >
                     <div
                       className="relative w-full h-96 rounded-2xl overflow-hidden group"
                       onMouseEnter={() => setHoverIndex(index)}
                       onMouseLeave={() => setHoverIndex((v) => (v === index ? null : v))}
                       onClick={() => {
                         if (section.instagramUrl) {
                           setLightboxUrl(`${section.instagramUrl}embed`);
                           setIsLightboxOpen(true);
                           return;
                         }
                         setActiveEmbedIndex(index);
                       }}
                     >
                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-2xl" />
                       {section.instagramUrl ? (
                         <div className="absolute inset-0 cursor-pointer">
                           {/* Preview image */}
                           {section.previewImage && (
                             <Image
                               src={section.previewImage as string}
                               alt={`${section.title} preview`}
                               fill
                               className="object-cover rounded-2xl"
                               priority={index === 0}
                             />
                           )}
                           {/* Darken overlay + CTA */}
                           <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                             <div className="text-center">
                               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/40 bg-black/50 text-cyan-300 transition-opacity duration-300"
                                 style={{ opacity: hoverIndex === index ? 1 : 0.9 }}
                               >
                                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                                 </svg>
                                 <span className="text-sm font-medium">Click to play reel</span>
                               </div>
                               <p className="mt-3 text-xs text-gray-300">Opens in a modal</p>
                             </div>
                           </div>
                         </div>
                       ) : (
                         <Image
                           src={section.image as string}
                           alt={section.title}
                           fill
                           className="object-cover rounded-2xl"
                           onError={(e) => {
                             // Fallback to a placeholder if image doesn't exist
                             const target = e.target as HTMLImageElement;
                             target.style.display = 'none';
                             const parent = target.parentElement;
                             if (parent) {
                               parent.innerHTML = `
                               <div class=\"w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700\">
                                 <div class=\"text-center\">
                                   <div class=\"w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center\">
                                     <svg class=\"w-8 h-8 text-white\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
                                       <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\"></path>
                                     </svg>
                                   </div>
                                   <p class=\"text-gray-400 text-sm\">Add your image here</p>
                                   <p class=\"text-gray-500 text-xs mt-1\">${section.title}</p>
                                 </div>
                               </div>
                             `;
                             }
                           }}
                         />
                       )}
                     </div>
                   </motion.div>
                 </div>
               </div>
             </div>
           </motion.div>
         </section>
       ))}

      {/* Achievements Section */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every milestone tells a story of dedication, innovation, and relentless pursuit of excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${achievement.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{achievement.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
                Ready to Create
              </span>
          </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              This is just the beginning. Every day brings new opportunities to learn, 
              create, and make a difference. The future is not something we enter, 
              it's something we create.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/projects"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </a>
              <a
                href="/experience"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-colors duration-300"
              >
                My Journey
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Lightbox for video */}
      {isLightboxOpen && lightboxUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => {
            setIsLightboxOpen(false);
            setLightboxUrl(null);
          }}
        >
          <div
            className="relative bg-black rounded-2xl border border-zinc-800 shadow-2xl"
            style={{
              height: '90vh',
              width: 'min(90vw, calc(90vh * 9 / 16))'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute -top-10 right-0 text-gray-300 hover:text-white"
              onClick={() => {
                setIsLightboxOpen(false);
                setLightboxUrl(null);
              }}
            >
              ✕
            </button>
            <iframe
              src={lightboxUrl}
              className="absolute inset-0 w-full h-full rounded-2xl"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
      </div>
  );
};

export default AboutSection; 
