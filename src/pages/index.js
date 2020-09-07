import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            style={{
              backgroundColor: `#fff`,
              borderRadius: `4px`,
              marginBottom: `1rem`,
              padding: `1rem`,
            }}
            key={node.fields.slug}
          >
            <header style={{
              alignItems: `flex-end`,
              color: `#37474F`,
              display: `flex`,
              justifyContent: `space-between`,
              marginBottom: `1rem`,
            }}>
              <h3 style={{
                fontSize: `1.5rem`,
                marginBottom: rhythm(1 / 4),
              }}>
                <Link
                  style={{
                    boxShadow: `none`,
                    color: `#37474F`,
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small style={{
                color: `#37474F`,
                fontSize: `1rem`,
                marginBottom: `5px`,
              }}>
                {node.frontmatter.date}
              </small>
            </header>

            <section>
              <img src={node.frontmatter.image.childImageSharp.fluid.src} />
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <span>
                <Link
                  style={{
                    boxShadow: `none`,
                  }}
                  to={node.fields.slug}
                >
                  Read more...
                </Link>
              </span>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              id
              childImageSharp {
                id
                fluid(maxWidth: 720) {
                  src
                }
              }
            }
            description
          }
        }
      }
    }
  }
`
