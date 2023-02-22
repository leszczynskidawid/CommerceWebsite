import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${(props) => (props.bold === "bold" ? 200 : 900)};
  color: black;
  transition: color 0.2s linear;
  padding: ${(props) => (props.padding === "padding" ? "10px 0" : "0 10px")};
  &.active {
    color: red;
  }

  &:hover {
    color: red;
  }
`;
