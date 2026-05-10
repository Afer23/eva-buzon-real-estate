import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nombre del sitio',
      type: 'string',
      initialValue: 'Eva Buzón Real Estate',
    }),
    defineField({
      name: 'tagline',
      title: 'Lema bajo el nombre',
      description: 'Frase corta que aparece en cabecera y al compartir.',
      type: 'bilingualText',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Número de WhatsApp',
      description: 'Con código de país, sin espacios. Ej: 34612345678',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(/^[0-9]+$/, {name: 'solo dígitos'}),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email de contacto',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'Logo (opcional)',
      type: 'image',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Ajustes del sitio'}),
  },
})
