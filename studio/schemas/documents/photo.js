import { MdBurstMode, MdImage } from 'react-icons/md'

export default {
  name: 'photo',
  type: 'document',
  icon: MdImage,
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
