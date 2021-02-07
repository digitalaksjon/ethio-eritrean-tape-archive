import { GiDrum } from 'react-icons/gi'

export default {
  name: 'instrument',
  type: 'document',
  title: 'Instruments',
  icon: GiDrum,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
