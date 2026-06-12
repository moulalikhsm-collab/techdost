import React, { useState } from 'react';
import { COURSES } from '../data';
import { Course, CourseCategory } from '../types';
import {
  Globe,
  Code,
  BrainCircuit,
  Sparkles,
  Cpu,
  Briefcase,
  BookOpen,
  Star,
  Users,
  Clock,
  ArrowRight,
  X,
  CheckCircle2,
  PhoneCall,
  Mail,
  Gauge
} from 'lucide-react';

interface CoursesProps {
  onInquireCourse: (courseId: string) => void;
}

export default function Courses({ onInquireCourse }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories: { label: string; value: CourseCategory }[] = [
    { label: 'All Modules', value: 'all' },
    { label: 'Programming & DSA', value: 'programming' },
    { label: 'Web Development', value: 'web-dev' },
    { label: 'Artificial Intelligence', value: 'ai-ml' },
    { label: 'Prompt Engineering', value: 'prompt-engineering' },
    { label: 'Electronics & IoT', value: 'electronics' },
    { label: 'Career Mentorship', value: 'career-skills' },
  ];

  const filteredCourses = selectedCategory === 'all'
    ? COURSES
    : COURSES.filter((c) => c.category === selectedCategory);

  const renderIcon = (iconName: string, className = 'h-6 w-6 text-sky-400') => {
    switch (iconName) {
      case 'Globe':
        return <Globe className={className} />;
      case 'Code':
        return <Code className={className} />;
      case 'BrainCircuit':
        return <BrainCircuit className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  const constructWhatsAppLink = (courseTitle: string) => {
    const text = `Hi TechDost! I'm interested in enrolling for the "${courseTitle}" bootcamp. Please share batch schedules and fee structures with me. Thanks!`;
    return `https://wa.me/919491089687?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="courses" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-bold bg-sky-500/10 px-3.5 py-1.5 rounded-full">
            EXPLORE SYLLABUS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Curated Academic Tracks Built For Careers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Pick a career track designed by working professionals. Get step-by-step training, customized homework reviews, and absolute conceptual confidence.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/15'
                  : 'bg-slate-800/60 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-950/75 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 shadow-xl relative overflow-hidden ${
                course.popular ? 'ring-2 ring-sky-500/50 hover:ring-sky-400' : ''
              }`}
            >
              {/* Popular Tag */}
              {course.popular && (
                <div className="absolute top-0 right-0">
                  <span className="bg-gradient-to-l from-sky-500 to-indigo-600 text-slate-950 text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-bl-xl shadow-md">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Top Details */}
              <div className="space-y-5">
                {/* Icon & Metadata */}
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {renderIcon(course.iconName)}
                  </div>
                  <div className="flex items-center space-x-2.5 font-mono text-xs">
                    <span className="text-slate-400 flex items-center">
                      <Clock className="h-3.5 w-3.5 text-sky-400 mr-1" />
                      {course.duration}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300 bg-slate-800/70 border border-slate-700/50 px-2 py-0.5 rounded-md flex items-center">
                      <Gauge className="h-3 w-3 text-teal-400 mr-1" />
                      {course.difficulty}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Skills chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {course.skills.slice(0, 4).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-slate-900 border border-slate-800/80 text-[11px] font-semibold text-slate-300 px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {course.skills.length > 4 && (
                    <span className="text-[11px] font-mono text-slate-500 self-center pl-1 font-bold">
                      +{course.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between">
                {/* Stats */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-amber-400">
                    <Star className="h-4 w-4 fill-amber-400 mr-1" />
                    <span className="text-xs font-bold font-mono text-white">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Users className="h-3.5 w-3.5 mr-1 text-slate-500" />
                    <span className="text-xs font-mono">{course.enrolledCount}</span>
                  </div>
                </div>

                {/* Button trigger */}
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="p-2 sm:px-4 sm:py-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 hover:text-white text-sky-400 text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <span className="hidden sm:inline">Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic course pathway prompt */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-950/50 to-indigo-950/40 border border-sky-400/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Confused about which learning path to choose?</h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Connect with our principal career counselor. We offer custom structured learning roadmaps catering to your specific career targets or local institution curricula.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="mailto:sereneselina9@gmail.com?subject=Institution%20Partnership%20Interest&body=Hi%20TechDost!%20I%20would%20like%2520to%20learn%20more%20about%20your%20curriculums%20and%20admissions."
              className="px-6 py-3 w-full sm:w-auto text-slate-200 border border-slate-700 hover:border-slate-600 hover:bg-slate-900 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center space-x-2"
            >
              <Mail className="h-4 w-4 text-sky-400" />
              <span>Email Selina</span>
            </a>
            <a
              href="tel:9491089687"
              className="px-6 py-3 w-full sm:w-auto bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-sky-500/15 duration-300 text-center flex items-center justify-center space-x-2"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call +91 9491089687</span>
            </a>
          </div>
        </div>
      </div>

      {/* Syllabus Modal Backdrop & Dialog */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div
            className="relative bg-slate-900 border border-slate-800 max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden animate-zoom-in"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {renderIcon(selectedCourse.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedCourse.title}</h3>
                  <div className="flex items-center space-x-2.5 text-xs font-mono text-slate-400">
                    <span>{selectedCourse.duration}</span>
                    <span>•</span>
                    <span className="text-sky-400">{selectedCourse.difficulty} Level</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-2">
                <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold">ABOUT THE BOOTCAMP</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedCourse.longDescription}</p>
              </div>

              {/* Skills Gathered */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold">ACQUIRED SKILLS MATRIX</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-100 px-3 py-1.5 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Complete Curriculum */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-bold">DETAILED CURRICULUM PATH</h4>
                <div className="space-y-3">
                  {selectedCourse.syllabus.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/45 border border-slate-850 flex items-start space-x-3.5 hover:border-slate-800 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed font-sans">{milestone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-6 border-t border-slate-800 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="block text-xs font-semibold text-slate-500 font-mono">ADMISSIONS ENQUIRIES</span>
                <span className="text-sm font-bold text-white font-mono">+91 9491089687</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onInquireCourse(selectedCourse.id);
                    setSelectedCourse(null);
                  }}
                  className="px-5 py-3 w-full sm:w-auto text-center border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Fill Inquiry Form
                </button>
                <a
                  href={constructWhatsAppLink(selectedCourse.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-center font-extrabold rounded-xl text-xs transition-colors shadow-lg shadow-emerald-500/10 flex items-center justify-center space-x-1.5"
                >
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
