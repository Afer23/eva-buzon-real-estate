import {defineType, defineField} from 'sanity'

export const bilingualBlock = defineType({
  name: 'bilingualBlock',
  title: 'Texto largo bilingüe',
  type: 'object',
  fields: [
    defineField({
      name: 'es',
      title: 'Español',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Opcional. Si lo dejas vacío se muestra el español.',
    }),
  ],
})
