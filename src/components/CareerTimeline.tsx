import TimelineEntry from "./TimelineEntry";

// Logo imports
import courseacademyLogo from "@/assets/timeline-logos/courseacademy.png";
import warescaleLogo from "@/assets/timeline-logos/warescale.png";
import aotgLogo from "@/assets/timeline-logos/aotg.png";
import euroglobeLogo from "@/assets/timeline-logos/euroglobe.png";
import sleezycleanLogo from "@/assets/timeline-logos/sleezyclean.png";
import berghsLogo from "@/assets/timeline-logos/berghs.png";
import ehrensvardskaLogo from "@/assets/timeline-logos/ehrensvardska.png";

const workExperience = [
  {
    id: "courseacademy",
    title: "Founder & Head Instructor",
    company: "CourseAcademy",
    type: "Full-time",
    startDate: "Nov 2024",
    endDate: "Present",
    location: "Stockholm, Sweden",
    locationType: "Remote",
    description: "Founder & Head Instructor of CourseAcademy, an education platform helping experts turn their knowledge into scalable online education businesses. I lead growth and student acquisition and teach the core systems, curriculum and frameworks taught inside the program.",
    focusAreas: ["Performance Marketing", "High-Ticket Client Acquisition", "Sales"],
    logo: courseacademyLogo,
  },
  {
    id: "warescale",
    title: "Founder & CEO",
    company: "WareScale.io",
    type: "Full-time",
    startDate: "Dec 2022",
    endDate: "Present",
    location: "Stockholm, Sweden",
    locationType: undefined,
    description: "Founder & CEO of WareScale, a growth partner agency for info-product businesses. I oversee client and agency growth strategy, building complete acquisition ecosystems spanning paid advertising, funnels, automation, email, CRM and sales infrastructure.",
    focusAreas: ["Performance Marketing", "High-Ticket Client Acquisition", "B2B Sales"],
    logo: warescaleLogo,
  },
  {
    id: "aotg",
    title: "Co-Founder & Head of Growth",
    company: "AOTG Media",
    type: "Self-employed",
    startDate: "Jul 2022",
    endDate: "Dec 2022",
    location: undefined,
    locationType: undefined,
    description: "Co-founded AOTG Media, a performance marketing agency helping local businesses acquire customers through lead-generation systems and paid advertising. I led all growth and acquisition operations for clients.",
    focusAreas: ["Performance Marketing", "Lead-Gen", "Paid Advertising"],
    logo: aotgLogo,
  },
  {
    id: "euroglobe",
    title: "Coworker",
    company: "Euroglobe Shipping AB",
    type: "Part-time",
    startDate: "Jun 2022",
    endDate: "Oct 2022",
    location: "Stockholm, Sweden",
    locationType: "On-site",
    description: "",
    focusAreas: [],
    logo: euroglobeLogo,
  },
  {
    id: "sleezyclean",
    title: "Owner",
    company: "SleezyClean (E-commerce)",
    type: "Self-employed",
    startDate: "Nov 2021",
    endDate: "Oct 2022",
    location: undefined,
    locationType: "Remote",
    description: "Built and operated a D2C e-commerce brand within cleaning supplies, covering marketing, sales and operations. SleezyClean ceased operations in 2022.",
    focusAreas: ["E-commerce", "CRO", "Performance Marketing"],
    logo: sleezycleanLogo,
  },
];

const education = [
  {
    id: "berghs",
    title: "AI | Content Engineer Program",
    company: "Berghs School of Communication",
    type: undefined,
    startDate: "Aug 2025",
    endDate: "Jun 2026",
    location: undefined,
    locationType: undefined,
    description: "Studying a one-year full-time program focused on AI-driven content creation, workflows, coding and communication, combined with traditional communication and strategy education.",
    focusAreas: ["AI-Driven Content", "Creative Workflows", "Communication Strategy"],
    logo: berghsLogo,
  },
  {
    id: "ehrensvardska",
    title: "Natural Science Program",
    company: "Ehrensvärdska Gymnasiet",
    type: undefined,
    startDate: "2021",
    endDate: "2022",
    location: undefined,
    locationType: undefined,
    description: "Upper secondary education with focus on natural sciences.",
    focusAreas: [],
    logo: ehrensvardskaLogo,
  },
];

// Define paired rows - education on left, work on right (aligned by time period)
// Each row includes a year label to display on the timeline
const timelineRows = [
  { education: education.find(e => e.id === "berghs"), work: workExperience.find(e => e.id === "courseacademy"), year: "2025" },
  { education: null, work: workExperience.find(e => e.id === "warescale"), year: "2023" },
  { education: null, work: workExperience.find(e => e.id === "aotg"), year: "2022" },
  { education: null, work: workExperience.find(e => e.id === "euroglobe"), year: null },
  { education: education.find(e => e.id === "ehrensvardska"), work: workExperience.find(e => e.id === "sleezyclean"), year: "2021" },
];

const CareerTimeline = () => {
  return (
    <section className="w-full">
      {/* Section headers */}
      <div className="grid grid-cols-2 gap-2 md:gap-4 mb-12 px-2 md:px-0">
        <div className="text-right pr-1 md:pr-12">
          <h3 className="font-squares-bold text-[10px] tracking-[0.2em] text-white/60 uppercase">
            Education
          </h3>
        </div>
        <div className="text-left pl-1 md:pl-12">
          <h3 className="font-squares-bold text-[10px] tracking-[0.2em] text-white/60 uppercase">
            Experience
          </h3>
        </div>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Central timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

        {/* Timeline entries */}
        <div className="space-y-2">
          {timelineRows.map((row, index) => (
            <div key={index} className="relative grid grid-cols-2 gap-2 md:gap-4">
              {/* Year label on the timeline */}
              {row.year && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-10">
                  <span className="text-[10px] font-squares-bold tracking-wider text-white/50">
                    {row.year}
                  </span>
                </div>
              )}
              {/* Single centered dot on the timeline */}
              <div className="absolute left-1/2 top-3 w-3 h-3 -translate-x-1/2 rounded-full bg-white/40 border-2 border-white/20 z-10" />
              {row.education ? (
                <TimelineEntry
                  title={row.education.title}
                  company={row.education.company}
                  type={row.education.type}
                  startDate={row.education.startDate}
                  endDate={row.education.endDate}
                  location={row.education.location}
                  locationType={row.education.locationType}
                  description={row.education.description}
                  focusAreas={row.education.focusAreas}
                  logo={row.education.logo}
                  side="left"
                />
              ) : (
                <div /> 
              )}
              {/* Work - Right side */}
              {row.work ? (
                <TimelineEntry
                  title={row.work.title}
                  company={row.work.company}
                  type={row.work.type}
                  startDate={row.work.startDate}
                  endDate={row.work.endDate}
                  location={row.work.location}
                  locationType={row.work.locationType}
                  description={row.work.description}
                  focusAreas={row.work.focusAreas}
                  logo={row.work.logo}
                  side="right"
                />
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
