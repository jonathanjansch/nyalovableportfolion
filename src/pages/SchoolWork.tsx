import { useState } from "react";
import { Link } from "react-router-dom";
import schoolShowcase from "@/assets/school-work-showcase.png";
import SchoolCaseStudyCard from "@/components/SchoolCaseStudyCard";
import SchoolCaseStudyModal from "@/components/SchoolCaseStudyModal";
import MobileNavDropdown from "@/components/MobileNavDropdown";
import { schoolCaseStudyContent } from "@/data/schoolCaseStudyContent";
import { SchoolCaseStudyContent } from "@/types/schoolCaseStudy";

// School project images
import ahlensBackground from "@/assets/case-studies/ahlens-background.png";
import ahlensLogo from "@/assets/case-studies/ahlens-logo.png";
import veridoBackground from "@/assets/case-studies/verido-background.png";
import boostaiBackground from "@/assets/case-studies/boostai-background.png";
import boostaiLogo from "@/assets/case-studies/boostai-logo.png";
import uberBackground from "@/assets/case-studies/uber-background.png";
import imagespecadsBackground from "@/assets/case-studies/imagespecads-background.png";

const schoolProjects = [
  {
    id: "ahlens",
    backgroundImage: ahlensBackground,
    logoImage: ahlensLogo,
    tagline: "Course · Explore Sustainability",
    projectName: "Åhléns - Communication Solution",
    stats: [
      { value: "Group project · Brief" }
    ]
  },
  {
    id: "verido",
    backgroundImage: veridoBackground,
    tagline: "Course · Programming & Methods",
    projectName: "Verido - Web Application",
    stats: [
      { value: "Solo project · Course Assigment" }
    ]
  },
  {
    id: "boostai",
    backgroundImage: boostaiBackground,
    logoImage: boostaiLogo,
    tagline: "Course · Understanding the job of communication",
    projectName: "Boost.ai - Spec Ad",
    stats: [
      { value: "Solo project · Brief" }
    ]
  },
  {
    id: "uber",
    backgroundImage: uberBackground,
    tagline: "Course · Content generating",
    projectName: "Uber - Spec Ad",
    stats: [
      { value: "Solo project · Course Assigment" }
    ]
  },
  {
    id: "imagespecads",
    backgroundImage: imagespecadsBackground,
    tagline: "Course · Content generating",
    projectName: "More Spec Ads",
    stats: [
      { value: "Solo project · Course Assigment" }
    ]
  }
];

