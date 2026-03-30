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
  return locale === 'en' ? 'https://www.streamvault.com/' : `https://www.streamvault.com/${locale}/`;
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
    description: 'Access 20,000+ global TV channels, blockbuster movies and premium series in stunning 4K. Anti-Freeze Technology, instant activation. Try free for 4 hours.',
  },
  da: {
    title: 'StreamVault – Den Ultimative 4K Streaming Tjeneste | 20.000+ Kanaler',
    description: 'Adgang til 20.000+ globale TV-kanaler, storfilm og premium-serier i fantastisk 4K. Anti-Freeze Teknologi, øjeblikkelig aktivering. Prøv gratis i 4 timer.',
  },
  no: {
    title: 'StreamVault – Den Ultimative 4K Strømmetjeneste | 20 000+ Kanaler',
    description: 'Tilgang til 20 000+ globale TV-kanaler, storfilmer og premiumserier i fantastisk 4K. Anti-Freeze-teknologi, umiddelbar aktivering. Prøv gratis i 4 timer.',
  },
  sv: {
    title: 'StreamVault – Den Ultimata 4K-Streamingtjänsten | 20 000+ Kanaler',
    description: 'Tillgång till 20 000+ globala TV-kanaler, storfilmer och premiumserier i fantastisk 4K. Anti-Freeze-teknik, omedelbar aktivering. Prova gratis i 4 timmar.',
  },
  fi: {
    title: 'StreamVault – Ylivertainen 4K-Suoratoistopalvelu | 20 000+ Kanavaa',
    description: 'Pääsy yli 20 000 globaaliin TV-kanavaan, hittielokuviin ja premium-sarjoihin upeassa 4K-laadussa. Anti-Freeze-tekniikka, välitön aktivointi. Kokeile ilmaiseksi 4 tuntia.',
  },
  is: {
    title: 'StreamVault – Hin Fullkomna 4K Streymisþjónusta | 20.000+ Rásir',
    description: 'Aðgangur að 20.000+ alþjóðlegum sjónvarpsrásum, stórmyndum og premium-þáttaröðum í glæsilegri 4K gæðum. Anti-Freeze tækni, samstundis virkjun. Prófaðu ókeypis í 4 klukkustundir.',
  },
};

export const pricingPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault Pricing Plans – 4K Streaming from €5.83/month | Choose Your Plan',
    description: 'Compare StreamVault subscription plans: Trial, Starter, Pro and Ultimate. 4K streaming, Anti-Freeze Technology, up to 80,000+ VOD titles. Plans from €12.99. Free 4-hour trial available.',
  },
  da: {
    title: 'StreamVault Priser – 4K Streaming fra 519 kr/år | Vælg Din Plan',
    description: 'Sammenlign StreamVault abonnementer: Prøve, Starter, Pro og Ultimate. 4K streaming, Anti-Freeze Teknologi, op til 80.000+ VOD-titler. Planer fra 99 kr. Gratis 4-timers prøveperiode.',
  },
  no: {
    title: 'StreamVault Priser – 4K Strømming fra 779 kr/år | Velg Din Plan',
    description: 'Sammenlign StreamVault abonnementer: Prøve, Starter, Pro og Ultimate. 4K strømming, Anti-Freeze-teknologi, opptil 80 000+ VOD-titler. Planer fra 149 kr. Gratis 4-timers prøveperiode.',
  },
  sv: {
    title: 'StreamVault Priser – 4K Streaming från 779 kr/år | Välj Din Plan',
    description: 'Jämför StreamVault prenumerationer: Prov, Starter, Pro och Ultimate. 4K streaming, Anti-Freeze-teknik, upp till 80 000+ VOD-titlar. Planer från 149 kr. Gratis 4-timmars provperiod.',
  },
  fi: {
    title: 'StreamVault Hinnat – 4K-Suoratoisto alkaen 5,83 €/kk | Valitse Pakettisi',
    description: 'Vertaa StreamVault-tilauksia: Kokeilu, Starter, Pro ja Ultimate. 4K-suoratoisto, Anti-Freeze-tekniikka, jopa 80 000+ VOD-nimikettä. Paketit alkaen 12,99 €. Ilmainen 4 tunnin kokeilu.',
  },
  is: {
    title: 'StreamVault Verðskrá – 4K Streymi frá 13.499 kr/ár | Veldu Áætlun',
    description: 'Berðu saman StreamVault áskriftir: Prufa, Starter, Pro og Ultimate. 4K streymi, Anti-Freeze tækni, allt að 80.000+ VOD titlar. Áætlanir frá 2.499 kr. Ókeypis 4 stunda prufutímabil.',
  },
};

