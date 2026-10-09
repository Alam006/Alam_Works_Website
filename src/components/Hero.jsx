import React from 'react';
import { BUSINESS_INFO } from '../config/constants.js';
import heroWorkshop from '../assets/images/Alam-work-Shop-frontview.png';
import { ArrowRight, Wrench, Phone, ShieldCheck, MapPin } from 'lucide-react';

export const Hero = ({ onFindTyre, onBookRepair }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#041C3A] via-[#041C3A] to-[#0A2E5C] text-white min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroWorkshop}
          alt="Alam Works Tyre Workshop and Service Center"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out opacity-25"
        />
        {/* Navy gradient scrim with subtle orange glow */}

        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#041C3A] via-[#041C3A]/90 to-[#0A2E5C]/75 lg:to-[#0A2E5C]/40" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041C3A] via-[#041C3A]/10 to-[#0A2E5C]/55 lg:to-[#041C3A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041C3A] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Main Headline with Highlighted Orange Words */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5 sm:mb-6 text-balance">
           
            Complete <span className="text-[#F58220]">Tyre Sales</span> & <span className="text-[#F58220]"> Repair Solutions</span> for Two & Four Wheelers.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#D5DBE5] font-normal leading-relaxed mb-8 max-w-2xl">
            {BUSINESS_INFO.name} provides two-wheeler and four-wheeler tyres, puncture repair, tyre repair, replacement and bulk tyre supply in Wazirabad, Delhi.
          </p>

          {/* CTAs: Primary Orange & Secondary Transparent White Border */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            {/* Primary CTA button: #F58220 with white text, hover #E86D00 */}
            <button
              onClick={onFindTyre}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#F58220] hover:bg-[#E86D00] active:scale-[0.98] rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Find Your Tyre</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            {/* Secondary CTA button: transparent background with white border and white text */}
            <button
              onClick={onBookRepair}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white hover:text-white bg-transparent hover:bg-white/10 border-2 border-white rounded-lg backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <Wrench className="w-4 h-4 text-[#F58220]" />
              <span>Book Tyre Repair</span>
            </button>

            {/* Additional CTA: Call Now */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white hover:text-white bg-[#0A2E5C]/80 hover:bg-[#0A2E5C] border border-[#0A2E5C] rounded-lg backdrop-blur-sm transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#F58220]" />
              <span>Call Now </span>
            </a>
          </div>

          {/* Location & Authenticity Highlights */}
          <div className="pt-4 border-t border-[#0A2E5C] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#D5DBE5]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#F58220] shrink-0" />
              <span>Wazirabad, Near Hanuman Chowk, Delhi</span>
            </div>
            <span className="hidden sm:inline text-[#0A2E5C]">|</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F58220] shrink-0" />
              <span>Genuine Brands: CEAT, Apollo, JK Tyre, Ralco</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
