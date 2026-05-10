import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('Missing PUBLIC_SANITY_PROJECT_ID. Copy .env.example to .env and fill it in.')
}

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  useCdn: true,
  perspective: 'published',
})

const builder = imageUrlBuilder(sanity)
export const urlFor = (source: any) => builder.image(source)
