import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"
import Bounce from "react-reveal/Bounce"

const VietPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            language
          }
        }
      }
    }
  `)

  const uniqueBlogPosts = []
  const blogPostTitle = new Set()
  data.allContentfulBlogPost.edges.forEach(edge => {
    if (
      !blogPostTitle.has(edge.node.title) &&
      edge.node.language === "vietnamese"
    ) {
      uniqueBlogPosts.push(edge)
      blogPostTitle.add(edge.node.title)
    }
  })
  // Add some comment to check build
  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <Bounce top>
          <h1 className={blogStyles.title}>Viet posts</h1>
        </Bounce>
        <div>
          <Bounce bottom>
            <ol className={blogStyles.posts}>
              {uniqueBlogPosts.map(edge => (
                <li className={blogStyles.post}>
                  <Link to={`./${edge.node.slug}`}>
                    <h2>{edge.node.title}</h2>
                    <p>{edge.node.publishedDate}</p>
                  </Link>
                </li>
              ))}
            </ol>
          </Bounce>
        </div>
      </Layout>
    </div>
  )
}

export default VietPage
