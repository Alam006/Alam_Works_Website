import React from 'react';
import { GalleryGrid } from '../components/GalleryGrid.jsx';
import { Camera, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../config/constants.js';

export const GalleryPage = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F58220] mb-2">
            <Camera className="w-4 h-4 text-[#F58220]" />
            <span>Workshop & Workmanship Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight mb-4">
            Inside Alam Works
          </h1>
          <p className="text-base sm:text-lg text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed mx-auto max-w-2xl">
            Take a look at our workshop setup, modern tyre changing equipment, inventory of genuine brand tyres, and real customer service operations at Wazirabad, Delhi.
          </p>
        </div>

        {/* Gallery Grid with Category Filters & Lightbox */}
        <GalleryGrid />

        {/* Visit CTA Card styled in full width with horizontal alignment */}
        <div className="mt-16 w-full p-6 sm:p-8 lg:p-10 bg-[#041C3A] text-white rounded-2xl border border-[#0A2E5C] shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F58220]/20 text-[#F58220] flex items-center justify-center shrink-0 border border-[#F58220]/30">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#F58220]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Visit Our Workshop in Person
              </h3>
              <p className="text-sm sm:text-base text-[#D5DBE5] leading-relaxed max-w-2xl">
                Located near Hanuman Chowk, Wazirabad, Delhi – 110084. Drop by for tyre pressure check, puncture inspection, or replacement tyre fitting.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <span>Open on Google Maps</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
