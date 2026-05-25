import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative w-full overflow-hidden tp-hero-gradient min-h-[90vh] flex items-center justify-center p-6 md:p-12 lg:p-24 border-b-2 border-transparent" style={{ borderImage: 'linear-gradient(90deg, #0066FF, #00E64D) 1' }}>
      {/* Layer 1: Background Particles & Globe Outline */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0A1628] rounded-full blur-[100px] opacity-60"></div>
        {/* Mock particles / mesh effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen"></div>
        {/* Faint globe outline representational circle */}
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] border border-[#0066FF] rounded-full opacity-10 blur-sm mix-blend-screen -z-10"></div>
        <div className="absolute right-12 top-[30%] w-[500px] h-[500px] border border-[#00E64D] rounded-full opacity-5 blur-md -z-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline, Subtext & CTAs */}
        <div className={clsx("lg:col-span-5 space-y-6 flex flex-col items-start text-left transition-all duration-700 delay-300", mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-poppins font-bold leading-tight text-white">
            Premium <span className="text-[#00E64D]">CBC</span> Learning Built for Every Kenyan Child
          </h1>
          <p className="text-[#B0B3B8] font-inter text-lg lg:text-xl max-w-xl">
            High-quality, structured CBC-aligned content from PP1 to Grade 9 — verified educators, interactive lessons, and assessments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/pricing" className="px-8 py-3 rounded-xl bg-[#00E64D] text-[#0A0A0F] font-inter font-bold hover:shadow-[0_0_20px_rgba(0,230,77,0.7)] transition-all duration-300">
              Choose a Plan
            </Link>
            <Link href="#features" className="px-8 py-3 rounded-xl border border-[#0066FF] text-white font-inter font-semibold hover:bg-[rgba(0,102,255,0.1)] transition-all duration-300">
              Explore Learning
            </Link>
          </div>
          <div className="text-sm font-inter text-[#B0B3B8] mt-6 tracking-wide">
            PP1 to Grade 9 &middot; CBC Aligned &middot; Verified Educators
          </div>
        </div>

        {/* Center/Right Area: Mockup & TusoBot */}
        <div className="lg:col-span-7 relative min-h-[500px] flex items-center justify-center">
          
          {/* Layer 2: 3D Floating Device Mockup + Floating UI Elements */}
          <div className={clsx("relative z-20 transition-all duration-1000 delay-1000", mounted ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0')}>
            
            {/* 3D Tilted CSS Laptop Mockup */}
            <div className="relative group perspective-[1200px] w-[340px] md:w-[500px]">
              
              {/* Floating Bob Container */}
              <div className="animate-[slideUp_4s_ease-in-out_infinite_alternate] transform -rotate-y-[12deg] rotate-x-[5deg] rotate-z-[-2deg] group-hover:rotate-y-0 group-hover:rotate-x-0 group-hover:rotate-z-0 transition-transform duration-700 ease-out preserve-3d">
                
                {/* Laptop Screen (Lid) */}
                <div className="relative bg-[#0A0A0F] border-8 md:border-[12px] border-[#1A1A1A] rounded-t-xl md:rounded-t-2xl h-[240px] md:h-[300px] overflow-hidden shadow-[0_0_30px_rgba(0,102,255,0.2)] flex flex-col border-b-0">
                  
                  {/* Camera dot */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#333] rounded-full"></div>
                  
                  {/* Platform UI Preview Content */}
                  <div className="flex-1 mt-3 bg-gradient-to-b from-[#0A1628] to-[#0A0A0F] p-3 md:p-4 flex flex-col gap-2 relative z-10">
                    
                    {/* Top bar / Grade Selector mockup */}
                    <div className="flex justify-between items-center border-b border-[rgba(0,102,255,0.2)] pb-2 mb-2">
                       <div className="text-white font-poppins text-[10px] md:text-xs font-bold tracking-wider">Tusome<span className="text-[#00E64D]">Plus</span></div>
                       <div className="bg-[rgba(0,102,255,0.15)] border border-[#0066FF]/40 px-2 py-1 rounded text-[9px] md:text-[10px] text-white flex items-center gap-1 shadow-[0_0_10px_rgba(0,102,255,0.1)]">
                          Grade 5 <span className="text-[#00E64D] text-[8px]">▼</span>
                       </div>
                    </div>

                    {/* Lesson Card */}
                    <div className="glass-card p-3 flex items-start gap-3 rounded-lg border border-[rgba(0,230,77,0.4)] bg-[rgba(0,230,77,0.05)] shadow-[0_0_15px_rgba(0,230,77,0.1)]">
                      <div className="w-8 h-8 rounded bg-[#00E64D]/20 flex items-center justify-center text-sm shadow-[0_0_10px_rgba(0,230,77,0.2)] border border-[#00E64D]/30">📐</div>
                      <div className="flex-1">
                        <h4 className="text-white font-poppins text-[10px] md:text-[12px] font-semibold">Fractions & Decimals</h4>
                        <p className="text-[#B0B3B8] font-inter text-[8px] md:text-[9px] mt-0.5">Mathematics &middot; Term 2</p>
                      </div>
                      <div className="text-[#0A0A0F] font-bold text-[8px] md:text-[9px] bg-[#00E64D] px-2 py-0.5 rounded-full">RESUME</div>
                    </div>

                    {/* Quiz Progress Bar */}
                    <div className="glass-card p-3 rounded-lg border border-[#0066FF]/20 bg-[#0A1628]/60 mt-1">
                       <div className="flex justify-between text-[9px] md:text-[10px] mb-2">
                         <span className="text-[#B0B3B8] font-inter">Topic Mastery Quiz</span>
                         <span className="text-[#00E64D] font-bold">78%</span>
                       </div>
                       <div className="w-full bg-[#0A0A0F] rounded-full h-1.5 md:h-2 border border-[#0066FF]/20">
                          <div className="bg-gradient-to-r from-[#0066FF] to-[#00E64D] h-full rounded-full relative shadow-[0_0_10px_rgba(0,230,77,0.4)]" style={{ width: '78%' }}>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_#00E64D]"></div>
                          </div>
                       </div>
                    </div>

                  </div>

                  {/* Screen Reflection (Electric Blue on edge) */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#0066FF]/10 to-transparent transform skew-x-12 translate-x-10 pointer-events-none z-20"></div>

                </div>

                {/* Laptop Base (Keyboard area) */}
                <div className="relative h-3 md:h-4 bg-gradient-to-b from-[#333] to-[#111] rounded-b-xl md:rounded-b-2xl border-t border-[#555] shadow-[0_20px_40px_rgba(0,0,0,0.9)] flex justify-center z-30">
                   {/* Trackpad indent */}
                   <div className="w-1/5 h-1.5 md:h-2 bg-[#1A1A1A] mt-0.5 rounded-b-sm shadow-inner opacity-80"></div>
                </div>

                {/* Neon green glow cast underneath the device */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-[radial-gradient(ellipse_at_center,rgba(0,230,77,0.5)_0%,transparent_70%)] blur-xl -z-10"></div>

              </div>
            </div>

            {/* Floating Cards (CSS staggered entrance) */}
            <div className={clsx("hidden md:flex absolute -top-10 -left-12 glass-card p-3 items-center gap-2 transform transition-all duration-700 delay-1000", mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0')}>
              <div className="w-3 h-3 rounded-full bg-[#00E64D] animate-pulse"></div>
              <span className="text-white font-poppins text-xs">Live Class Now</span>
            </div>

            <div className={clsx("hidden md:flex absolute -bottom-8 -left-8 glass-card p-4 flex-col gap-1 transform transition-all duration-700 delay-[1200ms]", mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0')}>
              <span className="text-white font-poppins text-sm font-medium">Grade 5 &middot; Mathematics</span>
              <span className="text-[#B0B3B8] font-inter text-xs">78% complete</span>
              <div className="w-full bg-[#0A1628] rounded-full h-1.5 mt-1"><div className="bg-[#00E64D] h-1.5 rounded-full w-[78%]"></div></div>
            </div>

            <div className={clsx("hidden md:block absolute -top-6 -right-16 glass-card border border-[#D4A017]/40 p-3 transform transition-all duration-700 delay-[1400ms]", mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0')}>
              <div className="flex gap-2 items-center">
                <span className="text-[#D4A017] text-xl">🏆</span>
                <span className="text-white font-poppins text-xs font-semibold">Topic Mastery Unlocked!</span>
              </div>
            </div>

            <div className={clsx("hidden md:flex absolute -bottom-16 -right-4 glass-card p-3 items-center gap-2 transform transition-all duration-700 delay-[1600ms]", mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0')}>
              <span className="text-[#D4A017]">★★★★★</span>
              <span className="text-white font-poppins text-xs font-medium">4.9 Rating</span>
            </div>
            
            <div className={clsx("hidden md:block absolute top-1/2 -right-24 bg-gradient-to-r from-[#D4A017] to-[#FFD700] rounded-full px-4 py-2 transform transition-all duration-700 delay-[1800ms] shadow-[0_0_15px_rgba(212,160,23,0.4)]", mounted ? 'scale-100 opacity-100' : 'scale-90 opacity-0')}>
              <span className="text-[#0A0A0F] font-poppins text-xs font-bold whitespace-nowrap">Mid-Term Assessment Ready</span>
            </div>
          </div>

          {/* Layer 3: TusoBot */}
          <div className={clsx("absolute right-2 md:-right-4 lg:-right-10 -top-8 md:top-1/4 z-30 transition-all duration-700 delay-[2000ms] animate-bounce", mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50')}>
             {/* Mock TusoBot using an emoji + styled container as Lottie isn't loaded */}
             <div className="w-24 h-24 rounded-full bg-[#0d2a4a] border-2 border-[#00E64D] flex items-center justify-center text-4xl shadow-[0_0_25px_rgba(0,230,77,0.5)]">
               🐰
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
