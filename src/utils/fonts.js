import { injectGlobal } from 'emotion';

/* eslint no-unused-expressions: off */
injectGlobal`
  @font-face {
    font-family: 'Fabriga';
    font-weight: 300;
    font-style: normal;
    src:  local('Fabriga-Light'),
          url('./fabriga/Fabriga-Light.eot'),
          url('./fabriga/Fabriga-Light.woff2') format('woff2'),
          url('./fabriga/Fabriga-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Fabriga';
    font-weight: 300;
    font-style: italic;
    src:  local('Fabriga-LightItalic'),
          url('./fabriga/Fabriga-LightItalic.eot'),
          url('./fabriga/Fabriga-LightItalic.woff2') format('woff2'),
          url('./fabriga/Fabriga-LightItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'Fabriga';
    font-weight: 400;
    font-style: normal;
    src:  local('Fabriga-Regular'),
          url('./fabriga/Fabriga-Regular.eot'),
          url('./fabriga/Fabriga-Regular.woff2') format('woff2'),
          url('./fabriga/Fabriga-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Fabriga';
    font-weight: 400;
    font-style: italic;
    src:  local('Fabriga-Italic'),
          url('./fabriga/Fabriga-Italic.eot'),
          url('./fabriga/Fabriga-Italic.woff2') format('woff2'),
          url('./fabriga/Fabriga-Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Fabriga';
    font-weight: 500;
    font-style: normal;
    src:  local('Fabriga-Medium'),
          url('./fabriga/Fabriga-Medium.eot'),
          url('./fabriga/Fabriga-Medium.woff2') format('woff2'),
          url('./fabriga/Fabriga-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Fabriga';
    font-weight: 500;
    font-style: italic;
    src:  local('Fabriga-MediumItalic'),
          url('./fabriga/Fabriga-MediumItalic.eot'),
          url('./fabriga/Fabriga-MediumItalic.woff2') format('woff2'),
          url('./fabriga/Fabriga-MediumItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'Fabriga';
    font-weight: 700;
    font-style: normal;
    src:  local('Fabriga-Bold'),
          url('./fabriga/Fabriga-Bold.eot'),
          url('./fabriga/Fabriga-Bold.woff2') format('woff2'),
          url('./fabriga/Fabriga-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Fabriga';
    font-weight: 700;
    font-style: italic;
    src:  local('Fabriga-BoldItalic'),
          url('./fabriga/Fabriga-BoldItalic.eot'),
          url('./fabriga/Fabriga-BoldItalic.woff2') format('woff2'),
          url('./fabriga/Fabriga-BoldItalic.woff') format('woff');
  }

  @font-face {
    font-family: 'Fabriga';
    font-weight: 900;
    font-style: normal;
    src:  local('Fabriga-Black'),
          url('./fabriga/Fabriga-Black.eot'),
          url('./fabriga/Fabriga-Black.woff2') format('woff2'),
          url('./fabriga/Fabriga-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Fabriga';
    font-weight: 900;
    font-style: italic;
    src:  local('Fabriga-BlackItalic'),
          url('./fabriga/Fabriga-BlackItalic.eot'),
          url('./fabriga/Fabriga-BlackItalic.woff2') format('woff2'),
          url('./fabriga/Fabriga-BlackItalic.woff') format('woff');
  }
`;

