import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { css } from 'emotion';
import { Flex } from 'rebass';

import Project from './Project';
import colors from '../utils/colors';

const ProjectGrid = props => (
  <Flex is="section" wrap justify="space-between" px={0} mb={-5}>
    {props.projects.map(({ node: project }) => {
      const { frontmatter, fields } = project;
      return (
        <Project
          key={project.id}
          title={frontmatter.title}
          description={frontmatter.description}
          date={frontmatter.date}
          slug={fields.slug}
        />
      );
    })}
  </Flex>
);

export default ProjectGrid;
