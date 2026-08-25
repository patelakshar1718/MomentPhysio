import { site } from '@/config/site';

/**
 * Builds a wa.me link with a pre-filled message.
 *
 * wa.me is used rather than api.whatsapp.com because it resolves correctly on
 * both mobile (opens the app) and desktop (opens WhatsApp Web) without the
 * intermediate "continue to chat" page.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WHATSAPP_MESSAGE = `Hi ${site.name}, I'd like to book a 1-to-1 assessment.`;

export type BookingPayload = {
  service: string;
  goal: string;
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  notes: string;
};

/** Formats the booking form answers into a readable WhatsApp message. */
export function formatBookingMessage(data: BookingPayload): string {
  const lines = [
    `*New 1-to-1 Assessment Request*`,
    ``,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    data.email ? `*Email:* ${data.email}` : null,
    ``,
    `*Looking for:* ${data.service}`,
    `*Primary goal:* ${data.goal}`,
    data.location ? `*Preferred centre:* ${data.location}` : null,
    ``,
    data.preferredDate ? `*Preferred date:* ${data.preferredDate}` : null,
    data.preferredTime ? `*Preferred time:* ${data.preferredTime}` : null,
    data.notes ? `\n*Additional information:*\n${data.notes}` : null,
  ].filter((l): l is string => l !== null);

  return lines.join('\n');
}

/** mailto fallback for visitors without WhatsApp. */
export function bookingMailto(data: BookingPayload): string {
  const subject = `1-to-1 Assessment Request — ${data.name}`;
  const body = formatBookingMessage(data).replace(/\*/g, '');
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
