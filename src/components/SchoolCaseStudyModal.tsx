import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SchoolCaseStudyContent } from "@/types/schoolCaseStudy";

interface SchoolCaseStudyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: SchoolCaseStudyContent | null;
}

const SchoolCaseStudyModal = ({ open, onOpenChange, content }: SchoolCaseStudyModalProps) => {
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
          <ScrollArea className="h-full w-full">
            <div className="px-5 py-10 md:px-16 md:py-16">
              {/* Hero Section */}
              <header className="mb-10 md:mb-12 mt-6 md:mt-0">
                {/* Pill */}
                <div className="inline-flex items-center px-3 md:px-4 py-1.5 mb-4 md:mb-6 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                  <span className="text-[10px] md:text-[11px] font-medium tracking-wide text-white/50">
                    {content.pill}
                  </span>
                </div>
                
                {/* Title */}
                <h1 className="font-ethnocentric text-2xl md:text-4xl text-white tracking-wide mb-3 md:mb-4">
                  {content.title}
                </h1>
                
                {/* Subtitle */}
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
                  {content.subtitle}
                </p>
              </header>

              {/* Context / The Assignment */}
              <section className="mb-12">
                <h2 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                  {content.assignmentTitle}
                </h2>
                <div className="space-y-4">
                  {content.assignmentText.map((paragraph, index) => (
                    <p key={index} className="text-white/70 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* The Idea / Solution */}
              {(content.ideaImage || content.ideaSectionHeader || content.ideaHeadline || content.ideaSections.length > 0) && (
                <section className="mb-12">
                  {/* Hero image above The Idea */}
                  {content.ideaImage && (
                    <div className="overflow-hidden rounded-xl mb-8">
                      <img 
                        src={content.ideaImage} 
                        alt="Project visual" 
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {content.ideaSectionHeader && (
                    <h2 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                      {content.ideaSectionHeader}
                    </h2>
                  )}
                  
                  {/* Headline */}
                  {content.ideaHeadline && (
                    <h3 className="font-ethnocentric text-lg md:text-xl text-white tracking-wide mb-8">
                      {content.ideaHeadline}
                    </h3>
                  )}
                  
                  {/* Idea sections */}
                  {content.ideaSections.length > 0 && (
                    <div className="space-y-8">
                      {content.ideaSections.map((section, index) => (
                        <div key={index}>
                          {section.title && (
                            <h4 className="text-white font-medium text-sm mb-3">
                              {section.title}
                            </h4>
                          )}
                          {section.plainText && (
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                              {section.plainText}
                            </p>
                          )}
                          {section.isBulletList ? (
                            <ul className="list-disc list-inside space-y-2 text-white/70 text-sm leading-relaxed">
                              {section.text.map((item, pIndex) => (
                                <li key={pIndex}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <div className="space-y-4">
                              {section.text.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-white/70 text-sm leading-relaxed">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* Group Images Section - rendered independently */}
              {content.groupImages && content.groupImages.length > 0 && (
                <section className="mb-10 md:mb-12">
                  <h2 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-4 md:mb-5">
                    {content.groupImagesHeader || "Group"}
                  </h2>
                  <div className="grid grid-cols-2 gap-2 md:flex md:gap-3">
                    {content.groupImages.map((img, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg md:flex-1"
                      >
                        <img
                          src={img}
                          alt={`Image ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Assets Header - styled like "THE WORK" */}
              {content.assetsHeader && (
                <h2 className="font-ethnocentric text-lg md:text-xl text-white tracking-wide mb-8">
                  {content.assetsHeader}
                </h2>
              )}

              {/* Assets Section */}
              {content.assets && content.assets.length > 0 && (
                <section className="mb-12">
                  <div className="space-y-8">
                    {content.assets.map((asset, index) => (
                      <div key={index}>
                        {asset.title && (
                          <h3 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                            {asset.title}
                          </h3>
                        )}
                        {asset.type === "youtube" && (
                          <div className="overflow-hidden rounded-xl aspect-video">
                            <iframe
                              src={asset.url}
                              title={asset.title || "Video"}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        )}
                        {asset.type === "image" && (
                          <div className="overflow-hidden rounded-xl">
                            <img 
                              src={asset.url} 
                              alt={asset.title} 
                              className="w-full h-auto"
                            />
                          </div>
                        )}
                        {asset.description && (
                          <p className="text-white/60 text-sm mt-4">
                            {asset.description}
                          </p>
                        )}
                      </div>
                    ))}

                    {/* Document Links */}
                    {content.documentLinks && content.documentLinks.length > 0 && (
                      <>
                        <h3 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                          Presentation & documentation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {content.documentLinks.map((doc, index) => (
                            <a
                              key={index}
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)]"
                            >
                              <img
                                src={doc.image}
                                alt={doc.label}
                                className="w-full h-full object-cover blur-[2px] transition-transform duration-500 group-hover:scale-105"
                              />
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                              {/* Text at bottom */}
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h4 className="font-albert-sans text-base text-white leading-tight mb-2">
                                  {doc.label}
                                </h4>
                                <span className="text-sm text-white hover:text-white/90 transition-colors [text-shadow:0_0_10px_rgba(255,255,255,0.4)]">
                                  Click to view
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </section>
              )}

              {/* Results & Reflection */}
              {content.resultsHeader && content.resultsText && content.resultsText.length > 0 && (
                <section className="mb-12">
                  <h2 className="font-ethnocentric text-lg md:text-xl text-white tracking-wide mb-8">
                    {content.resultsHeader}
                  </h2>
                  <div className="space-y-4">
                    {content.resultsText.map((paragraph, index) => (
                      <p key={index} className="text-white/70 text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* LinkedIn Embed */}
                  {content.linkedinEmbed && (
                    <div className="mt-6 md:mt-8 flex flex-col items-center">
                      <h3 className="font-ethnocentric text-xs md:text-base text-white tracking-wide mb-4 md:mb-6 text-center">
                        Their linkedin post, based on my submission
                      </h3>
                      <div className="w-full max-w-[504px] overflow-hidden">
                        <iframe
                          src={content.linkedinEmbed}
                          height="600"
                          width="100%"
                          frameBorder="0"
                          allowFullScreen
                          title="LinkedIn post"
                          className="rounded-xl w-full md:h-[756px]"
                        />
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* Creatives / Visuals */}
              {content.creatives && content.creatives.length > 0 && (
                <section>
                  <h2 className="font-ethnocentric text-xl md:text-2xl tracking-wider text-white uppercase mb-8">
                    THE ADS
                  </h2>
                  
                  <div className="flex flex-col gap-8">
                    {content.creatives.map((creative, index) => (
                      <div key={index} className="flex flex-col gap-3">
                        <div className="overflow-hidden rounded-xl">
                          <img 
                            src={creative.image} 
                            alt={`Creative ${index + 1}`} 
                            className="w-full h-auto"
                          />
                        </div>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed">
                          {creative.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Embedded Website */}
              {content.embedUrl && (
                <section className="mb-12">
                  <h2 className="font-squares-bold text-xs tracking-[0.25em] text-white/40 uppercase mb-5">
                    Live Demo
                  </h2>
                  <div className="overflow-hidden rounded-xl border border-white/10 aspect-[16/10] relative">
                    <iframe
                      src={content.embedUrl}
                      title="Live demo"
                      className="absolute top-0 left-0 origin-top-left"
                      style={{
                        width: '200%',
                        height: '200%',
                        transform: 'scale(0.5)',
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                  <a
                    href={content.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white text-sm mt-4 hover:opacity-80 transition-opacity"
                  >
                    See in browser
                    <ArrowRight size={16} />
                  </a>
                </section>
              )}
            </div>
          </ScrollArea>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default SchoolCaseStudyModal;
