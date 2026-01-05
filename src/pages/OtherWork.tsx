import { Link } from "react-router-dom";
import AotgLogoScroll from "@/components/AotgLogoScroll";
import MobileNavDropdown from "@/components/MobileNavDropdown";

// Case study images
import sodertornsBg from "@/assets/case-studies/aotg/sodertorns.png";
import porselensklinikkenBg from "@/assets/case-studies/aotg/porselensklinikken.png";
import ryggnackelaserBg from "@/assets/case-studies/aotg/ryggnackelaser.png";
import trollhattansBg from "@/assets/case-studies/aotg/trollhattans.png";
import courseacademyHero from "@/assets/case-studies/courseacademy-hero.png";

const aotgCaseStudies = [
  {
    id: "case1",
    image: sodertornsBg,
    tag: "Drainage Services",
    headline: "Södertörns Spolexpress",
    results: [
      { label: "Total First Purchase Revenue", value: "227,200 SEK" },
      { label: "NC-ROAS", value: "12×" },
      { label: "LEADS", value: "84" }
    ]
  },
  {
    id: "case2",
    image: porselensklinikkenBg,
    tag: "Physiotherapy Clinic",
    headline: "Porselensklinikken",
    results: [
      { label: "Total First Purchase Revenue", value: "156,400 SEK" },
      { label: "NC-ROAS", value: "49×" },
      { label: "LEADS", value: "352" }
    ]
  },
  {
    id: "case3",
    image: ryggnackelaserBg,
    tag: "Laser Therapy",
    headline: "Rygg Nacke Laser",
    results: [
      { label: "Total First Purchase Revenue", value: "128,700 SEK" },
      { label: "NC-ROAS", value: "3.2×" },
      { label: "LEADS", value: "305" }
    ]
  },
  {
    id: "case4",
    image: trollhattansBg,
    tag: "Osteopathy Clinic",
    headline: "Trollhättans Osteopatklinik",
    results: [
      { label: "Total First Purchase Revenue", value: "45,750 SEK" },
      { label: "NC-ROAS", value: "12×" },
      { label: "LEADS", value: "100" }
    ]
  }
];

