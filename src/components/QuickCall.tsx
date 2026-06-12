import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

export default function QuickCall() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Auto-pulse the CTA message occasionally to invite a quick call
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="techdost-quickcall-container" className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="mb-3 bg-slate-900 border border-emerald-500/30 p-2.5 px-3 rounded-2xl shadow-xl shadow-emerald-500/10 flex items-center gap-2 cursor-pointer hover:border-emerald-400 transition-colors"
            onClick={() => {
              window.location.href = 'tel:+919491089687';
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-200">
              Direct Admissions: <span className="text-emerald-400 font-mono font-bold">+91 9491089687</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="tel:+919491089687"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShowTooltip(true)}
        className="h-14 w-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 border border-emerald-400/30 group relative focus:outline-none"
        title="Quick Call Admissions"
      >
        {/* Pulsing ring around phone icon */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-400/30 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity" />
        <Phone className="h-6 w-6 text-slate-950 relative z-10" />
      </motion.a>
    </div>
  );
}
