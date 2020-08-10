import { Cell as StyledCell } from "styled-css-grid";

const Cell = ({ children, ...rest }) => (
  <StyledCell {...rest}>
    {children}
  </StyledCell>
);

export default Cell;