const OtherWork = () => {

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
              className="font-squares-bold text-[10px] tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
            >
              School Work
            </Link>
            <Link 
              to="/other-work" 
              className="font-squares-bold text-[10px] tracking-[0.2em] text-white uppercase"
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
        
        {/* Main Content - Single Row Layout */}
        <main className="relative z-10 max-w-7xl mx-auto w-full px-8 lg:px-16 pt-20 pb-12">
          <div className="text-center max-w-2xl mx-auto">
            <article>
              <h2 className="font-ethnocentric text-4xl md:text-5xl text-white mb-4 tracking-wide">
                OTHER WORK
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                A selection of projects and ventures from earlier in my career, as well as products I'm currently building outside of my agency, WareScale, and my academic work.
              </p>
            </article>
          </div>
          
          {/* AOTG Media Section */}
          <section className="mt-32">
            {/* Header */}
            <div>
              {/* Stats Badge */}
              <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                <span className="text-[12px] font-medium tracking-wide text-white/50">
                  Started <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">Juli 2022</span> and ceased operations <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">Dec 2022</span>
                </span>
              </div>
              <h2 className="font-ethnocentric text-xl md:text-3xl text-white mb-12 tracking-wide">
                AOTG MEDIA<br />LOCAL PERFORMANCE MARKETING AGENCY
              </h2>
            </div>
            
            {/* About Section */}
            <div>
              <h3 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                About AOTG Media
              </h3>
              <p className="text-white/60 text-sm leading-relaxed text-left">
                AOTG Media was my first agency and my introduction to marketing and sales. I co-founded it with a colleague as a performance-driven lead generation agency for local businesses.
                <br /><br />
                In the early stages, the process was fairly straightforward: we closed clients first — and then figured out how to deliver the results we had promised. We worked across a wide range of industries, including physiotherapy, dentistry, skincare and beauty clinics, as well as various local service businesses.
                <br /><br />
                The agency operated entirely on a performance- and commission-based model. If we didn't deliver results, we didn't get paid — leaving no safety net and placing full responsibility on execution.
              </p>
            </div>
            
            {/* Some Selected Results */}
            <div className="mt-16">
              <h3 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                Some Selected Results
              </h3>
            </div>
            
            {/* Case Studies Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {aotgCaseStudies.map((study) => (
                <div 
                  key={study.id}
                  className="rounded-2xl p-3 border border-white/10"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.1) 100%)',
                  }}
                >
                  {/* Image */}
                  <div className="aspect-[3/2] rounded-xl overflow-hidden mb-3">
                    <img 
                      src={study.image} 
                      alt={study.headline}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Tag */}
                  <span className="inline-block text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full mb-3">
                    {study.tag}
                  </span>
                  
                  {/* Headline */}
                  <h4 className="font-albert-sans text-lg text-white mb-3">
                    {study.headline}
                  </h4>
                  
                  {/* Results */}
                  <div className="space-y-4 mt-4">
                    {study.results.map((result, index) => (
                      <div key={index}>
                        <p className="text-[10px] font-squares-bold tracking-[0.2em] text-white/40 uppercase mb-1">
                          {result.label}
                        </p>
                        <p className="text-lg font-albert-sans font-medium text-white">
                          {result.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Logo Scroll */}
            <div className="mt-4">
              <AotgLogoScroll />
            </div>
            
            {/* Reflection Section */}
            <div className="mt-8 md:mt-16">
              <h3 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                Reflection
              </h3>
              <p className="text-white/60 text-sm leading-relaxed text-left">
                This period became a trial-by-fire education in real-world marketing and one of the steepest learning curves of my career. Through constant iteration, testing and client delivery, I developed a strong understanding of systems, pricing, media buying and paid advertising for lead generation. Over time, we worked with 100+ companies across Scandinavia and helped generate thousands of customers — shaping how I approach client work today.
              </p>
            </div>
          </section>
          
          {/* CourseAcademy Section */}
          <section className="mt-32">
            {/* Header */}
            <div>
              {/* Stats Badge */}
              <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                <span className="text-[12px] font-medium tracking-wide text-white/50">
                  Launched <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">late 2024</span> and still ongoing
                </span>
              </div>
              <h2 className="font-ethnocentric text-xl md:text-3xl text-white mb-12 tracking-wide">
                COURSEACADEMY<br />EDUCATION PROGRAM
              </h2>
            </div>
            
            {/* About Section */}
            <div>
              <h3 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                About CourseAcademy.co
              </h3>
              <p className="text-white/60 text-sm leading-relaxed text-left">
                CourseAcademy is my own education program and information product, built to teach others how to create, launch and scale profitable online education businesses.
                <br /><br />
                The program is based on exactly the same systems, frameworks and sales processes I use in my agency work at WareScale for clients - but DIY instead of DFY. Instead of hiring an agency, participants learn how to build the entire system themselves, using my proven structures, templates and knowledge.
                <br /><br />
                CourseAcademy is based on pre-recorded video lectures, a community, weekly calls and done templates. It's made for experts, coaches and professionals who want to turn their knowledge into a scalable digital product - without relying on guesswork, theory or fragmented tactics.
              </p>
            </div>
            
            {/* Website Embed Section */}
            <div className="mt-16">
              
              {/* Image Container */}
              <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
                <img 
                  src={courseacademyHero}
                  alt="CourseAcademy Website"
                  className="w-full h-auto"
                />
              </div>
              
              {/* See in browser link */}
              <a 
                href="https://courseacademy.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-white/60 hover:text-white transition-colors text-sm"
              >
                See in browser
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
            
            {/* Reflection Section */}
            <div className="mt-16">
              <h3 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                Reflection
              </h3>
              <p className="text-white/60 text-sm leading-relaxed text-left">
                In my day-to-day agency work, I was repeatedly implementing the same systems for information product businesses - using our proven framework applied consistently across clients. And during sales conversations with potential clients, I often see strong interest, but not every founder or expert had the budget to work with an agency.
                <br /><br />
                Building CourseAcademy became a way to make those systems accessible in a different format. Instead of done-for-you delivery, the program allows people to implement the same methods themselves — using the same frameworks, structures and tools, but at a lower entry point.
                <br /><br />
                At its core, the goal is the same: helping people build more sustainable information products that create both increased income and greater freedom over time.
              </p>
            </div>
          </section>
        </main>
    </div>
  );
};

export default OtherWork;
