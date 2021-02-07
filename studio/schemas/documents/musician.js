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
      instrument0: 'instruments.0.name',
      instrument1: 'instruments.1.name',
      instrument2: 'instruments.2.name',
    },
    prepare: ({title, instrument0, instrument1,instrument2}) => {


      var subTitle = `${instrument0}`
      if (instrument1) subTitle = `${instrument0}, ${instrument1}`
      if (instrument2) subTitle = `${instrument0}, ${instrument1}, ${instrument2}`
      

      return {
        title,
        subtitle: subTitle
      }
    }
  }
}
