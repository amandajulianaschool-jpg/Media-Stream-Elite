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
  return `/${locale}/`;
}

export function getLocaleUrl(locale: Locale): string {
  return `https://www.streamvault.com/${locale}/`;
}

export function getRelativeLocaleUrl(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${locale}/${cleanPath}`;
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
    h1Line1: 'Premium IPTV —',
    h1Line2: 'All-in-One 4K Streaming.',
    h1Line3: 'No Buffering. No Limits.',
    subtitlePrefix: 'Access',
    subtitleHighlight: '20,000+ elite global channels',
    subtitleSuffix: ', 65,000+ blockbuster titles, and premium original series on any device. Instant activation, zero buffering.',
    ctaPrimary: 'Explore Plans',
    ctaSecondary: 'Learn More',
    devicesLabel: 'Compatible with all your devices',
  },
  da: {
    badge: 'Streamer nu i 4K Ultra HD',
    h1Line1: 'Premium IPTV —',
    h1Line2: 'Alt-i-én 4K Streaming.',
    h1Line3: 'Ingen Buffering. Ingen Grænser.',
    subtitlePrefix: 'Adgang til',
    subtitleHighlight: '20.000+ globale elitekanaler',
    subtitleSuffix: ', 65.000+ blockbuster-titler og premium originalserier på enhver enhed. Øjeblikkelig aktivering, nul buffering.',
    ctaPrimary: 'Se Planer',
    ctaSecondary: 'Læs Mere',
    devicesLabel: 'Kompatibel med alle dine enheder',
  },
  no: {
    badge: 'Strømmer nå i 4K Ultra HD',
    h1Line1: 'Premium IPTV —',
    h1Line2: 'Alt-i-ett 4K Strømming.',
    h1Line3: 'Ingen Bufring. Ingen Grenser.',
    subtitlePrefix: 'Tilgang til',
    subtitleHighlight: '20 000+ globale elitekanaler',
    subtitleSuffix: ', 65 000+ blockbuster-titler og premium originalserier på alle enheter. Umiddelbar aktivering, null bufring.',
    ctaPrimary: 'Se Planer',
    ctaSecondary: 'Les Mer',
    devicesLabel: 'Kompatibel med alle enhetene dine',
  },
  sv: {
    badge: 'Streamar nu i 4K Ultra HD',
    h1Line1: 'Premium IPTV —',
    h1Line2: 'Allt-i-ett 4K Streaming.',
    h1Line3: 'Ingen Buffring. Inga Gränser.',
    subtitlePrefix: 'Tillgång till',
    subtitleHighlight: '20 000+ globala elitkanaler',
    subtitleSuffix: ', 65 000+ blockbuster-titlar och premium originalserier på alla enheter. Omedelbar aktivering, noll buffring.',
    ctaPrimary: 'Visa Planer',
    ctaSecondary: 'Läs Mer',
    devicesLabel: 'Kompatibel med alla dina enheter',
  },
  fi: {
    badge: 'Suoratoistossa nyt 4K Ultra HD',
    h1Line1: 'Premium IPTV —',
    h1Line2: 'Kaikki-yhdessä 4K Suoratoisto.',
    h1Line3: 'Ei Puskurointia. Ei Rajoja.',
    subtitlePrefix: 'Pääsy yli',
    subtitleHighlight: '20 000+ eliittikanavaan maailmanlaajuisesti',
    subtitleSuffix: ', 65 000+ blockbuster-nimikettä ja premium-alkuperäissarjoja kaikilla laitteilla. Välitön aktivointi, nolla puskurointia.',
    ctaPrimary: 'Katso Suunnitelmat',
    ctaSecondary: 'Lue Lisää',
    devicesLabel: 'Yhteensopiva kaikkien laitteidesi kanssa',
  },
  is: {
    badge: 'Streymir núna í 4K Ultra HD',
    h1Line1: 'Premium IPTV —',
    h1Line2: 'Allt-í-einu 4K Streymi.',
    h1Line3: 'Engin Biðminni. Engin Takmörk.',
    subtitlePrefix: 'Aðgangur að',
    subtitleHighlight: '20.000+ úrvalsrásum á heimsvísu',
    subtitleSuffix: ', 65.000+ blockbuster-titlum og premium upprunalegum þáttaröðum á öllum tækjum. Samstundis virkjun, engin biðminni.',
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
    title: 'StreamVault Premium IPTV — 20,000+ 4K Channels & 65,000+ Movies | Try Free',
    description: 'Stream 20,000+ live channels and 65,000+ movies & series in 4K Ultra HD. Anti-Freeze technology, zero buffering, instant activation. Free 4-hour trial — no credit card.',
  },
  da: {
    title: 'StreamVault Premium IPTV — 20.000+ 4K Kanaler & 65.000+ Film | Prøv Gratis',
    description: 'Stream 20.000+ livekanaler og 65.000+ film & serier i 4K Ultra HD. Anti-Freeze teknologi, nul buffering, øjeblikkelig aktivering. Gratis 4-timers prøveperiode — intet kreditkort.',
  },
  no: {
    title: 'StreamVault Premium IPTV — 20 000+ 4K Kanaler & 65 000+ Filmer | Prøv Gratis',
    description: 'Strøm 20 000+ livekanaler og 65 000+ filmer & serier i 4K Ultra HD. Anti-Freeze teknologi, null bufring, umiddelbar aktivering. Gratis 4-timers prøveperiode — ingen kredittkort.',
  },
  sv: {
    title: 'StreamVault Premium IPTV — 20 000+ 4K Kanaler & 65 000+ Filmer | Prova Gratis',
    description: 'Streama 20 000+ livekanaler och 65 000+ filmer & serier i 4K Ultra HD. Anti-Freeze teknik, noll buffring, omedelbar aktivering. Gratis 4-timmars provperiod — inget kreditkort.',
  },
  fi: {
    title: 'StreamVault Premium IPTV — 20 000+ 4K Kanavaa & 65 000+ Elokuvaa | Kokeile Ilmaiseksi',
    description: 'Suoratoista 20 000+ livekanavaa ja 65 000+ elokuvaa & sarjaa 4K Ultra HD -laadulla. Anti-Freeze tekniikka, nolla puskurointia, välitön aktivointi. Ilmainen 4 tunnin kokeilu — ei luottokorttia.',
  },
  is: {
    title: 'StreamVault Premium IPTV — 20.000+ 4K Rásir & 65.000+ Kvikmyndir | Prófaðu Ókeypis',
    description: 'Streymdu 20.000+ beinar rásir og 65.000+ kvikmyndir & þáttaraðir í 4K Ultra HD. Anti-Freeze tækni, engin biðminni, samstundis virkjun. Ókeypis 4 stunda prufa — ekkert kreditkort.',
  },
};

export const pricingPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault Pricing — Premium IPTV from €4.99/mo | 4K Streaming Plans',
    description: 'Compare StreamVault IPTV plans: Trial, Starter, Pro and Ultimate. 4K streaming, Anti-Freeze Technology, up to 80,000+ VOD titles. Plans from €12.99/mo. Free 4-hour trial — no credit card.',
  },
  da: {
    title: 'StreamVault Priser — Premium IPTV fra 43 kr/md | 4K Streamingplaner',
    description: 'Sammenlign StreamVault IPTV-planer: Prøve, Starter, Pro og Ultimate. 4K streaming, Anti-Freeze Teknologi, op til 80.000+ VOD-titler. Planer fra 99 kr/md. Gratis 4-timers prøveperiode.',
  },
  no: {
    title: 'StreamVault Priser — Premium IPTV fra 57 kr/md | 4K Strømmeplaner',
    description: 'Sammenlign StreamVault IPTV-planer: Prøve, Starter, Pro og Ultimate. 4K strømming, Anti-Freeze teknologi, opptil 80 000+ VOD-titler. Planer fra 149 kr/md. Gratis 4-timers prøveperiode.',
  },
  sv: {
    title: 'StreamVault Priser — Premium IPTV från 57 kr/mån | 4K Streamingplaner',
    description: 'Jämför StreamVault IPTV-planer: Prov, Starter, Pro och Ultimate. 4K streaming, Anti-Freeze teknik, upp till 80 000+ VOD-titlar. Planer från 149 kr/mån. Gratis 4-timmars provperiod.',
  },
  fi: {
    title: 'StreamVault Hinnat — Premium IPTV alkaen 4,99 €/kk | 4K Suoratoistopaketit',
    description: 'Vertaa StreamVault IPTV-paketteja: Kokeilu, Starter, Pro ja Ultimate. 4K suoratoisto, Anti-Freeze tekniikka, jopa 80 000+ VOD-nimikettä. Paketit alkaen 12,99 €/kk. Ilmainen 4 tunnin kokeilu.',
  },
  is: {
    title: 'StreamVault Verðskrá — Premium IPTV frá 958 kr/mán | 4K Streymiáætlanir',
    description: 'Berðu saman StreamVault IPTV áætlanir: Prufa, Starter, Pro og Ultimate. 4K streymi, Anti-Freeze tækni, allt að 80.000+ VOD titlar. Áætlanir frá 2.499 kr/mán. Ókeypis 4 stunda prufa.',
  },
};

export const contentPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault Content Library — 20,000+ Live Channels & 80,000+ Movies in 4K',
    description: 'Explore StreamVault\'s massive content library: 20,000+ live TV channels, top-tier European football, global motorsports, combat sports, plus 80,000+ on-demand movies and series in 4K.',
  },
  da: {
    title: 'StreamVault Indholdsbibliotek — 20.000+ Livekanaler & 80.000+ Film i 4K',
    description: 'Udforsk StreamVaults massive indholdsbibliotek: 20.000+ live TV-kanaler, europæisk topfodbold, global motorsport, kampsport, plus 80.000+ on-demand film og serier i 4K.',
  },
  no: {
    title: 'StreamVault Innholdsbibliotek — 20 000+ Livekanaler & 80 000+ Filmer i 4K',
    description: 'Utforsk StreamVaults massive innholdsbibliotek: 20 000+ live TV-kanaler, europeisk toppfotball, global motorsport, kampsport, pluss 80 000+ on-demand filmer og serier i 4K.',
  },
  sv: {
    title: 'StreamVault Innehållsbibliotek — 20 000+ Livekanaler & 80 000+ Filmer i 4K',
    description: 'Utforska StreamVaults enorma innehållsbibliotek: 20 000+ live TV-kanaler, europeisk toppfotboll, global motorsport, kampsport, plus 80 000+ on-demand filmer och serier i 4K.',
  },
  fi: {
    title: 'StreamVault Sisältökirjasto — 20 000+ Livekanavaa & 80 000+ Elokuvaa 4K-laadulla',
    description: 'Tutustu StreamVaultin massiiviseen sisältökirjastoon: 20 000+ live TV-kanavaa, eurooppalainen huippujalkapallo, maailman moottoriurheilu, kamppailulajit, sekä 80 000+ on-demand elokuvaa ja sarjaa 4K-laadulla.',
  },
  is: {
    title: 'StreamVault Efnissafn — 20.000+ Beinar Rásir & 80.000+ Kvikmyndir í 4K',
    description: 'Skoðaðu gríðarlegt efnissafn StreamVault: 20.000+ beinar sjónvarpsrásir, evrópskur toppfótbolti, alþjóðleg motorsport, bardagaíþróttir, ásamt 80.000+ on-demand kvikmyndum og þáttaröðum í 4K.',
  },
};

export const setupPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault Setup — Premium IPTV Installation in 3 Easy Steps | All Devices',
    description: 'Set up StreamVault Premium IPTV in minutes. Simple 3-step guide for Firestick, Apple TV, Android, Smart TVs, and all devices. Instant activation, 24/7 WhatsApp support.',
  },
  da: {
    title: 'StreamVault Opsætning — Premium IPTV Installation i 3 Nemme Trin | Alle Enheder',
    description: 'Opsæt StreamVault Premium IPTV på få minutter. Enkel 3-trins guide til Firestick, Apple TV, Android, Smart TV og alle enheder. Øjeblikkelig aktivering, 24/7 WhatsApp support.',
  },
  no: {
    title: 'StreamVault Oppsett — Premium IPTV Installasjon i 3 Enkle Steg | Alle Enheter',
    description: 'Sett opp StreamVault Premium IPTV på minutter. Enkel 3-trinns guide for Firestick, Apple TV, Android, Smart-TV og alle enheter. Umiddelbar aktivering, 24/7 WhatsApp support.',
  },
  sv: {
    title: 'StreamVault Installation — Premium IPTV i 3 Enkla Steg | Alla Enheter',
    description: 'Ställ in StreamVault Premium IPTV på minuter. Enkel 3-stegs guide för Firestick, Apple TV, Android, Smart-TV och alla enheter. Omedelbar aktivering, 24/7 WhatsApp support.',
  },
  fi: {
    title: 'StreamVault Asennus — Premium IPTV 3 Helpossa Vaiheessa | Kaikki Laitteet',
    description: 'Asenna StreamVault Premium IPTV minuuteissa. Yksinkertainen 3-vaiheen opas Firestickille, Apple TV:lle, Androidille, älytelevisioille ja kaikille laitteille. Välitön aktivointi, 24/7 WhatsApp-tuki.',
  },
  is: {
    title: 'StreamVault Uppsetning — Premium IPTV í 3 Auðveldum Skrefum | Öll Tæki',
    description: 'Settu upp StreamVault Premium IPTV á nokkrum mínútum. Einföld 3-skrefa leiðbeining fyrir Firestick, Apple TV, Android, Smart-sjónvörp og öll tæki. Samstundis virkjun, 24/7 WhatsApp aðstoð.',
  },
};

export const featuresPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault Features — Anti-Freeze Technology, 4K IPTV & 24/7 WhatsApp Support',
    description: 'Why StreamVault? Anti-Freeze buffering elimination, 4K Ultra HD on 20,000+ channels, all-device support, instant activation, and dedicated 24/7 WhatsApp support in under 2 minutes.',
  },
  da: {
    title: 'StreamVault Funktioner — Anti-Freeze Teknologi, 4K IPTV & 24/7 WhatsApp Support',
    description: 'Hvorfor StreamVault? Anti-Freeze buffering-eliminering, 4K Ultra HD på 20.000+ kanaler, alle-enheder support, øjeblikkelig aktivering og dedikeret 24/7 WhatsApp support på under 2 minutter.',
  },
  no: {
    title: 'StreamVault Funksjoner — Anti-Freeze Teknologi, 4K IPTV & 24/7 WhatsApp Support',
    description: 'Hvorfor StreamVault? Anti-Freeze bufringseliminering, 4K Ultra HD på 20 000+ kanaler, alle-enheter støtte, umiddelbar aktivering og dedikert 24/7 WhatsApp support på under 2 minutter.',
  },
  sv: {
    title: 'StreamVault Funktioner — Anti-Freeze Teknik, 4K IPTV & 24/7 WhatsApp Support',
    description: 'Varför StreamVault? Anti-Freeze buffringseliminering, 4K Ultra HD på 20 000+ kanaler, alla-enheter stöd, omedelbar aktivering och dedikerad 24/7 WhatsApp support på under 2 minuter.',
  },
  fi: {
    title: 'StreamVault Ominaisuudet — Anti-Freeze Tekniikka, 4K IPTV & 24/7 WhatsApp Tuki',
    description: 'Miksi StreamVault? Anti-Freeze puskuroinninesto, 4K Ultra HD 20 000+ kanavalla, kaikkien laitteiden tuki, välitön aktivointi ja omistautunut 24/7 WhatsApp-tuki alle 2 minuutissa.',
  },
  is: {
    title: 'StreamVault Eiginleikar — Anti-Freeze Tækni, 4K IPTV & 24/7 WhatsApp Aðstoð',
    description: 'Hvers vegna StreamVault? Anti-Freeze biðminnaútrýming, 4K Ultra HD á 20.000+ rásum, öll-tæki stuðningur, samstundis virkjun og sérstök 24/7 WhatsApp aðstoð á undir 2 mínútum.',
  },
};

export const faqPageMeta: Record<Locale, PageMeta> = {
  en: {
    title: 'StreamVault FAQ — Premium IPTV Questions Answered | Devices, Trial & Setup',
    description: 'Get answers about StreamVault Premium IPTV: supported devices, free 4-hour trial, VPN compatibility, Nordic channel coverage, VOD library, Anti-Freeze Technology, and 24/7 WhatsApp support.',
  },
  da: {
    title: 'StreamVault FAQ — Premium IPTV Spørgsmål Besvaret | Enheder, Prøve & Opsætning',
    description: 'Få svar om StreamVault Premium IPTV: understøttede enheder, gratis 4-timers prøve, VPN-kompatibilitet, nordisk kanaldækning, VOD-bibliotek, Anti-Freeze Teknologi og 24/7 WhatsApp support.',
  },
  no: {
    title: 'StreamVault FAQ — Premium IPTV Spørsmål Besvart | Enheter, Prøve & Oppsett',
    description: 'Få svar om StreamVault Premium IPTV: støttede enheter, gratis 4-timers prøve, VPN-kompatibilitet, nordisk kanaldekning, VOD-bibliotek, Anti-Freeze teknologi og 24/7 WhatsApp support.',
  },
  sv: {
    title: 'StreamVault FAQ — Premium IPTV Frågor Besvarade | Enheter, Prov & Installation',
    description: 'Få svar om StreamVault Premium IPTV: enheter som stöds, gratis 4-timmars prov, VPN-kompatibilitet, nordisk kanaltäckning, VOD-bibliotek, Anti-Freeze teknik och 24/7 WhatsApp support.',
  },
  fi: {
    title: 'StreamVault UKK — Premium IPTV Kysymykset Vastattu | Laitteet, Kokeilu & Asennus',
    description: 'Saa vastauksia StreamVault Premium IPTV:stä: tuetut laitteet, ilmainen 4 tunnin kokeilu, VPN-yhteensopivuus, pohjoismainen kanavakattavuus, VOD-kirjasto, Anti-Freeze tekniikka ja 24/7 WhatsApp tuki.',
  },
  is: {
    title: 'StreamVault FAQ — Premium IPTV Spurningum Svarað | Tæki, Prufa & Uppsetning',
    description: 'Fáðu svör um StreamVault Premium IPTV: studd tæki, ókeypis 4 stunda prufa, VPN samhæfni, norræn rásaþjónusta, VOD safn, Anti-Freeze tækni og 24/7 WhatsApp aðstoð.',
  },
};

export function getSubpageSwitcherUrl(locale: Locale, subpage: string): string {
  return getRelativeLocaleUrl(locale, `/${subpage}`);
}
