const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityGallery(filter: { slug: {current: {ne: null}}}) {
        edges	{
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanityGallery || {}).edges || []

  projectEdges
    //.filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/gallery/${slug}/`

      createPage({
        path,
        component: require.resolve('./src/templates/gallery.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createProjectPages(graphql, actions)
}
