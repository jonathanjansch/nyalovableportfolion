import logo01 from "@/assets/aotg-logos/logo-01.png";
import logo02 from "@/assets/aotg-logos/logo-02.png";
import logo03 from "@/assets/aotg-logos/logo-03.png";
import logo04 from "@/assets/aotg-logos/logo-04.png";
import logo05 from "@/assets/aotg-logos/logo-05.png";
import logo06 from "@/assets/aotg-logos/logo-06.png";
import logo07 from "@/assets/aotg-logos/logo-07.png";
import logo08 from "@/assets/aotg-logos/logo-08.png";
import logo09 from "@/assets/aotg-logos/logo-09.png";
import logo10 from "@/assets/aotg-logos/logo-10.png";
import logo11 from "@/assets/aotg-logos/logo-11.png";
import logo12 from "@/assets/aotg-logos/logo-12.png";
import logo13 from "@/assets/aotg-logos/logo-13.png";

const logos = [
  logo01, logo02, logo03, logo04, logo05, logo06, logo07,
  logo08, logo09, logo10, logo11, logo12, logo13
];

const AotgLogoScroll = () => {
  return (
    <div className="w-full overflow-hidden py-12">
      <div className="flex animate-scroll-left-fast md:animate-scroll-left">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div 
            key={`first-${index}`} 
            className="flex-shrink-0 px-8"
          >
            <img 
              src={logo} 
              alt={`AOTG client logo ${index + 1}`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div 
            key={`second-${index}`} 
            className="flex-shrink-0 px-8"
          >
            <img 
              src={logo} 
              alt={`AOTG client logo ${index + 1}`}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AotgLogoScroll;
