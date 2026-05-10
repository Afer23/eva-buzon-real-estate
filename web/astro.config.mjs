import {defineConfig} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// CAMBIAR este valor cuando se compre el dominio definitivo
const SITE = process.env.PUBLIC_SITE_URL || 'https://evabuzon.com'

export default defineConfig({
  site: SITE,
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  image: {
    remotePatterns: [{protocol: 'https', hostname: 'cdn.sanity.io'}],
  },
})
