export default {
  name: 'photo',
  type: 'document',
  title: 'Photo',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    }
  ]
}
