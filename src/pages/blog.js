import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(
      sort:{
        fields:publishedDate,
        order:DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }`)
  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1 className={blogStyles.title}>Blog</h1>
        <div>
          <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map((edge) => (
              <li className={blogStyles.post}>
                <Link to={`./${edge.node.slug}`}><h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Layout>
    </div>
  )

}

export default BlogPage