import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const post = data.wpPost
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`

export default PostTemplate
