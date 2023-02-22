import styled from "styled-components";

export const SNavbarMenuList = styled.ul`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 0;
  @media (max-width: 800px) {
    position: fixed;
    top: 100px;
    right: -110%;
    background-color: whitesmoke;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    justify-content: start;
    line-height: 40px;
    padding: 10px;
    transition: 0.5s all;
    z-index: 999;
    &.open {
      right: 0;
    }
  }
`;
