import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquare, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative border-b border-slate-900">
      {/* Decorative Blur Layers */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-teal-400 uppercase font-bold bg-teal-500/10 px-3.5 py-1.5 rounded-full">
            STUDENT OUTCOMES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Success Stories from Our Graduates
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            TechDost is dedicated to practical, hands-on advancement. Read about the real-world products crafted and employment breakthroughs secured by our students.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group p-6 sm:p-8 bg-slate-904 bg-slate-900/40 border border-slate-800/80 rounded-2xl flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 shadow-xl relative"
            >
              {/* Giant Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-800 opacity-30 group-hover:opacity-50 transition-opacity">
                <Quote className="h-10 w-10 text-sky-500" />
              </div>

              {/* Top part / comment */}
              <div className="space-y-4 relative z-10">
                {/* Stars rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Main feedback text */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Bottom part / student card info */}
              <div className="mt-8 pt-6 border-t border-slate-900/80 flex items-center space-x-4">
                {/* Custom Avatar or init/img */}
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="h-12 w-12 rounded-xl object-cover border border-slate-700 bg-slate-800"
                />
                
                <div>
                  <h4 className="text-base font-bold text-white leading-snug">{t.name}</h4>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-slate-400 mt-0.5">
                    <span className="font-semibold text-slate-300">{t.role}</span>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <span className="text-emerald-400 font-medium font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">
                      {t.achievement}
                    </span>
                  </div>
                  <span className="block text-[10px] font-mono text-slate-500 mt-1 uppercase">
                    COURSE TAKEN: <strong className="text-slate-400">{t.courseTaken}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
