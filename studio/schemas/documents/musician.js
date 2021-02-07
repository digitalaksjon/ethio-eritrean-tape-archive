import { GiPerson } from 'react-icons/gi'
import {format} from 'date-fns'

export default {
  name: 'musician',
  type: 'document',
  title: 'Musicians',
  icon: GiPerson,
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
          title: 'Instrument',
          name: 'name',
          type: 'reference',
          weak: true,
          to: [{ type: 'instrument' }],
          description: 'Which instruments does the musician play?'
        }
      ]
    },
    {
      name: 'publishedAt',
      type: 'date',
      title: 'Published at'
    }
  ],
  preview: {
    select: {
      title: 'fullName',
      instrument0: 'instruments.0.name'
    },
    prepare: ({title, instrument0}) => {
      const subtitle = instrument0
      return {
        title,
        subtitle: subtitle
      }
    }
  }
}
