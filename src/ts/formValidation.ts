/**
 * Form validation and submission for the consulting contact form
 */

interface ContactFormData {
  name: string;
  email: string;
  phone_number: string;
  idea: string;
}

interface ValidationResult {
  isValid: boolean;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

function isValidPhoneNumber(phoneNumber: string): boolean {
  return PHONE_REGEX.test(phoneNumber);
}

function validateFormData(formData: ContactFormData): ValidationResult {
  // Check for empty fields
  if (!formData.name.trim()) {
    return { isValid: false, message: 'Please enter your name.' };
  }

  if (!formData.email.trim()) {
    return { isValid: false, message: 'Please enter your email address.' };
  }

  if (!formData.phone_number.trim()) {
    return { isValid: false, message: 'Please enter your phone number.' };
  }

  if (!formData.idea.trim()) {
    return { isValid: false, message: 'Please describe your idea.' };
  }

  // Validate email format
  if (!isValidEmail(formData.email)) {
    return { isValid: false, message: 'Please enter a valid email address.' };
  }

  // Validate phone format
  if (!isValidPhoneNumber(formData.phone_number)) {
    return { isValid: false, message: 'Please enter a valid phone number.' };
  }

  return { isValid: true };
}

function getFormData(): ContactFormData {
  return {
    name: (document.getElementById('name') as HTMLInputElement)?.value || '',
    email: (document.getElementById('email') as HTMLInputElement)?.value || '',
    phone_number: (document.getElementById('phone_number') as HTMLInputElement)?.value || '',
    idea: (document.getElementById('idea') as HTMLTextAreaElement)?.value || '',
  };
}

async function submitFormToAPI(formData: ContactFormData): Promise<void> {
  const apiUrl = 'https://pu4o1bnhyb.execute-api.us-east-2.amazonaws.com/MailFormSubmission/submit-form';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    await response.json();
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

export async function validateAndSubmit(): Promise<void> {
  const form = document.getElementById('contactForm') as HTMLFormElement;

  if (!form) {
    console.error('Contact form not found');
    return;
  }

  const formData = getFormData();
  const validation = validateFormData(formData);

  if (!validation.isValid) {
    alert(validation.message);
    return;
  }

  try {
    await submitFormToAPI(formData);
    // Redirect to homepage on success
    window.location.href = '/';
  } catch (error) {
    // Still redirect even on error (matches original behavior)
    window.location.href = '/';
  }
}

// Make function available globally for onclick handlers
declare global {
  interface Window {
    validateAndSubmit: () => Promise<void>;
  }
}

window.validateAndSubmit = validateAndSubmit;
