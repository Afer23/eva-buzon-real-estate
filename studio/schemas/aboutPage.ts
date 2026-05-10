import {defineType, defineField} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Sobre Eva',
  type: 'document',
  fields: [
    defineField({
      name: 'photo',
      title: 'Foto de Eva',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'headline',
      title: 'Titular',
      description: 'Frase grande sobre la foto. Ej: "Tu agente de confianza en la Costa del Sol"',
      type: 'bilingualText',
    }),
    defineField({
      name: 'body',
      title: 'Texto principal',
      type: 'bilingualBlock',
    }),
    defineField({
      name: 'highlights',
      title: 'Datos destacados',
      description: 'Tres tarjetas tipo "10 años de experiencia", "200 propiedades vendidas"…',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'number', title: 'Número o cifra', type: 'string'},
            {name: 'label', title: 'Etiqueta (ES + EN)', type: 'bilingualText'},
          ],
          preview: {
            select: {title: 'number', subtitle: 'label.es'},
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    prepare: () => ({title: 'Sobre Eva'}),
  },
})
