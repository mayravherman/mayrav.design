/* eslint react/no-danger: off */

import React from 'react';
import Helmet from 'react-helmet';
import styled, { css } from 'react-emotion';
import format from 'date-fns/format';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';

import { Box, Flex, Measure, Heading, Subhead, Container, Carousel } from 'rebass';

import ProjectHeader from '../components/ProjectHeader';
import ProjectPagination from '../components/ProjectPagination';
import { container } from '../components/Container';
import config from '../../config/SiteConfig';
import { sizes } from '../utils/media';
import colors from '../utils/colors';
import * as palette from '../../config/Style';

const heading = css`
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: ${colors.purple};
`;

const subhead = css`
  font-family: 'Noto Mono';
  font-weight: normal;
`;

const smallHeading = css`
  font-size: 1rem;
  letter-spacing: 0.075rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 3rem;
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Fabriga';
`;

const H3 = styled.h3`
  ${smallHeading};
  color: ${colors.grey};
`;

const post = css`
  & p {
    font-size: 1.125rem;
    line-height: 1.5;
    margin: 1.4rem 0;
    & a {
    &:hover {
    color: ${colors.brightPurple};
    border-bottom: 1px solid ${colors.brightPurple};
  }
  }
  }
  & hr {
    margin: 4rem auto;
    opacity: 0.4;
    width: 85%;
  }
  & h1 {
    font-size: 2.5rem;
  }
  & h2 {
    margin: 3rem auto 1rem;
  }
  & h3 {
    ${smallHeading};
    line-height: 1.5;
    color: ${colors.grey};
  }
  & h4 {
    font-size: 1.5rem;
    margin: 3rem auto 1rem;
  }
  figure {
    width: auto;
  }
  & img {
    margin: 2rem auto;
    max-width: 100%;
  }
  @media (max-width: ${sizes.med}px) {
    & p {
      font-size: 1rem;
      margin-bottom: 1.75rem;
    }
    & h3 {
      line-height: 2.8rem;
    }
    & h4 {
      color: #121212;
      line-height: 3.2rem;
    }
    & img {
      height: auto;
      max-width: 100%;
      margin: 2.4rem 0;
    }
  }
`;

export default ({ data, location, pathContext }) => {
  const { markdownRemark: project } = data;
  const { slug, next, prev } = pathContext;
  const { frontmatter, html } = project;
  const {
    title, description, date, areas,
  } = frontmatter;

  return (
    <Container is="main" className={container} maxWidth="100vw" px={0}>
      <Helmet
        title={`Mayrav Herman - ${title}`}
        description={`${description}`}
      />
      <Container
        maxWidth="44rem"
        className={post}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
      <ProjectPagination next={next} prev={prev} />
    </Container>
  );
};

/* eslint no-undef: off */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        areas
        description
      }
    }
  }
`;
