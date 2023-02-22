import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { apiClientEndpointsTypes } from "../../constants/apiClientEndpointsTypes";
import { getProductsbyCategories } from "../../Redux/Products/productAction";
import { useParams } from "react-router-dom";
import { SProductsContainer } from "../Products/style";
import { ProductCard } from "../ProductCard/ProductCard";
import CircularIndeterminateLoader from "../Spinner/style";

export const ShopProducts = () => {
  const { isLoading, products, isError } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();
  const { shopCategory } = useParams();

  useEffect(() => {
    dispatch(
      getProductsbyCategories(
        `${apiClientEndpointsTypes.PRODUCTS_END_POINT_CATEGORY_NAME}/${shopCategory}`,
      ),
    );
  }, [shopCategory]);

  return (
    <SProductsContainer>
      {isLoading ? (
        <CircularIndeterminateLoader />
      ) : (
        products?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))
      )}
      {isError && <div>{isError}</div>}
    </SProductsContainer>
  );
};
