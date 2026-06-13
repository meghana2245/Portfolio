import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBento from './components/AboutBento';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ContactTerminal from './components/ContactTerminal';
import Footer from './components/Footer';
import CanvasParticles from './components/CanvasParticles';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-300 overflow-x-hidden font-sans selection:bg-electric-blue/20 selection:text-white">
      {/* Animated Space Mesh Particle background */}
      <CanvasParticles />

      {/* Navigation */}
      <Navbar />

      {/* Main content grid */}
      <main className="relative z-10 max-w-7xl mx-auto">
        <Hero />
        <AboutBento />
        <TechStack />
        <Projects />
        <ContactTerminal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