export const contentPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault Content Library – 20,000+ Live Channels & 80,000+ Movies & Series',
    description: 'Explore the StreamVault content library: 20,000+ live TV channels, Premier League, Champions League, NBA, plus 80,000+ on-demand movies and series in stunning 4K quality.',
  },
  da: {
    title: 'StreamVault Indholdsbibliotek – 20.000+ Live Kanaler & 80.000+ Film & Serier',
    description: 'Udforsk StreamVault indholdsbiblioteket: 20.000+ live TV-kanaler, Premier League, Champions League, NBA, plus 80.000+ on-demand film og serier i fantastisk 4K kvalitet.',
  },
  no: {
    title: 'StreamVault Innholdsbibliotek – 20 000+ Live Kanaler & 80 000+ Filmer & Serier',
    description: 'Utforsk StreamVault innholdsbiblioteket: 20 000+ live TV-kanaler, Premier League, Champions League, NBA, pluss 80 000+ on-demand filmer og serier i fantastisk 4K kvalitet.',
  },
  sv: {
    title: 'StreamVault Innehållsbibliotek – 20 000+ Livekanaler & 80 000+ Filmer & Serier',
    description: 'Utforska StreamVault innehållsbiblioteket: 20 000+ live TV-kanaler, Premier League, Champions League, NBA, plus 80 000+ on-demand filmer och serier i fantastisk 4K kvalitet.',
  },
  fi: {
    title: 'StreamVault Sisältökirjasto – 20 000+ Live-Kanavaa & 80 000+ Elokuvaa & Sarjaa',
    description: 'Tutustu StreamVault-sisältökirjastoon: 20 000+ live TV-kanavaa, Premier League, Champions League, NBA, sekä 80 000+ tilausvideoelokuvaa ja -sarjaa upeassa 4K-laadussa.',
  },
  is: {
    title: 'StreamVault Efnissafn – 20.000+ Beinar Rásir & 80.000+ Myndir & Þættir',
    description: 'Skoðaðu StreamVault efnissafnið: 20.000+ beinar sjónvarpsrásir, Premier League, Champions League, NBA, ásamt 80.000+ on-demand myndum og þáttaröðum í glæsilegri 4K gæðum.',
  },
};

export const setupPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault Setup Guide – Easy Installation in 3 Steps | All Devices',
    description: 'Set up StreamVault in minutes. Simple 3-step installation guide for Firestick, Apple TV, Android, Smart TVs, and all devices. Instant activation after subscription.',
  },
  da: {
    title: 'StreamVault Opsætningsguide – Nem Installation i 3 Trin | Alle Enheder',
    description: 'Opsæt StreamVault på få minutter. Enkel 3-trins installationsguide til Firestick, Apple TV, Android, Smart TV og alle enheder. Øjeblikkelig aktivering efter tilmelding.',
  },
  no: {
    title: 'StreamVault Oppsettguide – Enkel Installasjon i 3 Steg | Alle Enheter',
    description: 'Sett opp StreamVault på minutter. Enkel 3-trinns installasjonsguide for Firestick, Apple TV, Android, Smart-TV og alle enheter. Umiddelbar aktivering etter abonnering.',
  },
  sv: {
    title: 'StreamVault Installationsguide – Enkel Installation i 3 Steg | Alla Enheter',
    description: 'Ställ in StreamVault på minuter. Enkel 3-stegs installationsguide för Firestick, Apple TV, Android, Smart-TV och alla enheter. Omedelbar aktivering efter prenumeration.',
  },
  fi: {
    title: 'StreamVault Asennusopas – Helppo Asennus 3 Vaiheessa | Kaikki Laitteet',
    description: 'Asenna StreamVault minuuteissa. Yksinkertainen 3-vaiheen asennusopas Firestickille, Apple TV:lle, Androidille, älytelevisioille ja kaikille laitteille. Välitön aktivointi tilauksen jälkeen.',
  },
  is: {
    title: 'StreamVault Uppsetningarleiðbeiningar – Auðveld Uppsetning í 3 Skrefum | Öll Tæki',
    description: 'Settu upp StreamVault á nokkrum mínútum. Einföld 3-skrefa uppsetningarleiðbeining fyrir Firestick, Apple TV, Android, Smart-sjónvörp og öll tæki. Samstundis virkjun eftir áskrift.',
  },
};

