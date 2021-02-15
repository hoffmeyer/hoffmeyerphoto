import { MdBurstMode } from 'react-icons/md'

export default {
  name: 'gallery',
  type: 'document',
  icon: MdBurstMode,
  title: 'Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'simplePortableText'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{type: 'reference', to: {type: 'photo'}}]
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
