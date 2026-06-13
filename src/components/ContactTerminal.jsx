import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactTerminal() {
  const nodes = [
    {
      label: 'LinkedIn',
      value: 'in/meghana-kotha-297030379',
      href: 'https://www.linkedin.com/in/meghana-kotha-297030379/',
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      label: 'Email Address',
      value: 'meghana_kotha@srmap.edu.in',
      href: 'mailto:meghana_kotha@srmap.edu.in',
      icon: Mail
    },
    {
      label: 'Phone Node',
      value: '+91 6301990869',
      href: 'tel:+916301990869',
      icon: Phone
    },
    {
      label: 'Resume PDF',
      value: 'Retrieve Resume PDF',
      href: '/Meghana_Kotha_Resume.pdf',
      icon: FileText,
      download: 'Meghana_Kotha_Resume.pdf'
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
            Contact
          </h2>
        </div>

        {/* Full-Width Secure Channel Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden group hover:border-white/15 transition-all duration-300"
        >
          {/* Ambient Background Accent */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-electric-blue/5 rounded-full blur-3xl pointer-events-none group-hover:bg-electric-blue/10 transition-all duration-300"></div>
          
          <div className="relative z-10">
            <h3 className="font-heading text-2xl font-bold text-white mb-2 tracking-tight">
              Establish Secure Channel
            </h3>
            <p className="font-sans text-slate-400 text-sm font-light leading-relaxed">
              Direct contact nodes to reach Kotha Meghana. Response latency optimal.
            </p>

            {/* Grid of contact details & resume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {nodes.map((node) => (
                <a
                  key={node.label}
                  href={node.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={node.download}
                  className="block p-5 bg-white/2 border border-white/5 hover:border-electric-blue/30 rounded-xl group/node transition-all duration-300 hover:bg-white/4"
                >
                  <span className="font-mono text-[9px] text-slate-500 tracking-wider block mb-2 uppercase">
                    {node.label}
                  </span>
                  <div className="flex items-center space-x-3 text-slate-300 group-hover/node:text-white transition-colors">
                    <node.icon className="w-5 h-5 text-electric-blue shrink-0 group-hover/node:scale-110 transition-transform duration-300" />
                    <span className="font-mono text-xs sm:text-sm tracking-wide truncate">
                      {node.value}
                    </span>
                  </div>
                </a>
              ))}

              {/* Operations Base (Non-link card) */}
              <div className="p-5 bg-white/2 border border-white/5 rounded-xl transition-all duration-300">
                <span className="font-mono text-[9px] text-slate-500 tracking-wider block mb-2 uppercase">
                  Operations Base
                </span>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-electric-blue shrink-0" />
                  <span className="font-mono text-xs sm:text-sm tracking-wide truncate">
                    Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
            <span>COMMUNICATION_LINK // STANDBY</span>
            <span className="text-electric-blue font-semibold">SECURE_NODE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
