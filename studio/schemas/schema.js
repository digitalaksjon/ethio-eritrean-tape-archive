// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import tape from './documents/tape'
import musician from './documents/musician'
import siteSettings from './documents/siteSettings'

// Object types
import trackReference from './objects/trackReference'
import genreReference from './objects/genreReference'
import recordLabelReference from './objects/recordLabelReference'
import contributorReference from './objects/contributorReference'
import distributorReference from './objects/distributorReference'
import instrumentReference from './objects/instrumentReference'
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'

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
    musician,
    category,
    author,
    tape,
    siteSettings,
    mainImage,
    trackReference,
    instrumentReference,
    genreReference,
    recordLabelReference,
    contributorReference,
    distributorReference,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
