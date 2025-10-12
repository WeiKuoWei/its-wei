/**
 * EmailJS Configuration
 *
 * This file contains the configuration for EmailJS service.
 * Make sure to set up your environment variables in .env file.
 *
 * Required environment variables:
 * - VITE_EMAILJS_SERVICE_ID: Your EmailJS service ID
 * - VITE_EMAILJS_TEMPLATE_ID: Your EmailJS template ID
 * - VITE_EMAILJS_PUBLIC_KEY: Your EmailJS public key
 */

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

/**
 * Validates that all required EmailJS configuration values are present
 */
export const isEmailConfigValid = (): boolean => {
  return !!(
    emailConfig.serviceId &&
    emailConfig.templateId &&
    emailConfig.publicKey
  );
};