export const featuresPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault Features – Anti-Freeze Technology, 4K Streaming & 20,000+ Channels',
    description: 'Discover StreamVault features: Anti-Freeze buffering elimination, 4K Ultra HD quality, 20,000+ live channels, multi-device support, instant activation, and 24/7 customer support.',
  },
  da: {
    title: 'StreamVault Funktioner – Anti-Freeze Teknologi, 4K Streaming & 20.000+ Kanaler',
    description: 'Opdag StreamVault-funktioner: Anti-Freeze bufferingseliminering, 4K Ultra HD kvalitet, 20.000+ live kanaler, multi-enhedssupport, øjeblikkelig aktivering og 24/7 kundesupport.',
  },
  no: {
    title: 'StreamVault Funksjoner – Anti-Freeze-teknologi, 4K Strømming & 20 000+ Kanaler',
    description: 'Oppdag StreamVault-funksjoner: Anti-Freeze bufringseliminering, 4K Ultra HD-kvalitet, 20 000+ live kanaler, multi-enhetsstøtte, umiddelbar aktivering og 24/7 kundestøtte.',
  },
  sv: {
    title: 'StreamVault Funktioner – Anti-Freeze-teknik, 4K Streaming & 20 000+ Kanaler',
    description: 'Upptäck StreamVault-funktioner: Anti-Freeze buffringseliminering, 4K Ultra HD-kvalitet, 20 000+ livekanaler, stöd för flera enheter, omedelbar aktivering och 24/7 kundsupport.',
  },
  fi: {
    title: 'StreamVault Ominaisuudet – Anti-Freeze-tekniikka, 4K-Suoratoisto & 20 000+ Kanavaa',
    description: 'Tutustu StreamVault-ominaisuuksiin: Anti-Freeze-puskuroinninesto, 4K Ultra HD -laatu, 20 000+ live-kanavaa, monilaitteinen tuki, välitön aktivointi ja 24/7 asiakastuki.',
  },
  is: {
    title: 'StreamVault Eiginleikar – Anti-Freeze Tækni, 4K Streymi & 20.000+ Rásir',
    description: 'Uppgötvaðu StreamVault eiginleika: Anti-Freeze biðminnaútrýming, 4K Ultra HD gæði, 20.000+ beinar rásir, fjöltækjastuðningur, samstundis virkjun og 24/7 þjónustuver.',
  },
};

export const faqPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault FAQ – Frequently Asked Questions About 4K Streaming Service',
    description: 'Find answers to common questions about StreamVault: supported devices, VPN compatibility, free trial, simultaneous connections, Anti-Freeze Technology, and instant activation.',
  },
  da: {
    title: 'StreamVault FAQ – Ofte Stillede Spørgsmål om 4K Streamingtjeneste',
    description: 'Find svar på almindelige spørgsmål om StreamVault: understøttede enheder, VPN-kompatibilitet, gratis prøveperiode, samtidige forbindelser, Anti-Freeze Teknologi og øjeblikkelig aktivering.',
  },
  no: {
    title: 'StreamVault FAQ – Ofte Stilte Spørsmål om 4K Strømmetjeneste',
    description: 'Finn svar på vanlige spørsmål om StreamVault: støttede enheter, VPN-kompatibilitet, gratis prøveperiode, samtidige tilkoblinger, Anti-Freeze-teknologi og umiddelbar aktivering.',
  },
  sv: {
    title: 'StreamVault FAQ – Vanliga Frågor om 4K-Streamingtjänst',
    description: 'Hitta svar på vanliga frågor om StreamVault: enheter som stöds, VPN-kompatibilitet, gratis provperiod, samtidiga anslutningar, Anti-Freeze-teknik och omedelbar aktivering.',
  },
  fi: {
    title: 'StreamVault UKK – Usein Kysytyt Kysymykset 4K-Suoratoistopalvelusta',
    description: 'Löydä vastauksia yleisiin kysymyksiin StreamVaultista: tuetut laitteet, VPN-yhteensopivuus, ilmainen kokeilu, samanaikaiset yhteydet, Anti-Freeze-tekniikka ja välitön aktivointi.',
  },
  is: {
    title: 'StreamVault FAQ – Algengar Spurningar um 4K Streymisþjónustu',
    description: 'Finndu svör við algengum spurningum um StreamVault: studd tæki, VPN samhæfni, ókeypis prufutímabil, samtímis tengingar, Anti-Freeze tækni og samstundis virkjun.',
  },
};

export function getSubpageSwitcherUrl(locale: Locale, subpage: string): string {
  return getRelativeLocaleUrl(locale, `/${subpage}`);
}
