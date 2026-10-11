const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  if (autoDismissTimerRef.current) {
    clearTimeout(autoDismissTimerRef.current);
    autoDismissTimerRef.current = null;
  }

  setIsSubmitting(true);
  setSubmitSuccess(false);
  setSubmitError(null);

  const customerName = formData.name.trim();
  const serviceName = formData.service;

  const payload = {
    timestamp: new Date().toISOString(),
    name: customerName,
    phone: formData.phone.trim(),
    email: formData.email.trim(),
    service: formData.service,
    vehicleType: formData.vehicleType,
    selectedTyre:
      formData.selectedTyre || 'Not specified / Need assistance',
    message: formData.message.trim(),
  };

  try {
    if (
      !GOOGLE_SCRIPT_URL ||
      GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL')
    ) {
      throw new Error(
        'Contact form is not configured. Please contact us by phone or WhatsApp.'
      );
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('The enquiry server could not be reached.');
    }

    const result = await response.json();

    if (result.success !== true) {
      throw new Error(
        result.message || 'The enquiry could not be processed.'
      );
    }

    setSubmittedCustomerName(customerName);
    setSubmittedServiceName(serviceName);
    setSubmitSuccess(true);
  } catch (error) {
    console.error('Contact form submission failed:', error);

    setSubmitError(
      'We could not confirm your enquiry was received. Please call or WhatsApp us before submitting again.'
    );
  } finally {
    setIsSubmitting(false);
  }
};