const SchoolWork = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<SchoolCaseStudyContent | null>(null);

  const handleReadMore = (id: string) => {
    const content = schoolCaseStudyContent[id];
    if (content) {
      setSelectedContent(content);
      setModalOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#101010]">
      {/* Low-opacity gradient on right side */}
      <div 
        className="pointer-events-none fixed right-0 top-0 h-full w-1/2 z-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 lg:px-16 bg-[#101010]/80 backdrop-blur-md border-b border-white/5 max-w-7xl mx-auto w-full">
        {/* Logo - left */}
        <Link 
          to="/" 
          className="font-ethnocentric text-xs tracking-wider text-white uppercase hover:text-white/80 transition-colors"
        >
          <span className="md:hidden">Jonathan Jansch Portfolio</span>
          <span className="hidden md:inline">Jonathan Jansch<br />Personal Portfolio</span>
        </Link>
        
        {/* Mobile Navigation Dropdown */}
        <MobileNavDropdown />
        
        {/* Desktop Navigation - center */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link 
            to="/" 
            className="font-squares-bold text-[10px] tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
          >
            Start
          </Link>
          <Link 
            to="/agency-work" 
            className="font-squares-bold text-[10px] tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
          >
            Agency Work
          </Link>
          <Link 
            to="/school-work" 
            className="font-squares-bold text-[10px] tracking-[0.2em] text-white uppercase"
          >
            School Work
          </Link>
          <Link 
            to="/other-work" 
            className="font-squares-bold text-[10px] tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
          >
            Other Work
          </Link>
          <Link 
            to="/about-me" 
            className="font-squares-bold text-[10px] tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
          >
            About Me
          </Link>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-8 lg:px-16 pt-20 pb-12">
          {/* Top section - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Berghs - top left */}
            <article>
              <h2 className="font-ethnocentric text-2xl text-white mb-4 tracking-wide">
                Berghs School of Communication
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                During 2025–2026, I am studying the one-year full-time program Content Engineer at Berghs School of Communication.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                The program is Europe's (probably the world's) first full time AI-focused education within marketing and communication — combining Berghs' traditional foundation in strategy, creativity and communication with the new generation of AI-driven tools, systems and workflows.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                The education is built to prepare communicators and marketers for a future where AI is an integrated part of how ideas are developed, produced and scaled.
              </p>
              <button 
                onClick={() => document.getElementById('school-projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 px-6 py-2.5 font-ethnocentric text-xs tracking-wider text-white uppercase bg-transparent border border-white/60 rounded-md hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
              >
                See school work
              </button>
            </article>
            
            {/* Top right - showcase image */}
            <div className="hidden lg:flex lg:pl-4 items-center justify-center">
              <img 
                src={schoolShowcase} 
                alt="Berghs School of Communication showcase"
                className="w-3/5 h-auto"
              />
            </div>
          </div>
          
          {/* Program content section */}
          <section className="mt-16">
            <h2 className="font-ethnocentric text-2xl text-white mb-8 tracking-wide">
              What the Program Includes:
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-medium text-sm mb-2">AI Foundations</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    An introduction to modern AI systems and generative models, including large language models, machine learning and how AI systems are trained and operate. This part of the program focused on understanding in-depth on what AI is and how it works.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white font-medium text-sm mb-2">Communication & Strategy</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    General communication education covering communication strategy, idea development, messaging, branding and UI/UX. The course included multiple team-based projects built around real-world communication briefs, where we worked end-to-end — from strategic problem framing to concept development, production and final delivery.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white font-medium text-sm mb-2">AI Content Generation</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    The most hands-on and production-focused part of the program. We worked extensively with AI as a creative tool for content generation, creating images, video, audio and music for spec-advertising, campaigns and digital communication.
                  </p>
                </div>
              </div>
              
              {/* Right column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-medium text-sm mb-2">Programming & Methods</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Technical fundamentals in HTML, CSS, JavaScript, React and Python, combined with modern development workflows such as Git, GitHub and AI-assisted coding. This enabled us to both vibe code and understand what we build, as well as collaborate effectively with developers and teams.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white font-medium text-sm mb-2">Automation & Systems Design</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Designing AI-powered workflows and automations for content production, marketing processes and internal systems. Focus on building scalable, efficient systems.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white font-medium text-sm mb-2">AI, Law & Ethics</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Understanding the legal, ethical and societal implications of using AI in communication and marketing, including copyright, data usage, transparency and responsibility.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Case Studies Section */}
          <section id="school-projects" className="mt-32 text-center scroll-mt-24">
            {/* Stats Badge */}
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
              <span className="text-[12px] font-medium tracking-wide text-white/50">
                Course assignments, communication solutions & group projects
              </span>
            </div>
            <h2 className="font-ethnocentric text-3xl text-white mb-4 tracking-wide">
              SCHOOL PROJECTS AT BERGHS
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
              A selection of school projects I've done during my time at the Content Engineer program at Berghs.
            </p>
            
            {/* Case Studies Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {schoolProjects.map((project, index) => (
                <SchoolCaseStudyCard 
                  key={index} 
                  {...project} 
                  onReadMore={handleReadMore}
                />
              ))}
              
              {/* Coming Soon placeholder card */}
              <div className="relative aspect-[4/3] rounded-xl border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center gap-3 overflow-hidden">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-white/40 text-2xl">+</span>
                </div>
                <span className="font-ethnocentric text-xs tracking-wider text-white/40 uppercase">
                  More coming soon
                </span>
              </div>
            </div>
          </section>
        </main>

      {/* School Case Study Modal */}
      <SchoolCaseStudyModal 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
        content={selectedContent} 
      />
    </div>
  );
};

export default SchoolWork;
