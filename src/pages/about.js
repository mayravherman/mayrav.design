import React from 'react';
import styled, { css } from 'react-emotion';
import { Flex, Box, Heading, Text, Link, Measure } from 'rebass';
import Container from '../components/Container';
import Header from '../components/Header';
import colors from '../utils/colors';

import { sizes } from '../utils/media';

const H2 = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  color: ${colors.brightPurple};
  line-height: 2.75rem;
  margin-bottom: 2rem;
  margin-top: 0;
  @media (max-width: ${sizes.small}px) {
    font-size: 1.875rem;
    line-height: 2.375rem;
  }
  @media (max-width: ${sizes.xsmall}px) {
    font-size: 1.625rem;
    line-height: 2.25rem;
  }
`;

const InlineLink = ({ className, name, link }) => (
  <Link
    color="brightPurple"
    href={link}
    alt={name}
    className={className}
    target="_blank"
  >
    {name}
  </Link>
);

const Inline = styled(InlineLink)`
  &:hover {
    color: ${colors.brightPurple};
    border-bottom: 1px solid ${colors.brightPurple};
  }
`;

const AboutPage = () => (
  <Container>
    <Box is="section">
      <Measure>
        <H2>
          Infinitely curious with a knack for logic, I love finding new ways to
          think about old problems.
        </H2>
        <Text f={[2, 3]} mb={6}>
          I’m a product designer and Bay Area native with over 6 years’ experience solving problems for teams at scale. I specialize in the design of complex web applications and enterprise products.
        </Text>
        <Text f={[2, 3]} mb={6}>
        I’m passionate about building accessible design systems and inclusive teams. I’ve partnered with companies of all sizes to design new features, rethink systems, and craft UI solutions for problems that span industries, continents, and lifestyles.
        </Text>
        <Text f={[2, 3]} mb={6}>
        Before I was a designer, I was interested in international law, human rights, and conflict resolution. I’ve worked with incredible humans on some of today’s thorniest, most enduring problems.
        </Text>
        <Text f={[2, 3]}>
          Say hello at <b>mayravherman@gmail.com</b>
          <br />
          Download my{' '}
          <Inline
            name="resume"
            link="https://drive.google.com/file/d/0Bw-FYZojm-3mVjV2dVZFSmdiMjA/view?usp=sharing"
          />{' '}
          or connect on{' '}
          <Inline
            name="LinkedIn"
            link="https://www.linkedin.com/in/mayravherman"
          />
        </Text>
      </Measure>
    </Box>
  </Container>
);

export default AboutPage;
