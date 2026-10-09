import React from 'react';
import { BUSINESS_INFO } from '../config/constants.js';
import { Phone, Mail, MapPin, ExternalLink, Navigation } from 'lucide-react';

export const ContactInfoCard = () => {
  return (
    <div className="bg-white dark:bg-[#0B1F3A] rounded-2xl border border-[#D5DBE5] dark:border-[#0A2E5C] p-6 sm:p-8 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white mb-2">
          Direct Contact & Visit
        </h3>
        <p className="text-sm text-[#5F6B7A] dark:text-[#D5DBE5]">
          Feel free to call, send a WhatsApp message, or visit our tyre bay directly at Wazirabad.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D5DBE5] dark:border-[#0A2E5C] hover:border-[#F58220] transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0 group-hover:bg-[#F58220] group-hover:text-white transition-all">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5F6B7A] dark:text-[#D5DBE5] block">
              Phone Call
            </span>
            <span className="text-sm font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#F58220]">
              {BUSINESS_INFO.phone}
            </span>
            <span className="text-[11px] text-[#5F6B7A] dark:text-[#D5DBE5] block mt-0.5">Click to call immediately</span>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D5DBE5] dark:border-[#0A2E5C] hover:border-[#F58220] transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0 group-hover:bg-[#F58220] group-hover:text-white transition-all text-xl">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5F6B7A] dark:text-[#D5DBE5] block">
              WhatsApp Chat
            </span>
            <span className="text-sm font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#F58220]">
              {BUSINESS_INFO.whatsapp}
            </span>
            <span className="text-[11px] text-[#5F6B7A] dark:text-[#D5DBE5] block mt-0.5">Send photo or tyre query</span>
          </div>
        </a>

        {/* Email */}
        <a
          href={`mailto:${BUSINESS_INFO.email}`}
          className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D5DBE5] dark:border-[#0A2E5C] hover:border-[#F58220] transition-colors group sm:col-span-2"
        >
          <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0 group-hover:bg-[#F58220] group-hover:text-white transition-all">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5F6B7A] dark:text-[#D5DBE5] block">
              Email Address
            </span>
            <span className="text-sm font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#F58220] break-all">
              {BUSINESS_INFO.email}
            </span>
            <span className="text-[11px] text-[#5F6B7A] dark:text-[#D5DBE5] block mt-0.5">Click to compose email</span>
          </div>
        </a>
      </div>

      {/* Workshop Location Block */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D5DBE5] dark:border-[#0A2E5C]">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5F6B7A] dark:text-[#D5DBE5] block">
              Shop Location
            </span>
            <p className="text-sm font-bold text-[#0B1F3A] dark:text-white mt-0.5">
              {BUSINESS_INFO.address}
            </p>
            <p className="text-xs text-[#5F6B7A] dark:text-[#D5DBE5] mt-1">
              Convenient access from main road, near Hanuman Chowk, Wazirabad, Delhi.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-white" />
                <span>Get Directions</span>
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0B1F3A] dark:text-white bg-white dark:bg-[#0B1F3A] border border-[#D5DBE5] dark:border-[#0A2E5C] rounded-lg hover:border-[#F58220] transition-colors"
              >
                <span>View Google Maps Link</span>
                <ExternalLink className="w-3 h-3 text-[#F58220]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
