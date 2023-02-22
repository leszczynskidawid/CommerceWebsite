import { FilterCategoryMenu } from "../../Components/FilterCategoryMenu/FilterCategoryMenu";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ShopProducts } from "../../Components/ShopProducts/ShopProducts";
import { Footer } from "../../Components/Footer/index";

export const ProductsCategoryPage = () => {
  return (
    <section style={{ marginTop: "160px" }}>
      <Navbar />
      <FilterCategoryMenu />
      <ShopProducts />
      <Footer />
    </section>
  );
};
