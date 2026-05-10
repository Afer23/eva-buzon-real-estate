import type {StructureBuilder} from 'sanity/structure'
import {HomeIcon, CogIcon} from '@sanity/icons'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Eva Buzón Real Estate')
    .items([
      S.listItem()
        .title('Propiedades')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Propiedades')
            .items([
              S.listItem()
                .title('Disponibles')
                .child(
                  S.documentList()
                    .title('Disponibles')
                    .filter('_type == "property" && status == "available"')
                    .defaultOrdering([{field: '_createdAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('Reservadas')
                .child(
                  S.documentList()
                    .title('Reservadas')
                    .filter('_type == "property" && status == "reserved"')
                    .defaultOrdering([{field: '_updatedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('Vendidas / Alquiladas')
                .child(
                  S.documentList()
                    .title('Vendidas / Alquiladas')
                    .filter('_type == "property" && status == "closed"')
                    .defaultOrdering([{field: '_updatedAt', direction: 'desc'}]),
                ),
              S.divider(),
              S.listItem()
                .title('Todas las propiedades')
                .child(
                  S.documentList()
                    .title('Todas las propiedades')
                    .filter('_type == "property"')
                    .defaultOrdering([{field: '_createdAt', direction: 'desc'}]),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Ajustes del sitio')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Ajustes'),
        ),
      S.listItem()
        .title('Sobre Eva')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
            .title('Sobre Eva'),
        ),
    ])
