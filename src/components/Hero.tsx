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
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
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
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            No boring theory. We deliver practical, industry-focused bootcamps in{' '}
            <strong className="text-white hover:text-sky-400 transition-colors">programming</strong>,{' '}
            <strong className="text-white hover:text-sky-400 transition-colors">web development</strong>,{' '}
            <strong className="text-white hover:text-sky-400 transition-colors">artificial intelligence</strong>,{' '}
            <strong className="text-white hover:text-sky-400 transition-colors">electronics</strong>, and career mentoring.
          </p>

          {/* List checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            {highlights.map((text, idx) => (
              <div key={idx} className="flex items-center justify-center sm:justify-start space-x-3 text-slate-300 text-sm">
                <div className="h-5 w-5 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30 flex-shrink-0">
                  <Check className="h-3 w-3 text-teal-400" />
                </div>
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('courses')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-950 font-bold bg-white hover:bg-sky-400 active:scale-98 transition-all duration-300 shadow-xl shadow-cyan-500/5 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Browse Courses</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Direct Inquiry hotline info */}
          <p className="text-xs text-slate-400 font-mono tracking-wide">
            * Immediate Admission Hotline: <a href="tel:9491089687" className="text-sky-400 underline hover:text-sky-300 font-bold">+91 9491089687</a>
          </p>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 pt-10 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-3 gap-8">
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
