import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Archivo';
    src: url("/fonts/Archivo/Archivo-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Archivo';
    src: url("/fonts/Archivo/Archivo-Italic.ttf");
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Archivo';
    src: url("/fonts/Archivo/Archivo-Medium.ttf");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Archivo';
    src: url("/fonts/Archivo/Archivo-MediumItalic.ttf");
    font-style: italic;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Archivo';
    src: url("/fonts/Archivo/Archivo-SemiBold.ttf");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Archivo';
    src: url("/fonts/Archivo/Archivo-SemiBoldItalic.ttf");
    font-style: italic;
    font-weight: 600;
    font-display: swap;
  }


  @font-face {
    font-family: 'Archivo';
    src: url("/fonts/Archivo/Archivo-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Archivo';
    src: url("/fonts/Archivo/Archivo-BoldItalic.ttf");
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    color: ${(props) => props.theme.colors.background};
    text-decoration: none;
  }
`;
