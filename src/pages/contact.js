import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Resume" />
      <h1>Resume coming soon!</h1>
      <p>
        This site is currently being updated, please check back in a few days!
        If you'd like to see a copy of my resume ASAP, please feel free to email
        me at tanishqm2@gmail.com!
      </p>
      <p>
        You can reach me via my email{" "}
        <a href="mailto:tanishqm2@gmail.com" target="_blank">
          here
        </a>
        .
      </p>
    </Layout>
  )
}

export default ContactPage
