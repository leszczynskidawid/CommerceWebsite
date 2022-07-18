import { StyledNavLink } from "./style";
export const NavLinkMenu = ({ path, name }) => {
  return <StyledNavLink to={path}>{name}</StyledNavLink>;
};
