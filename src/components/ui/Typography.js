import styled, { css } from "styled-components";

// COMPONENT
const Typography = ({ children, component, screenReader, ...rest }) => {
  const Component = component || "span";

  return (
    <Component {...rest}>
      {children}
    </Component>
  )
};

// STYLES
const StyledTypography = styled(Typography)`
  color: ${props => props.theme.colors.primary};
  display: inline-block;
  margin-bottom: 10px;
  
  /* error */
  ${props => props.error && css`
    color: ${props => props.theme.colors.error};
    background-color: ${props => props.theme.colors.primary};
    display: block;
    font-family: "${props => props.theme.fonts[1]}";
    font-size: ${props.theme.fontSizes.large};
    position: fixed;
    padding: 2em;
    text-align: center;
    width: 100%;
  `}

  /* titles */
  ${props => props.component === "h1" && css`
    display: block;
    font-family: "${props => props.theme.fonts[0]}";
    font-size: ${props.theme.fontSizes.medium};
    line-height: 20px;
  `}

  ${props => props.component === "h2" && css`
    display: block;
    font-family: "${props => props.theme.fonts[1]}";
    font-size: ${props.theme.fontSizes.small};
    line-height: 20px;
  `}

  /* regular text */
  ${props => props.component === "p" && css`
    font-size: ${props.theme.fontSizes.small};
  `}

  /* disable on screen */
  ${props => props.screenReader && css`
    font-family: "${props => props.theme.fonts[1]}";
    left: -999em;
    position: absolute;
  `}
`;

export default StyledTypography;