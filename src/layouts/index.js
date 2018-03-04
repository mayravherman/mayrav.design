import React from 'react';
import { withPrefix } from 'gatsby-link';

import Helmet from 'react-helmet';
import { injectGlobal } from 'react-emotion';
import { Provider } from 'rebass';

import Footer from '../components/Footer';
import Navigation from '../components/Header';
import bg from './bg.jpg';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';
import theme from '../utils/theme';
import { sizes } from '../utils/media';
import '../fonts/fonts.css';

/* eslint no-unused-expressions: off */
injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background: url(${bg}) #ffffff;
    background-attachment: fixed;
    background-size: 240px 240px;
    color: ${palette.COLOR};
    font-size: 1.125rem;
    line-height: 1.5;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    @media (max-width: ${sizes.small}px) {
      font-size: 1rem;
    }
  }

  a {
    color: ${palette.LINK_COLOR};
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  p {
    text-rendering: optimizeLegibility;
    margin: 0;
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Fabriga";
    font-weight: 500;
    line-height: 1.15;
    text-rendering: optimizeLegibility;
    transition: all 0.8s ease-in-out;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }

  .gatsby-resp-image-wrapper {
    padding: 2rem 0;
    margin: 0 -4rem!important;
    display: block;
    @media (max-width: ${sizes.med}px) {
      margin: 0 auto!important;
      padding: 0;
    }
  }
`;

const IndexLayout = ({ children, location }) => {
  const isHomepage = location.pathname === withPrefix('/');
  const isAbout = location.pathname === withPrefix('/about/');

  return (
    <Provider theme={theme}>
      <Helmet
        title={config.siteTitleAlt}
        meta={[
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
          ]}
      >
 />
      </Helmet>
      <Navigation />
      {children()}
      <Footer />
    </Provider>
  );
};

export default IndexLayout;
