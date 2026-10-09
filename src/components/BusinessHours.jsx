import React from 'react';
import { BUSINESS_INFO } from '../config/constants.js';
import { Clock, HelpCircle, CheckCircle2 } from 'lucide-react';

export const BusinessHours = () => {
  return (
    <div className="bg-white dark:bg-[#0B1F3A] rounded-2xl border border-[#D5DBE5] dark:border-[#0A2E5C] p-6 sm:p-7 shadow-sm">
      <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-[#D5DBE5] dark:border-[#0A2E5C]">
        <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] dark:text-white">
            Business Working Hours
          </h3>
          <p className="text-xs text-[#5F6B7A] dark:text-[#D5DBE5]">
            Open 6 days regular schedule
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {BUSINESS_INFO.businessHours.map((item, index) => {
          const isSunday = item.day === 'Sunday';
          return (
            <div
              key={index}
              className={`flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-lg ${
                isSunday
                  ? 'bg-[#F5F7FA]/70 dark:bg-[#041C3A]/50 border border-dashed border-[#D5DBE5] dark:border-[#0A2E5C]'
                  : 'bg-[#F5F7FA] dark:bg-[#041C3A]'
              }`}
            >
              <div className="flex items-center gap-2">
                {isSunday ? (
                  <HelpCircle className="w-4 h-4 text-[#5F6B7A] dark:text-[#D5DBE5] shrink-0" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                )}
                <span className={`font-semibold ${isSunday ? 'text-[#5F6B7A] dark:text-[#D5DBE5]' : 'text-[#0B1F3A] dark:text-white'}`}>
                  {item.day}
                </span>
              </div>

              <div className="font-medium">
                {isSunday ? (
                  <span className="text-[#5F6B7A] dark:text-[#D5DBE5] italic">
                    Hours not provided
                  </span>
                ) : (
                  <span className="text-[#0B1F3A] dark:text-white tabular-nums font-bold">
                    {item.hours}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-[#D5DBE5] dark:border-[#0A2E5C] text-xs text-[#5F6B7A] dark:text-[#D5DBE5] flex items-center justify-between">
        <span>Standard Schedule:</span>
        <strong className="text-[#0B1F3A] dark:text-white font-semibold">
          Mon – Sat: 9:00 AM – 9:00 PM
        </strong>
      </div>
    </div>
  );
};
