import { Megaphone, Mail, ClipboardList, PlayCircle, Calendar, CheckCircle, ShoppingCart, MessageSquare, Video, Users } from "lucide-react";

interface FunnelStepProps {
  icons: React.ReactNode;
  label: string;
  sublabel?: string;
}

const FunnelStep = ({ icons, label, sublabel }: FunnelStepProps) => (
  <div className="flex flex-col items-center gap-2 min-w-[45px] md:min-w-[60px]">
    <div className="flex flex-col items-center gap-1.5">
      {icons}
    </div>
    <div className="text-center">
      <span className="text-[10px] md:text-xs tracking-wide text-white/50 block max-w-[60px] md:max-w-[80px] leading-tight break-words">
        {label}
      </span>
      {sublabel && (
        <span className="text-[9px] md:text-[10px] tracking-wide text-white/30 block max-w-[60px] md:max-w-[80px] leading-tight mt-0.5 break-words">
          {sublabel}
        </span>
      )}
    </div>
  </div>
);

const Arrow = () => (
  <div className="flex-1 flex items-center justify-center px-1 md:px-2 min-w-[16px] md:min-w-[24px] max-w-[40px] md:max-w-[60px]">
    <div className="w-full flex items-center">
      <div className="flex-1 h-px bg-white/40" />
      <svg
        className="w-2 h-2 text-white/50 -ml-px"
        viewBox="0 0 6 6"
        fill="none"
      >
        <path d="M0 0L3 3L0 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

interface FunnelFlowchartProps {
  variant?: "sales-call" | "checkout" | "webinar" | "booking" | "qualification" | "webshop";
}

const FunnelFlowchart = ({ variant = "sales-call" }: FunnelFlowchartProps) => {
  // Qualification variant: Paid ads → Sales page → Qualification form → Sales/onboarding call → Client
  if (variant === "qualification") {
    return (
      <div className="py-6 animate-fade-in">
        <div className="flex items-start justify-between gap-1 md:gap-2 mb-4 overflow-x-auto pb-2">
          {/* Step 1: Paid Ads */}
          <FunnelStep
            icons={<Megaphone className="w-5 h-5 text-white/65" />}
            label="Paid Ads"
            sublabel="Meta"
          />

          <Arrow />

          {/* Step 2: Sales Page */}
          <FunnelStep
            icons={<ClipboardList className="w-5 h-5 text-white/65" />}
            label="1-step Sales Page"
          />

          <Arrow />

          {/* Step 3: Qualification Form */}
          <FunnelStep
            icons={<ClipboardList className="w-5 h-5 text-white/65" />}
            label="Qualification Form"
          />

          <Arrow />

          {/* Step 4: Sales/Onboarding Call */}
          <FunnelStep
            icons={<Calendar className="w-5 h-5 text-white/65" />}
            label="Sales Call"
            sublabel="Onboarding"
          />

          <Arrow />

          {/* Step 5: Client */}
          <FunnelStep
            icons={<Users className="w-5 h-5 text-white/65" />}
            label="Client"
          />
        </div>

        {/* Email & SMS Nurture System */}
        <div className="relative px-4">
          <div className="relative h-6 flex items-center">
            <div className="min-w-[45px] md:min-w-[60px] flex-shrink-0" />
            <div className="flex-1 min-w-[16px] md:min-w-[24px] max-w-[40px] md:max-w-[60px] flex-shrink-0" />
            <div className="flex-1 relative flex items-center">
              <svg
                className="absolute left-0 -top-1 w-2 h-2 text-white/30"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path d="M1 5L4 2L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-white/20" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F0F0F] px-2 flex items-center gap-1">
                <Mail className="w-4 h-4 text-white/40" />
                <MessageSquare className="w-3.5 h-3.5 text-white/40" />
              </div>
              <svg
                className="absolute right-0 -top-1 w-2 h-2 text-white/30"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path d="M1 5L4 2L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="text-center text-[9px] md:text-[10px] tracking-wide text-white/30 mt-1 break-words px-2">
            Automated Email & SMS Follow-up
          </p>
        </div>
      </div>
    );
  }

  // Booking variant: Meta ads → Opt-in → Booking portal → Client with email/SMS nurturing
  if (variant === "booking") {
    return (
      <div className="py-6 animate-fade-in">
        {/* Main Funnel Flow - Booking */}
        <div className="flex items-start justify-between gap-1 md:gap-2 mb-4 overflow-x-auto pb-2">
          {/* Step 1: Meta Ads */}
          <FunnelStep
            icons={<Megaphone className="w-5 h-5 text-white/65" />}
            label="Meta Ads"
          />

          <Arrow />

          {/* Step 2: Opt-in Page */}
          <FunnelStep
            icons={<ClipboardList className="w-5 h-5 text-white/65" />}
            label="Opt-in Page"
          />

          <Arrow />

          {/* Step 3: Booking Portal */}
          <FunnelStep
            icons={<Calendar className="w-5 h-5 text-white/65" />}
            label="Booking Portal"
          />

          <Arrow />

          {/* Step 4: Client */}
          <FunnelStep
            icons={<Users className="w-5 h-5 text-white/65" />}
            label="Client"
          />
        </div>

        {/* Email & SMS Nurture System */}
        <div className="relative px-4">
          <div className="relative h-6 flex items-center">
            {/* Left spacer */}
            <div className="min-w-[45px] md:min-w-[60px] flex-shrink-0" />
            
            {/* Arrow spacer */}
            <div className="flex-1 min-w-[16px] md:min-w-[24px] max-w-[40px] md:max-w-[60px] flex-shrink-0" />
            
            {/* The nurture line spans from Opt-in to Client */}
            <div className="flex-1 relative flex items-center">
              {/* Left arrow pointing up */}
              <svg
                className="absolute left-0 -top-1 w-2 h-2 text-white/30"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path d="M1 5L4 2L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              
              {/* Dashed line */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-white/20" />
              
              {/* Mail + SMS icons in the center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F0F0F] px-2 flex items-center gap-1">
                <Mail className="w-4 h-4 text-white/40" />
                <MessageSquare className="w-3.5 h-3.5 text-white/40" />
              </div>
              
              {/* Right arrow pointing up */}
              <svg
                className="absolute right-0 -top-1 w-2 h-2 text-white/30"
                viewBox="0 0 8 8"
                fill="none"
              >
                <path d="M1 5L4 2L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Label */}
          <p className="text-center text-[9px] md:text-[10px] tracking-wide text-white/30 mt-1 break-words px-2">
            Automated Email & SMS Nurture
          </p>
        </div>
      </div>
    );
  }

  // Webshop variant: Paid ads → Webshop/Sales Page → Customer (simple direct flow)
  if (variant === "webshop") {
    return (
      <div className="py-6 animate-fade-in">
        <div className="flex items-start justify-center gap-1 md:gap-2 mb-4 overflow-x-auto pb-2">
          {/* Step 1: Paid Ads */}
          <FunnelStep
            icons={<Megaphone className="w-5 h-5 text-white/65" />}
            label="Paid Ads"
            sublabel="Meta"
          />

          <Arrow />

          {/* Step 2: Webshop / Sales Page */}
          <FunnelStep
            icons={<ShoppingCart className="w-5 h-5 text-white/65" />}
            label="Webshop"
            sublabel="One-page Sales"
          />

          <Arrow />

          {/* Step 3: Customer */}
          <FunnelStep
            icons={<CheckCircle className="w-5 h-5 text-white/65" />}
            label="Customer"
          />
        </div>
      </div>
    );
  }

  // Webinar variant has a different flow
  if (variant === "webinar") {
    return (
      <div className="py-6 animate-fade-in">
        {/* Main Funnel Flow - Webinar */}
        <div className="flex items-start justify-between gap-1 md:gap-2 mb-4 overflow-x-auto pb-2">
          {/* Step 1: Paid Ads */}
          <FunnelStep
            icons={<Megaphone className="w-5 h-5 text-white/65" />}
            label="Paid Ads"
            sublabel="Meta"
          />

          <Arrow />

          {/* Step 2: Opt-in + Short VSL */}
          <FunnelStep
            icons={
              <>
                <ClipboardList className="w-5 h-5 text-white/65" />
                <PlayCircle className="w-4 h-4 text-white/55" />
              </>
            }
            label="Opt-in"
            sublabel="+ Short VSL"
          />

          <Arrow />

          {/* Step 3: SMS & Email Nurture */}
          <FunnelStep
            icons={
              <>
                <MessageSquare className="w-5 h-5 text-white/65" />
                <Mail className="w-4 h-4 text-white/55" />
              </>
            }
            label="Nurture"
            sublabel="SMS + Email"
          />

          <Arrow />

          {/* Step 4: Webinar */}
          <FunnelStep
            icons={<Video className="w-5 h-5 text-white/65" />}
            label="Webinar"
            sublabel="Live Event"
          />

          <Arrow />

          {/* Step 5: Post-Webinar Sales */}
          <FunnelStep
            icons={
              <>
                <MessageSquare className="w-5 h-5 text-white/65" />
                <Mail className="w-4 h-4 text-white/55" />
              </>
            }
            label="Post-Webinar"
            sublabel="SMS + Email"
          />

          <Arrow />

          {/* Step 6: Customer */}
          <FunnelStep
            icons={<CheckCircle className="w-5 h-5 text-white/65" />}
            label="Customer"
          />
        </div>

      </div>
    );
  }

  return (
    <div className="py-6 animate-fade-in">
      {/* Main Funnel Flow */}
      <div className="flex items-start justify-between gap-1 md:gap-2 mb-4 overflow-x-auto pb-2">
        {/* Step 1: Traffic Sources */}
        <FunnelStep
          icons={
            <>
              <Megaphone className="w-5 h-5 text-white/65" />
              {variant === "sales-call" && <Mail className="w-4 h-4 text-white/55" />}
            </>
          }
          label="Traffic"
          sublabel={variant === "checkout" ? "Meta Ads" : "Meta Ads + Email"}
        />

        <Arrow />

        {/* Step 2: Opt-in Page */}
        <FunnelStep
          icons={<ClipboardList className="w-5 h-5 text-white/65" />}
          label="Opt-in Page"
          sublabel="VSL Access"
        />

        <Arrow />

        {/* Step 3: Video Sales Letter */}
        <FunnelStep
          icons={<PlayCircle className="w-5 h-5 text-white/65" />}
          label="Video Sales Letter"
        />

        <Arrow />

        {/* Step 4: Sales Call or Checkout */}
        <FunnelStep
          icons={variant === "checkout" 
            ? <ShoppingCart className="w-5 h-5 text-white/65" />
            : <Calendar className="w-5 h-5 text-white/65" />
          }
          label={variant === "checkout" ? "Checkout" : "Sales Call"}
        />

        <Arrow />

        {/* Step 5: Customer */}
        <FunnelStep
          icons={<CheckCircle className="w-5 h-5 text-white/65" />}
          label="Customer"
        />
      </div>

      {/* Email Nurture System - Secondary Flow */}
      <div className="relative px-4">
        {/* Connection line from Opt-in to Customer */}
        <div className="relative h-6 flex items-center">
          {/* Left spacer (matches Traffic step width) */}
          <div className="min-w-[45px] md:min-w-[60px] flex-shrink-0" />
          
          {/* Arrow spacer */}
          <div className="flex-1 min-w-[16px] md:min-w-[24px] max-w-[40px] md:max-w-[60px] flex-shrink-0" />
          
          {/* The nurture line spans from Opt-in to Customer */}
          <div className="flex-1 relative flex items-center">
            {/* Left arrow pointing up */}
            <svg
              className="absolute left-0 -top-1 w-2 h-2 text-white/30"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path d="M1 5L4 2L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            
            {/* Dashed line */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-white/20" />
            
            {/* Mail icon in the center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F0F0F] px-2">
              <Mail className="w-4 h-4 text-white/40" />
            </div>
            
            {/* Right arrow pointing up */}
            <svg
              className="absolute right-0 -top-1 w-2 h-2 text-white/30"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path d="M1 5L4 2L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Label */}
        <p className="text-center text-[9px] md:text-[10px] tracking-wide text-white/30 mt-1 break-words px-2">
          Automated Email Nurture between steps (30 days)
        </p>
      </div>
    </div>
  );
};

export default FunnelFlowchart;
