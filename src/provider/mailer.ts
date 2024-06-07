import emailjs from '@emailjs/browser';

const PUBLIC_KEY = (process.env['MAILER_PUBLIC_KEY'] = 'uBp8J7GFarNCOpNK2');
const SERVICE_ID = (process.env['MAILER_SERVICE_ID'] = 'service_26r18xj');
const CONTACT_TEMPLATE_ID = (process.env['MAILER_CONTACT_TEMPLATE_ID'] =
  'template_a3djtac');
const APPOINTMENT_TEMPLATE_ID = (process.env['MAILER_APPOINTMENT_TEMPLATE_ID'] =
  'template_9r8cita');

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
