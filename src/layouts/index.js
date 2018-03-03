import React from 'react';
import { withPrefix } from 'gatsby-link';

import Helmet from 'react-helmet';
import { injectGlobal } from 'react-emotion';
import { Provider } from 'rebass';

import '../utils/reboot';
import Footer from '../components/Footer';
import Navigation from '../components/Header';
import bg from './bg.jpg';
import favicon from './favicon.ico';
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
    max-width: 48rem;
    margin: 0 -4rem!important;
    @media (max-width: ${sizes.med}px) {
      margin: 0 auto!important;
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
            { name: 'description', content: 'Gatsby Starter Portfolio - Emilia' },
            { name: 'keywords', content: 'gatsby, starter, portfolio, lekoarts' },
          ]}
      >
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <Navigation />
      {children()}
      <Footer />
    </Provider>
  );
};

export default IndexLayout;
