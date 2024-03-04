import styled from "styled-components";

const StyledUserNames = styled.h2`
  display: inline;
  height: 18px;
  margin: 0 5px 0;
  font-size: 14px;
  font-weight: 800;
  text-align: left;
  color: #1c202b;
`;

const styledYellowHeading = styled(StyledUserNames)`
  color: red;

  @media (min-width: 768px) {
    color: orange;
  }
`;

export { StyledUserNames, styledYellowHeading };
