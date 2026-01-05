interface SchoolCaseStudyCardProps {
  backgroundImage: string;
  logoImage?: string;
  tagline: string;
  projectName: string;
  stats: { value: string }[];
  id?: string;
  onReadMore?: (id: string) => void;
}

const SchoolCaseStudyCard = ({ 
  backgroundImage, 
  logoImage,
  tagline, 
  projectName, 
  stats,
  id,
  onReadMore 
}: SchoolCaseStudyCardProps) => {
  const handleReadMoreClick = () => {
    if (id && onReadMore) {
      onReadMore(id);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Logo Overlay - Bottom Right */}
      {logoImage && (
        <div className="absolute bottom-4 right-4 z-10">
          <img 
            src={logoImage} 
            alt={`${projectName} logo`}
            className="w-16 h-auto opacity-90"
          />
        </div>
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      {/* Pill Badge - Top Left */}
      <div className="absolute top-4 left-4 right-4">
        <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/90">
          {tagline}
        </span>
      </div>
      
      {/* Content - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Project Name */}
        <div className="flex items-center gap-2 mb-3">
          <h3 className="font-albert-sans text-lg text-white leading-none">
            {projectName}
          </h3>
        </div>
        
        {/* Stats */}
        <div className="space-y-1">
          {stats.map((stat, index) => (
            <p key={index} className="text-sm text-white/80">
              {stat.value}
            </p>
          ))}
        </div>
        
        {/* Read More Button */}
        <button 
          onClick={handleReadMoreClick}
          className="mt-3 text-sm text-white hover:text-white/90 transition-colors [text-shadow:0_0_10px_rgba(255,255,255,0.4)] cursor-pointer"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default SchoolCaseStudyCard;
