// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import album from './documents/album'
import musician from './documents/musician'
import distributor from './documents/distributor'
import instrument from './documents/instrument'
import siteSettings from './documents/siteSettings'
import recordLabel from './documents/recordLabel'
import genre from './documents/genre'

// Object types
import trackReference from './objects/trackReference'
import contributorReference from './objects/contributorReference'
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'archive',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    album,
    musician,
    category,
    author,
    genre,
    recordLabel,
    distributor,
    instrument,
    siteSettings,
    mainImage,
    trackReference,
    contributorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
