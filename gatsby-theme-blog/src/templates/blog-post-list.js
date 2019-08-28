import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Layout } from '@statikly/gatsby-theme-ui'

const GET_POSTS = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`

const BlogPostList = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  )
}

const BlogPostListTemplate = () => {
  const data = useStaticQuery(GET_POSTS)

  const posts = data.allMdx.nodes

  return (
    <Layout>
      <BlogPostList posts={posts} />
    </Layout>
  )
}

export default BlogPostListTemplate
