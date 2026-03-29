export type Locale = 'en' | 'da' | 'no' | 'sv' | 'fi' | 'is';

export interface LocaleConfig {
  code: Locale;
  label: string;
  shortLabel: string;
  hreflang: string;
  htmlLang: string;
  ogLocale: string;
}

export const locales: Record<Locale, LocaleConfig> = {
  en: { code: 'en', label: 'English', shortLabel: 'EN', hreflang: 'en', htmlLang: 'en', ogLocale: 'en_GB' },
  da: { code: 'da', label: 'Dansk', shortLabel: 'DK', hreflang: 'da', htmlLang: 'da', ogLocale: 'da_DK' },
  no: { code: 'no', label: 'Norsk', shortLabel: 'NO', hreflang: 'no', htmlLang: 'no', ogLocale: 'nb_NO' },
  sv: { code: 'sv', label: 'Svenska', shortLabel: 'SE', hreflang: 'sv', htmlLang: 'sv', ogLocale: 'sv_SE' },
  fi: { code: 'fi', label: 'Suomi', shortLabel: 'FI', hreflang: 'fi', htmlLang: 'fi', ogLocale: 'fi_FI' },
  is: { code: 'is', label: 'Íslenska', shortLabel: 'IS', hreflang: 'is', htmlLang: 'is', ogLocale: 'is_IS' },
};

export const allLocalesList = Object.values(locales);

export function getLocalePath(locale: Locale): string {
  return locale === 'en' ? '/' : `/${locale}/`;
}

export function getLocaleUrl(locale: Locale): string {
  return locale === 'en' ? 'https://streamvault.tv/' : `https://streamvault.tv/${locale}/`;
}

export function getRelativeLocaleUrl(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return locale === 'en' ? `/${cleanPath}` : `/${locale}/${cleanPath}`;
}

export interface HeroTranslations {
  badge: string;
  h1Line1: string;
  h1Line2: string;
  h1Line3: string;
  subtitlePrefix: string;
  subtitleHighlight: string;
  subtitleSuffix: string;
  ctaPrimary: string;
  ctaSecondary: string;
  devicesLabel: string;
}

export const heroTranslations: Record<Locale, HeroTranslations> = {
  en: {
    badge: 'Now streaming in 4K Ultra HD',
    h1Line1: 'The Ultimate 4K',
    h1Line2: 'Streaming Experience.',
    h1Line3: 'No Buffering, No Limits.',
    subtitlePrefix: 'Access',
    subtitleHighlight: '20,000+ global channels',
    subtitleSuffix: ', blockbuster movies, and premium series on any device. Instant activation.',
    ctaPrimary: 'Explore Plans',
    ctaSecondary: 'Learn More',
    devicesLabel: 'Compatible with all your devices',
  },
  da: {
    badge: 'Streamer nu i 4K Ultra HD',
    h1Line1: 'Den Ultimative 4K',
    h1Line2: 'Streaming Oplevelse.',
    h1Line3: 'Ingen Buffering, Ingen Grænser.',
    subtitlePrefix: 'Adgang til',
    subtitleHighlight: '20.000+ globale kanaler',
    subtitleSuffix: ', storfilm og premium-serier på enhver enhed. Øjeblikkelig aktivering.',
    ctaPrimary: 'Se Planer',
    ctaSecondary: 'Læs Mere',
    devicesLabel: 'Kompatibel med alle dine enheder',
  },
  no: {
    badge: 'Strømmer nå i 4K Ultra HD',
    h1Line1: 'Den Ultimative 4K',
    h1Line2: 'Strømmeopplevelsen.',
    h1Line3: 'Ingen Bufring, Ingen Grenser.',
    subtitlePrefix: 'Tilgang til',
    subtitleHighlight: '20 000+ globale kanaler',
    subtitleSuffix: ', storfilmer og premiumserier på alle enheter. Umiddelbar aktivering.',
    ctaPrimary: 'Se Planer',
    ctaSecondary: 'Les Mer',
    devicesLabel: 'Kompatibel med alle enhetene dine',
  },
  sv: {
    badge: 'Streamar nu i 4K Ultra HD',
    h1Line1: 'Den Ultimata 4K',
    h1Line2: 'Streamingupplevelsen.',
    h1Line3: 'Ingen Buffring, Inga Gränser.',
    subtitlePrefix: 'Tillgång till',
    subtitleHighlight: '20 000+ globala kanaler',
    subtitleSuffix: ', storfilmer och premiumserier på alla enheter. Omedelbar aktivering.',
    ctaPrimary: 'Visa Planer',
    ctaSecondary: 'Läs Mer',
    devicesLabel: 'Kompatibel med alla dina enheter',
  },
  fi: {
    badge: 'Suoratoistossa nyt 4K Ultra HD',
    h1Line1: 'Ylivertainen 4K',
    h1Line2: 'Suoratoistokokemus.',
    h1Line3: 'Ei Puskurointia, Ei Rajoja.',
    subtitlePrefix: 'Pääsy yli',
    subtitleHighlight: '20 000+ kanavaan maailmanlaajuisesti',
    subtitleSuffix: ', hittielokuviin ja premium-sarjoihin kaikilla laitteilla. Välitön aktivointi.',
    ctaPrimary: 'Katso Suunnitelmat',
    ctaSecondary: 'Lue Lisää',
    devicesLabel: 'Yhteensopiva kaikkien laitteidesi kanssa',
  },
  is: {
    badge: 'Streymir núna í 4K Ultra HD',
    h1Line1: 'Hin Fullkomna 4K',
    h1Line2: 'Streymisupplifun.',
    h1Line3: 'Engin Biðminni, Engin Takmörk.',
    subtitlePrefix: 'Aðgangur að',
    subtitleHighlight: '20.000+ alþjóðlegum rásum',
    subtitleSuffix: ', stórmyndum og premium-þáttaröðum á öllum tækjum. Samstundis virkjun.',
    ctaPrimary: 'Skoða Áætlanir',
    ctaSecondary: 'Lesa Meira',
    devicesLabel: 'Samhæft við öll tækin þín',
  },
};

