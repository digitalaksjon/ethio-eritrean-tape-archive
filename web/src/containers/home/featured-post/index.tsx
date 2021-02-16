import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import FeaturedCard from "../../../components/featured-card/featured-card"
import {
  FeaturedPostCol, FeaturedPostRow, FeaturedPostWrapper,


  SecTitle
} from "./style"

type FeaturedPostsProps = {}



const FeaturedPosts: React.FunctionComponent<FeaturedPostsProps> = (props) => {

  const albumData = useStaticQuery(graphql`
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
    query {
      site {
        siteMetadata {
          title
        }
      }

      albums: allSanityAlbum (
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            title
            slug {
              current
            }
            country
            _rawDescription 
            _rawExcerpt
            contributor
            artist
            recordLabel {
              name
            }
            frontCover {
              ...SanityImage
              alt
            }
          }
        }
      }
    }
  `)


const albumNodes = albumData.albums.edges

return (
  <FeaturedPostWrapper>
    <SecTitle>Latest Tapes</SecTitle>
    <FeaturedPostRow>
      {albumNodes.map(({ node }: any) => {

        const title = node.title || node.slug.current

        const desc = node._rawDescription.map(description => {
          return description.children[0].text;
        })
        const shortDesc = node._rawExcerpt.map(description => {
          return description.children[0].text;
        })

        return (
          <FeaturedPostCol key={node.id}>
            <FeaturedCard
              title={node.title}
              image={node.frontCover}
              artist={node.artist}
              recordLabels={node.recordLabel}
              description={desc}
              url={node.slug.current}
              excerpt={shortDesc}
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
