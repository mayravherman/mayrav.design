import { css } from 'emotion';
import colors from '../utils/colors';

const styledLink = css`
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    background-color: #fff63c;
    opacity: 0.8;
    bottom: -0.25rem;
    left: -0.25rem;
    width: calc(100% + 0.5rem);
    height: 0.75rem;
    z-index: -1;
    transition: all 0.3s ease-in;
    opacity: 0;
  }
  &.active {
    &:before {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
  }
  &:hover {
    color: ${colors.brightPurple};
  }
  &:hover:before {
    bottom: -0.5rem;
    left: -0.75rem;
    width: calc(100% + 1rem);
    height: 0.875rem;
    opacity: 1;
  }
`;

export default styledLink;
