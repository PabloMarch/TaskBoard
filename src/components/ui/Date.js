import moment from "moment";
import styled from "styled-components";

// UTILS
const formmattedDate = (date) => (
  moment(date).format('l')
);

// COMPONENT
const Date = ({ time, ...rest }) => (
  <time dateTime={time} {...rest}>
    {formmattedDate(time)}
  </time>
);

// STYLES
const StyledDate = styled(Date)`
  background-color: ${props => props.theme.box.opacity};
  border-radius: ${props => props.theme.box.borderRadius};
  display: inline-block;
  padding: 3px 10px 3px 30px;
  line-height: 24px;
`;

export default StyledDate;