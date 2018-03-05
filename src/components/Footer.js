import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import Twitter from 'react-icons/lib/ti/social-twitter';
import LinkedIn from 'react-icons/lib/ti/social-linkedin';
import { Box, Flex, Text, Container, Link } from 'rebass';
import styledLink from './Links';
import { container } from './Container';
import colors from '../utils/colors';

const twitter = 'https://twitter.com/mayravherman';
const linkedin = 'https://www.linkedin.com/in/mayravherman/';
const email = 'mailto:mayravherman@gmail.com';

const gatsbyUrl = 'https://www.gatsbyjs.org/';
const emotionUrl = 'https://emotion.sh/';

const Footer = () => (
  <footer
    className={container}
  >
    <Box py={8} aria-label="Social Links">
      <Box f={5}>
        <Link
          color="grey"
          href={twitter}
          alt="Twitter"
          target="_blank"
          aria-label="Twitter"
        >
          <Twitter />
        </Link>
        <Link
          color="grey"
          href={linkedin}
          alt="LinkedIn"
          target="_blank"
          aria-label="LinkedIn"
          pl={6}
        >
          <LinkedIn />
        </Link>
      </Box>
    </Box>
  </footer>
);

export default Footer;
