import { useState } from "react";
import { Link } from "react-router-dom";
import agencyShowcase from "@/assets/agency-work-showcase.png";
import CaseStudyCard from "@/components/CaseStudyCard";
import CaseStudyModal from "@/components/CaseStudyModal";
import LogoScroll from "@/components/LogoScroll";
import MobileNavDropdown from "@/components/MobileNavDropdown";
import { caseStudyContentMap } from "@/data/caseStudyContent";
import { CaseStudyContent } from "@/types/caseStudy";

// Case study images
import swedenFlag from "@/assets/case-studies/sweden-flag.png";
import norwayFlag from "@/assets/case-studies/norway-flag.png";
import kroppskolanBg from "@/assets/case-studies/kroppskolan.png";
import relationsproffsetBg from "@/assets/case-studies/relationsproffset.png";
import klickerforlagetBg from "@/assets/case-studies/klickerforlaget.png";
import golfnarapatenBg from "@/assets/case-studies/golfnaprapaten.png";
import nutritionmattersBg from "@/assets/case-studies/nutritionmatters.png";
import coachdreasBg from "@/assets/case-studies/coachdreas.png";
import samuelchristenssonBg from "@/assets/case-studies/samuelchristensson.png";
import mialundinBg from "@/assets/case-studies/mialundin.png";
import coachmikeBg from "@/assets/case-studies/coachmike.png";

const caseStudies = [
  {
    id: "kroppskolan",
    backgroundImage: kroppskolanBg,
    tagline: "Sweden's #1 largest lymphatic education",
    brandName: "Kroppskolan",
    flags: [swedenFlag],
    stats: [
      { value: "328,200 SEK in 3 months" },
      { value: "Client retention: 1+ year" }
    ]
  },
  {
    id: "relationsproffset",
    backgroundImage: relationsproffsetBg,
    tagline: "Sweden's #1 dating course",
    brandName: "Relationsproffset",
    flags: [swedenFlag, norwayFlag],
    stats: [
      { value: "0 → 152,000+ SEK in 2 months" },
      { value: "Client retention: 1.5+ years" }
    ]
  },
  {
    id: "klickerforlaget",
    backgroundImage: klickerforlagetBg,
    tagline: "One of Sweden's leading dog training companies",
    brandName: "Klickerförlaget",
    flags: [swedenFlag],
    stats: [
      { value: "122,000+ SEK / month" },
      { value: "Client retention: 4+ months" }
    ]
  },
  {
    id: "golfnaprapaten",
    backgroundImage: golfnarapatenBg,
    tagline: "Sweden's #1 golf rehabilitation program",
    brandName: "Golfnaprapaten",
    flags: [swedenFlag, norwayFlag],
    stats: [
      { value: "283,000 SEK in 2 months" },
      { value: "Client retention: 3+ years" }
    ]
  },
  {
    id: "nutritionmatters",
    backgroundImage: nutritionmattersBg,
    tagline: "Sweden's #1 nutrition program for skin therapists",
    brandName: "NutritionMatters",
    flags: [swedenFlag],
    stats: [
      { value: "200,000+ SEK generated" },
      { value: "Client retention: 1.5+ years" }
    ]
  },
  {
    id: "coachdreas",
    backgroundImage: coachdreasBg,
    tagline: "Online fitness coach",
    brandName: "Coachdreas",
    flags: [swedenFlag],
    stats: [
      { value: "52,800+ SEK / month" },
      { value: "Client retention: 2+ months" }
    ]
  },
  {
    id: "samuelchristensson",
    backgroundImage: samuelchristenssonBg,
    tagline: "Rehab Program",
    brandName: "Samuel Christensson",
    flags: [norwayFlag],
    stats: [
      { value: "84 000 SEK / month" },
      { value: "Client retention: 2+ years" }
    ]
  },
  {
    id: "mialundin",
    backgroundImage: mialundinBg,
    tagline: "Sweden's #1 women's hormone health program",
    brandName: "Mia Lundin",
    flags: [swedenFlag],
    stats: [
      { value: "25 000+ SEK / month" },
      { value: "Client retention: 1 months →" }
    ]
  },
  {
    id: "coachmike",
    backgroundImage: coachmikeBg,
    tagline: "Fitness & mindsetcoach online",
    brandName: "Coach Mike",
    flags: [swedenFlag],
    stats: [
      { value: "28 000 SEK / month" },
      { value: "Client retention: 4+ months" }
    ]
  }
];

