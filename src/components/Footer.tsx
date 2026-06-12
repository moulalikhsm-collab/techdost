import React from 'react';
import { GraduationCap, Phone, Mail, ChevronRight, MessageSquareCode } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const links = [
    { label: 'Specialized Courses', href: 'courses' },
    { label: 'Interactive Sandbox', href: 'playground' },
    { label: 'Success Testimonials', href: 'testimonials' },
    { label: 'Admissions Inquiry', href: 'contact' },
    { label: 'F.A.Q Catalog', href: 'faqs' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('hero')}>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center">
                <GraduationCap className="h-5.5 w-5.5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold font-display text-white tracking-tight">
                  Tech<span className="text-sky-400 font-extrabold">Dost</span>
                </span>
                <span className="block text-[8px] font-mono tracking-widest text-slate-500 uppercase leading-none">
                  PRACTICAL TECH LEARNING
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              TechDost is a technology education and training platform dedicated to providing practical, industry-focused learning in programming, web development, AI, prompt engineering, electronics, and career-oriented technical skills.
            </p>

            <span className="block text-xs uppercase font-mono tracking-wider text-slate-500">
              Our Mission: Make quality tech education accessible & help students build real-world skills.
            </span>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white pb-1.5 border-b border-slate-900 max-w-[120px]">
              Jump To Section
            </h4>
            <nav className="flex flex-col space-y-2.5 text-sm">
              {links.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(item.href)}
                  className="text-left text-slate-400 hover:text-sky-400 transition-colors flex items-center group cursor-pointer"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-650 mr-1.5 opacity-50 group-hover:translate-x-1 transition-transform" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Connect Details column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white pb-1.5 border-b border-slate-900 max-w-[125px]">
              Direct Contacts
            </h4>
            
            <div className="space-y-4 text-sm mt-4">
              <a
                href="tel:9491089687"
                className="flex items-center space-x-3 text-slate-300 hover:text-sky-400 transition-colors group"
              >
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:bg-sky-500/10 group-hover:border-sky-500/20 duration-300">
                  <Phone className="h-4.5 w-4.5 text-sky-400" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider leading-none">Voice & SMS Hotline</span>
                  <span className="text-base font-bold font-mono text-white tracking-wide mt-1 block">+91 9491089687</span>
                </div>
              </a>

              <a
                href="mailto:sereneselina9@gmail.com"
                className="flex items-center space-x-3 text-slate-300 hover:text-indigo-400 transition-colors group"
              >
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 duration-300">
                  <Mail className="h-4.5 w-4.5 text-indigo-400" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider leading-none">Partnerships & Support</span>
                  <span className="text-sm font-semibold font-mono text-white mt-1 block break-all">sereneselina9@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TechDost Academy. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="font-mono text-[10px]">ADMISSIONS INQUIRIES ROUTED LIVE</span>
            <span>•</span>
            <span className="font-mono text-[10px] text-teal-500 font-bold">100% SECURE SANDBOX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
