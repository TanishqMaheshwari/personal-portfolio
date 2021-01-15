import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFound = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: page not found, sorry :(</h1>
    <p>
      <Link to="/">Click here to return to my home page.</Link>
    </p>
  </Layout>
)

export default NotFound
