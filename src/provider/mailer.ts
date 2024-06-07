import emailjs from '@emailjs/browser';

const PUBLIC_KEY = process.env['MAILER_PUBLIC_KEY'] as string;
const SERVICE_ID = process.env['MAILER_SERVICE_ID'] as string;
const CONTACT_TEMPLATE_ID = process.env['MAILER_CONTACT_TEMPLATE_ID'] as string;
const APPOINTMENT_TEMPLATE_ID = process.env[
  'MAILER_APPOINTMENT_TEMPLATE_ID'
] as string;

export const sendContact = (form: HTMLFormElement) => {
  return emailjs.sendForm(SERVICE_ID, CONTACT_TEMPLATE_ID, form, {
    publicKey: PUBLIC_KEY,
  });
};

export const sendAppointment = (form: HTMLFormElement) => {
  return emailjs.sendForm(SERVICE_ID, APPOINTMENT_TEMPLATE_ID, form, {
    publicKey: PUBLIC_KEY,
  });
};
