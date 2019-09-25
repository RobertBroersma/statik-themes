import React from 'react'
import { graphql } from 'gatsby'
import { PageTemplate as Component } from './component'
import { PageHead } from '../../components/PageHead'

const HTMLContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

const Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <>
      <PageHead />
      <Component
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        pageComponents={post.frontmatter.content}
        content={post.html}
      />
    </>
  )
}

export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content {
          location {
            lat
            lng
          }
          address
          phoneNumbers
          column2 {
            body
            title
            type
          }
          links {
            href
            page
            title
          }
          slides {
            title
            icon
            category
            body
            image {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                  base64
                }
              }
            }
          }
          items {
            title
            price
            helperText
            details
            buttonText
            mode
          }
          type
        }
      }
    }
  }
`
