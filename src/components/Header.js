import React from 'react';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';
import styled from 'react-emotion';
import { css } from 'emotion';
import { Flex } from 'rebass';
import colors from '../utils/colors';
import { sizes } from '../utils/media';
import logo from '../../static/logos/logo.svg';
import styledLink from './Links';

const header = css`
  height: 6.5rem;
  padding: 0 2.5rem;
  @media (max-width: ${sizes.small}px) {
    padding: 0 1.25rem;
  }
  & div a:before {
    display: none;
  }
  & ul {
    margin-bottom: 0;
  }
`;

const Logo = styled('img')`
  height: 44px;
  width: auto;
  @media (max-width: ${sizes.small}px) {
    height: 40px;
  }
`;

const NavItem = styled('li')`
  display: inline-block;
  margin-left: 2rem;
  & a {
    ${styledLink};
  }
`;

const NavLink = props => (
  <NavItem>
    <Link exact to={props.to} activeClassName={props.activeClassName}>
      {props.children}
    </Link>
  </NavItem>
);

const Navigation = () => (
  <Flex
    is="header"
    z={100}
    align="center"
    justify="space-between"
    fontSize={2}
    className={header}
  >
    <h1 id="logo" aria-label="Mayrav Herman" style={{ margin: 0 }}>
      <Link to="/" alt="Mayrav Herman" aria-labelledby="logo">
        <Logo src={logo} alt="logo" />
      </Link>
    </h1>
    {
      <nav aria-label="Main Navigation">
        <ul>
          <NavLink to="/" activeClassName="active">
            Work
          </NavLink>
          <NavLink to="/about/" activeClassName="active">
            About
          </NavLink>
        </ul>
      </nav>
    }
  </Flex>
);

export default Navigation;
