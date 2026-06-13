import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Terminal, Cpu, Shield } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = '> Initializing Kotha Meghana...';

  // Typing effect
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        const char = fullText[index];
        setTypedText((prev) => prev + char);
        index++;
      }
      if (index >= fullText.length) {
        clearInterval(intervalId);
        setIsTypingComplete(true);
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, []);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Decorative ambient blobs (hardware accelerated opacity / blur) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden border border-white/10"
        >
          {/* Futuristic corner borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-electric-blue/60 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-electric-blue/60 rounded-br-lg"></div>

          {/* Card header / Console Bar */}
          <div className="flex justify-between items-center pb-6 border-b border-white/5 mb-8">
            <div className="flex items-center space-x-2">
              <Terminal size={16} className="text-electric-blue" />
              <span className="font-mono text-xs text-slate-500 tracking-wider">SYSTEM_CORE_SHELL v1.0.3</span>
            </div>
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-white/40 block"></span>
              <span className="w-3 h-3 rounded-full bg-white/20 block"></span>
              <span className="w-3 h-3 rounded-full bg-electric-blue/50 block"></span>
            </div>
          </div>

          {/* Typing sequence */}
          <div className="min-h-[40px] flex items-center mb-6">
            <span className="font-mono text-base md:text-lg text-white tracking-wider font-semibold">
              {typedText}
              <span className={`inline-block w-2.5 h-5 ml-1 bg-electric-blue transition-opacity duration-100 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}></span>
            </span>
          </div>

          {/* Title and subtitle stagger-revealed once typing is finished */}
          {isTypingComplete && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.25 }
                }
              }}
              className="space-y-6"
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
                }}
                className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight"
              >
                Kotha Meghana
              </motion.h1>

              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white via-blue-100 to-electric-blue bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(59,130,246,0.2)]"
              >
                Full-Stack Developer &amp; AI Enthusiast
              </motion.h2>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-2"
              >
                <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/20 text-white font-mono text-sm tracking-wide">
                  <Sparkles size={14} className="animate-pulse text-electric-blue" />
                  <span>Google Cloud Generative AI Intern</span>
                </div>
                <span className="hidden sm:inline text-slate-500 font-mono text-sm">|</span>
                <span className="font-mono text-sm text-slate-400">SRM University-AP</span>
              </motion.div>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-slate-400 max-w-xl text-base md:text-lg font-light leading-relaxed"
              >
                Building highly adaptable, robust applications powered by clean architectures. Solving complex issues by writing simple, dynamic logic instead of rigid, hardcoded code.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-electric-blue text-white font-heading font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center space-x-2"
                >
                  <Cpu size={16} />
                  <span>Explore Projects</span>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg border border-slate-700 bg-white/5 hover:bg-white/10 hover:border-slate-500 font-heading font-semibold text-white hover:scale-[1.02] transition-all duration-300 flex items-center space-x-2"
                >
                  <Shield size={16} className="text-electric-blue" />
                  <span>Secure Channel</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating scroll down prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10 pointer-events-none opacity-60">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Scroll down</span>
        <ChevronDown size={18} className="text-electric-blue animate-bounce" />
      </div>
    </section>
  );
}
