import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"
import Bounce from "react-reveal/Bounce"
import { format } from "prettier"

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

  const uniqueBlogPosts = []
  const blogPostTitle = new Set()
  data.allContentfulBlogPost.edges.forEach(edge => {
    if (!blogPostTitle.has(edge.node.title)) {
      console.log(edge)
      uniqueBlogPosts.push(edge)
      blogPostTitle.add(edge.node.title)
    }
  })

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

export default BlogPage
