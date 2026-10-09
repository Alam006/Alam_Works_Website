import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services.js';
import { ServiceCard } from '../components/ServiceCard.jsx';
import { Phone, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../config/constants.js';

export const ServicesPage = ({
  onNavigate,
  onSelectServiceEnquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Two Wheeler', 'Four Wheeler', 'General', 'Bulk'];

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const handleEnquiry = (serviceTitle) => {
    onSelectServiceEnquiry(serviceTitle);
  };

  return (
    <div className="py-12 sm:py-16 bg-[#041C3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F58220] mb-2">
            Tyre & Repair Services
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional Tyre Solutions for Two & Four Wheelers
          </h1>
          <p className="text-base sm:text-lg text-[#D5DBE5] leading-relaxed mx-auto max-w-2xl">
            From emergency puncture fixes and tubeless repairs to new tyre fitting, pressure calibration, and bulk supplies. Done with modern machines and 19 years of practical field experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-[#0A2E5C]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#F58220] text-white shadow-xs'
                  : 'bg-[#0B1F3A] text-[#D5DBE5] border border-[#0A2E5C] hover:border-[#F58220] hover:text-white'
              }`}
            >
              {cat}
              {cat === 'All' ? ` (${SERVICES_DATA.length})` : ''}
            </button>
          ))}
        </div>

        {/* Services Grid (All 9 services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSendEnquiry={handleEnquiry}
            />
          ))}
        </div>

        {/* Workmanship Guarantee Banner: Deep Navy & Blue gradient with Orange buttons */}
        <div className="bg-gradient-to-r from-[#0B1F3A] via-[#0A2E5C] to-[#0B1F3A] text-white rounded-2xl p-8 sm:p-10 border border-[#0A2E5C] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center shrink-0 border border-[#0A2E5C]">
              <Wrench className="w-6 h-6 text-[#F58220]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Have an urgent puncture or tyre emergency?</h3>
              <p className="text-sm text-[#D5DBE5] mt-1 max-w-xl">
                Call our workshop directly or ping on WhatsApp for immediate assistance at Hanuman Chowk, Wazirabad.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-transparent hover:bg-white/10 border-2 border-white rounded-lg shadow-sm transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-base text-[#F58220]"></i>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
