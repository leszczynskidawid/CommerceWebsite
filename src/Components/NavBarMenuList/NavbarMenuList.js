import { NavLinkMenu } from "../NavLinkMenu";
import { NAV_MENU_LINKS_VALUE } from "../../constants/data/NavMenuLinksValue";
import { SNavbarMenuList } from "./style";
export const NavbarMenuList = ({ className }) => {
  return (
    <SNavbarMenuList className={className}>
      {NAV_MENU_LINKS_VALUE.map((menuItem) => (
        <NavLinkMenu
          className={className}
          key={menuItem.name}
          path={menuItem.path}
          name={menuItem.name}
        />
      ))}
    </SNavbarMenuList>
  );
};
