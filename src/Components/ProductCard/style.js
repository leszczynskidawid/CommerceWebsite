import styled from "styled-components";

export const SProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 400px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

export const SImg = styled.img`
  width: 100%;
  height: 60%;
  background-color: grey;
  flex: 1;
`;

export const SProductTextContainer = styled.div`
  flex: 1;
  padding: 20px 0px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  letter-spacing: 0.1ch;
`;
