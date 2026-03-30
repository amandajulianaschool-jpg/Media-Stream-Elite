import type { Locale } from './translations';
import { t } from './ui';

export const TRIAL_DURATION = '4';
export const WHATSAPP_NUMBER = '212631130357';

export function getWhatsAppTrialLink(locale: Locale): string {
  const msg = encodeURIComponent(t(locale, 'trial.whatsappMsg'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export function getWhatsAppBuyLink(locale: Locale, planNameKey: string): string {
  const planName = t(locale, planNameKey);
  const template = t(locale, 'whatsapp.buyMsg');
  const msg = encodeURIComponent(template.replace('{plan}', planName));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export function getWhatsAppSupportLink(locale: Locale): string {
  const msg = encodeURIComponent(t(locale, 'whatsapp.supportMsg'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
