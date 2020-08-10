import styled, { css } from "styled-components";

// COMPONENT
const Input = ({ className, ...rest }) => (
  <label className={className}>
    <input {...rest} />
    <span />
  </label>
);

// STYLES
const StyledInput = styled(Input)`
  /* radio button */
  ${props => props.type === "radio" && css`
    display: block;

    span {
      background: url("/images/radio-button.svg") no-repeat 50%;
      background-size: 100%;
      display: block;
      cursor: pointer;
      height: 20px;
      width: 20px;
    }

    input {
      position: absolute;
      visibility: hidden;

      &:checked + span {
        background-image: url("/images/radio-button-checked.svg");
      }
    }
  `}
`;

export default StyledInput;