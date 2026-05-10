# Eva Buzón Martínez · Real Estate Andalucía

Web personal de Eva Buzón Martínez, agente inmobiliaria en Andalucía. Catálogo bilingüe (ES/EN) con panel de gestión propio para que Eva pueda subir, editar y retirar propiedades sin tocar código.

## Arquitectura

Dos carpetas independientes:

- **`web/`** — Sitio público en Astro + Tailwind. Lo que ven los compradores.
- **`studio/`** — Panel de administración en Sanity Studio. Donde Eva gestiona los pisos.

Ambos se conectan al mismo proyecto de Sanity (la "base de datos en la nube" de las propiedades). Eva entra al panel desde su navegador (móvil u ordenador), añade un piso con sus fotos, y al cabo de unos segundos aparece publicado en la web pública.

## Decisiones de diseño

- **Stack:** Astro (estático ultrarrápido) + Sanity (CMS muy amable para no-técnicos) + Vercel (hosting gratis) + Formspree (formulario de contacto sin backend).
- **Coste mensual:** 0 €. Solo se paga el dominio (~12 €/año).
- **Idiomas:** Español (`/es/`) e Inglés (`/en/`). La raíz `/` redirige a `/es/`.
- **Paleta:** Mediterránea cálida — blanco hueso, terracota como acento, carbón para texto.
- **Tipografía:** Playfair Display (titulares) + Inter (texto).
- **Pensado para compartir:** cada ficha tiene URL única, Open Graph optimizado para Facebook/Instagram/WhatsApp, y botón directo a WhatsApp con mensaje pre-rellenado.

## Modelo de datos: una propiedad

Cada piso tiene los campos típicos: tipo (piso, chalet, local, terreno), operación (venta/alquiler), precio, m², habitaciones, baños, dirección, ciudad, fotos, descripción (en ES y EN), estado (disponible/reservado/vendido), y un campo interno `origen` (captación propia / nombre de agencia colaboradora) que solo ve Eva — útil para saber qué fuente le funciona mejor.

## Para empezar

Mira `SETUP.md` para los pasos concretos de instalación y despliegue.

## Dominio

Pendiente de comprar. Tres opciones que recomiendo:

1. `evabuzon.com` — corto, su nombre, fácil de dictar por teléfono.
2. `evabuzonrealestate.com` — explícito en inglés, bueno para SEO internacional.
3. `eva-andalucia.com` — por zona, más genérico pero captura búsquedas regionales.

Una vez comprado, cambiar en `web/astro.config.mjs` (campo `site`) y en `web/.env`.
