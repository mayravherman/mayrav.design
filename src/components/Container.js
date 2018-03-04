import React from 'react';
import { css } from 'emotion';

import { sizes } from '../utils/media';

export const container = css`
  padding: 1.5rem 2.5rem;
  transition: all 0.4s ease-in-out;
  max-width: 68rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: ${sizes.small}px) {
    padding: 0.5rem 1.25rem;
  }
`;

export default ({ children }) => (
  <main className={container}>
    {children}
  </main>
);

