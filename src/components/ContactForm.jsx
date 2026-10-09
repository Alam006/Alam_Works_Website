import React, { useState, useEffect, useRef } from 'react';
import { GOOGLE_SCRIPT_URL, BUSINESS_INFO } from '../config/constants.js';
import { TYRE_PRODUCTS } from '../data/tyres.js';
import { Send, CheckCircle, AlertCircle, Loader2, Phone } from 'lucide-react';

export const ContactForm = ({
  initialService,
  initialMessage,
  initialVehicleType,
  initialSelectedTyre,
}) => {
  const serviceOptions = [
    'General Tyre Enquiry',
    'Two-Wheeler Tyre Puncture',
    'Four-Wheeler Tyre Puncture',
    'Tyre Repair & Vulcanizing',
    'Tubeless Tyre Repair',
    'Tyre Replacement & Fitting',
    'New Brand Tyre Purchase',
    'Bulk Tyre Supply',
    'Tyre Inspection & Safety Check',
    'Tyre Air Pressure Check',
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'General Tyre Enquiry',
    vehicleType: initialVehicleType || 'Two Wheeler',
    selectedTyre: initialSelectedTyre || '',
    message: initialMessage || '',
  });

  const [submittedCustomerName, setSubmittedCustomerName] = useState('');
  const [submittedServiceName, setSubmittedServiceName] = useState('');

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const autoDismissTimerRef = useRef(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: initialService || prev.service,
      message: initialMessage !== undefined ? initialMessage : prev.message,
      vehicleType: initialVehicleType || prev.vehicleType,
      selectedTyre: initialSelectedTyre !== undefined ? initialSelectedTyre : prev.selectedTyre,
    }));
  }, [initialService, initialMessage, initialVehicleType, initialSelectedTyre]);

  const handleReset = () => {
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = null;
    }
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: initialService || 'General Tyre Enquiry',
      vehicleType: initialVehicleType || 'Two Wheeler',
      selectedTyre: initialSelectedTyre || '',
      message: initialMessage || '',
    });
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  // Auto-dismiss the success confirmation after 5 seconds with cleanup
  useEffect(() => {
    if (submitSuccess) {
      if (autoDismissTimerRef.current) {
        clearTimeout(autoDismissTimerRef.current);
      }
      autoDismissTimerRef.current = setTimeout(() => {
        handleReset();
      }, 5000);
    }

    return () => {
      if (autoDismissTimerRef.current) {
        clearTimeout(autoDismissTimerRef.current);
        autoDismissTimerRef.current = null;
      }
    };
  }, [submitSuccess]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Email is OPTIONAL: only validate format if user entered an email address
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = null;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Capture customer info for the confirmation screen before reset
    const customerName = formData.name;
    const serviceName = formData.service;

    const payload = {
      timestamp: new Date().toISOString(),
      type: 'General Service Enquiry',
      name: formData.name,
      phone: formData.phone,
      email: formData.email.trim() || '',
      service: formData.service,
      vehicleType: formData.vehicleType,
      selectedTyre: formData.selectedTyre || 'Not specified / Need assistance',
      message: formData.message,
    };

    try {
      if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL')) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmittedCustomerName(customerName);
        setSubmittedServiceName(serviceName);
        setSubmitSuccess(true);
      } else {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        if (response) {
          setSubmittedCustomerName(customerName);
          setSubmittedServiceName(serviceName);
          setSubmitSuccess(true);
        }
      }
    } catch {
      setSubmitError('Failed to send enquiry automatically. Please reach out via phone or WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0B1F3A] rounded-2xl border border-[#D5DBE5] dark:border-[#0A2E5C] p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
          Send Us an Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#5F6B7A] dark:text-[#D5DBE5] mt-1">
          Have a tyre repair need or tyre inquiry? Fill out the details below and we will respond promptly.
        </p>
      </div>

      {submitSuccess ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-[#F58220]/15 text-[#F58220] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h4 className="text-xl font-bold text-[#0B1F3A] dark:text-white">
            Thank you, {submittedCustomerName || 'Valued Customer'}!
          </h4>
          <p className="text-sm text-[#5F6B7A] dark:text-[#D5DBE5] max-w-md mx-auto leading-relaxed">
            Your enquiry regarding <span className="font-bold text-[#F58220]">{submittedServiceName || 'Tyre Service'}</span> has been received. Our workshop team will get back to you shortly.
          </p>

          <p className="text-xs text-[#5F6B7A] dark:text-[#D5DBE5]/70 italic pt-1">
            This confirmation will return to the form automatically in 5 seconds.
          </p>

          <div className="pt-3 flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call Us Directly: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 text-xs font-semibold text-[#0B1F3A] dark:text-white bg-[#F5F7FA] dark:bg-[#0A2E5C] hover:bg-[#D5DBE5] rounded-lg border border-[#D5DBE5] dark:border-[#0A2E5C] cursor-pointer"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border rounded-lg text-[#0B1F3A] dark:text-white placeholder:text-[#5F6B7A] focus:outline-none focus:border-[#F58220] ${
                errors.name ? 'border-[#F58220]' : 'border-[#D0D8E3] dark:border-[#0A2E5C]'
              }`}
            />
            {errors.name && <p className="text-[11px] text-[#F58220] mt-1">{errors.name}</p>}
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Phone No"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border rounded-lg text-[#0B1F3A] dark:text-white placeholder:text-[#5F6B7A] focus:outline-none focus:border-[#F58220] ${
                  errors.phone ? 'border-[#F58220]' : 'border-[#D0D8E3] dark:border-[#0A2E5C]'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-[#F58220] mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter you Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border rounded-lg text-[#0B1F3A] dark:text-white placeholder:text-[#5F6B7A] focus:outline-none focus:border-[#F58220] ${
                  errors.email ? 'border-[#F58220]' : 'border-[#D0D8E3] dark:border-[#0A2E5C]'
                }`}
              />
              {errors.email && <p className="text-[11px] text-[#F58220] mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Service & Vehicle Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-1.5">
                Service Required *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D0D8E3] dark:border-[#0A2E5C] rounded-lg text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#F58220] cursor-pointer"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-1.5">
                Vehicle Type
              </label>
              <select
                value={formData.vehicleType}
                onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D0D8E3] dark:border-[#0A2E5C] rounded-lg text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#F58220] cursor-pointer"
              >
                <option value="Two Wheeler">Two Wheeler (Bike / Scooter)</option>
                <option value="Four Wheeler">Four Wheeler (Car / SUV)</option>
                <option value="Other">Other / Commercial</option>
              </select>
            </div>
          </div>

          {/* Select Tyre Brand & Size Dropdown - Populated directly from TYRE_PRODUCTS */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white">
                Select Tyre Brand & Size
              </label>
             
            </div>
            <select
              value={formData.selectedTyre || ''}
              onChange={(e) => setFormData({ ...formData, selectedTyre: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D0D8E3] dark:border-[#0A2E5C] rounded-lg text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#F58220] cursor-pointer"
            >
              <option value="">Choose a tyre brand and size</option>
              <option value="Not sure / Need assistance">Not sure / Need assistance (Describe in message)</option>
              
              {/* Grouped by Tyre Brands from catalogue */}
              {['CEAT', 'Apollo', 'JK Tyre', 'Ralco'].map((brandName) => {
                const brandTyres = TYRE_PRODUCTS.filter((t) => t.brand === brandName);
                if (brandTyres.length === 0) return null;
                return (
                  <optgroup key={brandName} label={`--- ${brandName} Tyres ---`}>
                    {brandTyres.map((tyre) => {
                      const displayOption = `${tyre.brand} — ${tyre.name} [${tyre.size} · ${tyre.tyreType}]`;
                      return (
                        <option key={tyre.id} value={displayOption}>
                          {displayOption}
                        </option>
                      );
                    })}
                  </optgroup>
                );
              })}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-1.5">
              Message (Optional)
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about tyre size, current vehicle symptoms, or requested visit time..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D0D8E3] dark:border-[#0A2E5C] rounded-lg text-[#0B1F3A] dark:text-white placeholder:text-[#5F6B7A] focus:outline-none focus:border-[#F58220] resize-none"
            />
          </div>

          {submitError && (
            <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg text-xs text-red-600 dark:text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Submit button: #F58220 with white text, hover #E86D00 */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-white bg-[#F58220] hover:bg-[#E86D00] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <span>Send Enquiry</span>
                <Send className="w-4 h-4 text-white" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
