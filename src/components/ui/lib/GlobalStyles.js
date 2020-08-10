import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TTNorms';
      src: url("/fonts/light.woff") format("woff");
      src: url("/fonts/regular.woff") format("woff");
      src: url("/fonts/medium.woff") format("woff");
      src: url("/fonts/bold.woff") format("woff");
  }

  @font-face {
    font-family: 'OverpassMono';
      src: url('/fonts/OverpassMono-Light.ttf');
      src: url('/fonts/OverpassMono-Regular.ttf');
      src: url('/fonts/OverpassMono-SemiBold.ttf');
      src: url('/fonts/OverpassMono-Bold.ttf');
  }

  body {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.contrast};
    font-family: "TTNorms";
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;