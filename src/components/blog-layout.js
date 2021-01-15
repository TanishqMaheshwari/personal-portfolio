import React from "react"

import Header from "./header"
import Footer from "./footer"
//import "../styles/reset.scss"
import blogLayoutStyles from "./blog-layout.module.scss"

const BlogLayout = props => {
  return (
    <div className={blogLayoutStyles.container}>
      <div className={blogLayoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default BlogLayout
