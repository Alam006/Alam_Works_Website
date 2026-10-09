import React from 'react';
import { ContactInfoCard } from '../components/ContactInfoCard.jsx';
import { ContactForm } from '../components/ContactForm.jsx';

export const ContactPage = ({
  initialService,
  initialMessage,
  initialVehicleType,
  initialSelectedTyre,
}) => {
  return (
    <div className="py-12 sm:py-16 bg-[#041C3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F58220] mb-2">
            Get in Touch
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact Alam Works
          </h1>
          <p className="text-base sm:text-lg text-[#D5DBE5] leading-relaxed mx-auto max-w-2xl">
            Need urgent puncture repair, new tyre pricing, or have a commercial bulk requirement? Contact us via phone, WhatsApp, or send an enquiry below.
          </p>
        </div>

        {/* Contact Form & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form: 7 cols on desktop */}
          <div className="lg:col-span-7">
            <ContactForm
              initialService={initialService}
              initialMessage={initialMessage}
              initialVehicleType={initialVehicleType}
              initialSelectedTyre={initialSelectedTyre}
            />
          </div>

          {/* Contact Cards: 5 cols on desktop */}
          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>
        </div>

      </div>
    </div>
  );
};
