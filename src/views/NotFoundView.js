/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6158f8cf9bf05511c0381164").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6158f8cf9bf05526d438116c'
    htmlEl.dataset['wfSite'] = '6158f8cf9bf05511c0381164'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = NotFoundView.Controller !== NotFoundView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(D:\\css\\normalize.css);
          @import url(D:\\css\\webflow.css);
          @import url(D:\\css\\nfcards.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-_404-page-wrap">
              <div className="af-class-_404-page-div"><img src="images/Asset-1.svg" alt className="af-class-not-found" />
                <h2 className="af-class-h2-center">Page not found</h2>
                <div className="af-class-paragraph">The page you are looking for doesn't exist or has been moved.</div>
                <a data-w-id="bf3de9b5-b4db-04d3-22ca-c7e8d80c72f0" href="index.html" className="af-class-cta af-class-blue af-class-center w-button">back to home</a>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default NotFoundView

/* eslint-enable */