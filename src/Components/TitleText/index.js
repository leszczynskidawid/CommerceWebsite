import styled from "styled-components";
const SH1 = styled.h1`
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 5px;

  background: linear-gradient(
    0deg,
    rgba(15, 0, 213, 1) 0%,
    rgba(136, 129, 183, 1) 0%,
    rgba(219, 208, 208, 0.6279761904761905) 42%,
    rgba(245, 253, 255, 1) 99%
  );
`;

export const TitleH1Text = ({ text }) => {
  return <SH1>{text}</SH1>;
};
