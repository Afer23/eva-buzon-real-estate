import {ui, defaultLang, type Lang, type UIKey} from './ui'

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/')
  if (lang === 'es' || lang === 'en') return lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as any)[key] || (ui[defaultLang] as any)[key] || key
  }
}

export function pickLang<T extends {es: any; en?: any}>(value: T | undefined, lang: Lang): string {
  if (!value) return ''
  if (lang === 'en' && value.en) return value.en
  return value.es || ''
}

export function pickLangBlock<T extends {es?: any[]; en?: any[]}>(
  value: T | undefined,
  lang: Lang,
): any[] | undefined {
  if (!value) return undefined
  if (lang === 'en' && value.en && value.en.length) return value.en
  return value.es
}

export function formatPrice(price: number, operation: string, lang: Lang): string {
  const locale = lang === 'en' ? 'en-GB' : 'es-ES'
  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)
  if (operation === 'rent' || operation === 'shortTerm') {
    return `${formatted}${lang === 'en' ? '/mo' : '/mes'}`
  }
  return formatted
}

export function localizedPath(lang: Lang, path: string): string {
  const cleaned = path.replace(/^\/+/, '')
  return `/${lang}/${cleaned}`.replace(/\/+$/g, '/').replace(/\/$/, '') || `/${lang}`
}
