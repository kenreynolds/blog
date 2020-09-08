import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function Success() {
  return (
    <Layout>
      <h3>Email sent successfully!</h3>
      <p>
        Thank you for sending me a message! I will reply to your message as soon as I can.
      </p>

      <p>
        Feel free to <Link to={`/`}>go back to the home page</Link> and continue browsing my site, or if this is the end of your visit for now, I hope you'll come back to visit again soon.
      </p>
    </Layout>
  )
}