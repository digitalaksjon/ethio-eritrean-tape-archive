import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {buildImageObj} from '../../../lib/helpers'
import {imageUrlFor} from '../../../lib/image-url'
import FeaturedCard from "../../../components/featured-card/featured-card"
import {
  FeaturedPostWrapper,
  FeaturedPostRow,
  FeaturedPostCol,
  SecTitle,
} from "./style"

type FeaturedPostsProps = {}



const FeaturedPosts: React.FunctionComponent<FeaturedPostsProps> = (props) => {

  const postData = useStaticQuery(graphql`
    fragment SanityImage on SanityMainImage {
      crop {
        _key
        _type
        top
        bottom
        left
        right
      }
      hotspot {
        _key
        _type
        x
        y
        height
        width
      }
      asset {
        _id

        
      }
    }
    
    query FeaturedPosts {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
        description
        keywords
      }
      posts: allSanityPost(
        limit: 6
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            mainImage {
              ...SanityImage
              alt
            }
            title
            _rawExcerpt
            slug {
              current
            }
          }
        }
      }
    }
  `)


const postNodes = postData.posts.edges
return (
  <FeaturedPostWrapper>
    <SecTitle>Featured Stories</SecTitle>
    <FeaturedPostRow>
      {postNodes.map(({ node }: any) => {

        const title = node.title || node.slug
        console.log("published: "+node._createdAt)

        return (
          <FeaturedPostCol key={node.id}>
            <FeaturedCard
              title={node.title}
              image={node.mainImage}
              description={node._rawBody}
              url={node.slug.current}
              publishedAt={node.publishedAt}
            />
          </FeaturedPostCol>
        )
      })}
    </FeaturedPostRow>
  </FeaturedPostWrapper>
)
}

FeaturedCard.defaultProps = {
  imageType: 'fluid',
};


export default FeaturedPosts
