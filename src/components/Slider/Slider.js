import styled from "styled-components";
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Container } from "@/ui";

const Slider = ({ className, children }) => (
  <Container className={className}>
    <OverlayScrollbarsComponent
      options={{ className : "os-theme-light" }} 
    >
      {children}
    </OverlayScrollbarsComponent>
  </Container>
);

// STYLES
const StyledSlider = styled(Slider)`
  .os-content {
    display: flex;
    padding-bottom: 16px !important;
  }

  .os-scrollbar-horizontal {
    height: 8px;
    width: calc(100% - 22px);
  }

  .os-scrollbar-handle {
    background: ${props => props.theme.colors.primary};
  }

  .os-theme-light > .os-scrollbar > .os-scrollbar-track {
    background: ${props => props.theme.box.opacity};
  }
`;

export default StyledSlider;