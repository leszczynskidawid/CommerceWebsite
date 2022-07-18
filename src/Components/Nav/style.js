import styled from "styled-components";
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: transparent;
  transition: background-color 1s;
  color: white;
  font-size: 30px;

  &.active {
    background-color: black;
    box-shadow: 10px 5px 5px black;
  }
`;

export const RigthLogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const CenterMenuItemsContainer = styled.ul`
  display: flex;
  flex: 4;
  justify-content: space-evenly;
  padding: 0 30px;
`;
export const LeftIconsMenuContainer = styled.div`
  flex: 1;
`;
