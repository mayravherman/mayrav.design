import React from 'react';
import styled, { css } from 'react-emotion';
import { Flex } from 'rebass';
import styledLink from './Links';
import colors from '../utils/colors';
import isobar from './bg-isobar.png';
import { sizes } from '../utils/media';
import { H2, container } from './Intro';

const projectLink = css`
  ${styledLink};
  display: inline;
  color: ${colors.purple};
  &:hover {
    color: ${colors.brightPurple};
  }
  &:before {
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
  }
  /* @media (max-width: ${sizes.med}px) {
    font-size: 1.4rem;
  } */
`;

const H4 = styled.h4`
  margin: 0;
  font-family: "Fabriga";
  font-weight: 500;
  color: ${colors.purple};
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.25rem;
  @media (max-width: ${sizes.small}px) {
    margin-bottom: 0.75rem;
  }
  /*@media (max-width: ${sizes.xsmall}px) {
    font-size: 2rem;
    line-height: 2.8rem;
    margin-bottom: 1.2rem;
  }*/
`;

const purple = css`
  color: ${colors.purple};
  line-height: 1.25rem;
  margin-bottom: 0;
  /*@media (max-width: ${sizes.med}px) {
    font-size: 1.4rem;
  }*/
`;

const date = css`
  ${purple};
  align-self: flex-start;
`;

const lightPurple = css`
  ${purple};
  opacity: 0.5;
  @media (max-width: ${sizes.small}px) {
    flex-order: -1;
  }
`;

const meta = css`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  @media (max-width: ${sizes.small}px) {
    display: none;
  }
`;

const Card = css`
  border: 1px solid ${colors.subtle};
  background-color: #ffffff;
  background-image: url(${isobar});
  background-size: 812px 794px;
  border-radius: 0.25rem;
  font-family: 'Noto Mono', mono;
  padding: 3rem;
  width: 49%;
  margin-bottom: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  transition: all 0.8s ease-in-out;
  transition: box-shadow 0.4s ease-in-out;
  & h4 {
      transition: color 0.3s ease-in-out;
    }
    & .${lightPurple}, .${date} {
      transition: opacity 0.3s ease-in-out;
    }
    & .${projectLink} {
      font-size: 1rem;
      transition: all 0.8s ease-in-out;
      transition: color 0.3s ease-in-out;
      }
    }
  @media (max-width: ${sizes.large}px) {
    padding: 2.25rem;
  }
  @media (max-width: ${sizes.small}px) {
    width: 100%;
    min-height: 1.75rem;
    padding: 0;
    margin-bottom: 3.5rem;
    border: none;
    background: none;
  }
  &:hover {
    /*box-shadow: 0 0.8rem 1.6rem 0rem ${colors.subtle};*/
    box-shadow: 0 2.4rem 4.8rem -1.6rem ${colors.subtle},
      0 2.4rem 4rem -2rem rgba(0, 0, 0, 0.1);
    background: radial-gradient(circle at center,
      rgba(255, 255, 255, 0.8) 20%,
      rgba(242, 237, 250, 0.4) 100%
    );
    & h4 {
      color: ${colors.brightPurple};
    }
    & .${lightPurple}, .${date} {
      opacity: 0.2;
    }
    & .${projectLink} {
      color: ${colors.brightPurple};
      &:before {
        bottom: -0.5rem;
        left: -1rem;
        width: calc(100% + 1.25rem);
        height: 0.875rem;
        opacity: 1;
      }
    }
  }
  &:hover:before {
    opacity: 0;
  }
`;

const Project = props => (
  <a href={props.slug} className={Card}>
    <Flex flexDirection="column">
      <H4>{props.description}</H4>
      <p className={lightPurple}>{props.title}</p>
    </Flex>
    <div className={meta}>
      <p className={date}>{props.date}</p>
      <div>
        <p className={projectLink}>view project</p>
      </div>
    </div>
  </a>
);

export default Project;

// Visualizing production data to help creative studios keep up with the
// booming demand for VFX, VR, and animation content.
