import { FilterCategoryMenu } from "../../Components/FilterCategoryMenu/FilterCategoryMenu";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header/Header";
import { Products } from "../../Components/Products/Products";

export const Home = () => {
  return (
    <>
      <Header />
      <FilterCategoryMenu />
      <Products />
      <Footer />
    </>
  );
};
