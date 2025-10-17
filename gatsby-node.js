const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create single blog posts
  const posts = await graphql(`
    {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `)

  posts.data.allWpPost.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: { id: post.id },
    })
  })

  // Create pages
  const pages = await graphql(`
    {
      allWpPage {
        nodes {
          id
          slug
        }
      }
    }
  `)

  pages.data.allWpPage.nodes.forEach(page => {
    createPage({
      path: `/${page.slug}/`,
      component: path.resolve(`./src/templates/page.js`),
      context: { id: page.id },
    })
  })
}
