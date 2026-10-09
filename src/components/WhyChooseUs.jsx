import React from 'react';
import { UserCheck, Cpu, Banknote, Car, Wrench, Boxes } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: UserCheck,
      title: 'Experienced Work',
      description: 'Experienced tyre professionals with practical industry knowledge, serving motorists since 2007 with approx. 19 years in the tyre field.',
    },
    {
      icon: Cpu,
      title: 'Modern Equipment',
      description: 'Use of modern machines and equipment for safe tyre demounting, fitting, and bead sealing that protects alloy wheels and rims.',
    },
    {
      icon: Banknote,
      title: 'Reasonable Pricing',
      description: 'Professional tyre solutions, puncture services, and brand-new tyres offered with fair, honest, and transparent pricing.',
    },
    {
      icon: Car,
      title: 'Two & Four Wheeler',
      description: 'Comprehensive solutions covering motorbikes, scooters, passenger hatchbacks, sedans, and high-clearance SUVs under one roof.',
    },
    {
      icon: Wrench,
      title: 'Repair & Replacement',
      description: 'From quick tubeless puncture repairs to complex tyre vulcanizing, safety inspections, and complete tyre replacement.',
    },
    {
      icon: Boxes,
      title: 'Bulk Supply',
      description: 'Dependable tyre supply options for commercial fleet operators, transport vehicles, repair workshops, and bulk buyers.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F5F7FA] dark:bg-[#041C3A] border-y border-[#D5DBE5] dark:border-[#0A2E5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F58220] mb-2">
            Why Motorists Trust Us
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight mb-4">
            Quality Workmanship & Dependable Tyre Solutions
          </h2>
          <p className="text-base text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed">
            With experience dating back to 2007, Alam Works combines practical hands-on skill, modern equipment, and honest advice to keep your vehicle moving safely.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0B1F3A] rounded-xl p-6 sm:p-7 border border-[#D5DBE5] dark:border-[#0A2E5C] shadow-sm hover:shadow-md hover:border-[#F58220] dark:hover:border-[#F58220] hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-5 group-hover:bg-[#F58220] group-hover:text-white group-hover:scale-105 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
