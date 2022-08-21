import "./style.css";

import { StyledNavLink } from "../NavLinkMenu/style";
export const FilterCategoryMenu = () => {
  return (
    <ul className="category_fillter">
      <StyledNavLink to={"/men's clothing"}>men</StyledNavLink>
      <StyledNavLink to={"/women's clothing"}>women</StyledNavLink>
      <StyledNavLink to={"/electronics"}>electronics</StyledNavLink>
      <StyledNavLink to={"/jewelery"}>jewelery</StyledNavLink>
    </ul>
  );
};
