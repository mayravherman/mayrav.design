import React from 'react';
import styled from 'react-emotion';
import { Flex } from 'rebass';

import Project from '../components/Project';
import Container from '../components/Container';
import Navigation from '../components/Header';
import Intro from '../components/Intro';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';

const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(${palette.GRID_COLUMNS}, 1fr);
  grid-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper, .gatsby-image-wrapper {
    position: static !important;
  }
`;

const Content = styled('div')`
  margin: 0 auto;
  max-width: ${palette.MAX_WIDTH}px;
  padding: 0px ${palette.CONTENT_PADDING} 1.45rem;
  position: relative;
`;

const Index = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark;

  return (
    <Container>
      <Intro />
      <Flex is="section" flexWrap="wrap" justify="space-between" px={0} mb={-5}>
        {projects.map(({ node: project }) => {
          const { frontmatter, fields } = project;
          return (
            <Project
              date={frontmatter.date}
              title={frontmatter.title}
              path={fields.slug}
              areas={frontmatter.areas}
              slug={fields.slug}
              key={fields.slug}
              description={frontmatter.description}
            />
          );
        })}
      </Flex>
    </Container>
  );
};

export default Index;

/* eslint no-undef: off */
export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___number], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            number
            areas
          }
        }
      }
    }
  }
`;
