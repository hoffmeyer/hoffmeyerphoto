import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Gallery from '../components/gallery'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
query GalleryQuery($id: String!) {
  gallery: sanityGallery(id: {eq: $id}) {
        id
        slug {
          current
        }
        title
        photos {
          title
          image {
            crop {
              _key
              _type
              bottom
              left
              right
              top
            }
            hotspot {
              _key
              _type
              height
              x
              width
              y
            }
            asset {
              _id
            }
            alt
          }
        }
        _rawDescription
      }
}
`

const ProjectTemplate = props => {
  const {data, errors} = props
  const gallery = data && data.gallery
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {gallery && <SEO title={gallery.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {gallery && <Gallery {...gallery} />}
    </Layout>
  )
}

export default ProjectTemplate
