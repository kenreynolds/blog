import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import { DiscussionEmbed } from "disqus-react"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const disqusShortname = 'ken-reynolds-photography'
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article style={{
        backgroundColor: `#fff`,
        borderRadius: `4px`,
        marginBottom: `1rem`,
        padding: `1rem`,
      }}>
        <header style={{
          alignItems: `flex-end`,
          display: `flex`,
          justifyContent: `space-between`,
          marginBottom: `1rem`,
        }}>
          <h1
            style={{
              border: `none`,
              color: `#37474F`,
              fontSize: `1.5rem`,
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              color: `#37474F`,
              display: `block`,
              fontSize: `1rem`,
              marginBottom: `5px`,
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>

        <section dangerouslySetInnerHTML={{ __html: post.html }} />

        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            marginLeft: 0,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
