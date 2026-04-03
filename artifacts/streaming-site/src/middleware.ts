import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LOCALES = ['da', 'no', 'sv', 'fi', 'is'] as const;
const LOCALE_COOKIE = 'sv-preferred-locale';

function parseAcceptLanguage(header: string | null): string {
  if (!header) return 'en';

  const languages = header
    .split(',')
    .map((part) => {
      const [lang, qPart] = part.trim().split(';');
      const q = qPart ? parseFloat(qPart.split('=')[1]) : 1;
      return { lang: lang.trim().toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of languages) {
    const primary = lang.split('-')[0];
    if (primary === 'nb' || primary === 'nn') return 'no';
    if ((SUPPORTED_LOCALES as readonly string[]).includes(primary)) return primary;
    if (primary === 'en') return 'en';
  }

  return 'en';
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  if (pathname !== '/') {
    return next();
  }

  const cookieLocale = context.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale) {
    if ((SUPPORTED_LOCALES as readonly string[]).includes(cookieLocale)) {
      return context.redirect(`/${cookieLocale}/`, 302);
    }
    return context.redirect('/en/', 302);
  }

  const acceptLang = context.request.headers.get('accept-language');
  const detected = parseAcceptLanguage(acceptLang);

  if ((SUPPORTED_LOCALES as readonly string[]).includes(detected)) {
    return context.redirect(`/${detected}/`, 302);
  }

  return context.redirect('/en/', 302);
});
