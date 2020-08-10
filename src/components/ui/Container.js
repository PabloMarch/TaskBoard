import styled, { css } from "styled-components";

// COMPONENT
const Container = ({ children, card, component, ...rest }) => {
  const metadataProps = {};
  const Component = component || "div";

  if (component === "article") {
    metadataProps.itemType = "http://schema.org/Article";
    metadataProps.itemScope = true;
  }

  return (
    <Component {...rest} {...metadataProps}>
      {children}
    </Component>
  )
};

// STYLES
const StyleContainer = styled(Container)`
  /* card variant */
  ${props => props.variant === "card" && css`
    background-color: ${props => props.theme.box.opacity};
    border-radius: ${props => props.theme.box.borderRadiusDense};
    margin: 10px 24px;
    padding: 0 0 15px 22px;
  `}

  /* header variant */
  ${props => props.component === "header" && css`
    margin-bottom: 16px;
  `}
`;

export default StyleContainer;