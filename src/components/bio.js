import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <aside
      style={{
        backgroundColor: `#fff`,
        borderRadius: `4px`,
        marginBottom: rhythm(2.5),
        padding: `1rem`,
      }}
    >
      <div
        className="row"
        style={{
          alignItems: `center`,
          justifyContent: `space-between`,
          paddingLeft: `1rem`,
          paddingRight: `1rem`,
        }}
      >
        <h3 style={{
          color: `#37474F`,
          fontSize: `1.5rem`,
          marginBottom: `1.5rem`,
        }}>
          About {author.name}
        </h3>
        <div style={{
          paddingBottom: `1rem`,
        }}>
          <Link to={`/contact`}>Contact Ken</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 150,
            }}
          />
          <p>{author.summary}</p>
        </div>

        <div className="col-md-6">
          <p>
            When not chasing light, Ken is probably slinging code as a Sr. Front-end Developer in the airline industry, listening to music, playing ham radio, or spending time with his beautiful wife and daughter. He is easily bribed with pizza and killer craft beer.
          </p>
        </div>
      </div>
    </aside>
  )
}

export default Bio
