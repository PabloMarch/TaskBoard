import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from "./GlobalStyles";

import 'overlayscrollbars/css/OverlayScrollbars.css';

// background: linear-gradient(180deg, #161D32 0%, #0B1121 100%);

const theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#8C99A6",
    error: "#FF0000",
    contrast: "#161D32",
    contrastIntense: "#0B1121",
  },
  fonts: ["TTNorms", "OverpassMono"],
  fontSizes: {
    "small": "14px",
    "medium": "16px",
    "large": "18px",
  },
  box: {
    borderRadius: "5px",
    borderRadiusDense: "8px",
    opacity: "rgba(255, 255, 255, 0.1)",
    mediumSize: "75px",
  },
  effects: {
    transitionDuration: "0.4s"
  } 
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle/>
    {children}
  </ThemeProvider>
);

export default Theme;