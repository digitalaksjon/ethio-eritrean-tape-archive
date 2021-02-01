export default {
  name: 'recordLabelReference',
  type: 'object',
  title: 'Record label',
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
