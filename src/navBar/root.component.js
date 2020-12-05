import React from 'react'
import { navigateToUrl } from 'single-spa'

const NavBar = () => (
  <nav style={{backgroundColor: '#0612F8'}}>
    <div className="nav-wrapper">
      <a href="/" onClick={navigateToUrl} className="brand-logo">spa betha</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/" onClick={navigateToUrl}>Home</a></li>
        <li><a href="/react" onClick={navigateToUrl}>React</a></li> 
        <li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
      </ul>
    </div>
  </nav>
)

export default NavBar