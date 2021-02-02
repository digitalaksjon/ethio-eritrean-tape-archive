export default {
  name: 'contributorReference',
  type: 'object',
  title: 'Contributor',
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
