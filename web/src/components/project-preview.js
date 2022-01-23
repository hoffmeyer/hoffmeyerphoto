import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import {root, leadMediaThumb, title,  excerpt} from './project-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function ProjectPreview (props) {
  return (
    <Link className={root} to={`/gallery/${props.slug.current}`}>
      <div className={leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3 className={cn(responsiveTitle3, title)}>{props.title}</h3>
      {props._rawDescription && (
        <div className={excerpt}>
          <BlockText blocks={props._rawDescription} />
        </div>
      )}
    </Link>
  )
}

export default ProjectPreview