const AgencyWork = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyContent | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleReadMore = (id: string) => {
    const content = caseStudyContentMap[id];
    if (content) {
      setSelectedCaseStudy(content);
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
            className="font-squares-bold text-[10px] tracking-[0.2em] text-white uppercase"
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
      
      {/* Main Content - 2x2 Grid Layout */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-8 lg:px-16 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* WareScale - top left */}
            <article>
              <h2 className="font-ethnocentric text-2xl text-white mb-4 tracking-wide">
                WareScale
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                WareScale is my DFY growth partner agency providing primarily info-product businesses with marketing and sales systems for scale and growth.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                We work with industry experts across Europe to package their knowledge into information products and sell them, while also partnering with established course owners and mentors by taking full responsibility for their growth infrastructure and marketing, from strategy to execution.
              </p>
              <button 
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 px-6 py-2.5 font-ethnocentric text-xs tracking-wider text-white uppercase bg-transparent border border-white/60 rounded-md hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
              >
                View case studies
              </button>
            </article>
            
            {/* Top right - showcase image */}
            <div className="hidden lg:block lg:pl-12">
              <img 
                src={agencyShowcase} 
                alt="WareScale agency work showcase with devices"
                className="w-full h-auto"
              />
            </div>
            
            {/* Our Offer - bottom left */}
            <article>
              <h2 className="font-ethnocentric text-2xl text-white mb-4 tracking-wide">
                Our Offer:
              </h2>
              <p className="text-white/60 text-sm leading-relaxed italic">
                "Provide us with your product - we handle the rest".
              </p>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                WareScale operates mostly through long-term growth partnerships rather than traditional consulting engagements. We step in as an extension of the business and take full responsibility for building, operating and scaling the entire sales infrastructure and their marketing.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                Clients focus on delivering their product, while we handle everything required to sell it, from hosting and infrastructure to marketing, sales processes and ongoing optimization.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                This typically includes areas such as:
              </p>
              <ul className="text-white/60 text-sm leading-relaxed mt-2 list-disc list-inside space-y-1">
                <li>Funnel strategy and implementation</li>
                <li>Sales pages and conversion flows</li>
                <li>Email marketing systems</li>
                <li>Paid acquisition and ad infrastructure</li>
              </ul>
            </article>
            
            {/* My Role - bottom right */}
            <article className="lg:pl-12">
              <h2 className="font-ethnocentric text-2xl text-white mb-4 tracking-wide">
                My Role
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                As founder, I've lead all client strategy, production and execution at WareScale for the past 3+ years.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                I'm responsible for designing, building and overseeing every growth system we operate for our clients — setting the strategic direction, defining the structure and ensuring execution across all client engagements and internal operations.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mt-4">
                This includes for all clients (but is not limited to):
              </p>
              <ul className="text-white/60 text-sm leading-relaxed mt-2 list-disc list-inside space-y-1">
                <li>Growth strategy and funnel architecture</li>
                <li>1–3 step sales page systems</li>
                <li>Automated email marketing ecosystems (20+ flows)</li>
                <li>Video Sales Letter and ad scripting</li>
                <li>Paid media buying across Meta, TikTok and similar platforms</li>
                <li>Sales team implementation for higher-ticket offers</li>
                <li>Online course and mentorship infrastructure</li>
              </ul>
            </article>
          </div>
          
          {/* Case Studies Section */}
          <section id="case-studies" className="mt-32 text-center scroll-mt-24">
            {/* Stats Badge */}
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
              <span className="text-[12px] font-medium tracking-wide text-white/50">
                Generated <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">+10M SEK</span> and <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">7000+</span> customers for <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">40+</span> clients in Scandinavia.
              </span>
            </div>
            <h2 className="font-ethnocentric text-3xl text-white mb-4 tracking-wide">
              Case Studies from WareScale
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
              A selection of case studies from my work with clients at WareScale over the past year.
            </p>
            
            {/* Case Studies Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {caseStudies.map((study, index) => (
                <CaseStudyCard 
                  key={index} 
                  {...study} 
                  onReadMore={handleReadMore}
                />
              ))}
            </div>
            
            {/* Logo Scroll */}
            <div className="mt-20">
              <LogoScroll />
            </div>
          </section>
        </main>

      {/* Case Study Modal */}
      <CaseStudyModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        content={selectedCaseStudy}
      />
    </div>
  );
};

export default AgencyWork;
