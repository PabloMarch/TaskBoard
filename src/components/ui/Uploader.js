import styled, { css } from "styled-components";
import Input from "./Input";

// COMPONENT
const Uploader = ({ loading, ...rest }) => (
  <Input
    accept="image/png, image/jpeg"
    multiple
    name="uploader"
    type="file"
    {...rest}
  />
);

// STYLES
const StyleUploader = styled(Uploader)`
  /* photo variant */
  ${props => props.variant === "photo" && css`
    border-radius: ${props => props.theme.box.borderRadiusDense};
    cursor: pointer;
    height: ${props => props.theme.box.mediumSize};
    min-width: ${props => props.theme.box.mediumSize};
    outline: none;
    overflow: hidden;
    position: relative;
    width: ${props => props.theme.box.mediumSize};

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before, &::after {
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &::before {
      background-color: ${props => props.theme.colors.secondary};
      opacity: 0.2;
    }

    &::after {
      background-image: url("/images/icons/camera.svg");
      background-repeat: no-repeat;
      background-position: 50%;
      transition-duration: ${props => props.theme.effects.transitionDuration};
      transform-origin: 50%;
      z-index: 1;
    }

    &:hover::after {
      transform: scale(1.2);
    }

    input {
      visibility: hidden;
    }
  `}

  /* disabled */
  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.2;
  `}

  /* loading variant */
  ${props => props.loading && css`
    cursor: wait;
    opacity: 1;

    &::after {
      background-image: url("/images/loader.svg");
      background-size: 35px;
    }
  `}
`;

export default StyleUploader;