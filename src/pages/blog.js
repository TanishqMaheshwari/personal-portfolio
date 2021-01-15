import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import BlogLayout from "../components/blog-layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <BlogLayout>
      <div className={blogStyles.blogContent}>
        <Head title="Blog" />
        <h1>My Blog</h1>
        <h2>
          This site is currently being updated, please check back in a few days!
          This will soon be my blog including writings about music and books
          I've read :)
        </h2>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </BlogLayout>
  )
}

export default BlogPage
