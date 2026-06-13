import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, Trophy, BarChart3, Radio, ArrowUpRight } from 'lucide-react';

export default function AboutBento() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center md:text-left mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
            About
          </h2>
          <p className="text-slate-400 max-w-xl font-light text-base">
            An inside look into my academic foundation, coding philosophy, hackathon track record, and macro focus.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Box 1: Academics (SRM University-AP, 9.18 CGPA) */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between border border-white/5 group hover:border-electric-blue/30 transition-all duration-300"
          >
            {/* Ambient background accent */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-electric-blue/5 rounded-full blur-xl group-hover:bg-electric-blue/15 transition-all duration-300"></div>

            <div>
              <div className="p-3 bg-electric-blue/10 rounded-xl w-fit text-electric-blue mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">Academic Foundation</h3>
              <p className="font-sans text-slate-400 text-sm font-light leading-relaxed mb-4">
                Pursuing a Computer Science Undergrad at <span className="text-white font-medium">SRM University-AP</span>. Building a rigorous core in algorithms, data structures, and computer systems.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 mt-auto flex justify-between items-center">
              <div>
                <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block">Score Metrics</span>
                <span className="font-heading text-2xl font-bold text-white">9.18 <span className="text-sm font-light text-slate-500">/ 10 CGPA</span></span>
              </div>
              <div className="h-12 w-12 rounded-full border-2 border-electric-blue/20 border-t-electric-blue flex items-center justify-center font-mono text-xs text-electric-blue animate-spin-slow">
                CS
              </div>
            </div>
          </motion.div>

          {/* Box 2: Core Drive / Architectural Philosophy (Takes 2 Columns) */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl p-6 md:col-span-2 relative overflow-hidden flex flex-col justify-between border border-white/5 group hover:border-electric-blue/30 transition-all duration-300"
          >
            {/* Ambient background accent */}
            <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-electric-blue/5 rounded-full blur-2xl group-hover:bg-electric-blue/15 transition-all duration-300"></div>

            <div>
              <div className="p-3 bg-electric-blue/10 rounded-xl w-fit text-electric-blue mb-6">
                <BrainCircuit size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">The "Simple but Smart" Code Drive</h3>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 space-y-4">
                  <p className="font-sans text-slate-400 text-sm font-light leading-relaxed">
                    Powered by an <span className="text-white font-mono font-semibold">"intentional curiosity"</span> and a highly sociable nature, I channel analytical thinking into modular architecture. Instead of over-engineering, I focus on building systems that are clean to read, yet extremely smart in design.
                  </p>
                  <p className="font-sans text-slate-300 text-sm font-light leading-relaxed border-l-2 border-electric-blue/40 pl-4 italic">
                    My engineering philosophy: building adaptable systems built strictly around dynamic, user-defined inputs and configurations rather than writing rigid, hardcoded values. By designing systems that mold themselves to dynamic user parameters, we solve real-world complexities elegantly.
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-col justify-center space-y-3 p-4 bg-white/2 rounded-xl border border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="font-mono text-xs text-slate-400">Dynamic Schemas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-electric-blue rounded-full"></span>
                    <span className="font-mono text-xs text-slate-400">Adaptable APIs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                    <span className="font-mono text-xs text-slate-400">Scalable Logic</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>DRIVE_MODULE // ONLINE</span>
              <span className="text-electric-blue font-semibold tracking-wider">INPUT_DRIVEN_LOGIC</span>
            </div>
          </motion.div>

          {/* Box 3: Hackathons Flex */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between border border-white/5 group hover:border-electric-blue/30 transition-all duration-300"
          >
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-electric-blue/5 rounded-full blur-xl group-hover:bg-electric-blue/15 transition-all duration-300"></div>

            <div>
              <div className="p-3 bg-electric-blue/10 rounded-xl w-fit text-electric-blue mb-6">
                <Trophy size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">Hackathon Edge</h3>
              <p className="font-sans text-slate-400 text-sm font-light leading-relaxed mb-4">
                Testing ideas under extreme pressure. Turning coffee, adrenaline, and raw coding sprints into functional prototypes.
              </p>

              {/* Glowing scroll / ticker of hackathons */}
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-white/3 rounded-xl border border-white/5 relative group/item hover:border-electric-blue/40 transition-colors duration-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-heading text-sm font-semibold text-white">Quantum Valley Hack</span>
                    <ArrowUpRight size={14} className="text-slate-500 group-hover/item:text-electric-blue transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] uppercase text-electric-blue">Deep Tech Track</span>
                </div>

                <div className="p-3 bg-white/3 rounded-xl border border-white/5 relative group/item hover:border-white/40 transition-colors duration-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-heading text-sm font-semibold text-white">Hack MSC 2.0</span>
                    <ArrowUpRight size={14} className="text-slate-500 group-hover/item:text-white transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] uppercase text-white/80">1st Place / Finalist</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 mt-6 font-mono text-[10px] uppercase text-slate-500 tracking-wider">
              <span>COMPETITIVE_BUILD_RATIO: 100%</span>
            </div>
          </motion.div>

          {/* Box 4: The Solo Economy Chart/Graphic (Takes 2 Columns) */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl p-6 md:col-span-2 relative overflow-hidden flex flex-col justify-between border border-white/5 group hover:border-electric-blue/30 transition-all duration-300"
          >
            <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-electric-blue/5 rounded-full blur-2xl group-hover:bg-electric-blue/15 transition-all duration-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full items-center">
              <div className="md:col-span-5 space-y-4">
                <div className="p-3 bg-electric-blue/10 rounded-xl w-fit text-electric-blue">
                  <BarChart3 size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Solo Economy Focus</h3>
                <p className="font-sans text-slate-400 text-sm font-light leading-relaxed">
                  Deeply interested in the evolution of micro-businesses, indie hackers, and SaaS creators. Designing lightweight, smart micro-tools to automate operations, bypassing traditional bloated developer cycles.
                </p>
              </div>

              {/* High-tech SVG graph illustrating workflow speed/automation index */}
              <div className="md:col-span-7 flex justify-center items-center h-48 relative">
                {/* SVG Visual Graphic */}
                <svg viewBox="0 0 340 180" className="w-full h-full text-slate-600">
                  {/* Grid Lines */}
                  <line x1="20" y1="20" x2="320" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="20" y1="60" x2="320" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="20" y1="100" x2="320" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="20" y1="140" x2="320" y2="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Area beneath chart curve */}
                  <path
                    d="M 20 150 L 20 120 Q 80 110 120 70 T 220 50 T 320 20 L 320 150 Z"
                    fill="url(#chartGrad)"
                  />

                  {/* Curved glow chart line */}
                  <path
                    d="M 20 120 Q 80 110 120 70 T 220 50 T 320 20"
                    fill="transparent"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  />
                  <path
                    d="M 20 120 Q 80 110 120 70 T 220 50 T 320 20"
                    fill="transparent"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                  />

                  {/* Founder-matching / startup network cluster lines (foundr reference) */}
                  <line x1="120" y1="70" x2="100" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="120" y1="70" x2="140" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="120" y1="70" x2="95" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                  <line x1="220" y1="50" x2="200" y2="35" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                  <line x1="220" y1="50" x2="245" y2="65" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />

                  <line x1="320" y1="20" x2="295" y2="15" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="320" y1="20" x2="330" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                  {/* Satellite/Orbiting Nodes in the cluster */}
                  <circle cx="100" cy="60" r="3" fill="#3B82F6" />
                  <circle cx="140" cy="85" r="2.5" fill="#FFFFFF" />
                  <circle cx="95" cy="85" r="2.5" fill="#3B82F6" />

                  <circle cx="200" cy="35" r="3" fill="#FFFFFF" />
                  <circle cx="245" cy="65" r="2.5" fill="#3B82F6" />

                  <circle cx="295" cy="15" r="3" fill="#3B82F6" />
                  <circle cx="330" cy="40" r="2.5" fill="#FFFFFF" />

                  {/* Primary Nodes */}
                  <circle cx="120" cy="70" r="5" fill="#3B82F6" className="animate-ping" />
                  <circle cx="120" cy="70" r="4" fill="#0A192F" stroke="#3B82F6" strokeWidth="2" />
                  <circle cx="220" cy="50" r="4" fill="#0A192F" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="320" cy="20" r="4" fill="#0A192F" stroke="#3B82F6" strokeWidth="2" />

                  {/* Chart Label */}
                  <text x="30" y="35" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="JetBrains Mono">
                    TRADITIONAL DEPLOYMENT (BLOCKED)
                  </text>
                  <text x="140" y="85" fill="#3B82F6" fontSize="10" fontFamily="JetBrains Mono">
                    SOLO_SAAS NETWORK
                  </text>
                </svg>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
              <span>SOLO_ECONOMY_SYSTEMS // ACTIVED</span>
              <span className="text-electric-blue font-semibold">SCALING_SPEED x10</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
