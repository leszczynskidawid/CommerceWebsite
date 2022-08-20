import { ProductCard } from "../ProductCard/ProductCard";
import { SProductsContainer } from "./style";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/Products/productAction";

export const Products = () => {
  const { isLoading, products, isError } = useSelector(
    (state) => state.products,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts);
  }, []);

  return (
    <SProductsContainer>
      {isLoading ? (
        <div>Loadinf....</div>
      ) : (
        products?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))
      )}
      {isError && <div>{isError}</div>}
    </SProductsContainer>
  );
};
