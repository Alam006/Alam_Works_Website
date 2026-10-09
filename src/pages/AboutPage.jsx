import React from 'react';
import { BUSINESS_INFO } from '../config/constants.js';
import heroWorkshop from '../assets/images/Alam-work-Shop-fronte-view.png';
import tyreServiceWork from '../assets/images/modren-machine.png';
import { ShieldCheck, Clock, Cpu, Banknote, CheckCircle2, Phone } from 'lucide-react';

export const AboutPage = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F58220] mb-2">
            About Alam Works
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight mb-4">
            Practical Tyre Solutions Since 2007
          </h1>
          <p className="text-base sm:text-lg text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed mx-auto max-w-2xl">
            With experience dating back to 2007, Alam Works provides practical tyre solutions for two-wheelers and four-wheelers, combining experienced workmanship, modern equipment and reasonable pricing.
          </p>
        </div>

        {/* Hero split with image and key stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#D5DBE5] dark:border-[#0A2E5C] bg-[#F5F7FA] dark:bg-[#041C3A]">
            <img
              src={heroWorkshop}
              alt="Alam Works workshop bay in Wazirabad Delhi"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover max-h-[460px]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#041C3A]/95 backdrop-blur-md p-4 rounded-xl text-white border border-[#0A2E5C] flex items-center justify-between">
              <div>
                <p className="text-xs text-[#F58220] font-bold uppercase tracking-wider">Established 2007</p>
                <p className="text-sm font-bold text-white mt-0.5">Wazirabad, Near Hanuman Chowk, Delhi</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-[#F58220]">~19</span>
                <p className="text-[11px] text-[#D5DBE5] uppercase">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
              Honest Guidance, Skilled Hands & Dependable Tyres
            </h2>
            <p className="text-sm sm:text-base text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed">
              Started in 2007 in Wazirabad, Delhi, Alam Works has spent approximately 19 years working hands-on with motorcycle tyres, scooter tyres, passenger car radials, and commercial fleet tyres.
            </p>
            <p className="text-sm sm:text-base text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed">
              We focus on what motorists genuinely need: fast and safe puncture repairs, accurate tyre replacement without wheel damage, authentic brand tyres from top manufacturers, and honest pricing with zero artificial markups.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A] border border-[#D5DBE5] dark:border-[#0A2E5C]">
                <div className="text-2xl font-extrabold text-[#F58220]">19+</div>
                <div className="text-xs font-semibold text-[#0B1F3A] dark:text-white mt-1">Years Industry Experience</div>
                <div className="text-[11px] text-[#5F6B7A] dark:text-[#D5DBE5] mt-0.5">Serving Delhi motorists</div>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A] border border-[#D5DBE5] dark:border-[#0A2E5C]">
                <div className="text-2xl font-extrabold text-[#F58220]">100%</div>
                <div className="text-xs font-semibold text-[#0B1F3A] dark:text-white mt-1">Genuine Brand Tyres</div>
                <div className="text-[11px] text-[#5F6B7A] dark:text-[#D5DBE5] mt-0.5">CEAT, Apollo, JK, Ralco</div>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Equipment & Operations section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F58220]">
              <Cpu className="w-4 h-4 text-[#F58220]" />
              <span>Workshop Equipment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
              Modern Machinery for Safe Demounting & Pressure Checks
            </h2>
            <p className="text-sm sm:text-base text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed">
              Traditional tyre lever methods often scratch alloy rims and weaken bead seals. At Alam Works, we utilize modern tyre changer equipment and bead-breaking machines to safely demount and fit bike and car tyres without damaging rims.
            </p>

            <ul className="space-y-3">
              {[
                'Specialized pneumatic tyre changer machine that protects alloy wheels',
                'Cold and hot vulcanizing repair patches for high-durability tubeless tyre repair',
                'Calibrated tyre pressure gauges for accurate inflation and safety',
                'Expert bead sealing preventing slow pressure leaks on alloy wheels',
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#5F6B7A] dark:text-[#D5DBE5]">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-lg border border-[#D5DBE5] dark:border-[#0A2E5C] bg-[#F5F7FA] dark:bg-[#041C3A]">
            <img
              src={tyreServiceWork}
              alt="Technician mounting tyre on machine in Alam Works"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover max-h-[420px]"
            />
          </div>
        </div>

        {/* 4 Pillars of Alam Works */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-3xl font-bold text-[#0B1F3A] dark:text-white">
              Built on 4 Simple Commitments
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6B7A] dark:text-[#D5DBE5] mt-2">
              How we approach every motorist who enters our workshop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#0B1F3A] p-6 rounded-xl border border-[#D5DBE5] dark:border-[#0A2E5C] shadow-sm hover:border-[#F58220] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#0B1F3A] dark:text-white mb-2">Honest Advice</h4>
              <p className="text-xs text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed">
                If your tyre only needs a puncture patch, we will tell you honestly rather than pushing an unnecessary replacement.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0B1F3A] p-6 rounded-xl border border-[#D5DBE5] dark:border-[#0A2E5C] shadow-sm hover:border-[#F58220] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#0B1F3A] dark:text-white mb-2">Prompt Service</h4>
              <p className="text-xs text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed">
                We understand nobody wants to be stuck with tyre troubles. Quick turnaround for punctures and same-day tyre fitment.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0B1F3A] p-6 rounded-xl border border-[#D5DBE5] dark:border-[#0A2E5C] shadow-sm hover:border-[#F58220] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-4">
                <Banknote className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#0B1F3A] dark:text-white mb-2">Reasonable Pricing</h4>
              <p className="text-xs text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed">
                Competitive rates across all brands (CEAT, Apollo, JK Tyre, Ralco) and fair labor charges for repairs.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0B1F3A] p-6 rounded-xl border border-[#D5DBE5] dark:border-[#0A2E5C] shadow-sm hover:border-[#F58220] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#0B1F3A] dark:text-white mb-2">Modern Care</h4>
              <p className="text-xs text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed">
                Machine-aided handling that prevents scratches on alloy rims and preserves airtight bead seating for years.
              </p>
            </div>
          </div>
        </div>

        {/* CTA banner: Deep Navy to Blue Gradient with Orange Button */}
        <div className="bg-gradient-to-r from-[#041C3A] via-[#0A2E5C] to-[#041C3A] rounded-2xl p-8 sm:p-12 text-white border border-[#0A2E5C] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Upgrade Your Tyres or Need a Repair?
            </h3>
            <p className="text-sm text-[#D5DBE5] mt-2">
              Visit our workshop near Hanuman Chowk, Wazirabad, or contact us for price queries and tyre size recommendations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-sm font-bold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Get Best Price
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-transparent hover:bg-white/10 border-2 border-white rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F58220]" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
