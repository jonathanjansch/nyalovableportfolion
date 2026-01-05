interface TimelineEntryProps {
  title: string;
  company: string;
  type?: string;
  startDate: string;
  endDate: string;
  location?: string;
  locationType?: string;
  description: string;
  focusAreas: string[];
  logo?: string;
  side: 'left' | 'right';
}

const TimelineEntry = ({
  title,
  company,
  type,
  startDate,
  endDate,
  location,
  locationType,
  description,
  focusAreas,
  logo,
  side,
}: TimelineEntryProps) => {
  return (
    <div className={`relative flex ${side === 'left' ? 'justify-end pr-1 md:pr-12' : 'justify-start pl-1 md:pl-12'}`}>
      
      {/* Content card */}
      <div className="w-full bg-white/5 border border-white/10 rounded-lg p-2 pb-2.5 md:p-4 hover:bg-white/[0.07] transition-colors">
        {/* Logo */}
        <div className="w-10 h-10 rounded-full border border-white/20 mb-4 overflow-hidden">
          {logo ? (
            <img src={logo} alt={`${company} logo`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-white/10 flex items-center justify-center">
              <span className="text-white/40 text-xs font-medium">
                {company.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        {/* Title */}
        <h4 className="font-albert-sans font-medium text-white text-[10px] md:text-sm mb-1">
          {title}
        </h4>
        
        {/* Company & type */}
        <p className="text-white/60 text-[9px] md:text-xs mb-1">
          {company}{type && ` · ${type}`}
        </p>
        
        {/* Date & location */}
        <p className="text-white/40 text-[9px] md:text-xs mb-3">
          {startDate} – {endDate}
          {location && ` · ${location}`}
          {locationType && ` · ${locationType}`}
        </p>
        
        {/* Description */}
        <p className="text-white/50 text-[9px] md:text-xs leading-relaxed mb-0 md:mb-4">
          {description}
        </p>
        
        {/* Focus areas */}
        <div className="hidden md:flex flex-wrap gap-1.5">
          {focusAreas.map((area, index) => (
            <span 
              key={index}
              className="text-[10px] text-white/50 border border-white/20 rounded-full px-2 py-0.5"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineEntry;
