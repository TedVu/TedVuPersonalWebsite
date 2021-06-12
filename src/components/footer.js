import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, copyright 2021, proudly
        powered by{" "}
        <a
          href="https://gatsbyjs.com"
          target="_blank"
          style={{ color: "yellow" }}
        >
          GatsbyJS{" "}
        </a>
      </p>
    </footer>
  )
}

export default Footer
