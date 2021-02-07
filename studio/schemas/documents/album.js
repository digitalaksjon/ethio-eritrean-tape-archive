import { GiAudioCassette } from 'react-icons/gi'
import { format } from 'date-fns'

export default {
  name: 'album',
  type: 'document',
  title: 'Cassette Tapes',
  icon: GiAudioCassette,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Album Title',
      description: 'This is the title of the tape'
    },
    {
      name: 'artist',
      type: 'string',
      title: 'Main Artist',
      description: 'This is the main artist on the tape'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    },
    {
      name: 'frontCover',
      type: 'mainImage',
      title: 'Front Cover'
    },
    {
      name: 'backCover',
      type: 'mainImage',
      title: 'Back Cover'
    },
    {
      name: 'tracks',
      title: 'Tracks',
      type: 'array',
      of: [
        {
          type: 'trackReference'
        }
      ]
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release date'
    },
    {
      name: 'genres',
      type: 'array',
      title: 'Genres',
      of: [
        {
          title: 'Genre',
          type: 'reference',
          weak: true,
          to: [{ type: 'genre' }],
          description: 'Which genres does the tape belong to'
        }
      ]
    },

    {
      name: 'recordLabel',
      type: 'array',
      title: 'Record labels',
      of: [
        {
          title: 'Record label',
          type: 'reference',
          weak: true,
          to: [{ type: 'recordLabel' }],
          description: 'Which record labels does the tape belong to'
        }
      ]
    },
    {
      name: 'musicians',
      type: 'array',
      title: 'Musicians',
      of: [
        {
          title: 'Musician',

          type: 'reference',
          weak: true,
          to: [
            { type: 'musician', }
          ],
          description: 'Who played on this tape'
        }
      ]
    },
    {
      name: 'contributor',
      type: 'string',
      title: 'Contributor',
      of: [
        {
          type: 'contributorReference'
        }
      ]
    },
    {
      name: 'distributor',
      type: 'array',
      title: 'Distributors',
      of: [
        {
          title: 'Distributor name',
          type: 'reference',
          weak: true,
          to: [{ type: 'distributor' }],
          description: 'Which distributors does the tape belong to'
        }
      ]
    },
    {
      title: 'Country / Region',
      name: 'country',
      type: 'string'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'frontCover'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
