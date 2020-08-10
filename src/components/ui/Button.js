import styled, { css } from "styled-components";

// COMPONENT
const Button = ({ children, className, icon, variant, type, ...rest }) => (
  <button 
    className={`${className} ${icon}`}
    type="button"
    variant={variant}
    {...rest}
  >
    {children}
  </button>
);

// STYLES
const StyleButton = styled(Button)`
  cursor: pointer;
  border: none;
  outline: none;

  /* image variant */
  ${props => props.icon && css`
    background: url("/images/icons/close.svg") transparent no-repeat 0 0;
    height: 20px;
    width: 20px;
  `}
`;

export default StyleButton;