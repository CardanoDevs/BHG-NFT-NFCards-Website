/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6158f8cf9bf05511c0381164").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6158f8cf9bf05552ee381167'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(D:\\css\\normalize.css);
          @import url(D:\\css\\webflow.css);
          @import url(D:\\css\\nfcards.webflow.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"f2c36912-6b01-b125-9c9d-1a5bc4de3978\"] {-webkit-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"6c146070-59a3-0db7-9276-f16e800b9552\"] {-webkit-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ec471305-d8dc-9185-b690-6b557e7ef7ba\"] {-webkit-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"31fe27e1-1127-990e-6e36-39bf63ae1a28\"] {-webkit-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ef44d446-95ac-d750-74a3-84bff1b412fc\"] {-webkit-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}
        ` }} />
        <span className="af-view">
          <div>
            <div id="Home" className="af-class-big-container">
              <div className="af-class-opaque-bubbles">
                <div className="af-class-small-red-bubble"><img src="images/spalsh62x.png" width="36.5" data-w-id="31fe27e1-1127-990e-6e36-39bf63ae1a28" alt /></div>
                <div className="af-class-green-top-bubble"><img src="images/splash82x.png" width={242} data-w-id="6c146070-59a3-0db7-9276-f16e800b9552" alt /></div>
                <div className="af-class-small-blue-bubble"><img src="images/splash52x_1splash5@2x.png" width="36.5" data-w-id="ec471305-d8dc-9185-b690-6b557e7ef7ba" alt /></div>
                <div className="af-class-red-bubble"><img src="images/splash92x.png" width={242} data-w-id="ef44d446-95ac-d750-74a3-84bff1b412fc" alt /></div>
                <div className="af-class-small-green-bubble"><img src="images/splash42x.png" width="69.5" data-w-id="f2c36912-6b01-b125-9c9d-1a5bc4de3978" alt /></div>
                <div className="af-class-bubbles-colors"><img src="images/splash-group12x.png" width="262.5" sizes="(max-width: 991px) 100vw, 262.5px" srcSet="images/splash-group12x-p-500.png 500w, images/splash-group12x.png 525w" alt /></div>
                <div className="af-class-green-top-left-bubble"><img src="images/Shape-7-copy-6.svg" width={280} alt /></div>
                <div className="af-class-yellow-top-right-bubble"><img src="images/Shape-7-copy-5.svg" width={218} alt /></div>
                <div className="af-class-green-bottom-left-bubble"><img src="images/Shape-7-copy-6.svg" width={280} alt /></div>
                <div className="af-class-yellow-bottom-right-bubble"><img src="images/Shape-7-copy-5.svg" width={218} alt /></div>
              </div>
              <section className="af-class-banner-section">
                <div className="af-class-banner-wrap">
                  <header id="Header" className="af-class-header">
                    <a id="Brand" data-w-id="b3022408-aaae-0ea0-f933-82b62d05d362" href="index.html" aria-current="page" className="af-class-soft w-inline-block w--current"><img src="images/LogoMakr-8aFgvR-300dpi.png" width={116} sizes="(max-width: 479px) 100vw, 116px" srcSet="images/LogoMakr-8aFgvR-300dpi-p-500.png 500w, images/LogoMakr-8aFgvR-300dpi-p-800.png 800w, images/LogoMakr-8aFgvR-300dpi-p-1080.png 1080w, images/LogoMakr-8aFgvR-300dpi.png 1350w" alt /></a>
                    <nav className="af-class-navbar">
                      <div data-w-id="c8b06804-532e-aecf-38a1-0706d0450f48" className="af-class-navlink">
                        <a href="#feature" className="af-class-nav-link">Token Perks</a>
                      </div>
                      <div data-w-id="021220d7-f2fa-e430-413d-1a9d69aa25f9" className="af-class-navlink">
                        <a href="#for-block" className="af-class-nav-link">The Future</a>
                      </div>
                      <div data-w-id="c80f3928-aa42-8f43-aa5d-1077fe0509e2" className="af-class-navlink">
                        <a href="#" className="af-class-nav-link">FAQ</a>
                      </div>
                      <div data-w-id="a43cb818-1c98-e7c1-fe41-c8f88f61ed20" className="af-class-navlink" />
                    </nav>
                    <nav data-w-id="b3022408-aaae-0ea0-f933-82b62d05d378" className="af-class-nav-menu">
                      <a data-w-id="b3022408-aaae-0ea0-f933-82b62d05d379" href="#" className="af-class-hamburger-button af-class-close w-inline-block">
                        <div className="af-class-top-line af-class-mobile" />
                        <div className="af-class-middle-line af-class-mobile" />
                        <div className="af-class-bottom-line af-class-mobile" />
                      </a>
                      <div className="af-class-nav-mobile-holder">
                        <div className="af-class-nav-block">
                          <a href="#feature" data-w-id="b3022408-aaae-0ea0-f933-82b62d05d37f" className="af-class-nav-mobile-link">Features</a>
                        </div>
                        <div className="af-class-nav-block">
                          <a href="#slider-section" data-w-id="b3022408-aaae-0ea0-f933-82b62d05d382" className="af-class-nav-mobile-link">Categories</a>
                        </div>
                        <div className="af-class-nav-block">
                          <a href="#blue-block" data-w-id="b3022408-aaae-0ea0-f933-82b62d05d385" className="af-class-nav-mobile-link">How it works</a>
                        </div>
                        <div className="af-class-nav-block">
                          <a href="#for-block" data-w-id="b3022408-aaae-0ea0-f933-82b62d05d388" className="af-class-nav-mobile-link">Pricing</a>
                        </div>
                        <div className="af-class-nav-block">
                          <a data-w-id="b3022408-aaae-0ea0-f933-82b62d05d38b" href="#" className="af-class-cta af-class-cta-header af-class-cta-mobile w-button">Sign Up</a>
                        </div>
                      </div>
                    </nav>
                  </header>
                  <main className="af-class-banner">
                    <div className="af-class-banner-blue">
                      <div className="af-class-banner-blue-holder">
                        <h2 className="af-class-hero-heading">Let's Play! </h2>
                        <p className="af-class-banner-paragraph">2652 pairs of playing cards on the blockchain.</p>
                        <div className="af-class-banner-cta-holder">
                          <a data-w-id="238a5813-e2fb-8c17-c313-d3fcbbfffb3a" href="#" className="af-class-cta af-class-white w-button">jOIN US Below</a>
                        </div>
                      </div>
                      <div className="af-class-social-wrap">
                        <div className="af-class-footer-link-block">
                          <a href="https://discord.gg/WpCD5RqCZs" target="_blank" className="af-class-social-link af-class-pink w-inline-block"><img src="images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978.png" loading="lazy" width={36} sizes="36px" srcSet="images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978-p-500.png 500w, images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978-p-800.png 800w, images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978.png 1600w" alt /></a>
                        </div>
                        <div className="af-class-footer-link-block">
                          <a href="https://twitter.com/NFCards/" target="_blank" className="af-class-social-link af-class-yellow w-inline-block"><img src="images/twitter2x_1twitter@2x.png" width={15} alt /></a>
                        </div>
                      </div>
                    </div><img src="images/king-of-diamonds.jpg" loading="lazy" width={550} height={550} srcSet="images/king-of-diamonds-p-500.jpeg 500w, images/king-of-diamonds-p-800.jpeg 800w, images/king-of-diamonds-p-1080.jpeg 1080w, images/king-of-diamonds-p-1600.jpeg 1600w, images/king-of-diamonds-p-2000.jpeg 2000w, images/king-of-diamonds.jpg 2400w" sizes="(max-width: 767px) 100vw, 550px" alt className="af-class-image-2" />
                    <div className="af-class-banner-yellow" />
                    <div className="af-class-banner-blue">
                      <div className="af-class-banner-blue-holder">
                        <h2 className="af-class-hero-heading">Let's Play </h2>
                        <p className="af-class-banner-paragraph">One of a kind collection of 2652 pairs of playing cards. </p>
                        <div className="af-class-banner-cta-holder">
                          <a data-w-id="87a5ba8b-d3d0-283d-351d-2b7b61169b97" href="#" className="af-class-cta af-class-white w-button">Register for PRESALE</a>
                        </div>
                      </div>
                      <div className="af-class-section af-class-wf-section">
                        <a href="#Header" className="af-class-social-link af-class-pink w-inline-block"><img src="images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978.png" loading="lazy" width={36} sizes="(max-width: 479px) 100vw, 36px" srcSet="images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978-p-500.png 500w, images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978-p-800.png 800w, images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978.png 1600w" alt /></a>
                        <a href="#Header" className="af-class-social-link af-class-yellow w-inline-block"><img src="images/twitter2x_1twitter@2x.png" width={15} alt /></a>
                      </div>
                    </div>
                  </main>
                </div>
              </section>
              <section id="feature" className="af-class-sub-banner-section">
                <div className="af-class-sub-banner-content">
                  <div className="af-class-wf-section">
                    <div className="af-class-columns w-row">
                      <div className="w-col w-col-4">
                        <div className="af-class-text-block-5"><strong>Pre Sale: </strong><br />October 25, 9pm UTC</div>
                      </div>
                      <div className="w-col w-col-4">
                        <div className="af-class-text-block-6"><strong>Public Sale: </strong><br />October 26, 9pm UTC</div>
                      </div>
                      <div className="w-col w-col-4">
                        <div className="af-class-text-block-7"><strong>Mint Price: </strong><br />0.05 ETH</div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-sub-banner-holder">
                    <div className="af-class-sub-banner-left">
                      <h3>Bringing the best of NFTs</h3>
                      <p>We believe all NFTs should have utility and should bring value to early adopters. That is why we will be giving access to card tournaments with awesome prizes and periodic airdrops to all token holders.</p>
                      <p>Oh and you get some pretty cool looking cards to show off!</p>
                      <div className="af-class-video-link-wrap" />
                    </div>
                    <div className="af-class-sub-banner-right">
                      <div className="af-class-sub-banner-right-box"><img src="images/Shape-6-copy-32x_1Shape-6-copy-32x.png" width="34.5" alt="true" className="af-class-sub-banner-right-box-icon" />
                        <h4 className="af-class-heading-7">Utility</h4>
                        <p className="af-class-paragraph-small">Free entry into monthly card tournaments with prizes for top players.</p>
                      </div>
                      <div className="af-class-sub-banner-right-box af-class-middle"><img src="images/Shape-6-copy-22x_1Shape-6-copy-2x.png" width="34.5" alt="true" className="af-class-sub-banner-right-box-icon" />
                        <h4 className="af-class-heading-6"><strong>Physical 1/1 Item</strong></h4>
                        <p className="af-class-paragraph-small">A unique physical deck of cards available only to token holders (launching November 2021)</p>
                      </div>
                      <div className="af-class-sub-banner-right-box"><img src="images/Shape-6-copy-22x_1Shape-6-copy-22x.png" width="34.5" alt="true" className="af-class-sub-banner-right-box-icon" />
                        <h4 className="af-class-heading-6">Periodic NFT Drops to Token Holders</h4>
                        <p className="af-class-paragraph-small af-class-no-margin">New NFTs airdropped for all token holders, creating more value.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="slider-section" className="af-class-slider-section" />
              <section id="blue-block" className="af-class-blue-section" />
              <section id="for-block" className="af-class-price-section">
                <div className="af-class-price-content">
                  <div className="af-class-wf-section">
                    <h1 className="af-class-heading-8"><span>The Future</span></h1>
                  </div>
                  <div className="af-class-price-for-holder">
                    <div data-w-id="9a9660b0-d459-a5f0-fe08-00e885462d4d" style={{opacity: 0}} className="af-class-price-for-box af-class-margin-mobile">
                      <div className="af-class-price-for-image"><img src="images/for-img1.png" width={165} alt /></div>
                      <h4 className="af-class-heading-3 af-class-for-heading">In Person Card Tournaments</h4>
                      <p className="af-class-paragraph-small af-class-grey-text af-class-for-text">In person hangouts and card games in locations voted by the community. We will even fly random token holders out for free!</p>
                    </div>
                    <div data-w-id="a4a6c351-0cee-e9c7-615e-5d8da10ccca1" style={{opacity: 0}} className="af-class-price-for-box">
                      <div className="af-class-price-for-image"><img src="images/for-img2.png" width="164.5" alt /></div>
                      <h4 className="af-class-heading-3 af-class-for-heading">Expanding to More Games and More Prizes</h4>
                      <p className="af-class-paragraph-small af-class-grey-text af-class-for-text">Community votes will be done for future card games and prizes.</p>
                    </div>
                  </div>
                </div>
              </section>
              <div className="af-class-section-2 af-class-wf-section">
                <div className="af-class-content-wrapper af-class-slim w-container">
                  <div className="af-class-header-center-box af-class-_75">
                    <h2>FAQ<br /></h2>
                  </div>
                  <div className="af-class-accordion-wrapper">
                    <div className="af-class-accordion-item">
                      <div id="q2" className="af-class-accordion-item-trigger">
                        <h4 className="af-class-accordion-heading"><strong>Why 2652 NFTs?</strong></h4>
                        <div className="af-class-icon-3 af-class-accordion-icon">&gt;</div>
                      </div>
                      <div className="af-class-accordion-item-content">
                        <p>That is the total possible 2-card combinations for a 52 card deck. That way your pair will be one of a kind.</p>
                      </div>
                    </div>
                    <div className="af-class-accordion-item">
                      <div id="q2" className="af-class-accordion-item-trigger">
                        <h4 className="af-class-accordion-heading"><strong>What type of card games will the tournaments be?</strong></h4>
                        <div className="af-class-icon-3 af-class-accordion-icon">&gt;</div>
                      </div>
                      <div className="af-class-accordion-item-content">
                        <p>We are going to start with Euchre and Hearts, but plan to expand to more card games based on interest.</p>
                      </div>
                    </div>
                    <div className="af-class-accordion-item">
                      <div id="q3" className="af-class-accordion-item-trigger">
                        <h4 className="af-class-accordion-heading"><strong>What are the prizes for the tournaments?</strong></h4>
                        <div className="af-class-icon-3 af-class-accordion-icon">&gt;</div>
                      </div>
                      <div className="af-class-accordion-item-content">
                        <p>We want the prizes to be super awesome and will take suggestions from the community. Other valuable NFTs? More physical items?</p>
                      </div>
                    </div>
                    <div className="af-class-accordion-item">
                      <div id="q4" className="af-class-accordion-item-trigger">
                        <h4 className="af-class-accordion-heading"><strong>Who is the team?</strong><br /></h4>
                        <div className="af-class-icon-3 af-class-accordion-icon">&gt;</div>
                      </div>
                      <div className="af-class-accordion-item-content">
                        <p>We are a group of card enthusiasts and NFT lovers. If you are the same and want to join the team, send us a dm on twitter.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="af-class-footer-section">
                <div className="af-class-footer-content">
                  <a href="index.html" aria-current="page" className="af-class-footer-brand w-inline-block w--current"><img src="images/LogoMakr-1RQ0F5.png" width={97} alt className="af-class-image-3" /></a>
                  <div className="af-class-social-wrap">
                    <div className="af-class-footer-link-block">
                      <a href="https://discord.gg/WpCD5RqCZs" className="af-class-social-link af-class-pink w-inline-block"><img src="images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978.png" loading="lazy" width={36} sizes="36px" srcSet="images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978-p-500.png 500w, images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978-p-800.png 800w, images/kisspng-discord-computer-icons-android-challenge-5ad920f517ddb6.2835550815241791890978.png 1600w" alt /></a>
                    </div>
                    <div className="af-class-footer-link-block">
                      <a href="https://twitter.com/NFCards/" className="af-class-social-link af-class-yellow w-inline-block"><img src="images/twitter2x_1twitter@2x.png" width={15} alt /></a>
                    </div>
                  </div>
                </div>
              </footer>
              <address data-w-id="4e2c1573-643e-27f7-7937-4f3adeb41deb" />
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */