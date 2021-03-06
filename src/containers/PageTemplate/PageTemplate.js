import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
//

const PageTemplate = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div>
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(PageTemplate)
