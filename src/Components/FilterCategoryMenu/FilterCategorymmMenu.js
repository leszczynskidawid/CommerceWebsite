import "./style.css";
import { NavLink } from "react-router-dom";
export const FilterCategoryMenu = () => {
  return (
    <ul className="category_fillter">
      <NavLink to={"/"}>all</NavLink>
      <NavLink to={"/men's clothing"} activeClassnam>
        men
      </NavLink>
      <NavLink to={"/women's clothing"}>women</NavLink>
      <NavLink to={"/electronics"}>electronics</NavLink>
      <NavLink to={"/jewelery"}>jewelery</NavLink>
    </ul>
  );
};
