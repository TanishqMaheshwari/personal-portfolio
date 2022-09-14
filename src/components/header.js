import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import resume from "../images/Tanishq_Maheshwari_resume.pdf"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.title}>
        {data.site.siteMetadata.title}
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li> */}
          <li>
            <a
              className={headerStyles.navItem}
              href={resume}
              target="_blank"
            >
              Resume
            </a>
            {/*
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Resume
            </Link>
        */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
