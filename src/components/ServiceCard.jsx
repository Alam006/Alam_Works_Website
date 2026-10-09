import React from 'react';
import {
  Bike,
  Car,
  Wrench,
  ShieldCheck,
  RefreshCw,
  ShoppingBag,
  Boxes,
  Search,
  Gauge,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const ServiceCard = ({ service, onSendEnquiry }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'Bike':
        return <Bike className="w-5 h-5" />;
      case 'Car':
        return <Car className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5" />;
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#0B1F3A] rounded-xl border border-[#0A2E5C] overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#F58220] hover:-translate-y-1 transition-all duration-200 group text-white">
      <div>
        {/* Stock Image suited to card title */}
        {service.image && (
          <div className="relative aspect-16/9 w-full overflow-hidden bg-[#041C3A]">
            <img
              src={service.image}
              alt={service.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Category tag badge over image */}
            <div className="absolute top-3 left-3 bg-[#041C3A]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded border border-[#0A2E5C] uppercase tracking-wider">
              {service.category}
            </div>

            {/* Service Icon badge in bottom-right corner of image */}
            <div className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-[#F58220] text-white flex items-center justify-center shadow-md">
              {getIcon(service.iconName)}
            </div>
          </div>
        )}

        <div className="p-5 sm:p-6 pb-2">
          {/* If no image was available, show top header icon */}
          {!service.image && (
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#F58220]/15 text-[#F58220] flex items-center justify-center group-hover:bg-[#F58220] group-hover:text-white group-hover:scale-105 transition-all">
                {getIcon(service.iconName)}
              </div>
              <span className="text-xs font-bold text-[#F58220] bg-[#F58220]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                {service.category}
              </span>
            </div>
          )}

          {/* Title - Pure crisp white, orange on hover */}
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#F58220] transition-colors line-clamp-1">
            {service.title}
          </h3>

          {/* Description - High contrast soft light blue-gray */}
          <p className="text-xs sm:text-sm text-[#D5DBE5] leading-relaxed mb-4 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Key Highlights */}
          {service.highlights && service.highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4 pt-2 border-t border-[#0A2E5C]">
              {service.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-[#D5DBE5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F58220] mt-0.5 shrink-0" />
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-5 sm:p-6 pt-0">
        <button
          onClick={() => onSendEnquiry(service.title)}
          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0A2E5C] hover:bg-[#F58220] hover:text-white rounded-lg transition-colors cursor-pointer border border-[#0A2E5C] hover:border-[#F58220]"
        >
          <span>Send Enquiry</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
