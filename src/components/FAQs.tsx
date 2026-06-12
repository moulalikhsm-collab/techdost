import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faqs" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-bold bg-sky-500/10 px-3.5 py-1.5 rounded-full">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Frequently Asked Queries
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know about TechDost, practical virtual labs, 100% online courses, and instant admissions.
          </p>
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-950/75 border border-slate-805/85 rounded-xl overflow-hidden hover:border-slate-800 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3 text-white">
                    <HelpCircle className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-base font-bold font-sans">{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-sky-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>

                {/* FAQ Answer Body */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-350 text-sm leading-relaxed border-t border-slate-900/60 pt-4 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact helper */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-400">
            Still got questions? Drop a line directly to{' '}
            <a href="mailto:sereneselina9@gmail.com" className="text-sky-400 hover:underline font-semibold">
              sereneselina9@gmail.com
            </a>{' '}
            or call admissions desk at{' '}
            <a href="tel:9491089687" className="text-sky-400 hover:underline font-bold">
              +91 9491089687
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
