import { BiMusic } from 'react-icons/bi'

export default {
  name: 'genre',
  type: 'document',
  title: 'Genres',
  icon: BiMusic,
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
