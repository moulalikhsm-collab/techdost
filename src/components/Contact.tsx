import React, { useState, useEffect } from 'react';
import { COURSES } from '../data';
import { Inquiry } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  FileCheck,
  Calendar,
  AlertCircle,
  Trash2,
  Clock,
  UserCheck
} from 'lucide-react';

interface ContactProps {
  initialCourseId?: string;
  onClearInitialCourseId?: () => void;
}

export default function Contact({ initialCourseId, onClearInitialCourseId }: ContactProps) {
  // Form submission states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseId, setCourseId] = useState('web-dev');
  const [message, setMessage] = useState('');
  
  const [localInquiries, setLocalInquiries] = useState<Inquiry[]>([]);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // WhatsApp quick builder states
  const [waTopic, setWaTopic] = useState('batch-timing');
  const [waCustomCourse, setWaCustomCourse] = useState('web-dev');

  // Load inquiries from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('techdost_inquiries');
      if (stored) {
        setLocalInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading local inquiries:', e);
    }
  }, []);

  // Update course select when parent triggers initial course selection
  useEffect(() => {
    if (initialCourseId) {
      setCourseId(initialCourseId);
      // Scroll to contact form smoothly
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      if (onClearInitialCourseId) {
        onClearInitialCourseId();
      }
    }
  }, [initialCourseId, onClearInitialCourseId]);

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess(false);

    // Simple validation
    if (!name.trim()) return setFormError('Please enter your full name.');
    if (!email.trim() || !email.includes('@')) return setFormError('Please enter a valid email address.');
    if (!phone.trim() || phone.length < 8) return setFormError('Please enter a valid telephone contact number.');
    if (!message.trim()) return setFormError('Please add a brief sentence describing your goal.');

    const newInquiry: Inquiry = {
      id: `inq_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      courseId,
      message: message.trim(),
      date: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newInquiry, ...localInquiries];
    setLocalInquiries(updated);
    try {
      localStorage.setItem('techdost_inquiries', JSON.stringify(updated));
    } catch (e) {
      console.error('Error writing to storage:', e);
    }

    setFormSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    // Trigger clear success message banner after a while
    setTimeout(() => {
      setFormSuccess(false);
    }, 6000);
  };

  // Delete submitted inquiry record from client history
  const handleDeleteInquiry = (id: string) => {
    const updated = localInquiries.filter((item) => item.id !== id);
    setLocalInquiries(updated);
    try {
      localStorage.setItem('techdost_inquiries', JSON.stringify(updated));
    } catch (e) {
      console.error('Error syncing local inquiries:', e);
    }
  };

  // Build real-time pre-filled WhatsApp Links based on quick selections
  const getWhatsAppLink = () => {
    const selCourse = COURSES.find((c) => c.id === waCustomCourse)?.title || 'general courses';
    let text = '';
    
    if (waTopic === 'batch-timing') {
      text = `Hi TechDost! I am interested in enrolling for the upcoming batch of "${selCourse}". Could you please verify the timing slot calendar, fees, and next available dates?`;
    } else if (waTopic === 'partnership') {
      text = `Hi Selena! This is regarding an educational partnership/corporate training program with TechDost. I would like to set up a quick review meeting to evaluate syllabuses.`;
    } else {
      text = `Hi TechDost support! I have general inquiries about the practical electronics kits or certification guidelines for the "${selCourse}" path.`;
    }

    return `https://wa.me/919491089687?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-bold bg-sky-500/10 px-3.5 py-1.5 rounded-full">
            CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Admissions & Partnerships Hub
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Reach out directly for admissions counseling, structured program brochures, or academic school partnerships. Connect via standard phone routes, mail, or submit an official digital catalog request below.
          </p>
        </div>

        {/* Dual Grid - Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels list */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Communication Desk</h3>
              <p className="text-slate-450 text-sm leading-relaxed">
                We maintain active lines for prospective students and institutional authorities. Select a channel to speak with an admissions officer immediately.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-4">
                {/* Telephone touchpoint */}
                <a
                  href="tel:9491089687"
                  className="group flex items-start space-x-4 p-4 rounded-xl bg-slate-900/60 border border-slate-850 hover:border-sky-500/30 hover:bg-slate-900 transition-all"
                >
                  <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase tracking-widest">Admissions Phone</span>
                    <span className="block text-lg font-bold text-white font-mono tracking-wider mt-0.5 group-hover:text-sky-400 transition-colors">
                      +91 9491089687
                    </span>
                    <span className="block text-xs text-slate-400 font-sans mt-1">
                      Available for voice calls, SMS, & direct voice consultations.
                    </span>
                  </div>
                </a>

                {/* Email touchpoint */}
                <a
                  href="mailto:sereneselina9@gmail.com"
                  className="group flex items-start space-x-4 p-4 rounded-xl bg-slate-900/60 border border-slate-850 hover:border-violet-500/30 hover:bg-slate-900 transition-all"
                >
                  <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase tracking-widest">Additional Info & partnerships</span>
                    <span className="block text-base sm:text-lg font-bold text-white font-mono mt-0.5 group-hover:text-indigo-400 transition-colors break-all">
                      sereneselina9@gmail.com
                    </span>
                    <span className="block text-xs text-slate-400 font-sans mt-1">
                      Corporate training proposals, academic affiliations, & curriculum collaborations.
                    </span>
                  </div>
                </a>

                {/* Location indicator */}
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/10 border border-slate-900">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase tracking-widest">Training Centers</span>
                    <span className="block text-base font-bold text-white mt-0.5">
                      Hybrid Classroom Hubs
                    </span>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Interactive virtual work chambers paired with local practical hardware lab clusters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive WhatsApp quick template creator */}
            <div className="bg-gradient-to-tr from-slate-950 via-slate-950 to-slate-900/80 p-6 sm:p-8 rounded-2xl border border-teal-500/10 shadow-lg space-y-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-emerald-400" />
                <h4 className="text-base font-extrabold text-white">Admissions Express WhatsApp Desk</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Select your targeted inquiry topic and corresponding course track. We compose a standard, high-priority template link so your WhatsApp agent triggers immediately.
              </p>

              <div className="space-y-3.5 text-xs">
                {/* Topic Select */}
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold">Select Target Topic</label>
                  <select
                    value={waTopic}
                    onChange={(e) => setWaTopic(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none cursor-pointer"
                  >
                    <option value="batch-timing">Check Batch Timing Slots & Fees</option>
                    <option value="partnership">Propose School Partnership with Selena</option>
                    <option value="general">Request Course Kit Brochure</option>
                  </select>
                </div>

                {/* Course Track Select */}
                {waTopic !== 'partnership' && (
                  <div className="space-y-1">
                    <label className="text-slate-300 font-semibold">Select Course Track</label>
                    <select
                      value={waCustomCourse}
                      onChange={(e) => setWaCustomCourse(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none cursor-pointer"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Launch Button */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-center rounded-xl duration-200 shadow-md shadow-emerald-500/5 cursor-pointer mt-4"
                >
                  Launch WhatsApp Express
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Inquiry Form */}
          <div className="lg:col-span-7 space-y-8">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6"
            >
              <div className="border-b border-slate-900 pb-4 space-y-1">
                <h3 className="text-xl font-bold text-white">Digital Admissions Desk</h3>
                <p className="text-xs text-slate-400">Fill out your information and our academic counselors will follow up within 24 hours.</p>
              </div>

              {/* Display success / error tags */}
              {formSuccess && (
                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center space-x-3 text-teal-400">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <div className="text-xs font-sans">
                    <strong className="block font-bold">Inquiry Successfully Compiled!</strong>
                    Your request was recorded. You can inspect your active logs below this form.
                  </div>
                </div>
              )}

              {formError && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center space-x-3 text-rose-400 text-xs font-mono">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <label className="text-slate-300 font-semibold font-sans">Full Student Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Harish Kumar"
                    className="w-full bg-slate-900 border border-slate-800/80 rounded-xl px-4 py-3 text-slate-100 text-sm outline-none focus:border-sky-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <label className="text-slate-300 font-semibold font-sans">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., consumer@gmail.com"
                    className="w-full bg-slate-900 border border-slate-800/80 rounded-xl px-4 py-3 text-slate-100 text-sm outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Telephone */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <label className="text-slate-300 font-semibold font-sans">Telephone Contact *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., 9491089687"
                    className="w-full bg-slate-900 border border-slate-800/80 rounded-xl px-4 py-3 text-slate-100 text-sm outline-none focus:border-sky-500 font-mono"
                  />
                </div>

                {/* Targeted Track selection */}
                <div className="space-y-1.5 text-xs sm:text-sm font-sans">
                  <label className="text-slate-300 font-semibold">Learning Track Target *</label>
                  <select
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm outline-none cursor-pointer focus:border-sky-500"
                  >
                    {COURSES.map((itm) => (
                      <option key={itm.id} value={itm.id}>
                        {itm.title} ({itm.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5 text-xs sm:text-sm font-sans">
                <label className="text-slate-300 font-semibold">Describe Your Career Goal or Questions *</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about yourself (e.g., 'I am a 3rd year B.Tech student struggling with programming logic foundations', or 'We want to schedule a school IoT training next month')..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm outline-none focus:border-sky-500 leading-relaxed"
                />
              </div>

              {/* Button Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-slate-950 font-extrabold bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 transition-colors shadow-lg shadow-sky-500/10 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Send Catalog & Syllabus Request</span>
                <Send className="h-4 w-4" />
              </button>
            </form>

            {/* Persistent Inquiries Inspection Logs - Local Persistent Registry */}
            {localInquiries.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <div className="flex items-center space-x-2">
                    <FileCheck className="h-4.5 w-4.5 text-sky-400" />
                    <h4 className="text-sm font-extrabold text-white tracking-wide font-sans">Your Submitted Requests ({localInquiries.length})</h4>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">LOCAL CONSOLE FEEDS</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {localInquiries.map((inq) => {
                    const matchedCourse = COURSES.find((c) => c.id === inq.courseId)?.title || 'General';
                    return (
                      <div
                        key={inq.id}
                        className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 space-y-3 shadow-md relative group hover:border-slate-800 transition-colors"
                      >
                        {/* Delete record trigger button */}
                        <button
                          onClick={() => handleDeleteInquiry(inq.id)}
                          className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900 hover:bg-rose-500/10 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                          title="Delete request log"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>

                        <div className="space-y-1">
                          <span className="text-[10px] font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/10 inline-block">
                            {matchedCourse}
                          </span>
                          <span className="block text-sm font-extrabold text-white leading-snug pr-6">{inq.name}</span>
                        </div>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed italic">
                          "{inq.message}"
                        </p>

                        <div className="pt-2 border-t border-slate-900/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {inq.date}
                          </span>
                          <span className="text-teal-400 font-bold flex items-center">
                            <UserCheck className="h-3 w-3 mr-1" />
                            PENDING CONTACT
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
