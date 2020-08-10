import { Grid as StyledGrid } from "styled-css-grid";

const Grid = ({ children, ...rest }) => (
  <StyledGrid {...rest}>
    {children}
  </StyledGrid>
);

export default Grid;