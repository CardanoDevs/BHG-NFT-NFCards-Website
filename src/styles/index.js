/* eslint-disable */

const styles = [
  {
    type: 'href',
    body: 'D:\\css\\normalize.css',
  },
  {
    type: 'href',
    body: 'D:\\css\\webflow.css',
  },
  {
    type: 'href',
    body: 'D:\\css\\nfcards.webflow.css',
  },
  {
    type: 'sheet',
    body: '@media (min-width:992px){.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=f2c36912-6b01-b125-9c9d-1a5bc4de3978]{-webkit-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="6c146070-59a3-0db7-9276-f16e800b9552"]{-webkit-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=ec471305-d8dc-9185-b690-6b557e7ef7ba]{-webkit-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="31fe27e1-1127-990e-6e36-39bf63ae1a28"]{-webkit-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=ef44d446-95ac-d750-74a3-84bff1b412fc]{-webkit-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,0PX,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)}}',
  },
]

const loadingStyles = styles.map((style) => {
  let styleEl
  let loading

  if (style.type == 'href') {
    styleEl = document.createElement('link')

    loading = new Promise((resolve, reject) => {
      styleEl.onload = resolve
      styleEl.onerror = reject
    })

    styleEl.rel = 'stylesheet'
    styleEl.type = 'text/css'
    styleEl.href = style.body
  }
  else {
    styleEl = document.createElement('style')
    styleEl.type = 'text/css'
    styleEl.innerHTML = style.body

    loading = Promise.resolve()
  }

  document.head.appendChild(styleEl)

  return loading
})

export default Promise.all(loadingStyles).then(() => {
  const styleSheets = Array.from(document.styleSheets).filter((styleSheet) => {
    return styleSheet.href && styles.some((style) => {
      return style.type == 'href' && styleSheet.href.match(style.body)
    })
  })
  styleSheets.forEach((styleSheet) => {
    Array.from(styleSheet.rules).forEach((rule) => {
      if (rule.selectorText) {
        rule.selectorText = rule.selectorText
          .replace(/\.([\w_-]+)/g, '.af-class-$1')
          .replace(/\[class(.?)="( ?)([^"]+)( ?)"\]/g, '[class$1="$2af-class-$3$4"]')
          .replace(/([^\s][^,]*)(\s*,?)/g, '.af-view $1$2')
          .replace(/\.af-view html/g, '.af-view')
          .replace(/\.af-view body/g, '.af-view')
          .replace(/af-class-w-/g, 'w-')
          .replace(/af-class-anima-/g, 'anima-')
          .replace(/af-class-([\w_-]+)an-animation([\w_-]+)/g, '$1an-animation$2')
      }
    })
  })
})

/* eslint-enable */