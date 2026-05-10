# Setup paso a paso

Esto es lo que tienes que hacer una vez la primera vez. Después, Eva trabajará solo desde el panel de Sanity.

## 0. Requisitos

- Node.js 20+ instalado en tu máquina (`node -v` para comprobar).
- Cuenta gratis en [sanity.io](https://sanity.io).
- Cuenta gratis en [vercel.com](https://vercel.com).
- Cuenta gratis en [formspree.io](https://formspree.io) (50 envíos/mes gratis, suficiente).

## 1. Crear el proyecto en Sanity

```bash
cd studio
npm install
npx sanity login
npx sanity init --env
```

Cuando te pregunte:
- **Create new project**: sí.
- **Project name**: `eva-buzon-real-estate`.
- **Use the default dataset configuration**: sí (`production`).
- **Project output path**: el directorio actual.

Esto te genera un `.env` con `SANITY_STUDIO_PROJECT_ID` y `SANITY_STUDIO_DATASET`. Apunta el `PROJECT_ID` — lo necesitarás en el paso 3.

## 2. Levantar el panel en local para probar

```bash
cd studio
npm run dev
```

Abre `http://localhost:3333`, crea tu primera propiedad de prueba y sube un par de fotos. Si lo ves, vamos por buen camino.

## 3. Configurar la web (Astro)

```bash
cd ../web
npm install
cp .env.example .env
```

Edita `.env`:

```
PUBLIC_SANITY_PROJECT_ID=<el project id del paso 1>
PUBLIC_SANITY_DATASET=production
PUBLIC_FORMSPREE_ID=<lo rellenamos en el paso 5>
PUBLIC_SITE_URL=http://localhost:4321
```

Levanta la web:

```bash
npm run dev
```

Abre `http://localhost:4321`. Deberías ver tu propiedad de prueba.

## 4. Desplegar el Studio (panel de Eva)

```bash
cd ../studio
npx sanity deploy
```

Te pedirá un nombre (por ejemplo `eva-buzon`). Quedará accesible en `https://eva-buzon.sanity.studio`. Esa es la URL que Eva usará desde su móvil para gestionar pisos.

Importante: en Sanity → Manage → Members, **invita a Eva** con su email. Le llegará una invitación y entrará con Google.

## 5. Configurar Formspree (formulario de contacto)

1. Crea cuenta en formspree.io con el email de Eva (o el tuyo y reenvías).
2. Crea un nuevo form llamado "Contacto Web".
3. Copia el ID del form (algo tipo `xpzgkqao`).
4. Pégalo en `web/.env` como `PUBLIC_FORMSPREE_ID`.

## 6. Comprar el dominio

Recomiendo Cloudflare Registrar o Namecheap (~10-15 €/año). Una vez comprado, edita:

- `web/astro.config.mjs` → cambiar `site: 'https://evabuzon.com'`.
- `web/.env` → `PUBLIC_SITE_URL=https://elnuevodominio.com`.

## 7. Desplegar la web a Vercel

```bash
cd web
npx vercel
```

Sigue las instrucciones. La primera vez te pedirá login (haz login con GitHub o email). Configura las variables de entorno en el dashboard de Vercel (las mismas que tienes en `.env`).

Después conecta el dominio en Vercel → Settings → Domains. Cloudflare/Namecheap te dará dos servidores DNS para apuntar el dominio a Vercel.

## 8. CORS de Sanity

Una vez tengas la web desplegada, en sanity.io → Manage → API → CORS Origins:

- Añade `https://evabuzon.com` (o el dominio definitivo) con credenciales NO marcadas.
- Mantén también `http://localhost:4321` para desarrollo.

## Después

Cada vez que Eva añada un piso desde el Studio, la web se regenera automáticamente en Vercel (gracias al webhook que Sanity dispara). Tarda ~30 segundos. Si quieres saltar la espera, Vercel tiene un botón "Redeploy".

## Mantenimiento

- **Backups**: Sanity hace snapshots automáticos. No tienes que preocuparte.
- **Costes a vigilar**: Vercel y Sanity tienen límites generosos en su plan gratis. Con 5-30 pisos y tráfico modesto no vas a llegar nunca.
- **SEO**: ya está optimizado de base. Cuando tenga tracción, registra el dominio en Google Search Console.
