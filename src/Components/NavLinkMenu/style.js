import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  color: black;
  transition: color 0.2s linear;

  &:hover {
    color: red;
  }
`;
