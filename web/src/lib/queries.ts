import {sanity} from './sanity'

const PROPERTY_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  status,
  operation,
  propertyType,
  price,
  bedrooms,
  bathrooms,
  area,
  plotArea,
  city,
  neighborhood,
  address,
  features,
  energyRating,
  shortDescription,
  description,
  mainImage,
  gallery,
  videoUrl,
  featured,
  _createdAt
`

export type Property = {
  _id: string
  title: string
  slug: string
  status: 'available' | 'reserved' | 'closed' | 'draft'
  operation: 'sale' | 'rent' | 'shortTerm'
  propertyType: string
  price: number
  bedrooms?: number
  bathrooms?: number
  area?: number
  plotArea?: number
  city: string
  neighborhood?: string
  address?: string
  features?: string[]
  energyRating?: string
  shortDescription: {es: string; en?: string}
  description?: {es?: any[]; en?: any[]}
  mainImage: any
  gallery?: any[]
  videoUrl?: string
  featured?: boolean
  _createdAt: string
}

export type SiteSettings = {
  siteName: string
  tagline?: {es: string; en?: string}
  whatsappNumber: string
  contactEmail: string
  instagramUrl?: string
  facebookUrl?: string
}

export type AboutPage = {
  photo?: any
  headline?: {es: string; en?: string}
  body?: {es?: any[]; en?: any[]}
  highlights?: Array<{number: string; label: {es: string; en?: string}}>
}

export async function getAllProperties(): Promise<Property[]> {
  return sanity.fetch(
    `*[_type == "property" && status != "draft"] | order(featured desc, _createdAt desc) {${PROPERTY_FIELDS}}`,
  )
}

export async function getFeaturedProperties(limit = 6): Promise<Property[]> {
  return sanity.fetch(
    `*[_type == "property" && status == "available" && featured == true] | order(_createdAt desc) [0...$limit] {${PROPERTY_FIELDS}}`,
    {limit},
  )
}

export async function getRecentProperties(limit = 6): Promise<Property[]> {
  return sanity.fetch(
    `*[_type == "property" && status == "available"] | order(_createdAt desc) [0...$limit] {${PROPERTY_FIELDS}}`,
    {limit},
  )
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  return sanity.fetch(
    `*[_type == "property" && slug.current == $slug][0] {${PROPERTY_FIELDS}}`,
    {slug},
  )
}

export async function getAllPropertySlugs(): Promise<string[]> {
  return sanity.fetch(
    `*[_type == "property" && status != "draft" && defined(slug.current)].slug.current`,
  )
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanity.fetch(`*[_type == "siteSettings"][0]`)
}

export async function getAboutPage(): Promise<AboutPage | null> {
  return sanity.fetch(`*[_type == "aboutPage"][0]`)
}
