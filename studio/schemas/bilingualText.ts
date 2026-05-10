import {defineType, defineField} from 'sanity'

export const bilingualText = defineType({
  name: 'bilingualText',
  title: 'Texto bilingüe',
  type: 'object',
  fields: [
    defineField({
      name: 'es',
      title: 'Español',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 2,
      description: 'Si lo dejas vacío, se mostrará el español también para visitantes en inglés.',
    }),
  ],
})
