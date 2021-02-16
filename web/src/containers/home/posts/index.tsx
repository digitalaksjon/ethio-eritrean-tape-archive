import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Masonry from "react-masonry-component"
import MasonryCard from "../../../components/masonry-card/masonry-card"
import Pagination from "../../../components/pagination/pagination"
import BlogPostsWrapper, { PostRow, PostCol, SecTitle } from "./style"

type PostsProps = {}

const Posts: React.FunctionComponent<PostsProps> = () => {
  const Data = useStaticQuery(graphql`
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

      allSanityAlbum (
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
            contributor
            artist
            frontCover {
              ...SanityImage
              alt
            }
          }
        }
      }
    }
  `)


  const Albums = Data.allSanityAlbum.edges
  console.log(Albums)

  return (
    <BlogPostsWrapper>
      <SecTitle>Latest Tapes</SecTitle>
      <PostRow>
        <Masonry className="showcase">
          {Albums.map(({ node }: any) => {
            const title = node.title || node.slug.current
            return (
              <PostCol key={node.slug.current}>
                <MasonryCard
                  title={title}
                  image={
                    node.frontCover == null
                      ? null
                      : node.frontCover
                  }
                  description={node.description}
                  url={node.slug.current}
                  date={node.publishedAt}
                />
              </PostCol>
            )
          })}
        </Masonry>
      </PostRow>
      
    </BlogPostsWrapper>
  )
}

export default Posts
