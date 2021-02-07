export default {
  name: 'trackReference',
  type: 'object',
  title: 'Track reference',
  fields: [
    {
      name: 'trackName',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'lengthOfTrack',
      type: 'number',
      title: 'Length of Track (in seconds)'
    },
    {
      name: 'numInOrder',
      type: 'number',
      title: 'No. on album'
    },
    {
      name: 'audioFile',
      type: 'file',
      title: 'Audio file (mp3)'
    },
    {
      name: 'previewLength',
      type: 'number',
      title: 'Preview in Seconds (0 = infinite)'
    }
  ],
  preview: {
    select: {
      title: 'trackName',
      numInOrder: 'numInOrder',
      lengthOfTrack: 'lengthOfTrack'
    },
    prepare: ({title, numInOrder,lengthOfTrack}) => {

      var newTitle = numInOrder + '. ' + title 
      var subTitle = `${lengthOfTrack}`
      

      return {
        title: newTitle,
        subtitle: subTitle
      }
    }
  }
}
