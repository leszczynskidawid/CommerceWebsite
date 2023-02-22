import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductCartElementList } from "../ProductCartElemntList/ProductCartElementList";
import { SContainerListProductsCart, SWrapper } from "./style";
import { SSummaryPricesButtonContainer } from "../AsideSummaryProductsOrder/style";
import { TitleH1Text } from "../TitleText";

export const ProductCart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const checkIsEmptyCart = cart?.length;

  const sumPrice = cart.map((object) => {
    return object.price * object.quantity;
  });

  let sum = 0;
  sumPrice.forEach((element) => {
    sum += element;
  });

  return (
    <>
      {checkIsEmptyCart > 0 ? (
        <SWrapper>
          <div>
            <SContainerListProductsCart>
              <TitleH1Text text="Twoje przedmioty" />
              {cart.map((data) => (
                <ProductCartElementList data={data} key={data.id} />
              ))}
            </SContainerListProductsCart>
          </div>
          <div
            style={{
              position: "sticky",
              top: "100px",
              height: "40vh",
            }}
          >
            <SSummaryPricesButtonContainer border>
              <div
                style={{
                  display: "flex",
                  padding: "10px 10px ",
                  fontSize: "70px",
                  justifyContent: "space-between",
                }}
              >
                <p>Razem:{sum.toFixed(2)}zł</p>
              </div>

              <Button
                type={"submit"}
                text="Przejdź do dostawy"
                action={() => navigate("/checkout")}
              />
            </SSummaryPricesButtonContainer>
          </div>
        </SWrapper>
      ) : (
        <div>
          <h1>Shopping cart</h1>
          <span>Twoj koszyk jest pusty </span>
        </div>
      )}
    </>
  );
};
