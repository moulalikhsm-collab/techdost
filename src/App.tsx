/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import QuickCall from './components/QuickCall';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedInquiryCourseId, setSelectedInquiryCourseId] = useState<string | undefined>(undefined);

  // Monitor scrolling to highlight correct navbar items dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'courses', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler to targeted section IDs
  const handleSectionNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Callback to carry selected Course IDs directly into the Contact form inputs
  const handleInquireCourse = (courseId: string) => {
    setSelectedInquiryCourseId(courseId);
  };

  const handleClearInquiryCourse = () => {
    setSelectedInquiryCourseId(undefined);
  };

  return (
    <div id="techdost-root" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30 selection:text-white antialiased">
      {/* Sticky Top Header */}
      <Navbar onNavigate={handleSectionNavigation} activeSection={activeSection} />

      <main>
        {/* Hero Section */}
        <Hero onNavigate={handleSectionNavigation} />

        {/* Detailed Course Matrix Section */}
        <Courses onInquireCourse={handleInquireCourse} />

        {/* Collapsible FAQ Section */}
        <FAQs />

        {/* Inquiry Form & Direct Connect Desk Section */}
        <Contact
          initialCourseId={selectedInquiryCourseId}
          onClearInitialCourseId={handleClearInquiryCourse}
        />
      </main>

      {/* Global Brand Footer */}
      <Footer onNavigate={handleSectionNavigation} />

      {/* Admissions Q&A ChatBot Assistant */}
      <ChatBot />

      {/* Floating Admissions Quick Call button */}
      <QuickCall />
    </div>
  );
}
