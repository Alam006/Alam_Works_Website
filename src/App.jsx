import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from './config/constants.js';

// Sections
import { Hero } from './components/Hero.jsx';
import { QuickActions } from './components/QuickActions.jsx';
import { WhyChooseUs } from './components/WhyChooseUs.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { TyresPage } from './pages/TyresPage.jsx';
import { LocationAndHoursSection } from './components/LocationAndHoursSection.jsx';
import { GalleryPage } from './pages/GalleryPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [initialContactService, setInitialContactService] = useState('General Tyre Enquiry');
  const [initialContactMessage, setInitialContactMessage] = useState('');
  const [initialVehicleType, setInitialVehicleType] = useState('Two Wheeler');
  const [initialSelectedTyre, setInitialSelectedTyre] = useState('');

  // Handle smooth scroll navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      window.history.replaceState(null, '', `#${sectionId}`);
    } else if (sectionId === 'hero' || sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      window.history.replaceState(null, '', '#hero');
    }
  };

  // ScrollSpy to automatically update active navbar link as user scrolls
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'tyres', 'gallery', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial hash on load
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (sections.includes(hash)) {
      setTimeout(() => scrollToSection(hash), 150);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Centralized enquiry handlers directing to Contact section with context
  const handleSelectTyreEnquiry = (tyre) => {
    if (tyre) {
      setInitialContactService('New Brand Tyre Purchase');
      setInitialVehicleType(tyre.vehicleType === 'Four Wheeler' ? 'Four Wheeler' : 'Two Wheeler');
      setInitialSelectedTyre(`${tyre.brand} — ${tyre.name} [${tyre.size} · ${tyre.tyreType}]`);
      setInitialContactMessage(`Enquiry regarding: ${tyre.brand} ${tyre.name} (${tyre.size}) - ${tyre.tyreType}. Please provide pricing and availability.`);
    } else {
      setInitialContactService('New Brand Tyre Purchase');
      setInitialSelectedTyre('');
      setInitialContactMessage('Enquiry for custom tyre size recommendation and pricing.');
    }
    scrollToSection('contact');
  };

  const handleSelectServiceEnquiry = (serviceTitle) => {
    setInitialContactService(serviceTitle);
    setInitialSelectedTyre('');
    setInitialContactMessage(`I am interested in ${serviceTitle}. Please share service details and estimated time.`);
    scrollToSection('contact');
  };

  const handleSelectBulkQuote = () => {
    setInitialContactService('Bulk Tyre Supply');
    setInitialVehicleType('Other');
    setInitialSelectedTyre('');
    setInitialContactMessage('Looking for a bulk tyre quote for fleet / commercial supply. Please contact us with wholesale rates.');
    scrollToSection('contact');
  };

  const handleGeneralPriceQuote = () => {
    setInitialContactService('General Tyre Enquiry');
    setInitialSelectedTyre('');
    setInitialContactMessage('Requesting best price quote and consultation for tyres / repair service.');
    scrollToSection('contact');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[#F5F7FA] dark:bg-[#041C3A] text-[#0B1F3A] dark:text-[#FFFFFF] transition-colors duration-200 relative scroll-smooth">
        
        {/* Sticky Header with Navy Background & Active Section Tracking */}
        <Navbar
          activeSection={activeSection}
          onNavigateSection={scrollToSection}
        />

        {/* Single-Page Continuous Flow Container */}
        <main className="flex-1">
          
          {/* Section 1: Hero & Quick Actions */}
          <div id="hero" className="scroll-mt-20">
            <Hero
              onFindTyre={() => scrollToSection('tyres')}
              onBookRepair={() => scrollToSection('services')}
            />
            <QuickActions
              onFindTyre={() => scrollToSection('tyres')}
              onGetBestPrice={handleGeneralPriceQuote}
              onTyreRepair={() => scrollToSection('services')}
            />
          </div>

          {/* Section 2: Why Choose Us (Value Proposition) */}
          <div id="why-choose-us" className="scroll-mt-20">
            <WhyChooseUs />
          </div>

          {/* Section 3: About Alam Works */}
          <div id="about" className="scroll-mt-20 bg-white dark:bg-[#0B1F3A] border-b border-[#D5DBE5] dark:border-[#0A2E5C]">
            <AboutPage
              onNavigate={(target) => scrollToSection(target)}
            />
          </div>

          {/* Section 4: Workshop Services */}
          <div id="services" className="scroll-mt-20 bg-[#041C3A] border-b border-[#0A2E5C]">
            <ServicesPage
              onNavigate={(target) => scrollToSection(target)}
              onSelectServiceEnquiry={handleSelectServiceEnquiry}
            />
          </div>

          {/* Section 5: Tyre Catalogue & Finder */}
          <div id="tyres" className="scroll-mt-20 bg-white dark:bg-[#0B1F3A] border-b border-[#D5DBE5] dark:border-[#0A2E5C]">
            <TyresPage
              onSelectTyreEnquiry={handleSelectTyreEnquiry}
            />
          </div>

          {/* Location (Google Map) & Business Working Hours - Side-by-Side (Between Tyres and Gallery) */}
          <div id="location-hours" className="scroll-mt-20 border-b border-[#0A2E5C]">
            <LocationAndHoursSection />
          </div>

          {/* Section 6: Workshop Gallery */}
          <div id="gallery" className="scroll-mt-20 bg-[#F5F7FA] dark:bg-[#041C3A] border-b border-[#D5DBE5] dark:border-[#0A2E5C]">
            <GalleryPage onNavigate={(target) => scrollToSection(target)} />
          </div>

          {/* Section 7: Contact, Hours & Location Map */}
          <div id="contact" className="scroll-mt-20 bg-[#041C3A]">
            <ContactPage
              initialService={initialContactService}
              initialMessage={initialContactMessage}
              initialVehicleType={initialVehicleType}
              initialSelectedTyre={initialSelectedTyre}
            />
          </div>

          {/* Visual Separation Gap: Clean White Background between Contact Section and Footer */}
          <div 
            aria-hidden="true" 
            className="w-full bg-[#FFFFFF] h-14 sm:h-20 lg:h-24 border-t border-b border-[#E2E8F0]" 
          />

        </main>

        {/* Floating Call & WhatsApp Buttons */}
        <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
          {/* Floating WhatsApp Button */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-13 h-13 rounded-full bg-[#F58220] hover:bg-[#E86D00] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <i className="fa-brands fa-whatsapp text-2xl text-white"></i>
            <span className="sr-only">Chat on WhatsApp</span>
          </a>

          {/* Floating Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            aria-label="Call Now"
            className="w-13 h-13 rounded-full bg-[#041C3A] hover:bg-[#0A2E5C] text-white border-2 border-[#F58220] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <Phone className="w-5 h-5 text-[#F58220] group-hover:text-white transition-colors" />
            <span className="sr-only">Call Now</span>
          </a>
        </div>

        {/* Premium Business Footer with Single-Page Anchor Navigation */}
        <Footer
          onNavigateSection={scrollToSection}
          onRequestQuote={handleGeneralPriceQuote}
          onBulkQuote={handleSelectBulkQuote}
        />

      </div>
    </ThemeProvider>
  );
}
