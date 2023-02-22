import styled from "styled-components";

export const SButton = styled.button`
  background-color: ${(props) => props.theme.colors.lightBlue};
  display: block;
  color: white;
  padding: 20px 50px;
  border-radius: 2px;
  letter-spacing: 1px;
  margin: auto;

  cursor: pointer;
  &:hover {
    background-color: #c0c0c0;
  }
`;
