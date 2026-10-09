import React from 'react';
import { ArrowRight, Tag, ShieldCheck } from 'lucide-react';

export const TyreCard = ({
  tyre,
  onGetBestPrice,
  onSendEnquiry,
}) => {
  return (
    <div className="bg-white dark:bg-[#0B1F3A] rounded-xl border border-[#D5DBE5] dark:border-[#0A2E5C] overflow-hidden shadow-sm hover:shadow-lg hover:border-[#F58220] dark:hover:border-[#F58220] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group">
      
      {/* Top Product Image Container */}
      <div className="relative aspect-4/3 bg-[#F5F7FA] dark:bg-[#041C3A] overflow-hidden flex items-center justify-center p-4 border-b border-[#D5DBE5] dark:border-[#0A2E5C]">
        <img
          src={tyre.image}
          alt={`${tyre.brand} ${tyre.name} ${tyre.size}`}
          referrerPolicy="no-referrer"
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Brand Stamp */}
        <div className="absolute top-3 left-3 bg-white/95 dark:bg-[#0B1F3A]/95 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-bold tracking-wider uppercase text-[#0B1F3A] dark:text-white border border-[#D5DBE5] dark:border-[#0A2E5C] shadow-xs">
          {tyre.brand}
        </div>

        {/* Tyre Type Indicator */}
        <div className="absolute top-3 right-3 bg-[#041C3A] dark:bg-[#0A2E5C] text-[#F58220] px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide border border-[#0A2E5C]">
          {tyre.tyreType}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata line: Vehicle Category & Size */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#5F6B7A] dark:text-[#D5DBE5] mb-2">
            <span>{tyre.vehicleType}</span>
            <span aria-hidden="true" className="text-[#D5DBE5]">·</span>
            <span>{tyre.vehicleCategory}</span>
            <span aria-hidden="true" className="text-[#D5DBE5]">·</span>
            <span className="font-bold text-[#0B1F3A] dark:text-white">{tyre.size}</span>
          </div>

          {/* Product Name */}
          <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] dark:text-white mb-2 group-hover:text-[#F58220] transition-colors">
            {tyre.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed line-clamp-3 mb-4">
            {tyre.description}
          </p>

          {/* Key highlights / Best for */}
          {tyre.bestFor && (
            <div className="mb-4 text-xs text-[#5F6B7A] dark:text-[#D5DBE5] bg-[#F5F7FA] dark:bg-[#0A2E5C]/50 p-2.5 rounded-lg border border-[#D5DBE5] dark:border-[#0A2E5C]">
              <span className="font-bold text-[#0B1F3A] dark:text-white block mb-0.5">Suitable for:</span>
              <span>{tyre.bestFor}</span>
            </div>
          )}
        </div>

        {/* Pricing notice & Action Buttons */}
        <div className="pt-3 border-t border-[#D5DBE5] dark:border-[#0A2E5C] space-y-2.5">
          <div className="flex items-center justify-between text-xs text-[#5F6B7A] dark:text-[#D5DBE5]">
            <span className="flex items-center gap-1 font-semibold text-[#0B1F3A] dark:text-[#D5DBE5]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F58220]" />
              100% Genuine Brand
            </span>
            <span className="font-semibold text-[#F58220]">Price on Request</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Get Best Price: Orange Button */}
            <button
              onClick={() => onGetBestPrice(tyre)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#F58220] hover:bg-[#E86D00] active:scale-[0.98] rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              <Tag className="w-3.5 h-3.5 text-white" />
              <span>Get Best Price</span>
            </button>

            {/* Send Enquiry: Navy / White button */}
            <button
              onClick={() => onSendEnquiry(tyre)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0B1F3A] dark:text-white bg-[#F5F7FA] dark:bg-[#0A2E5C] hover:bg-[#D5DBE5] dark:hover:bg-[#0A2E5C]/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap border border-[#D5DBE5] dark:border-[#0A2E5C]"
            >
              <span>Send Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F58220]" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
