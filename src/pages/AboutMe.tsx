import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.png";
import CareerTimeline from "@/components/CareerTimeline";
import ReviewCard from "@/components/ReviewCard";
import MobileNavDropdown from "@/components/MobileNavDropdown";
import samuelAvatar from "@/assets/reviews/samuel.png";
import mikaelAvatar from "@/assets/reviews/mikael.png";
import metaPartner from "@/assets/meta-partner.png";

const reviews = [
  // Row 1 - shorter reviews
  {
    name: "Samuel Christensson",
    country: "SE",
    reviewCount: "1 review",
    date: "",
    title: "I had great help generating leads…",
    content: "I had great help generating leads with social media ads. Great value, perfect flexibility, will respond fast on requests and follow up.",
    avatarUrl: samuelAvatar,
  },
  {
    name: "Magnus E.",
    country: "SE",
    reviewCount: "1 review",
    date: "",
    title: "Very good!",
    content: "Jonathan has great collaboration skills and has definitely been worth the money.",
  },
  {
    name: "Kenneth Toftdahl",
    country: "NO",
    reviewCount: "1 review",
    date: "",
    title: "Good service.",
    content: "Good service. delivers what's promised.",
  },
  // Row 2 - longer reviews
  {
    name: "Emelie W.",
    country: "SE",
    reviewCount: "1 review",
    date: "",
    title: "Warescale has been a game-changer for us.",
    content: "Warescale has been a game-changer for our education business. There expertise in lead generation and conversion delivered high-quality customers and boosted our revenue. Professional, transparent, and results-driven highly recommend!",
  },
  {
    name: "Christine Wallgren",
    country: "SE",
    reviewCount: "1 review",
    date: "",
    title: "Great support and fast results",
    content: "Warescale has helped me boost my small business in such a great way! I almost trippled my clientele in a few days! Jonathan also gave me personal and technical support when I felt insecure about online communication and social media. I highly recommend his services! /Christine",
  },
  {
    name: "Mikael J.",
    country: "SE",
    reviewCount: "1 review",
    date: "",
    title: "Tried FB ads...",
    content: "WareScale has really been a game changer for me. I'm very happy with both the material they created and the results they delivered — we're now close to 200 customers from the ads. Absolutely crazy! All credit to Jonathan and the team. I can't recommend them enough.",
    avatarUrl: mikaelAvatar,
  },
];

const AboutMe = () => {
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
            className="font-squares-bold text-[10px] tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
          >
            Other Work
          </Link>
          <Link 
            to="/about-me" 
            className="font-squares-bold text-[10px] tracking-[0.2em] text-white uppercase"
          >
            About Me
          </Link>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-8 lg:px-16 pt-20 pb-12">
        <div className="text-center max-w-2xl mx-auto">
          <article>
            <img 
              src={profilePhoto} 
              alt="Jonathan Jansch" 
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <h2 className="font-ethnocentric text-4xl md:text-5xl text-white mb-4 tracking-wide">
              ABOUT ME
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              An overview of me, my background and experience.
            </p>
          </article>
        </div>

        {/* Career Timeline Section */}
        <div className="mt-16 -mx-6 md:mx-0">
          <h2 className="font-ethnocentric text-2xl md:text-3xl text-white mb-8 tracking-wide text-center px-6 md:px-0">
            CAREER TIMELINE
          </h2>
          <CareerTimeline />
        </div>

        {/* Summary Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="font-ethnocentric text-2xl md:text-3xl text-white mb-8 tracking-wide text-center">
            SUMMARY
          </h2>
          <div className="text-white/70 text-sm leading-relaxed space-y-4">
            <p>
              Over the past four years, I've gained in-depth experience within performance marketing, sales and growth, building and operating end-to-end acquisition systems for both my own agencies and client businesses.
            </p>
            <p>
              Through this work, I've operated across both B2B and B2C, designing and executing complete acquisition systems with a foundation in paid advertising on social platforms.
            </p>
            <p>
              Starting early with my own ventures forced a steep learning curve. I've learned primarily by doing, launching, testing, failing, iterating and scaling - while simultaneously investing heavily in my own education. Beyond my formal studies at Berghs School of Communication (AI | Content Engineer), I've invested over 100,000 SEK in paid programs, courses and mentorships within performance marketing, media buying, e-commerce, info-product marketing, sales funnels, email systems and automation, including advanced Meta Ads training under industry leaders such as Professor Charley T.
            </p>
            <p>
              My strength lies in real-world execution. I don't just understand how systems work conceptually - I've built them, operated them and optimized them with live clients with real customers, budgets and measurable outcomes. Running an agency meant owning everything end to end: sales, delivery, results and retention. Every decision showed up directly in performance, forcing constant accountability and improvement.
            </p>
            <p>
              Outside of work, I'm highly disciplined and goal-driven. I've competed in ice hockey at a high level, including Sweden's highest junior league, and relocated to pursue the sport. That background shaped how I approach work today: long-term focus, consistency and resilience. Training and structure remain a central part of my life.
            </p>
          </div>
        </div>

        {/* Reviews & Testimonials Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="font-ethnocentric text-2xl md:text-3xl text-white mb-8 tracking-wide text-center">
            REVIEWS & TESTIMONIALS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>

        {/* Meta Business Partner Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="text-white/60 text-sm">
              Certified Meta Business Partner
            </p>
            <img 
              src={metaPartner} 
              alt="Meta Business Partner" 
              className="h-8 w-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
