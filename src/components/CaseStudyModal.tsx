import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CaseStudyContent } from "@/types/caseStudy";
import FunnelFlowchart from "@/components/FunnelFlowchart";
interface CaseStudyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: CaseStudyContent | null;
}

const CaseStudyModal = ({ open, onOpenChange, content }: CaseStudyModalProps) => {
  if (!content) return null;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        {/* Overlay with blur */}
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          )}
        />

        {/* Modal Content */}
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
            "w-[90vw] max-w-4xl h-[85vh]",
            "bg-[#0F0F0F] rounded-2xl border border-white/10",
            "shadow-2xl shadow-black/50",
            "duration-200",
            "overflow-hidden",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
          )}
        >
          {/* Close Button */}
          <DialogPrimitive.Close
            className={cn(
              "absolute right-4 top-4 md:right-6 md:top-6 z-10",
              "rounded-full p-2 bg-white/5 border border-white/10",
              "text-white/60 hover:text-white hover:bg-white/10",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-white/20"
            )}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          {/* Scrollable Content */}
          <ScrollArea className="h-full w-full overflow-x-hidden [&>div[data-radix-scroll-area-viewport]]:!overflow-x-hidden">
            <div className="w-full max-w-[100%] overflow-x-hidden">
              <div 
                className="px-4 py-10 md:px-16 md:py-16 w-full overflow-hidden break-words box-border max-w-[calc(90vw-32px)] md:max-w-full mx-auto"
                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
              >
              {/* Header */}
              <header className="mb-8 md:mb-10 mt-6 md:mt-0">
                <h1 className="font-ethnocentric text-2xl md:text-4xl text-white tracking-wide mb-3">
                  {/* Mobile-specific line breaks for certain titles */}
                  <span className="md:hidden">
                    {content.title === "Relationsproffset" ? (
                      <>RELATIONS-<br />PROFFSET</>
                    ) : content.title === "Klickerförlaget" ? (
                      <>KLICKER-<br />FÖRLAGET</>
                    ) : content.title === "Golfnaprapaten" ? (
                      <>GOLF-<br />NAPRAPATEN</>
                    ) : content.title === "NutritionMatters" ? (
                      <>NUTRITION<br />MATTERS</>
                    ) : (
                      content.title
                    )}
                  </span>
                  <span className="hidden md:inline">{content.title}</span>
                </h1>
                <p className="text-white/40 text-sm tracking-wide">{content.meta}</p>
              </header>

              {/* Results */}
              <section className="mb-10 md:mb-14">
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 md:p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between">
                    {/* First result - full width on mobile */}
                    {content.results.length > 0 && (
                      <div className="w-full md:w-auto">
                        <p className="font-ethnocentric text-xl md:text-3xl text-white mb-1">
                          {content.results[0].value}
                        </p>
                        <p className="text-white/50 text-xs md:text-sm">{content.results[0].label}</p>
                      </div>
                    )}
                    
                    {/* Remaining results - side by side on mobile */}
                    {content.results.length > 1 && (
                      <div className="flex gap-4 w-full md:w-auto md:flex-1 md:justify-end md:gap-8">
                        {content.results.slice(1).map((result, index) => (
                          <div key={index} className="flex-1 md:flex-initial">
                            <p className="font-ethnocentric text-xl md:text-3xl text-white mb-1">
                              {result.value}
                            </p>
                            <p className="text-white/50 text-xs md:text-sm">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Context */}
              <section className="mb-12">
                <h2 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                  Context
                </h2>
                <div className="space-y-4">
                  {content.context.map((paragraph, index) => (
                    <p key={index} className="text-white/70 text-sm leading-relaxed break-words">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Our Work (Strategy) */}
              <section className="mb-12">
                <h2 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                  Our Work (Strategy)
                </h2>
                <div className="space-y-4">
                  {content.strategy.map((paragraph, index) => (
                    <p key={index} className="text-white/70 text-sm leading-relaxed break-words">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Funnel */}
              <section className="mb-12">
                <h2 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                  Funnel
                </h2>

                {/* Funnel Flowchart */}
                <div className="w-full overflow-hidden">
                  <div className="overflow-x-auto md:overflow-visible">
                    <div className="transform scale-[0.85] origin-left md:scale-100 w-max md:w-full">
                      <FunnelFlowchart variant={content.funnelVariant} />
                    </div>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6 break-words">
                  {content.funnelDescription}
                </p>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-white/50 text-xs uppercase tracking-wide mb-3">
                      Traffic Sources
                    </h3>
                    <ul className="space-y-2">
                      {content.trafficSources.map((source, index) => (
                        <li
                          key={index}
                          className="text-white/70 text-sm flex items-start gap-2"
                        >
                          <span className="text-white/30 flex-shrink-0">•</span>
                          <span className="flex-1 min-w-0 break-words">{source}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white/50 text-xs uppercase tracking-wide mb-3">
                      Funnel Flow
                    </h3>
                    <ul className="space-y-2">
                      {content.funnelFlow.map((step, index) => (
                        <li
                          key={index}
                          className="text-white/70 text-sm flex items-start gap-2"
                        >
                          <span className="text-white/30 flex-shrink-0">{index + 1}.</span>
                          <span className="flex-1 min-w-0 break-words">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed break-words">
                  {content.funnelFollowUp}
                </p>
              </section>

              {/* Our Work (Execution) */}
              <section className="mb-12">
                <h2 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                  Our Work (Execution)
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-4 break-words">
                  {content.executionIntro}
                </p>
                <ul className="space-y-2 mb-6">
                  {content.executionItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-white/70 text-sm flex items-start gap-2"
                    >
                      <span className="text-white/30 flex-shrink-0">•</span>
                      <span className="flex-1 min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>
                {content.executionOutro && (
                  <p className="text-white/70 text-sm leading-relaxed break-words">
                    {content.executionOutro}
                  </p>
                )}
              </section>

              {/* Project visuals */}
              {content.creatives && (
                <section>
                  
                  {/* Two-image vertical layout: vertical stack, full width */}
                  {content.creatives.layout === "two-image" && (
                    <div className="flex flex-col gap-4">
                      <div className="overflow-hidden rounded-xl">
                        <img 
                          src={content.creatives.topLeft} 
                          alt="Ad creative" 
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="overflow-hidden rounded-xl">
                        <img 
                          src={content.creatives.topRight} 
                          alt="Campaign screenshot" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Two-image horizontal layout: side by side on desktop, stacked on mobile */}
                  {content.creatives.layout === "two-image-horizontal" && (
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1 overflow-hidden rounded-xl">
                        <img 
                          src={content.creatives.topLeft} 
                          alt="Ad creative" 
                          className="w-full h-auto md:h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 overflow-hidden rounded-xl">
                        <img 
                          src={content.creatives.topRight} 
                          alt="Ad creative" 
                          className="w-full h-auto md:h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Five-image collage: 2x2 grid on mobile, 3 on top + 2 on bottom on desktop */}
                  {content.creatives.layout === "five-image-collage" && (
                    <div className="overflow-hidden rounded-xl">
                      {/* Mobile: 2-column grid */}
                      <div className="grid grid-cols-2 gap-1 md:hidden">
                        <div>
                          <img 
                            src={content.creatives.topLeft} 
                            alt="Ad creative" 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div>
                          <img 
                            src={content.creatives.topMiddle} 
                            alt="Ad creative" 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div>
                          <img 
                            src={content.creatives.topRight} 
                            alt="Ad creative" 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div>
                          <img 
                            src={content.creatives.bottomLeft} 
                            alt="Sales page" 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="col-span-2">
                          <img 
                            src={content.creatives.bottomRight} 
                            alt="Sales page" 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      {/* Desktop: Original layout */}
                      <div className="hidden md:block">
                        {/* Top row: three images */}
                        <div className="flex w-full">
                          <div className="flex-[1]">
                            <img 
                              src={content.creatives.topLeft} 
                              alt="Ad creative" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-[0.56]">
                            <img 
                              src={content.creatives.topMiddle} 
                              alt="Ad creative" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-[0.56]">
                            <img 
                              src={content.creatives.topRight} 
                              alt="Ad creative" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        {/* Bottom row: two images */}
                        <div className="flex w-full">
                          <div className="flex-1">
                            <img 
                              src={content.creatives.bottomLeft} 
                              alt="Sales page" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <img 
                              src={content.creatives.bottomRight} 
                              alt="Sales page" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Three-image layout: stacked on mobile, 2 on top + 1 on bottom on desktop */}
                  {content.creatives.layout === "three-image" && (
                    <div className="overflow-hidden rounded-xl">
                      {/* Mobile: stacked vertically */}
                      <div className="flex flex-col gap-2 md:hidden">
                        <img 
                          src={content.creatives.topLeft} 
                          alt="Instagram ad creative" 
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <img 
                          src={content.creatives.topRight} 
                          alt="Ad creative" 
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        {content.creatives.bottom && (
                          <img 
                            src={content.creatives.bottom} 
                            alt="Sales page" 
                            className="w-full h-auto rounded-lg"
                          />
                        )}
                      </div>
                      {/* Desktop: Original layout */}
                      <div className="hidden md:block">
                        {/* Top row: two images side by side filling full width */}
                        <div className="flex w-full">
                          <div className="flex-[6]">
                            <img 
                              src={content.creatives.topLeft} 
                              alt="Instagram ad creative" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-[4]">
                            <img 
                              src={content.creatives.topRight} 
                              alt="Ad creative" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        {/* Bottom: full width image */}
                        {content.creatives.bottom && (
                          <div className="w-full">
                            <img 
                              src={content.creatives.bottom} 
                              alt="Sales page" 
                              className="w-full h-auto"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Default fallback layout for creatives without explicit layout */}
                  {content.creatives.layout === undefined && content.creatives.topLeft && (
                    <div className="overflow-hidden rounded-xl">
                      {/* Mobile: stacked vertically */}
                      <div className="flex flex-col gap-2 md:hidden">
                        <img 
                          src={content.creatives.topLeft} 
                          alt="Creative" 
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        {content.creatives.topRight && (
                          <img 
                            src={content.creatives.topRight} 
                            alt="Creative" 
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        )}
                        {content.creatives.bottom && (
                          <img 
                            src={content.creatives.bottom} 
                            alt="Creative" 
                            className="w-full h-auto rounded-lg"
                          />
                        )}
                      </div>
                      {/* Desktop: Original three-image layout */}
                      <div className="hidden md:block">
                        <div className="flex w-full">
                          <div className="flex-[6]">
                            <img 
                              src={content.creatives.topLeft} 
                              alt="Creative" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {content.creatives.topRight && (
                            <div className="flex-[4]">
                              <img 
                                src={content.creatives.topRight} 
                                alt="Creative" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                        {content.creatives.bottom && (
                          <div className="w-full">
                            <img 
                              src={content.creatives.bottom} 
                              alt="Creative" 
                              className="w-full h-auto"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* Placeholder for case studies without creatives */}
              {content.creativesPlaceholder && !content.creatives && (
                <section>
                  <h2 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                    Creatives / Screenshots
                  </h2>
                  <div className="py-16 border border-dashed border-white/10 rounded-xl flex items-center justify-center">
                    <p className="text-white/30 text-sm italic">
                      Gallery coming soon
                    </p>
                  </div>
                </section>
              )}
              </div>
            </div>
          </ScrollArea>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default CaseStudyModal;
