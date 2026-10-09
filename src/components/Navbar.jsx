import React, { useState, useEffect } from "react";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import { BUSINESS_INFO } from "../config/constants.js";
import alamLogo from "../assets/images/Alam-Work-Logo.png";

export const Navbar = ({ activeSection, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "tyres", label: "Tyres" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (sectionId) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        backgroundColor: "rgba(4, 28, 58, 0.80)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
        zIndex: 1000,
      }}
      className={`sticky top-0 transition-all duration-200 text-white ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Custom Image Logo (Alam Works Logo) */}
          <button
            onClick={() => handleLinkClick("hero")}
            className="flex items-center group text-left cursor-pointer focus:outline-none shrink-0 py-1"
            aria-label="Alam Works Home"
          >
            <div className="relative flex items-center">
              {/* Soft light glow behind logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[70px] rounded-full bg-white/70 blur-[20px]" />
              <img
                src={alamLogo}
                alt="Alam Works Logo"
                className="relative w-44 sm:w-52 md:w-56 h-auto object-contain"
              />
            </div>
          </button>

          {/* Zone 2: Navigation Links (Smooth scroll into section with clean underline effects) */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`group relative py-2 px-2 text-sm transition-colors duration-200 cursor-pointer font-medium tracking-wide ${
                    isActive
                      ? "text-[#F58220] font-bold"
                      : "text-white hover:text-[#F58220]"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Clean 2px Orange Underline: Persistent on active, animates left-to-right on hover */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F58220] rounded-full transition-transform duration-250 ease-out origin-left pointer-events-none ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Orange Get Inquiry CTA & Mobile Hamburger) */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Desktop CTA: Primary Orange Button leading to Contact Section */}
            <button
              onClick={() => handleLinkClick("contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-[#F58220] hover:bg-[#E86D00] active:scale-[0.98] rounded-lg shadow-sm transition-all duration-150 cursor-pointer whitespace-nowrap"
            >
              <span>Get Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open main menu"
              className="md:hidden p-2 text-white hover:text-[#F58220] rounded-lg border border-[#0A2E5C] bg-[#0B1F3A]/80"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Glassmorphism */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "rgba(4, 28, 58, 0.95)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          className="md:hidden border-t border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base transition-all duration-200 text-left border-l-2 ${
                    isActive
                      ? "border-[#F58220] bg-[#0A2E5C]/60 text-[#F58220] font-bold pl-4"
                      : "border-transparent text-white hover:text-[#F58220] hover:bg-[#0A2E5C]/30 hover:border-[#F58220]/60 font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => handleLinkClick("contact")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg shadow-sm"
            >
              <span>Get Inquiry</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#0A2E5C] hover:bg-[#0B1F3A] rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-[#F58220]" />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection("contact");
                }}
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#0B1F3A] hover:bg-[#0A2E5C] rounded-lg border border-[#0A2E5C]"
              >
                <span>Find Us</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
