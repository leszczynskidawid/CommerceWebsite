import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProductsDetails } from "../../Redux/Products/productAction";

import {
  SProductDetailsContainer,
  SImgContainer,
  SDescriptionProductContainer,
  SImg,
} from "./style";
import { Button } from "../Button/Button";
import { addProductIntoCart } from "../../Redux/Cart/actionProductsCart";

export const ProductDetails = () => {
  const { id } = useLocation().state;
  const { product, isError, isLoading } = useSelector(
    (state) => state.products,
  );
  const { image, title, price, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProductsDetails(id));
  }, []);

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const addIntoPasket = () => {
    dispatch(addProductIntoCart(product));
  };

  return (
    <div>
      {isLoading ? (
        <div>loading....</div>
      ) : (
        <SProductDetailsContainer>
          <SImgContainer>
            <SImg src={image} alt={"product"} />
          </SImgContainer>
          <SDescriptionProductContainer>
            <h1>{title} </h1>
            <span>{price}$</span>
            <div>
              <h3>Description</h3>
              <span>{description}</span>
            </div>
            <div>
              <h3>Details</h3>
              <div>{title}</div>
            </div>
            <div>
              <input type="text" id="fname" name="fname"></input>
              <input type="text" id="fname" name="fname"></input>
              <Button
                text="asda"
                type={"submit"}
                action={() => addIntoPasket()}
              />
            </div>
          </SDescriptionProductContainer>
        </SProductDetailsContainer>
      )}
      {isError && <div>{isError}</div>}
    </div>
  );
};
