import { NavLinkMenu } from "../NavLinkMenu";
import { NaviagtionMenuItemsCategories } from "../../constants/data/MenuCategoriesFilterValues";
import { StyledMenuCategoriesFilterUl } from "./style";

export const FilterCategoryMenu = () => {
  return (
    <StyledMenuCategoriesFilterUl>
      {NaviagtionMenuItemsCategories.map((itemMenu) => (
        <NavLinkMenu
          key={itemMenu.name}
          name={itemMenu.name}
          path={itemMenu.path}
          padding={"padding"}
          bold={"bold"}
        />
      ))}
    </StyledMenuCategoriesFilterUl>
  );
};
