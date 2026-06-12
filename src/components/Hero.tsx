import React from 'react';
import { Sparkles, ArrowRight, Code2, Cpu, GraduationCap, ChevronRight, Check } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const highlights = [
    'Zero Prior Knowledge Needed',
    'Real-World Interactive Labs',
    'Pre-Built Student Portfolios',
    'Practical Electronics Kits',
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-950 overflow-hidden"
    >
      {/* Background Decorative Gradiations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Promo Pill */}
            <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-400/20 px-4 py-2 rounded-full text-sky-400 text-xs sm:text-sm font-semibold tracking-wide animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>Unlock Practical Tech Success in 2026</span>
            </div>

            {/* Display Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Master Practical Tech Skills with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400">
                TechDost
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              No boring theory. We deliver practical, industry-focused bootcamps in{' '}
              <strong className="text-white hover:text-sky-400 transition-colors">programming</strong>,{' '}
              <strong className="text-white hover:text-sky-400 transition-colors">web development</strong>,{' '}
              <strong className="text-white hover:text-sky-400 transition-colors">artificial intelligence</strong>,{' '}
              <strong className="text-white hover:text-sky-400 transition-colors">electronics</strong>, and career mentoring.
            </p>

            {/* List checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
              {highlights.map((text, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-slate-300 text-sm">
                  <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30 flex-shrink-0">
                    <Check className="h-3 w-3 text-teal-400" />
                  </div>
                  <span className="font-semibold">{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate('courses')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-950 font-bold bg-white hover:bg-sky-400 active:scale-98 transition-all duration-300 shadow-xl shadow-cyan-500/5 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Browse Courses</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => onNavigate('playground')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 active:scale-98 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Try Live Playground</span>
                <ChevronRight className="h-5 w-5 opacity-60" />
              </button>
            </div>
            
            {/* Direct Inquiry hotline info */}
            <p className="text-xs text-slate-400 font-mono tracking-wide">
              * Immediate Admission Hotline: <a href="tel:9491089687" className="text-sky-400 underline hover:text-sky-300 font-bold">+91 9491089687</a>
            </p>
          </div>

          {/* Visual Showcase (Isometric Tech Card Layout) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Glowing background circles */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 rounded-2xl blur-xl" />
            
            {/* Floating Cards */}
            <div className="relative border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
              {/* Card Title */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                  </span>
                  <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">Interactive Terminal</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">v1.4_stable</span>
              </div>

              {/* Pseudo-Code Showcase */}
              <div className="space-y-3 font-mono text-xs sm:text-sm bg-slate-950 p-4 rounded-xl border border-slate-800/80 overflow-x-auto text-left">
                <div className="flex items-center space-x-2 text-slate-500">
                  <span>1</span>
                  <span>// Initialize TechDost platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500">2</span>
                  <span className="text-violet-400">import</span>
                  <span className="text-sky-400">{' { StudentDost } '}</span>
                  <span className="text-violet-400">from</span>
                  <span className="text-amber-300">'tech-dost'</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500">3</span>
                  <span className="text-violet-400">const</span>
                  <span className="text-emerald-400">classroom</span>
                  <span>=</span>
                  <span className="text-teal-400">new</span>
                  <span className="text-sky-300">CourseLab</span>
                  <span>()</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500">4</span>
                  <span className="text-violet-400">classroom</span>
                  <span>.</span>
                  <span className="text-pink-400">setFocus</span>
                  <span>(</span>
                  <span className="text-yellow-400 font-bold">'100%-PRACTICAL'</span>
                  <span>)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-500">5</span>
                  <span className="text-violet-400">classroom</span>
                  <span>.</span>
                  <span className="text-pink-400">enrollStudent</span>
                  <span>(</span>
                  <span className="text-sky-400">"YOU"</span>
                  <span>)</span>
                </div>
                <div className="flex items-center space-x-2 text-teal-400">
                  <span className="text-slate-500">6</span>
                  <span>&gt; Output: "Skill set unlocked! Ready for high-paying careers."</span>
                </div>
              </div>

              {/* Tiny Metrics Showcase */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/40 p-4 rounded-2xl border border-slate-800/40 hover:border-slate-700/50 transition-colors">
                  <div className="flex items-center space-x-2 mb-1">
                    <Code2 className="h-4 w-4 text-sky-400" />
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-400 font-mono">CODE LABS</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">120+ Hrs</span>
                </div>

                <div className="bg-slate-950/40 p-4 rounded-2xl border border-slate-800/40 hover:border-slate-700/50 transition-colors">
                  <div className="flex items-center space-x-2 mb-1">
                    <Cpu className="h-4 w-4 text-emerald-400" />
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-400 font-mono">HARDWARE</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">Arduino Kits</span>
                </div>
              </div>

              {/* Call-to-Action Float Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-900/40 via-slate-900 to-indigo-900/40 border border-sky-500/20 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-sky-400 font-mono tracking-widest uppercase">Admissions live</span>
                  <span className="text-xs text-slate-300 font-sans">Batch starting this Monday</span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-3.5 py-2 text-xs bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-1"
                >
                  <span>Apply</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 pt-10 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">4,500+</h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-400 font-mono">GRADUATED STUDENTS</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">100%</h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-400 font-mono">PRACTICAL LAB WORK</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">24/7</h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-400 font-mono">DOUBT-CLEARING DOS</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">4.9/5</h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-400 font-mono">AVERAGE STUDENT RATING</p>
          </div>
        </div>
      </div>
    </section>
  );
}
