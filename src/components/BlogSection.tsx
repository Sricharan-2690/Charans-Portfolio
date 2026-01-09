"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  // {
  //   title: "Building a Modern Portfolio with Next.js and Three.js",
  //   excerpt: "Discover how to build a stunning 3D portfolio website with Next.js, Three.js, and Framer Motion for an immersive user experience.",
  //   image: "/assets/portfolioimg.png",
  //   category: "Web Development",
  //   platform: "X",
  //   readTime: "5 min read",
  //   link: "https://x.com/Spylook171908/status/1903039702233698376"
  // },
  {
  title: "Service as Software: Why AI Is the Next Big Shift",
  excerpt:
    "Most people are still building SaaS, but the real shift is Service as Software. AI agents are redefining how we build, automate workflows, and solve problems faster. This post explores why students and builders must go beyond traditional paths and start building with AI.",
  image: "/assets/image.png",
  category: "AI & Startups",
  platform: "LinkedIn",
  readTime: "3 min read",
  link: "https://www.linkedin.com/posts/sri-charan-katamoni-00830a290_ai-startups-saas-activity-7314532238694436864-I9Kq"
},
  {
    title: "Internship Experiance",
    excerpt: "Three months of my internship—filled with learning, challenges, and growth. From real projects to unexpected lessons, here's what made this journey unforgettable!",
    image: "/assets/tif.png",
    category: "Internship",
    platform: "Linkedin",
    readTime: "5 min read",
    link: ""
  }
];

const BlogSection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
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
            Latest Articles
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, AI, and technology.
          </p>
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
    {blogPosts.map((post, index) => (
      <motion.article
        key={post.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00DDEB] to-[#FF00FF] blur opacity-0 group-hover:opacity-30 transition duration-500 pointer-events-none" />

        {/* Card */}
        <div className="relative bg-zinc-900 rounded-xl overflow-hidden">
          <div className="relative h-48">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/10">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-zinc-400">{post.readTime}</span>
              <span className="text-sm text-zinc-400 capitalize">{post.platform}</span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00DDEB] transition-colors">
              {post.title}
            </h3>

            <p className="text-zinc-400 mb-4">
              {post.excerpt}
            </p>

            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00DDEB] hover:text-[#FF00FF] transition-colors"
            >
              Read more
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </motion.article>
    ))}
  </div>
      </div>
    </section>
  );
};

export default BlogSection; 