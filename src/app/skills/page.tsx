"use client";

import { AnimatedTooltip } from '@/components/AnimatedTooltip';

const skills = [
  {
    id: 1,
    name: "React",
    designation: "Frontend Development",
    image: "/assets/react.png",
  },
  {
    id: 2,
    name: "Next.js",
    designation: "Full Stack Development",
    image: "/assets/nextjs.png",
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "Type Safety",
    image: "/assets/typescript.png",
  },
  {
    id: 4,
    name: "Node.js",
    designation: "Backend Development",
    image: "/assets/nodejs.png",
  },
  {
    id: 5,
    name: "Python",
    designation: "AI/ML Development",
    image: "/assets/python.png",
  },
];

export default function Skills() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#00DDEB] to-[#FF00FF] bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="flex flex-row items-center justify-center gap-4">
            <AnimatedTooltip items={skills} />
          </div>
        </div>
      </section>
    </main>
  );
} 