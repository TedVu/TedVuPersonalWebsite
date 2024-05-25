const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            language
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path:
        edge.node.language === "english"
          ? `/blog/${edge.node.slug}`
          : `/viet/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
