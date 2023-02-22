import styled from "styled-components";
export const StyledMenuCategoriesFilterUl = styled.ul`
  width: 80vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background-color: whitesmoke;
  cursor: pointer;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
