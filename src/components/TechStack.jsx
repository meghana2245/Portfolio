import { Code, Terminal, Cpu, Globe, Zap, Cloud, Database, BrainCircuit, Award } from 'lucide-react';

export default function TechStack() {
  const techs = [
    { name: 'Python', icon: <Code className="text-white" /> },
    { name: 'C++', icon: <Terminal className="text-electric-blue" /> },
    { name: 'React.js', icon: <Cpu className="text-electric-blue" /> },
    { name: 'Node.js', icon: <Globe className="text-white" /> },
    { name: 'FastAPI', icon: <Zap className="text-electric-blue" /> },
    { name: 'Google Cloud Platform', icon: <Cloud className="text-white" /> },
    { name: 'MongoDB', icon: <Database className="text-electric-blue" /> },
    { name: 'LLMs & GenAI', icon: <BrainCircuit className="text-white" /> },
  ];

  // Double list to create continuous scrolling
  const marqueeItems = [...techs, ...techs];

  const certs = [
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB, Inc.',
      date: 'Apr 2026',
      badge: 'ASSOCIATE',
      icon: <Database size={24} />,
      description: 'Certified in building applications using MongoDB. Validated expertise in data modeling, query optimization, CRUD operations, indexing, and aggregation pipelines.',
      link: 'https://drive.google.com/file/d/12zV-d4gf_ucx2efJrsIZCe6lTp50Ofu9/view?usp=drivesdk',
    },
    {
      title: 'Certified Professional Python',
      issuer: 'Python Institute',
      date: 'June 9, 2025',
      badge: 'PROFESSIONAL',
      icon: <Code size={24} />,
      description: 'Industry validation for advanced software engineering using Python. Covers object-oriented programming, data structures, functional design, concurrency, and library architecture.',
      link: 'https://drive.google.com/file/d/1EIEUU3IhVQniNTLN3xp9CSiZeWZEIJPN/view?usp=sharing',
    },
    {
      title: 'Quantum Valley Hackathon',
      issuer: 'Quantum Valley',
      date: 'Aug 28, 2025',
      badge: 'PARTICIPANT',
      icon: <Award size={24} />,
      description: 'Collaborated on prototyping innovative software solutions and solving complex engineering challenges under compressed timelines.',
      link: 'https://drive.google.com/file/d/18Na5vi0l3v76HCOOqM-kgDPS0rtOLSMA/view?usp=sharing',
    },
    {
      title: 'Hack MSC 2.0',
      issuer: 'MSC SRM AP',
      date: 'Nov 1, 2025',
      badge: 'PARTICIPANT',
      icon: <Award size={24} />,
      description: 'Rapidly prototyped and engineered software solutions under strict time constraints to solve modern Web3 and Full-Stack challenges.',
      link: 'https://drive.google.com/file/d/1Ha4xRoygN-BU7fvof69mQbkLgAXiDogX/view?usp=sharing',
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
            Skills
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-light text-base">
            Technologies I build with on a daily basis, backed by industrial developer credentials.
          </p>
        </div>

        {/* Continuous Marquees */}
        <div className="space-y-6 mb-20 relative">
          {/* Masking gradients on sides */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0A192F] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0A192F] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Row 1 (Left Scrolling) */}
          <div className="flex overflow-x-hidden relative py-2">
            <div className="flex space-x-6 min-w-full shrink-0 animate-marquee-left">
              {marqueeItems.map((item, idx) => (
                <div
                  key={`m1-${idx}`}
                  className="flex items-center space-x-3 px-6 py-3.5 bg-white/3 hover:bg-white/5 border border-white/5 hover:border-electric-blue/30 rounded-xl transition-all duration-300 group shrink-0"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="font-heading text-sm font-semibold tracking-wide text-white group-hover:text-electric-blue transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Right Scrolling) */}
          <div className="flex overflow-x-hidden relative py-2">
            <div className="flex space-x-6 min-w-full shrink-0 animate-marquee-right">
              {marqueeItems.map((item, idx) => (
                <div
                  key={`m2-${idx}`}
                  className="flex items-center space-x-3 px-6 py-3.5 bg-white/3 hover:bg-white/5 border border-white/5 hover:border-electric-blue/30 rounded-xl transition-all duration-300 group shrink-0"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="font-heading text-sm font-semibold tracking-wide text-white group-hover:text-electric-blue transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">VALIDATED CREDENTIALS & ACHIEVEMENTS</span>
            <div className="h-[1px] w-20 bg-slate-800 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certs.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 relative overflow-hidden border border-white/5 group hover:border-electric-blue/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Metallic shine background card effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 rounded-full blur-2xl group-hover:bg-electric-blue/10 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-electric-blue via-transparent to-transparent opacity-50"></div>

                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-xl text-electric-blue group-hover:text-white transition-colors duration-300">
                      {cert.icon}
                    </div>
                    <span className="font-mono text-[10px] text-electric-blue bg-electric-blue/10 border border-electric-blue/20 px-2 py-0.5 rounded-full font-bold">
                      {cert.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                    {cert.title}
                  </h3>
                  <p className="font-sans text-slate-400 text-sm font-light leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-8 flex justify-between items-center font-mono text-xs text-slate-500">
                  <span>ISSUER: {cert.issuer}</span>
                  <span className="text-electric-blue/80 font-bold group-hover:text-white transition-colors">VERIFY_CRED ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
