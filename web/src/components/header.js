import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import {root, wrapper, branding, toggleNavButton, nav, showNav as showNavStyle} from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={root}>
    <div className={wrapper}>
      <div className={branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>

      <button className={toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(nav, showNav && showNavStyle)}>
        <ul>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
