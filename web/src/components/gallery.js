import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import { graphql } from "gatsby"
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import styles from './project.module.css'

function Project ( props ) {
  const {_rawDescription, title, photos, mainImage } = props
  return (
    <article className={styles.root}>
      {/* {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )} */}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawDescription && <BlockContent blocks={_rawDescription || []} />}
          </div>
          <aside className={styles.metaContent}>
            <ul>
            {photos.map( photo => 
              <li>
                <img
                  src={imageUrlFor(buildImageObj(photo.image))
                    .width(600)
                    .height(Math.floor((9 / 16) * 600))
                    .url()}
                  alt={photo.image.alt}
                />
              </li>
            )}
            </ul>
            {/* {photos && photos.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Photos</h3>
                <ul>
                  {photos.map(photo => (
                    <li key={photo._id}>{photo.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityGallery(id: {eq: $id}) {
    id
    slug {
      current
    }
    title
    photos {
      id
      title
      description
      image {
        crop {
          bottom
          left
          right
          top
        }
        hotspot {
          height
          width
          x
          y
        }
      }
    }
  }
  }
`


export default Project
