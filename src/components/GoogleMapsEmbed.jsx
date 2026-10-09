import React from 'react';
import { BUSINESS_INFO } from '../config/constants.js';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const GoogleMapsEmbed = () => {
  return (
    <div className="bg-white dark:bg-[#0B1F3A] rounded-2xl border border-[#D5DBE5] dark:border-[#0A2E5C] overflow-hidden shadow-sm flex flex-col h-full">
      <div className="p-4 sm:p-5 border-b border-[#D5DBE5] dark:border-[#0A2E5C] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#F58220] shrink-0" />
          <div>
            <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
              Alam Works Workshop Location
            </h3>
            <p className="text-xs text-[#5F6B7A] dark:text-[#D5DBE5]">
              {BUSINESS_INFO.address}
            </p>
          </div>
        </div>

        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg shadow-xs transition-colors whitespace-nowrap self-start sm:self-auto shrink-0"
        >
          <Navigation className="w-3.5 h-3.5 text-white" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      </div>

      {/* Embedded Map Frame using the exact official Google Maps embed for Alam works shop */}
      <div className="relative w-full min-h-[340px] sm:min-h-[380px] flex-1 bg-[#F5F7FA] dark:bg-[#041C3A]">
        <iframe
          title="Alam Works Official Shop Location"
          src={BUSINESS_INFO.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '340px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      <div className="p-3 bg-[#F5F7FA] dark:bg-[#0B1F3A] border-t border-[#D5DBE5] dark:border-[#0A2E5C] text-center">
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#0B1F3A] dark:text-[#D5DBE5] hover:text-[#F58220] hover:underline inline-flex items-center gap-1"
        >
          <span>Open direct Google Maps link: {BUSINESS_INFO.googleMapsUrl}</span>
          <ExternalLink className="w-3 h-3 text-[#F58220]" />
        </a>
      </div>
    </div>
  );
};
