export default {
  name: 'genreReference',
  type: 'object',
  title: 'Genre reference',
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
