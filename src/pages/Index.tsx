import { Link } from "react-router-dom";
import statueImage from "@/assets/statue.png";

const Index = () => {
  return (
    <div className="relative flex h-[100dvh] items-center justify-center overflow-hidden md:min-h-screen md:h-auto">
      {/* Layer 1: Solid background */}
      <div className="absolute inset-0 z-0 bg-[#101010]" />
      
      {/* Layer 2: Radial gradient glow - MOBILE (bigger spread) */}
      <div 
        className="absolute inset-0 z-[2] md:hidden"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(200, 200, 210, 0.12) 35%, transparent 68%)'
        }}
        aria-hidden="true"
      />
      
      {/* Layer 2: Radial gradient glow - DESKTOP (original) */}
      <div 
        className="absolute inset-0 z-[2] hidden md:block"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(200, 200, 210, 0.10) 26%, transparent 48%)'
        }}
        aria-hidden="true"
      />
      
      {/* Layer 3: Statue image */}
      <img 
        src={statueImage} 
        alt="" 
        className="pointer-events-none absolute bottom-0 left-1/2 z-[5] h-[85dvh] w-auto -translate-x-1/2 scale-[1.2] object-cover md:h-[105vh] md:scale-100"
        aria-hidden="true"
      />
      
      {/* Micro-typography: ARCHIVE (desktop) / SYSTEM/PORTFOLIO (mobile) */}
      <span 
        className="pointer-events-none absolute left-8 top-8 z-10 font-rostex text-[10px] uppercase tracking-widest text-white/[0.10]"
        aria-hidden="true"
      >
        <span className="hidden md:inline">Archive</span>
        <span className="md:hidden">System / Portfolio</span>
      </span>
      
      {/* Micro-typography: INDEX 01 */}
      <span 
        className="pointer-events-none absolute right-12 top-8 z-10 font-rostex text-[10px] uppercase tracking-widest text-white/[0.10]"
        aria-hidden="true"
      >
        Index 01
      </span>
      
      {/* Micro-typography: SYSTEM / PORTFOLIO (desktop only) */}
      <span 
        className="pointer-events-none absolute bottom-20 left-8 z-10 hidden font-rostex text-[10px] uppercase tracking-widest text-white/[0.08] md:block"
        aria-hidden="true"
      >
        System / Portfolio
      </span>
      
      {/* Micro-typography: MODE: ACTIVE */}
      <span 
        className="pointer-events-none absolute right-12 top-1/2 z-10 hidden -translate-y-1/2 font-rostex text-[10px] uppercase tracking-widest text-white/[0.10] md:block"
        aria-hidden="true"
      >
        Mode: Active
      </span>
      
      {/* Micro-typography: CERTIFIED META BUSINESS PARTNER (desktop only) */}
      <span 
        className="pointer-events-none absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 font-rostex text-[10px] uppercase tracking-widest text-white/[0.10] md:block"
        aria-hidden="true"
      >
        Certified Meta<br />Business   Partner
      </span>
      
      {/* Micro-typography: SCALING OPERATIONS (desktop only) */}
      <span 
        className="pointer-events-none absolute bottom-24 right-12 z-10 hidden font-rostex text-[10px] uppercase tracking-widest text-white/[0.10] md:block"
        aria-hidden="true"
      >
        Scaling Operations
      </span>
      
      {/* Decorative circle overlay */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 z-[3] h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-700/40"
        aria-hidden="true"
      />
      
      {/* Navigation menu - bottom left */}
      <nav className="absolute bottom-4 left-4 right-4 z-20 md:bottom-8 md:left-8 md:right-auto">
        <ul className="flex flex-row justify-between md:justify-start md:gap-6">
          <li>
            <Link to="/" className="font-squares-bold text-xs uppercase tracking-wide text-white md:text-xs">
              <span className="md:hidden">Start</span>
              <span className="hidden md:inline">Start</span>
            </Link>
          </li>
          <li>
            <Link to="/agency-work" className="font-squares-bold text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors md:text-xs">
              <span className="md:hidden">Agency</span>
              <span className="hidden md:inline">Agency Work</span>
            </Link>
          </li>
          <li>
            <Link to="/school-work" className="font-squares-bold text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors md:text-xs">
              <span className="md:hidden">School</span>
              <span className="hidden md:inline">School Work</span>
            </Link>
          </li>
          <li>
            <Link to="/other-work" className="font-squares-bold text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors md:text-xs">
              <span className="md:hidden">Other</span>
              <span className="hidden md:inline">Other Work</span>
            </Link>
          </li>
          <li>
            <Link to="/about-me" className="font-squares-bold text-xs uppercase tracking-wide text-white/50 hover:text-white transition-colors md:text-xs">
              <span className="md:hidden">About</span>
              <span className="hidden md:inline">About Me</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="relative z-20 text-center">
        <h1 className="font-ethnocentric text-[1.15rem] uppercase tracking-wider text-white md:text-3xl lg:text-4xl">
          Jonathan Jansch
        </h1>
        <p className="mt-1 font-ethnocentric text-[1.15rem] uppercase tracking-wider text-white md:mt-4 md:text-3xl lg:text-4xl">
          Personal Portfolio
        </p>
      </div>
    </div>
  );
};

export default Index;
