import React from 'react';
import { ClipboardList, Code2, Layers, Briefcase, Award, Check } from 'lucide-react';

export default function Roadmap() {
  const steps = [
    {
      step: '01',
      title: 'Consultation & Personal Strategy',
      subtitle: 'Tailoring Your Path',
      icon: <ClipboardList className="h-6 w-6 text-sky-400" />,
      desc: 'Connect with Selena or our core counselors. We evaluate your background, review university syllabuses or current skill levels, and map out a highly optimized study track.',
      bullets: ['1-on-1 Profile Assessment', 'Custom learning timeline selection', 'Batch schedule configuration']
    },
    {
      step: '02',
      title: 'Practical Foundations Labs',
      subtitle: 'Coding & Wiring Day 1',
      icon: <Code2 className="h-6 w-6 text-emerald-400" />,
      desc: 'Banish long lectures. Engage in robust visual drills in the IDE or assemble physical microchips with real-world sensor feedback. Solidify variables, syntax, and logic flows from day one.',
      bullets: ['Hands-on IDE workspace coding', 'Complete interactive quizzes', 'Connecting hardware layouts']
    },
    {
      step: '03',
      title: 'Full Capstone Compilation',
      subtitle: 'Building Elite Portfolios',
      icon: <Layers className="h-6 w-6 text-indigo-400" />,
      desc: 'Create production-grade platforms. Build 4 complex Capstones: from securing database user registration loops, executing neural training runs, to deploying connected IoT home automations.',
      bullets: ['React / Express database architectures', 'LLM Agent system integrations', 'Publishing static domains live']
    },
    {
      step: '04',
      title: 'Professional Technical Overhaul',
      subtitle: 'Creating Standout Presence',
      icon: <Award className="h-6 w-6 text-amber-500" />,
      desc: 'Transform how tech companies perceive you. Undergo custom 1-on-1 resume optimization, construct elegant personal web portfolios, and clean up your GitHub repositories.',
      bullets: ['Machine-Readable (ATS) Resume rebuilds', 'GitHub repository aesthetic optimization', 'Elite LinkedIn branding alignment']
    },
    {
      step: '05',
      title: 'Interview Bootcamps & Placement',
      subtitle: 'Negotiating Key Offers',
      icon: <Briefcase className="h-6 w-6 text-rose-400" />,
      desc: 'Prepare for high-pressure interviews with calm composure. Participate in rigorous mock coding assessments, master system designs, and learn advanced career negotiation tactics.',
      bullets: ['Interactive technical whiteboard mock practices', 'Behavioral case narrative formulation', 'Securing high-paying local and remote placements']
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative items */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold bg-indigo-500/10 px-3.5 py-1.5 rounded-full">
            THE TECHDOST PATHWAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            How We Get You Job-Ready
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No short-cuts. We run a highly structured, rigorous, and supportive ecosystem from direct onboarding up to checking contract negotiations.
          </p>
        </div>

        {/* Stepped Timeline - Alternating Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 z-0 hidden sm:block" />

          <div className="space-y-16 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-stretch ${
                  idx % 2 === 0 ? '' : 'md:flex-row-reverse'
                } gap-8 md:gap-12`}
              >
                {/* Visual marker pin column */}
                <div className="flex md:w-1/2 relative">
                  {/* Glowing step card */}
                  <div className="w-full bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Step Indicator and Icon */}
                      <div className="flex justify-between items-center">
                        <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                          {step.icon}
                        </div>
                        <span className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-mono tracking-tighter">
                          {step.step}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-sky-400 font-mono tracking-widest uppercase">
                          {step.subtitle}
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-white">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bullet items tag checklist */}
                    <div className="mt-6 pt-6 border-t border-slate-900 space-y-2">
                      {step.bullets.map((bullet, bidx) => (
                        <div key={bidx} className="flex items-center space-x-2.5 text-xs text-slate-300">
                          <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          <span className="font-semibold font-sans">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column used for spacing on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
