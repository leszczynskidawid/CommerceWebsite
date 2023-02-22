import { ProductCart } from "../../Components/ProductCart/ProductCart";
import { Navbar } from "../../Components/Navbar/Navbar";

export const ProductCardPage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "100px" }}
    >
      <Navbar />

      <ProductCart />
    </div>
  );
};
