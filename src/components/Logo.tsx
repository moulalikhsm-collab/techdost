import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightText?: boolean;
  onClick?: () => void;
}

export default function Logo({ className = '', iconOnly = false, size = 'md', lightText = true, onClick }: LogoProps) {
  // Dynamic scale classes
  const iconSize = {
    sm: 'h-8 w-8',
    md: 'h-11 w-11',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  }[size];

  const brandTextClasses = {
    sm: 'text-base',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-5xl'
  }[size];

  const sloganClasses = {
    sm: 'text-[8px] tracking-wider mt-0.5',
    md: 'text-[10px] tracking-widest mt-1',
    lg: 'text-[11px] tracking-[0.25em] mt-1.5',
    xl: 'text-[14px] tracking-[0.3em] mt-2'
  }[size];

  return (
    <div id="techdost-logo-brand" className={`flex items-center gap-3.5 select-none ${className}`} onClick={onClick}>
      {/* Clean Vector SVG Icon representing Graduation cap + Glowing Tech Bulb + Arrow */}
      <div className={`${iconSize} relative flex-shrink-0 hover:scale-105 duration-300 ease-out`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(14,165,233,0.35)]"
        >
          <defs>
            {/* Color definition gradients */}
            <linearGradient id="techDostBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" /> {/* sky-400 */}
              <stop offset="50%" stopColor="#0ea5e9" /> {/* sky-500 */}
              <stop offset="100%" stopColor="#2563eb" /> {/* blue-600 */}
            </linearGradient>
            
            <linearGradient id="techDostSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" /> {/* gray-200 */}
              <stop offset="100%" stopColor="#94a3b8" /> {/* slate-400 */}
            </linearGradient>

            <linearGradient id="techDostGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Central Glow Field */}
          <circle cx="60" cy="65" r="35" fill="url(#techDostGlow)" filter="url(#glowEffect)" />

          {/* 1. Bulb Glass Contour Outer frame - matching the curved lightbulb exactly */}
          <path
            d="M60 42
               C38 42, 32 58, 32 72
               C32 82, 40 92, 49 95
               L50 102
               H70
               L71 95
               C80 92, 88 82, 88 72
               C88 58, 82 42, 60 42 Z"
            stroke="url(#techDostBlueGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* 2. Inner Circuit Paths & Upward Arrow details */}
          {/* Circuit Trace Loop 1 */}
          <path
            d="M48 83 
               C42 75, 46 63, 56 61"
            stroke="url(#techDostBlueGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Circuit node circle */}
          <circle cx="48" cy="83" r="4" fill="url(#techDostBlueGrad)" />

          {/* Central Connecting Hub & Growth Arrow */}
          <path
            d="M58 88 L58 70"
            stroke="url(#techDostSilverGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M58 70 C58 64, 66 56, 76 50"
            stroke="url(#techDostBlueGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Upward diagonal arrow representing growth / empowering skills */}
          <path
            d="M50 85 L74 54"
            stroke="#ffffff"
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Arrowhead */}
          <path
            d="M60 52 L76 51 L72 67"
            stroke="#ffffff"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="50" cy="85" r="4" fill="#ffffff" />

          {/* 3. Mortarboard Graduation Cap Sitting On Top */}
          {/* Diamond Plate */}
          <path
            d="M60 12 L96 26 L60 40 L24 26 Z"
            fill="url(#techDostBlueGrad)"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Skull cap band */}
          <path
            d="M40 32 V36 C40 43, 49 46, 60 46 C71 46, 80 43, 80 36 V32"
            fill="url(#techDostBlueGrad)"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Tassel line & drop */}
          <path
            d="M32 29 L28 42 V50"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="28" cy="52" r="3" fill="#38bdf8" />

          {/* 4. Metallic Screwed Bulb Base */}
          <rect x="52" y="102" width="16" height="4" rx="2" fill="url(#techDostSilverGrad)" />
          <rect x="54" y="107" width="12" height="4" rx="2" fill="url(#techDostSilverGrad)" />
          <path d="M56 112 H64 L60 115 Z" fill="#94a3b8" />
        </svg>
      </div>

      {/* Brand Name Text Block */}
      {!iconOnly && (
        <div className="flex flex-col">
          <h2 className={`${brandTextClasses} font-black font-display tracking-tight leading-none ${
            lightText ? 'text-white' : 'text-slate-900'
          }`}>
            TECH<span className="text-sky-400">DOST</span>
          </h2>
          <span className={`${sloganClasses} font-semibold font-sans uppercase leading-none ${
            lightText ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Empowering tech skills.
          </span>
        </div>
      )}
    </div>
  );
}
