import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Container, Box, Layout, H1, Note } from '@statikly/gatsby-theme-ui'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout location={location}>
      <Box px={2}>
        <Container size="medium">
          <Note as="time">{post.frontmatter.date}</Note>
          <H1>{post.frontmatter.title}</H1>
        </Container>
      </Box>
      <Img css="margin-top: 3rem;" fluid={featuredImage} />
      <Box px={2}>
        <Container size="medium">
          <small>{post.frontmatter.featuredImageCaption}</small>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Container>
      </Box>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
