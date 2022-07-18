import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  transition: color 0.5s linear;
  &:hover {
    color: blue;
  }
`;
