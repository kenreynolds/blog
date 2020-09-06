import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import Bio from "../components/bio";
import logo from "../../content/assets/logo.png"

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
                <a
                  href="#"
                  className="nav-link"
                  style={{
                    color: `#FFFFFF`,
                    paddingLeft: `0`,
                  }}
                >
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  style={{
                    color: `#FFFFFF`,
                  }}
                >
                  Contact
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
