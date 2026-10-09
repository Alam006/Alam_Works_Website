import React from 'react';
import { GoogleMapsEmbed } from './GoogleMapsEmbed.jsx';
import { BusinessHours } from './BusinessHours.jsx';

export const LocationAndHoursSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#041C3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F58220] mb-2">
            Visit Our Workshop
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Location & Business Working Hours
          </h2>
          <p className="text-sm sm:text-base text-[#D5DBE5] leading-relaxed mx-auto max-w-2xl">
            Conveniently situated at Wazirabad, Delhi. Drop by during regular working hours or get instant driving directions.
          </p>
        </div>

        {/* Side-by-Side: Google Map (Left ~60% / 7 cols) & Business Working Hours (Right ~40% / 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column (approx 60% width): Google Map */}
          <div className="lg:col-span-7 h-full">
            <GoogleMapsEmbed />
          </div>

          {/* Right column (approx 40% width): Business Working Hours card */}
          <div className="lg:col-span-5">
            <BusinessHours />
          </div>
        </div>

      </div>
    </section>
  );
};
