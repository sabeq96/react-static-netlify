import React from 'react'
import ReactDOM from 'react-dom'

// Your top level component
import PageTemplate from './containers/PageTemplate/PageTemplate'

// Export your top level component as JSX (for static rendering)
export default PageTemplate

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(PageTemplate)
}
