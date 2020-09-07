import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import logo from "../../content/assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faPinterestSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons"

import Bio from "../components/bio";

const Layout = ({ children }) => {
  let header
  header = (
    <Link className="navbar-brand" to={`/`}>
      <img src={logo} alt="Ken Reynolds Photography" />
    </Link>
  )
  return (
    <div style={{
      backgroundColor: `#ECEFF1`,
    }}>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: `#37474F`,
        }}
      >
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mr-auto"
              style={{
                marginLeft: 0,
              }}
            >
              <li className="nav-item active">
                <Link to={`/`}
                  className="nav-link"
                  style={{
                    color: `#FFFFFF`,
                    paddingLeft: `0`,
                  }}
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/`}
                  className="nav-link"
                  style={{
                    color: `#FFFFFF`,
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <ul style={{
              alignItems: `center`,
              display: `flex`,
              listStyle: `none`,
              marginBottom: 0,
            }}>
              <li style={{
                fontSize: `24px`,
                marginBottom: 0,
              }}>
                <a href="https://www.facebook.com/kenreynoldsphoto"
                  target="_blank"
                  style={{
                    color: `#fff`,
                  }}
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li style={{
                color: `#fff`,
                fontSize: `24px`,
                marginBottom: 0,
                marginLeft: `1.5rem`,
              }}>
                <a href="https://www.instagram.com/kenreynoldsphotography/"
                  target="_blank"
                  style={{
                    color: `#fff`,
                  }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li style={{
                color: `#fff`,
                fontSize: `24px`,
                marginBottom: 0,
                marginLeft: `1.5rem`,
              }}>
                <a href="https://www.pinterest.com/kenreynoldsphotography"
                  target="_blank"
                  style={{
                    color: `#fff`,
                  }}
                >
                  <FontAwesomeIcon icon={faPinterestSquare} />
                </a>
              </li>
              <li style={{
                color: `#fff`,
                fontSize: `24px`,
                marginBottom: 0,
                marginLeft: `1.5rem`,
              }}>
                <a href="https://twitter.com/kennethreynolds"
                  target="_blank"
                  style={{
                    color: `#fff`,
                  }}
                >
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <header>{header}</header>

        <div className="row">
          <main className="col-md-8">{children}</main>

          <div className="col-md-4">
            <Bio />
          </div>
        </div>

        <footer>
          © {new Date().getFullYear()} Ken Reynolds Photography
        </footer>
      </div>
    </div>
  )
}

export default Layout
