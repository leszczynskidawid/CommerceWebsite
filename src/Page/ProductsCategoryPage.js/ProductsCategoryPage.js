import { FilterCategoryMenu } from "../../Components/FilterCategoryMenu/FilterCategorymmMenu";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ShopProducts } from "../../Components/ShopProducts/ShopProducts";

export const ProductsCategoryPage = () => {
  return (
    <section style={{ marginTop: "100px" }}>
      <Navbar />
      <FilterCategoryMenu />
      <ShopProducts />
    </section>
  );
};
