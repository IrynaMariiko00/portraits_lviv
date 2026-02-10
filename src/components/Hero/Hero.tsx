import React from 'react';
import { Reveal } from "~/components/ui/Reveal";

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden bg-[var(--color-gray)] text-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full relative z-10"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#0ea5ff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="massiveGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="60" result="blur" />
            </filter>
          </defs>

          <path d="M280,0 C490,180 920,180 1140,0" fill="none" stroke="url(#lineGradient)" strokeWidth="200" opacity="0.05" filter="url(#massiveGlow)" />
            <path d="M280,0 C490,180 920,180 1140,0" fill="none" stroke="url(#lineGradient)" strokeWidth="80" opacity="0.5" filter="blur(30px)" />
            <path d="M280,0 C490,180 920,180 1140,0" fill="none" stroke="#0ea5ff" strokeWidth="20" opacity="0.5" filter="blur(10px)" />
            <path d="M280,0 C490,180 920,180 1140,0" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 40px #0ea5ff) drop-shadow(0 0 40px #0ea5ff)' }} opacity="0.8" />
          </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[40px] flex-col w-full text-center px-4">
        
        <Reveal direction="up" delay={0.2}>
          <h1 className="title tracking-[0.05em]">
            Portraits that tell your story
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.4}>
          <h3 className="title font-medium text-[12px] md:text-[14px] tracking-[0.6em] uppercase text-white/60 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/20"></span>
            Handmade Only
            <span className="w-8 h-[1px] bg-white/20"></span>
          </h3>
        </Reveal>

        <Reveal direction="up" delay={0.6}>
          <button className="blue-btn px-[27px] py-[18px] text-mont text-[22px]">
            Get Started
          </button>
        </Reveal>
      </div> 
    </section>
  );
};

export default Hero;