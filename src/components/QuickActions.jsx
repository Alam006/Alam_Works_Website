import React from 'react';
import { BUSINESS_INFO } from '../config/constants.js';
import { Search, Tag, Wrench, Phone, Navigation } from 'lucide-react';

export const QuickActions = ({
  onFindTyre,
  onGetBestPrice,
  onTyreRepair,
}) => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container with button orange background (#F58220) and white text */}
      <div className="bg-[#F58220] rounded-xl shadow-xl border border-[#E86D00] p-3 sm:p-5 text-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          
          {/* Action 1: Find a Tyre */}
          <button
            onClick={onFindTyre}
            className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all cursor-pointer group shadow-2xs text-white"
          >
            <div className="w-10 h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6 text-[#041C3A]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">
              Find a Tyre
            </span>
            <span className="text-[11px] text-white/90 hidden sm:inline mt-0.5">
              Browse 2W & 4W
            </span>
          </button>

          {/* Action 2: Get Best Price */}
          <button
            onClick={onGetBestPrice}
            className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all cursor-pointer group shadow-2xs text-white"
          >
            <div className="w-10 h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Tag className="w-6 h-6 text-[#041C3A]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">
              Get Best Price
            </span>
            <span className="text-[11px] text-white/90 hidden sm:inline mt-0.5">
              Instant enquiry
            </span>
          </button>

          {/* Action 3: Tyre Repair */}
          <button
            onClick={onTyreRepair}
            className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all cursor-pointer group shadow-2xs text-white"
          >
            <div className="w-10 h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Wrench className="w-6 h-6 text-[#041C3A]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">
              Tyre Repair
            </span>
            <span className="text-[11px] text-white/90 hidden sm:inline mt-0.5">
              Puncture & patch
            </span>
          </button>

          {/* Action 4: Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all group shadow-2xs text-white"
          >
            <div className="w-10 h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-[#041C3A]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">
              Call Now
            </span>
            <span className="text-[11px] text-white/90 hidden sm:inline mt-0.5">
              Immediate call
            </span>
          </a>

          {/* Action 5: WhatsApp Us */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all group shadow-2xs text-white"
          >
            <div className="w-10 h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-whatsapp text-2xl text-[#041C3A]"></i>
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">
              WhatsApp Us
            </span>
            <span className="text-[11px] text-white/90 hidden sm:inline mt-0.5">
              Chat instantly
            </span>
          </a>

          {/* Action 6: Get Directions */}
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all group shadow-2xs text-white"
          >
            <div className="w-10 h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Navigation className="w-6 h-6 text-[#041C3A]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">
              Get Directions
            </span>
            <span className="text-[11px] text-white/90 hidden sm:inline mt-0.5">
              Hanuman Chowk
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};
