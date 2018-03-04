import React from 'react';
import { css } from 'emotion';
import { Container } from 'rebass';

import { sizes } from '../utils/media';

export const container = css`
  padding: 1.5rem 2.5rem;
  transition: all 0.4s ease-in-out;
  @media (max-width: ${sizes.small}px) {
    padding: 0.5rem 1.25rem;
  }
`;

export default ({ children }) => (
  <Container
    is="main"
    px={[5, 5, 8]}
    pt={[2, 2, 5]}
    pb={2}
    maxWidth="68rem"
    className={container}
  >
    {children}
  </Container>
);
