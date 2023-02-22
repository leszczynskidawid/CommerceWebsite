import styled from "styled-components";
const SErrorMessages = styled.p`
  color: red;
  font-weight: 900;
  font-size: 10px;
`;

export const ErrorMessagesTxt = ({ tekst }) => {
  return <SErrorMessages>{tekst}</SErrorMessages>;
};
