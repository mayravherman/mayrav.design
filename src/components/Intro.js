import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Box, Heading } from 'rebass';

import colors from '../utils/colors';
import { sizes } from '../utils/media';

const headline = css`
  font-size: 1.875rem;
  @media (max-width: ${sizes.small}px) {
    font-size: 1.5rem;
  }
  @media (max-width: ${sizes.xsmall}px) {
    font-size: 1.25rem;
  }
`;

export const Headline = styled.p`
  font-family: 'Fabriga';
  font-size: 1.875rem;
  font-weight: 500;
  color: ${colors.brightPurple};
  line-height: 2.625rem;
  margin-bottom: 1.75rem;
  margin-top: 0;
  & span {
    color: ${colors.red};
    display: inline-block;
  }
  @media (max-width: ${sizes.small}px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  @media (max-width: ${sizes.xsmall}px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const Intro = () => (
  <Box is="section" aria-label="Intro" color="brightPurple" mb={9} className={css`max-width: 53rem`}>
    <Heading mb={7} fontWeight={500} className={headline}>
      Hi, I’m <span className={css`color: ${colors.red}`}>Mayrav</span> and I'm a product designer from Silicon Valley. I like design systems, accessibility, and designing with code.
    </Heading>
    <Heading mb={7} fontWeight={500} className={headline}>
      I’m passionate about avocados and always have too many browser tabs open.
    </Heading>
    <Heading fontWeight={500} className={headline}>P.S. You look good today.</Heading>
  </Box>
);

export default Intro;
