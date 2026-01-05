import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Start", path: "/" },
  { label: "Agency Work", path: "/agency-work" },
  { label: "School Work", path: "/school-work" },
  { label: "Other Work", path: "/other-work" },
  { label: "About Me", path: "/about-me" },
];

const MobileNavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:text-white/80 transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu className="w-5 h-5" />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 top-full mt-2 z-50 min-w-[160px] rounded-lg border border-white/10 bg-[#101010] shadow-lg shadow-black/50">
            <nav className="py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 font-squares-bold text-[10px] tracking-[0.2em] uppercase transition-colors ${
                    location.pathname === item.path
                      ? 'text-white bg-white/5'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNavDropdown;
