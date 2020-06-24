import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import blogStyles from './blog.module.scss'



export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug:{eq: $slug}){
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body{
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNote: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return (<img alt={alt} src={url} />)
      }
    }
  }
  return (
    <Layout>
      <h1 className={blogStyles.title}>{props.data.contentfulBlogPost.title}
        <h3>{props.data.contentfulBlogPost.publishedDate}</h3>
      </h1>
      <div className={blogStyles.content}>

        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </div>
    </Layout>
  )
}

export default Blog