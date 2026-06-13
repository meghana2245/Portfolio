import { useRef, useState } from 'react';
import { ExternalLink, Sparkles, Folder, Eye } from 'lucide-react';

// Reusable Hardware-Accelerated 3D Tilt Card with Mouse Glow
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Relative coordinates within the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // 3D rotation calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = -((y - centerY) / centerY) * 10; // max 10 deg
    const rotY = ((x - centerX) / centerX) * 10;  // max 10 deg
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const glowStyle = isHovered
    ? {
        background: `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 100%)`,
        opacity: 1,
      }
    : { opacity: 0 };

  const borderGlowStyle = isHovered
    ? {
        background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.25) 0%, rgba(59, 130, 246, 0.2) 60%, transparent 100%)`,
        opacity: 1,
      }
    : { opacity: 0 };

  const cardStyle = {
    transform: isHovered
      ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between border border-white/5 cursor-pointer select-none"
    >
      {/* Dynamic Glow Overlay - Hardware-accelerated with opacity/gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={glowStyle}
      ></div>

      {/* Dynamic Glowing Border Wrapper */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 rounded-2xl p-[1px]"
        style={borderGlowStyle}
      >
        <div className="absolute inset-0 bg-[#0A192F]/90 rounded-2xl"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Card Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="p-2.5 bg-white/3 border border-white/5 text-slate-400 group-hover:text-electric-blue rounded-xl">
            <Folder size={20} />
          </div>
          <div className="flex space-x-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/3 hover:bg-electric-blue/20 border border-white/5 text-slate-400 hover:text-electric-blue rounded-lg transition-colors duration-200"
              title="View Source Code"
            >
              <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/3 hover:bg-white/20 border border-white/5 text-slate-400 hover:text-white rounded-lg transition-colors duration-200"
              title="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-3 flex-grow">
          <h3 className="font-heading text-xl font-bold text-white tracking-tight flex items-center gap-2">
            {project.title}
            {project.featured && (
              <span className="text-[9px] font-mono tracking-widest text-electric-blue border border-electric-blue/30 bg-electric-blue/10 py-0.5 px-2 rounded-full flex items-center gap-1 uppercase">
                <Sparkles size={8} /> Active
              </span>
            )}
          </h3>
          <p className="font-sans text-slate-400 text-sm font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-6 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded-md hover:border-electric-blue/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'CareSync',
      description: 'Smart Medication Reminder System built with FastAPI, React.js, and MySQL. Features automated APScheduler notifications, Twilio WhatsApp integration, and multilingual translation support.',
      tags: ['FastAPI', 'React.js', 'MySQL', 'Twilio API', 'Deep Translator'],
      github: 'https://github.com/meghana2245/CareSync',
      live: 'https://medication-caresync.vercel.app/',
      featured: true,
    },
    {
      title: 'Trip Planner',
      description: 'A comprehensive travel platform built with React, Node.js, Express, and MongoDB Atlas. Incorporates JWT-based user authentication, protected routes, and custom travel itinerary APIs.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT'],
      github: 'https://github.com/meghana2245/TripPlanner-Project',
      live: 'https://my-trip-planner-app.vercel.app/',
      featured: false,
    },
    {
      title: 'Minify',
      description: 'A scalable MERN stack URL shortener utilizing a custom Base62 encoding algorithm. Ensures collision-free key generation and fast URL redirection with back-end persistence layers.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Base62'],
      github: 'https://github.com/meghana2245/URL_Shortener',
      live: 'https://my-url-shortener-app.vercel.app/',
      featured: false,
    },
    {
      title: 'Platea',
      description: 'A restaurant management system providing real-time table status tracking with active polling queues, a programmatic floor plan interface, automated billing audits, and role-based workflows.',
      tags: ['Python', 'Flask', 'SQL', 'HTML5', 'CSS3'],
      github: 'https://github.com/meghana2245/Restaurant-Management-System',
      live: 'https://my-platea-app.vercel.app/',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center md:text-left mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
            Projects
          </h2>
          <p className="text-slate-400 max-w-xl font-light text-base">
            A selective showcase of applications implementing modular architectures and dynamic input strategies.
          </p>
        </div>

        {/* 3D Tilt Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
