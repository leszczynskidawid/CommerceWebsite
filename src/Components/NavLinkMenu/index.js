import { StyledNavLink } from "./style";
export const NavLinkMenu = ({ path, name, ...props }) => {
  return (
    <StyledNavLink to={path} {...props}>
      {name}
    </StyledNavLink>
  );
};
