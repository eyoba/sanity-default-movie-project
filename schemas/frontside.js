import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'frontside',
  title: 'Frontside',
  type: 'document',
   fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
     {
      name: 'image',
      title: 'Frontside Image',
      type: 'image',
       options:{
        hotspot:true
       }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    }
  ]

}
