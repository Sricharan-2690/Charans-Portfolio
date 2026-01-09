"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { motion } from 'framer-motion';
import { Github, Mail, FileText, Instagram, Linkedin, Youtube, Zap, Users, Star, Clock } from 'lucide-react';
import { AnimatedTooltip } from "./AnimatedTooltip";

// Typewriter Effect Component
const TypewriterText = ({ words, speed = 150 }: { words: string[], speed?: number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  return (
    <span className="text-gradient font-bold">
      {currentText}
      <span className="animate-pulse text-[#00DDEB]">|</span>
    </span>
  );
};

// Floating Particles Component
const FloatingParticle = ({ delay, children }: { delay: number, children: React.ReactNode }) => (
  <motion.div
    className="absolute text-[#00DDEB]/20 text-xs font-mono pointer-events-none"
    initial={{ opacity: 0, x: Math.random() * 100 - 50, y: 100 }}
    animate={{
      opacity: [0, 0.7, 0],
      y: [100, -100],
      x: Math.random() * 200 - 100
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 3
    }}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [loading, setLoading] = useState(true);
  const [fallback, setFallback] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visitorCount, setVisitorCount] = useState(1247);
  const [githubStats, setGithubStats] = useState({ repos: 50, commits: 1200 });
  
  // Dynamic roles for typewriter
  const roles = [
    "Full-Stack Developer",
    "Top Freelancer",
    "AI/ML Engineer",
    "Content Creator"
  ];
  // Social links with stats
  const socialLinks = [
    { Icon: Github, href: "https://github.com/Sricharan-2690/", label: "GitHub", stat: "50+ repos", count: githubStats.repos },
    { Icon: Mail, href: "mailto:katamonisricharan@gmail.com", label: "Email", stat: "<2hr response", count: "Fast" },
    { Icon: FileText, href: "/Resume_Dec__Copy.pdf", label: "Resume", stat: "Updated 2026", count: "New" },
    { Icon: Instagram, href: "https://www.instagram.com/sricharan_2690/?hl=en", label: "Instagram", stat: "80K+ Views", count: "80K+" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/sri-charan-katamoni-00830a290/", label: "LinkedIn", stat: "500+ connections", count: "500+" },
    { Icon: Youtube, href: "https://www.youtube.com/@CharansInsights/videos", label: "YouTube", stat: "100K+ views", count: "100K+" }
  ];

  // Mouse tracking effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
      setGithubStats(prev => ({
        repos: prev.repos + (Math.random() > 0.9 ? 1 : 0),
        commits: prev.commits + Math.floor(Math.random() * 5)
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    let didCancel = false;
    setLoading(true);
    setFallback(false);

    try {
      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      cameraRef.current = camera;
      camera.position.z = 5;

      // Renderer setup with better performance settings
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      });
      rendererRef.current = renderer;
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2));
      containerRef.current.appendChild(renderer.domElement);

      // Particle system with optimized geometry and mobile detection
      const isMobile = typeof navigator !== 'undefined' ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) : false;
      const particlesCount = isMobile ? 1500 : 3000;
      const particleSize = isMobile ? 0.03 : 0.02;
      const particlesGeometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(particlesCount * 3);
      
      for (let i = 0; i < particlesCount * 3; i += 3) {
        const r = 2.5 + Math.random() * 1.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        posArray[i] = r * Math.sin(phi) * Math.cos(theta);
        posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        posArray[i + 2] = r * Math.cos(phi);
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      const colors = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i += 3) {
        const intensity = Math.random();
        colors[i] = intensity;
        colors[i + 1] = 0.5 + intensity * 0.5;
        colors[i + 2] = 1.0;
      }
      
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: particleSize,
        sizeAttenuation: true,
        transparent: true,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false // Optimize for transparency
      });
      
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      // Add a simple rotating cube with optimized material
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
      const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0x00DDEB,
        specular: 0xFF00FF,
        shininess: 100,
        transparent: true,
        opacity: 0.8
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      scene.add(cube);

      // Lighting with optimized settings
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xff00ff, 0.5);
      pointLight.position.set(2, 3, 4);
      scene.add(pointLight);
      const pointLight2 = new THREE.PointLight(0x00ffff, 0.5);
      pointLight2.position.set(-2, -3, -4);
      scene.add(pointLight2);

      // Controls with mobile-optimized settings
      const controls = new OrbitControls(camera, renderer.domElement);
      controlsRef.current = controls;
      controls.enableDamping = true;
      controls.dampingFactor = isMobile ? 0.1 : 0.05;
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = isMobile ? 1 : 0.5;
      controls.enablePan = false;
      controls.rotateSpeed = isMobile ? 0.5 : 1;

      // Optimized resize handler with debounce
      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          const width = containerRef.current!.clientWidth;
          const height = containerRef.current!.clientHeight;
          const pixelRatio = isMobile ? 1 : Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2);
          
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
          renderer.setPixelRatio(pixelRatio);
        }, isMobile ? 250 : 100);
      };
      
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
      }

      // Animation with mobile optimization
      let animationFrameId: number;
      let lastTime = 0;
      const targetFPS = isMobile ? 30 : 60;
      const frameInterval = 1000 / targetFPS;
      
      const animate = (currentTime: number) => {
        animationFrameId = requestAnimationFrame(animate);
        
        const deltaTime = currentTime - lastTime;
        
        if (deltaTime > frameInterval) {
          lastTime = currentTime - (deltaTime % frameInterval);
          
          particlesMesh.rotation.x += isMobile ? 0.0005 : 0.001;
          particlesMesh.rotation.y += isMobile ? 0.0005 : 0.001;
          cube.rotation.x += isMobile ? 0.005 : 0.01;
          cube.rotation.y += isMobile ? 0.005 : 0.01;
          
          controls.update();
          renderer.render(scene, camera);
        }
      };
      
      animate(0);

      setLoading(false);

      // Cleanup with proper disposal
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', handleResize);
        }
        clearTimeout(resizeTimeout);
        
        if (rendererRef.current) {
          rendererRef.current.dispose();
          if (containerRef.current && rendererRef.current.domElement) {
            containerRef.current.removeChild(rendererRef.current.domElement);
          }
        }
        
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        
        if (sceneRef.current) {
          sceneRef.current.traverse((object) => {
            if (object instanceof THREE.Mesh) {
              object.geometry.dispose();
              object.material.dispose();
            }
          });
          sceneRef.current.clear();
        }
      };
    } catch (error) {
      setFallback(true);
      setLoading(false);
      console.error('Error setting up Three.js scene:', error);
    }

    return () => {
      didCancel = true;
    };
  }, []);


  return (
    <section id="home" className="w-full h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black z-10"></div>
      <div ref={containerRef} className="absolute inset-0 z-0"></div>
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00DDEB]"></div>
          <span className="ml-4 text-white text-lg">Loading...</span>
        </div>
      )}
      {fallback && !loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#1e293b]">
          <span className="text-white text-xl font-semibold">3D Animation not supported on this device.</span>
        </div>
      )}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl mx-auto"
        >
         <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
          style={{
            background: "linear-gradient(135deg, #00E5FF, #FF2D95)",
            backgroundSize: "200% 200%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            animation: "gradient 4s ease infinite",
            fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
          }}
        >
          Sri Charan
        </h1>


          {/* Dynamic Role Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-2">
              I'm a{" "}
              <span className="text-blue-600 font-bold">
                <TypewriterText words={roles} speed={100} />
              </span>
            </h2>
            <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
              {[
                { icon: Star, text: "Top 1% Developer", color: "text-amber-600" },
                { icon: Users, text: "10+ Happy Clients", color: "text-emerald-600" },
                { icon: Zap, text: "99.9% Success Rate", color: "text-blue-600" }
              ].map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-1 px-3 py-1 bg-white/5 border border-slate-700 rounded-full backdrop-blur-sm"
                >
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  <span className="text-sm text-slate-300">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>



          {/* Enhanced Social Links with Hover Stats */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group z-30 w-14 h-14 rounded-full flex items-center justify-center text-white bg-slate-800/60 border border-slate-600/40 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(30,64,175,0.3)]"
                whileHover={{ 
                  scale: 1.2, 
                  // rotateY: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <link.Icon className="w-7 h-7 relative z-10 group-hover:text-blue-600 transition-colors" />
                
                {/* Hover Tooltip with Stats */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2
                bg-slate-900/90 border border-slate-600/30
                px-3 py-2 rounded-lg opacity-0
                group-hover:opacity-100 transition-all duration-300
                pointer-events-none backdrop-blur-sm
                transform-gpu will-change-transform">
                  <div className="text-xs text-blue-600 font-semibold">{link.label}</div>
                  <div className="text-xs text-slate-300">{link.stat}</div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900/90 border-b border-r border-slate-600/30 rotate-45"></div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Floating Code Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'ML', 'TypeScript', 'Next.js'].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute text-slate-600/20 text-xs font-mono pointer-events-none"
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: [100, typeof window !== 'undefined' ? window.innerWidth - 100 : 800],
              y: [50, -50]
            }}
            transition={{
              duration: 20,
              delay: i * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 10
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      {/* Subtle Cursor Effect */}
      <motion.div
        className="fixed pointer-events-none z-30 w-3 h-3 bg-blue-600 rounded-full opacity-10 blur-sm"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

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

export default HeroSection; 