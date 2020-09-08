import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <form
        action="/success/"
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        style={{
          backgroundColor: `#fff`,
          borderRadius: `4px`,
          color: `#37474F`,
          minHeight: `496px`,
          padding: `1rem`,
        }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <h3
          style={{
            fontSize: `1.5rem`,
            marginBottom: `2rem`,
          }}>
          Contact Me
        </h3>

        <div
          className="row"
          style={{
            marginBottom: `1rem`,
          }}
        >
          <div className="col">
            <label htmlFor="inputFirstName">First name</label>
            <input className="form-control" name="firstname" type="text" />
          </div>

          <div className="col">
            <label htmlFor="inputLastName">Last name</label>
            <input className="form-control" name="lastname" type="text" />
          </div>
        </div>

        <div
          className="row"
          style={{
            marginBottom: `1rem`,
          }}
        >
          <div className="col">
            <label htmlFor="inputEmail">Email address</label>
            <input className="form-control" name="email" type="email" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="inputMessage">Message</label>
            <textarea className="form-control" name="message" rows="4"></textarea>
          </div>
        </div>

        <button
          className="btn"
          type="submit"
          style={{
            backgroundColor: `#37474F`,
            color: `#fff`,
            marginTop: `1rem`,
          }}
        >
          Send email
        </button>
      </form>
    </Layout>
  )
}