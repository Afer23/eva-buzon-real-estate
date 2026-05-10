import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const property = defineType({
  name: 'property',
  title: 'Propiedad',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'main', title: 'Datos principales', default: true},
    {name: 'details', title: 'Detalles'},
    {name: 'description', title: 'Descripción'},
    {name: 'media', title: 'Fotos'},
    {name: 'internal', title: 'Solo Eva (interno)'},
  ],
  fields: [
    // ---------------- DATOS PRINCIPALES ----------------
    defineField({
      name: 'title',
      title: 'Título / Referencia',
      description: 'Nombre corto de la propiedad. Ej: "Piso reformado en La Carihuela"',
      type: 'string',
      group: 'main',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'URL (slug)',
      description: 'Se genera solo a partir del título. Pulsa "Generar".',
      type: 'slug',
      group: 'main',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'string',
      group: 'main',
      options: {
        list: [
          {title: 'Disponible', value: 'available'},
          {title: 'Reservada', value: 'reserved'},
          {title: 'Vendida / Alquilada', value: 'closed'},
          {title: 'Borrador (no publicar)', value: 'draft'},
        ],
        layout: 'radio',
      },
      initialValue: 'available',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'operation',
      title: 'Operación',
      type: 'string',
      group: 'main',
      options: {
        list: [
          {title: 'Venta', value: 'sale'},
          {title: 'Alquiler', value: 'rent'},
          {title: 'Alquiler vacacional', value: 'shortTerm'},
        ],
        layout: 'radio',
      },
      initialValue: 'sale',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio (€)',
      description: 'Para alquileres, precio mensual.',
      type: 'number',
      group: 'main',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'featured',
      title: 'Destacar en página de inicio',
      type: 'boolean',
      group: 'main',
      initialValue: false,
    }),

    // ---------------- DETALLES ----------------
    defineField({
      name: 'propertyType',
      title: 'Tipo',
      type: 'string',
      group: 'details',
      options: {
        list: [
          {title: 'Piso', value: 'apartment'},
          {title: 'Ático', value: 'penthouse'},
          {title: 'Estudio', value: 'studio'},
          {title: 'Casa / Chalet', value: 'house'},
          {title: 'Adosado', value: 'townhouse'},
          {title: 'Local comercial', value: 'commercial'},
          {title: 'Terreno / Parcela', value: 'land'},
          {title: 'Garaje', value: 'garage'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bedrooms',
      title: 'Habitaciones',
      type: 'number',
      group: 'details',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'bathrooms',
      title: 'Baños',
      type: 'number',
      group: 'details',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'area',
      title: 'Superficie (m²)',
      type: 'number',
      group: 'details',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'plotArea',
      title: 'Superficie de parcela (m²)',
      description: 'Solo para casas / terrenos. Dejar vacío si no aplica.',
      type: 'number',
      group: 'details',
    }),
    defineField({
      name: 'city',
      title: 'Ciudad / Municipio',
      type: 'string',
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'neighborhood',
      title: 'Zona / Barrio',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'address',
      title: 'Dirección aproximada',
      description: 'Sin número ni piso (privacidad). Ej: "Calle Larios, Centro"',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'features',
      title: 'Características',
      description: 'Marca todas las que aplican.',
      type: 'array',
      group: 'details',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Piscina', value: 'pool'},
          {title: 'Terraza', value: 'terrace'},
          {title: 'Jardín', value: 'garden'},
          {title: 'Garaje incluido', value: 'parking'},
          {title: 'Trastero', value: 'storage'},
          {title: 'Aire acondicionado', value: 'ac'},
          {title: 'Calefacción', value: 'heating'},
          {title: 'Ascensor', value: 'elevator'},
          {title: 'Vistas al mar', value: 'seaView'},
          {title: 'Amueblado', value: 'furnished'},
          {title: 'Reformado', value: 'renovated'},
          {title: 'A reformar', value: 'needsWork'},
          {title: 'Obra nueva', value: 'newBuild'},
          {title: 'Apto turístico', value: 'touristLicense'},
        ],
      },
    }),
    defineField({
      name: 'energyRating',
      title: 'Certificado energético',
      type: 'string',
      group: 'details',
      options: {
        list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'En trámite', 'Exento'],
        layout: 'radio',
      },
    }),

    // ---------------- DESCRIPCIÓN ----------------
    defineField({
      name: 'shortDescription',
      title: 'Descripción corta (ES + EN)',
      description: 'Una o dos frases. Aparece en las tarjetas y en la previsualización al compartir en redes.',
      type: 'bilingualText',
      group: 'description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción completa (ES + EN)',
      description: 'Texto largo de la ficha. Si no rellenas el inglés, se mostrará solo el español.',
      type: 'bilingualBlock',
      group: 'description',
    }),

    // ---------------- FOTOS ----------------
    defineField({
      name: 'mainImage',
      title: 'Foto principal',
      description: 'La que aparece grande en la ficha y en redes al compartir.',
      type: 'image',
      group: 'media',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Texto alternativo (accesibilidad)', type: 'string'}),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galería de fotos',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', title: 'Texto alternativo', type: 'string'},
          ],
        },
      ],
      options: {layout: 'grid'},
    }),
    defineField({
      name: 'videoUrl',
      title: 'Vídeo (URL de YouTube o Vimeo)',
      description: 'Opcional. Pega el enlace del vídeo.',
      type: 'url',
      group: 'media',
    }),

    // ---------------- INTERNO ----------------
    defineField({
      name: 'origin',
      title: 'Origen del piso',
      description: 'Solo lo ves tú. Útil para llevar la cuenta de qué fuente te trae mejores pisos.',
      type: 'string',
      group: 'internal',
      options: {
        list: [
          {title: 'Captación propia', value: 'own'},
          {title: 'Agencia colaboradora', value: 'agency'},
          {title: 'Otro', value: 'other'},
        ],
        layout: 'radio',
      },
      initialValue: 'own',
    }),
    defineField({
      name: 'agencyName',
      title: 'Nombre de la agencia colaboradora',
      type: 'string',
      group: 'internal',
      hidden: ({parent}) => parent?.origin !== 'agency',
    }),
    defineField({
      name: 'internalNotes',
      title: 'Notas internas',
      description: 'Lo que quieras apuntar para ti. No se publica.',
      type: 'text',
      group: 'internal',
      rows: 4,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      city: 'city',
      price: 'price',
      operation: 'operation',
      status: 'status',
      media: 'mainImage',
    },
    prepare({title, city, price, operation, status, media}) {
      const op = operation === 'rent' || operation === 'shortTerm' ? '/mes' : ''
      const statusLabel: Record<string, string> = {
        available: '✅',
        reserved: '🟡 Reservada',
        closed: '🔴 Cerrada',
        draft: '✏️ Borrador',
      }
      const priceText = price ? `${price.toLocaleString('es-ES')} €${op}` : 'Sin precio'
      return {
        title: title || 'Sin título',
        subtitle: `${statusLabel[status] || ''} · ${city || '?'} · ${priceText}`,
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Más recientes primero',
      name: 'createdDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
    {
      title: 'Precio (menor a mayor)',
      name: 'priceAsc',
      by: [{field: 'price', direction: 'asc'}],
    },
    {
      title: 'Precio (mayor a menor)',
      name: 'priceDesc',
      by: [{field: 'price', direction: 'desc'}],
    },
  ],
})
