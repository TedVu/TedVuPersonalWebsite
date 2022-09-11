import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"
import Bounce from "react-reveal/Bounce"

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
  // Add some comment to check build
  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <Bounce top>
          <h1 className={blogStyles.title}>Blog</h1>
        </Bounce>
        <div>
          <Bounce bottom>
            <ol className={blogStyles.posts}>
              {data.allContentfulBlogPost.edges.map(edge => (
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

export default BlogPage
