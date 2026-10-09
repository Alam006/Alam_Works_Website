import React from "react";
import { BUSINESS_INFO } from "../config/constants.js";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import alamLogo from "../assets/images/Alam-Work-Logo.png";

export const Footer = ({ onNavigateSection, onRequestQuote, onBulkQuote }) => {
  return (
    <footer className="bg-[#041C3A] text-[#D5DBE5] border-t border-[#0A2E5C]">
      {/* Upper Footer: Balanced Three-Column Layout */}
      <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start w-full">
          {/* Column 1: Alam Works (Left column) */}
          <div className="space-y-4">
            <div className="relative flex items-center w-fit">
              {/* Soft diffused glow */}
              <div
                className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[210px]
      h-[55px]
      rounded-full
      bg-white/70
      blur-[20px]
    "
              />

              <img
                src={alamLogo}
                alt="Alam Works Logo"
                className="relative z-10 w-44 sm:w-52 md:w-56 h-auto object-contain"
              />
            </div>

            <p className="text-xs uppercase tracking-wider text-[#F58220] font-bold">
              Two & Four Wheeler Tyres | Tyre Repair | Puncture Repair | New
              Tyres | Bulk Supply
            </p>
            <p className="text-sm text-[#D5DBE5] leading-relaxed">
              With experience dating back to {BUSINESS_INFO.establishedYear},
              Alam Works provides practical tyre solutions for two-wheelers and
              four-wheelers, combining experienced workmanship, modern equipment
              and reasonable pricing in Wazirabad, Delhi.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#D5DBE5]">
              <ShieldCheck className="w-4 h-4 text-[#F58220] shrink-0" />
              <span>
                Serving customers since {BUSINESS_INFO.establishedYear} (~
                {BUSINESS_INFO.experienceYears} Years)
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (Middle column, natural center placement) */}
          <div className="lg:pl-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigateSection("hero")}
                  className="hover:text-[#F58220] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("about")}
                  className="hover:text-[#F58220] transition-colors cursor-pointer text-left"
                >
                  About Alam Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("services")}
                  className="hover:text-[#F58220] transition-colors cursor-pointer text-left"
                >
                  Tyre & Repair Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("tyres")}
                  className="hover:text-[#F58220] transition-colors cursor-pointer text-left"
                >
                  Tyre Catalogue & Finder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("gallery")}
                  className="hover:text-[#F58220] transition-colors cursor-pointer text-left"
                >
                  Workshop Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("contact")}
                  className="hover:text-[#F58220] transition-colors cursor-pointer text-left"
                >
                  Contact & Location
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onRequestQuote}
                  className="text-[#F58220] hover:text-[#E86D00] font-bold transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Request Best Price →</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onBulkQuote}
                  className="text-[#D5DBE5] hover:text-[#F58220] font-medium transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Bulk Tyre Quote →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours (Right column) */}
          <div className="space-y-4 lg:pl-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact & Hours
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-[#F58220] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#F58220] mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#F58220] transition-colors group"
              >
                <i className="fa-brands fa-whatsapp text-base text-[#F58220] group-hover:text-white mt-0.5 shrink-0"></i>
                <span>{BUSINESS_INFO.whatsapp} </span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-[#F58220] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#F58220] mt-0.5 shrink-0" />
                <span className="break-all">{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-[#D5DBE5]">
                <MapPin className="w-4 h-4 text-[#F58220] mt-0.5 shrink-0" />
                <div>
                  <p>{BUSINESS_INFO.address}</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#F58220] hover:underline mt-1 font-bold"
                  >
                    <span>Open on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[#0A2E5C]">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F58220]" />
                  <span>Working Hours</span>
                </div>
                <p className="text-xs text-[#D5DBE5]">
                  Monday – Saturday:{" "}
                  <span className="text-white font-bold">
                    9:00 AM – 9:00 PM
                  </span>
                </p>
                <p className="text-xs text-[#5F6B7A] mt-0.5">
                  Sunday:{" "}
                  <span className="text-[#D5DBE5]">Hours not provided</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="border-t border-[#0A2E5C] bg-[#021124]">
        <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#5F6B7A]">
          <p>© 2026 Alam Works. All rights reserved.</p>
          <p className="text-[#D5DBE5] text-center sm:text-right">
            Wazirabad, Near Hanuman Chowk, Delhi – 110084, India
          </p>
        </div>
      </div>
    </footer>
  );
};
