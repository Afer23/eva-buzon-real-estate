import {defineConfig} from 'astro/config'
import tailwind from '@astrojs/tailwind'

// CAMBIAR este valor cuando se compre el dominio definitivo
const SITE = process.env.PUBLIC_SITE_URL || 'https://evabuzonrealestate.com'

export default defineConfig({
  site: SITE,
  integrations: [tailwind()],
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
