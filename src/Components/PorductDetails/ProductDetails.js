import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProductsDetails } from "../../Redux/Products/productAction";

import {
  SProductDetailsContainer,
  SImgContainer,
  SDescriptionProductContainer,
  SImg,
} from "./style";
import { Button } from "../Button/Button";
import { addProductIntoCartThunk } from "../../Redux/Cart/actionProductsCart";
import CircularIndeterminateLoader from "../Spinner/style";
import { TitleH1Text } from "../TitleText";
import { toast } from "react-toastify";

export const ProductDetails = () => {
  const { id } = useParams();

  const { product, isLoading } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  console.log(product);

  const { image, title, price, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProductsDetails(id));
  }, []);

  return (
    <div>
      {isLoading ? (
        <CircularIndeterminateLoader />
      ) : (
        <SProductDetailsContainer>
          <SImgContainer>
            <SImg src={image} alt={"product"} />
          </SImgContainer>
          <SDescriptionProductContainer>
            <TitleH1Text text={title} />
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
              <Button
                text={cart.isLoading ? "...dodoawanie" : "dodaj"}
                type={"submit"}
                action={() => dispatch(addProductIntoCartThunk(product))}
              />
              <Button
                text={cart.isLoading ? "...dodoawanie" : "dodaj"}
                type={"submit"}
                action={() => toast("first toast")}
              />
            </div>
          </SDescriptionProductContainer>
        </SProductDetailsContainer>
      )}
    </div>
  );
};
