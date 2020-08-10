import styled, { css } from "styled-components";
import Input from "./Input";

// COMPONENT
const Uploader = (props) => (
  <Input
    accept="image/png, image/jpeg"
    multiple
    name="uploader"
    type="file"
    {...props}
  />
);

// STYLES
const StyleUploader = styled(Uploader)`
  /* photo variant */
  ${props => props.variant === "photo" && css`
    border-radius: ${props => props.theme.box.borderRadiusDense};
    height: 74px;
    margin-right: 7px;
    position: relative;
    transform-origin: 50%;
    transition-duration: ${props => props.theme.effects.transitionDuration};
    width: 75px;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before, &::after {
      cursor: pointer;
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
      background: url("/images/camera.svg") no-repeat 50% 50%;
      z-index: 1;
    }

    &:hover {
      transform: scale(1.1);
    }
  `}
`;

export default StyleUploader;