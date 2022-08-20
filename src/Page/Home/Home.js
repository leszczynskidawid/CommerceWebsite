import { FilterCategoryMenu } from "../../Components/FilterCategoryMenu/FilterCategorymmMenu";
import { Header } from "../../Components/Header/Header";
import { Products } from "../../Components/Products/Products";

Header;

export const Home = () => {
  return (
    <>
      <Header />
      <FilterCategoryMenu />
      <Products />
    </>
  );
};
