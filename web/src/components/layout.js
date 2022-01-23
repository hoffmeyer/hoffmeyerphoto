import React from 'react'
import Header from './header'

import '../styles/layout.css'
import {content, footer, footerWrapper, siteInfo } from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={content}>{children}</div>
    <footer className={footer}>
      <div className={footerWrapper}>
        <div className={siteInfo}>
          © {new Date().getFullYear()}, Built by Hoffmeyers
        </div>
      </div>
    </footer>
  </>
)

export default Layout
