import * as React from "react"
import PersonalBlogWrapper from "./style"
import Intro from "./intro"
import FeaturedPosts from "./featured-post"

type PersonalBlogProps = {}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Intro />
      <FeaturedPosts />

    </PersonalBlogWrapper>
  )
}

export default PersonalBlog
