import { MdLabel } from 'react-icons/md'

export default {
  name: 'recordLabel',
  type: 'document',
  title: 'Record labels',
  icon: MdLabel,
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
