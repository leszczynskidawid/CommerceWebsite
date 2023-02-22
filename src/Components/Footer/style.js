import styled from "styled-components";

export const Wrapper = styled.footer`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: left;
  background-color: whitesmoke;
  margin-top: 100px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledListUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  list-style: none;
  @media (max-width: 900px) {
    display: none;
  }
`;
