import { en } from './en';
import { es } from './es';

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getAlternateUrl(url: URL): string {
  const [, lang, ...rest] = url.pathname.split('/');
  const altLang: Lang = lang === 'es' ? 'en' : 'es';
  const restPath = rest.filter(Boolean).join('/');
  return restPath ? `/${altLang}/${restPath}` : `/${altLang}/`;
}

export function useTranslations(lang: Lang) {
  const dict = lang === 'en' ? en : es;
  return function t(key: string): string {
    const parts = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let val: any = dict;
    for (const part of parts) {
      val = val?.[part];
    }
    return typeof val === 'string' ? val : key;
  };
}
