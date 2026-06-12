import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, Phone, Mail, HelpCircle, Loader2 } from "lucide-react";

interface ChatMessage {
  role: "user" | "model";
  content: string;
}

const QUICK_SUGGESTIONS = [
  "Tell me about Full-Stack Web Dev syllabus?",
  "What is the phone number for inquiries?",
  "Tell me about Applied AI & Machine Learning?",
  "Are classes live or recorded?"
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<ChatMessage[]>([
    {
      role: "model",
      content: "Hello! I am **DostAI**, the TechDost helper. 🤝 Ask me anything about our programming, web dev, AI, electronics courses, batch syllabi, or partnerships! How can I accelerate your learning journey today?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when history changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  // Show a pulsing preview notification after 4 seconds to catch interest
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && history.length === 1) {
        setShowNotification(true);
      }
    }, 4500);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    const trimmedMessage = textToSend.trim();
    if (!trimmedMessage || isLoading) return;

    // Append user message
    const updatedHistory = [...history, { role: "user" as const, content: trimmedMessage }];
    setHistory(updatedHistory);
    setMessage("");
    setIsLoading(true);
    setShowNotification(false);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: trimmedMessage,
          history: history
        })
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with admissions service");
      }

      const data = await response.json();
      setHistory((prev) => [...prev, { role: "model", content: data.text }]);
    } catch (error) {
      console.error(error);
      setHistory((prev) => [
        ...prev,
        {
          role: "model",
          content: "I am having trouble routing that request right now. You can get an immediate manual response from our human team at **+91 9491089687** or write to us at **sereneselina9@gmail.com**!"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(message);
    }
  };

  // Basic custom markdown-style formatter to render bold texts and lists elegantly
  const formatMessage = (text: string) => {
    const lines = text.split("\n");
    let inList = false;
    const listItems: React.ReactNode[] = [];
    const elements: React.ReactNode[] = [];

    const parseLineText = (content: string) => {
      const parts: React.ReactNode[] = [];
      const boldRegex = /\*\*(.*?)\*\*/g;
      let match;
      let lastIndex = 0;

      while ((match = boldRegex.exec(content)) !== null) {
        if (match.index > lastIndex) {
          parts.push(content.substring(lastIndex, match.index));
        }
        parts.push(
          <strong key={match.index} className="text-sky-400 font-semibold font-sans">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
      }
      return parts.length > 0 ? parts : content;
    };

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();
      const isBullet = trimmedLine.startsWith("-") || trimmedLine.startsWith("*");

      if (isBullet) {
        inList = true;
        const bulletText = trimmedLine.substring(1).trim();
        listItems.push(
          <li key={`li-${idx}`} className="list-disc ml-5 mb-1 text-slate-300">
            {parseLineText(bulletText)}
          </li>
        );
      } else {
        if (inList) {
          elements.push(
            <ul key={`ul-${idx}`} className="my-2 space-y-1">
              {[...listItems]}
            </ul>
          );
          listItems.length = 0; // Clear
          inList = false;
        }

        if (trimmedLine === "") {
          elements.push(<div key={`gap-${idx}`} className="h-2" />);
        } else {
          elements.push(
            <p key={`p-${idx}`} className="mb-2 text-slate-300 leading-relaxed text-sm">
              {parseLineText(line)}
            </p>
          );
        }
      }
    });

    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="ul-final" className="my-2 space-y-1">
          {listItems}
        </ul>
      );
    }

    return elements;
  };

  return (
    <div id="techdost-chatbot-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Sparkle Notification Triggered on Load */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => {
              setIsOpen(true);
              setShowNotification(false);
            }}
            className="mb-3 max-w-xs bg-slate-900 border border-sky-500/40 p-3 rounded-2xl shadow-xl shadow-sky-500/10 cursor-pointer hover:border-sky-400 transition-colors"
          >
            <div className="flex items-start gap-2.5">
              <div className="p-1.5 bg-gradient-to-tr from-sky-600 to-indigo-600 rounded-lg text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Have queries?</p>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
                  Ask me about Python, Web Development, electronics kits, schedules or admissions!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Frame */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-slate-900 border border-slate-800/80 rounded-2xl shadow-2xl shadow-slate-950/80 w-[380px] h-[520px] max-w-[calc(100vw-2rem)] flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    D
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-1.5">
                    DostAI Assistant
                    <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
                  </h4>
                  <p className="text-[11px] text-sky-400">Online &bull; Admissions helpdesk</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 px-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
              {history.map((msg, idx) => (
                <div
                  key={`msg-${idx}`}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-sm px-4 ${
                      msg.role === "user"
                        ? "bg-gradient-to-tr from-sky-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-600/10"
                        : "bg-slate-800/60 border border-slate-800/60 text-slate-200 rounded-tl-none"
                    }`}
                  >
                    {msg.role === "model" ? (
                      formatMessage(msg.content)
                    ) : (
                      <p className="leading-relaxed text-sm">{msg.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/40 border border-slate-850 rounded-2xl rounded-tl-none p-3 px-4 flex items-center gap-2 text-slate-400 text-xs shadow-inner">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
                    DostAI is crafting a response...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Helper Questions */}
            {history.length < 5 && (
              <div className="px-4 py-2 bg-slate-900 border-t border-slate-850/50 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {QUICK_SUGGESTIONS.map((suggestion, index) => (
                  <button
                    key={`suggest-${index}`}
                    onClick={() => handleSendMessage(suggestion)}
                    className="text-[11px] bg-slate-800/50 hover:bg-slate-800 hover:border-sky-500/30 text-slate-300 hover:text-white border border-slate-750 p-1.5 px-2.5 rounded-full transition-all text-left whitespace-nowrap"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Input & Call Details */}
            <div className="p-4 bg-slate-950 border-t border-slate-855 flex flex-col gap-2.5">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a question about TechDost courses..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  className="flex-1 text-sm bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-500 rounded-xl px-4 py-2.5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all disabled:opacity-60"
                />
                <button
                  type="button"
                  onClick={() => handleSendMessage(message)}
                  disabled={isLoading || !message.trim()}
                  className="px-4 bg-gradient-to-tr from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-white rounded-xl flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  title="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Admission Info Footer Bar */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 border-t border-slate-900 pt-2">
                <a
                  href="tel:+919491089687"
                  className="flex items-center gap-1 hover:text-sky-400 transition-colors"
                >
                  <Phone className="w-3 h-3" /> +91 9491089687
                </a>
                <a
                  href="mailto:sereneselina9@gmail.com"
                  className="flex items-center gap-1 hover:text-indigo-400 transition-colors text-right"
                >
                  <Mail className="w-3 h-3" /> sereneselina9@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Circle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className={`w-14 h-14 bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 hover:shadow-sky-500/25 flex items-center justify-center text-white rounded-full shadow-lg transition-transform focus:outline-none cursor-pointer border border-sky-400/20`}
        title="Chat for queries"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6" />
              {/* Little ping indicator */}
              <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