export interface PageMeta {
  title: string;
  description: string;
}

export const pageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault – The Ultimate 4K Global Streaming Service | 20,000+ Channels',
    description: 'Access 20,000+ global TV channels, blockbuster movies and premium series in stunning 4K. Anti-Freeze Technology, instant activation. Try free for 24 hours.',
  },
  da: {
    title: 'StreamVault – Den Ultimative 4K Streaming Tjeneste | 20.000+ Kanaler',
    description: 'Adgang til 20.000+ globale TV-kanaler, storfilm og premium-serier i fantastisk 4K. Anti-Freeze Teknologi, øjeblikkelig aktivering. Prøv gratis i 24 timer.',
  },
  no: {
    title: 'StreamVault – Den Ultimative 4K Strømmetjeneste | 20 000+ Kanaler',
    description: 'Tilgang til 20 000+ globale TV-kanaler, storfilmer og premiumserier i fantastisk 4K. Anti-Freeze-teknologi, umiddelbar aktivering. Prøv gratis i 24 timer.',
  },
  sv: {
    title: 'StreamVault – Den Ultimata 4K-Streamingtjänsten | 20 000+ Kanaler',
    description: 'Tillgång till 20 000+ globala TV-kanaler, storfilmer och premiumserier i fantastisk 4K. Anti-Freeze-teknik, omedelbar aktivering. Prova gratis i 24 timmar.',
  },
  fi: {
    title: 'StreamVault – Ylivertainen 4K-Suoratoistopalvelu | 20 000+ Kanavaa',
    description: 'Pääsy yli 20 000 globaaliin TV-kanavaan, hittielokuviin ja premium-sarjoihin upeassa 4K-laadussa. Anti-Freeze-tekniikka, välitön aktivointi. Kokeile ilmaiseksi 24 tuntia.',
  },
  is: {
    title: 'StreamVault – Hin Fullkomna 4K Streymisþjónusta | 20.000+ Rásir',
    description: 'Aðgangur að 20.000+ alþjóðlegum sjónvarpsrásum, stórmyndum og premium-þáttaröðum í glæsilegri 4K gæðum. Anti-Freeze tækni, samstundis virkjun. Prófaðu ókeypis í 24 klukkustundir.',
  },
};
