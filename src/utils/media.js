export const sizes = {
  xlarge: 1280,
  large: 1199, // Large devices (desktops, less than 1200px)
  med: 991, // Medium devices (tablets, less than 992px)
  small: 767, // Small devices (landscape phones, less than 768px)
  xsmall: 575, // Extra small devices (portrait phones, less than 576px)
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px);
  `;

  return acc;
}, {});

/*
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 10}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
*/
