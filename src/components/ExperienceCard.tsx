"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

interface ExperienceCardProps {
  title: string;
  description: string;
  type?: 'experience' | 'certification';
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, type = 'experience' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00DDEB] to-[#FF00FF] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
      <div className="relative bg-zinc-900 rounded-xl p-6 border border-zinc-800 group-hover:border-[#FF00FF]/30 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#00DDEB]/20 to-[#FF00FF]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-black to-zinc-900 border-2 border-zinc-800 flex items-center justify-center group-hover:border-[#FF00FF]/50 transition-colors duration-300">
              {type === 'experience' ? (
                <BriefcaseIcon className="w-6 h-6 text-zinc-400 group-hover:text-[#00DDEB] transition-colors duration-300" />
              ) : (
                <AcademicCapIcon className="w-6 h-6 text-zinc-400 group-hover:text-[#00DDEB] transition-colors duration-300" />
              )}
            </div>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00DDEB] transition-colors">
              {title}
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard; 