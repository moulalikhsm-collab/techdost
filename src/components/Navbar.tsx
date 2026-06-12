import React, { useState, useEffect } from 'react';
import { GraduationCap, Phone, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Courses', href: 'courses' },
    { label: 'F.A.Q', href: 'faqs' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => handleItemClick('hero')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-500/10 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold font-display tracking-tight text-white group-hover:text-sky-400 transition-colors duration-300">
                Tech<span className="text-sky-400 font-extrabold">Dost</span>
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase leading-none mt-0.5">
                PRACTICAL LEARNING
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleItemClick(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  activeSection === item.href
                    ? 'text-sky-400 bg-sky-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:9491089687"
              className="flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-all duration-200 text-sm font-semibold bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 px-4 py-2 rounded-xl"
            >
              <Phone className="h-4 w-4" />
              <span>+91 9491089687</span>
            </a>
            <button
              onClick={() => handleItemClick('contact')}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-white rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 cursor-pointer mt-2"
            >
              <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-xl group-hover:bg-opacity-0 flex items-center space-x-1.5">
                <span>Join Now</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggler */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href="tel:9491089687"
              className="text-slate-300 hover:text-sky-400 p-2 bg-slate-800/40 rounded-xl"
              aria-label="Call Admissions"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="fixed inset-0 top-20 bg-slate-950/98 backdrop-blur-xl z-40 px-4 py-6 border-t border-slate-800/80 flex flex-col justify-between">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleItemClick(item.href)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all flex justify-between items-center ${
                    activeSection === item.href
                      ? 'text-sky-400 bg-sky-500/10 border-l-4 border-sky-500'
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </button>
              ))}
            </nav>

            <div className="space-y-3 pt-6 border-t border-slate-800/80">
              <a
                href="tel:9491089687"
                className="flex items-center justify-center space-x-3 w-full bg-slate-900 border border-slate-800 text-slate-200 py-4 rounded-xl font-semibold hover:bg-slate-800/50 transition-colors"
              >
                <Phone className="h-5 w-5 text-sky-400" />
                <span>Call +91 9491089687</span>
              </a>
              <button
                onClick={() => handleItemClick('contact')}
                className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-sky-500/20 active:scale-98 transition-transform cursor-pointer"
              >
                <span>Register Interest Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
