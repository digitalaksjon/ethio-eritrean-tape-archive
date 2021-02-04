import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PersonalBlog from "../containers/home"
import SEO from "../components/seo"

const PersonalBlogPage = (props: any) => {
  const { data } = props
  console.log(data)
  return (
    <Layout>
      <SEO
        title={data.site.title}
        description={data.site.description}
      />
      
      <PersonalBlog />
    </Layout>
  )
}

export default PersonalBlogPage



export const pageQuery = graphql`
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

  query PersonalBlogPage {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`