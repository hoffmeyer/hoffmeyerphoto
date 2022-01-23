import {Link} from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

import {root, headline, grid} from './project-preview-grid.module.css'

function ProjectPreviewGrid (props) {
  return (
    <div className={root}>
      {props.title && <h2 className={headline}>{props.title}</h2>}
      <ul className={grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
