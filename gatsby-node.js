/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://next.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({
    graphql,
    actions
}) => {

    const {
        createPage,
        createRedirect
    } = actions;

    createRedirect({
        fromPath: '/*',
        toPath: '/404',
        status: '404',
        redirectInBrowser: true,
    })

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve('./src/templates/blog-post.js')
        resolve(
            graphql(
                `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                const posts = result.data.allContentfulBlogPost.edges
                posts.forEach((post, index) => {
                    createPage({
                        path: `/blog/${post.node.slug}/`,
                        component: blogPost,
                        context: {
                            slug: post.node.slug
                        },
                    })
                })
            })
        )
    })
}