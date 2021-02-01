import { GiDrum } from 'react-icons/gi'
import {format} from 'date-fns'

export default {
  name: 'musician',
  type: 'document',
  title: 'Musician',
  icon: GiDrum,
  fields: [
    {
      name: 'fullName',
      type: 'string',
      title: 'Full Name',
      description: 'This is the title of the tape'
    },
    {
      name: 'instruments',
      type: 'array',
      title: 'Instruments',
      of: [
        {
          type: 'instrumentReference'
        }
      ]
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      description: 'Who ',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
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
          field: 'fullName',
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
          field: 'fullName',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'fullName'
    },
    prepare ({title = 'No title', publishedAt, slug = {}}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
