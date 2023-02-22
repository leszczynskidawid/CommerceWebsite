import { Button } from "../Button/Button";
import { AsideSummaryProductsOrderList } from "../AsideSummaryProductsOrderList";
import { useSelector } from "react-redux";
import { STextarea } from "../Checkout/style";
import {
  SAsideWrapper,
  SDaliveryInformationContainer,
  SSummaryPricesContainer,
  SSummaryPricesElement,
  SSummaryPricesButtonContainer,
} from "./style";
import { useState } from "react";
import { summaryCostProduct } from "../../helpers/summaryFunction";

import { useLayoutEffect } from "react";

export const AsideSummaryProductsOrder = ({ data, forwardRef }) => {
  const products = useSelector((state) => state.cart.cart);
  const [active, setActive] = useState(false);

  const priceProduct = products.map((product) => product.sumaryPrice);
  const { deliveryType } = data;

  const summaryPriceProduct = summaryCostProduct(priceProduct);
  const summaryCostProductWithDelivery =
    summaryPriceProduct + deliveryType?.cost;

  // const revalAnimation = () => {
  //   const target = forwardRef.current;
  //   const windowHeight = window.innerHeight;
  //   const revalTop = target.getBoundingClientRect().top;
  //   const revalPoint = 300;

  //   if (revalTop < windowHeight - revalPoint) {
  //     setActive(true);
  //     console.log("works");
  //   } else {
  //     setActive(false);
  //   }
  // };
  const myObserver = new IntersectionObserver((elements) => {
    if (elements[0].intersectionRatio !== 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  useLayoutEffect(() => {
    myObserver.observe(forwardRef.current);
    // window.addEventListener("scroll", revalAnimation);
    // return () => window.removeEventListener("scroll", revalAnimation);
  }, []);

  return (
    <SAsideWrapper ref={forwardRef}>
      <STextarea defaultValue={products}>
        <AsideSummaryProductsOrderList products={products} />
      </STextarea>

      <SDaliveryInformationContainer>
        <div>
          <span>sposob dostawy</span>
          <p>{deliveryType?.name}</p>
        </div>

        <div>
          <span>zamowienie dostaniesz</span>
          <p>{deliveryType?.date}</p>
        </div>
      </SDaliveryInformationContainer>

      <SSummaryPricesContainer>
        <SSummaryPricesElement>
          <span>wartość koszyka</span>
          <p>{summaryPriceProduct}</p>
        </SSummaryPricesElement>

        <SSummaryPricesElement>
          <span>dostawa</span>
          <p>{deliveryType?.cost}</p>
        </SSummaryPricesElement>

        <SSummaryPricesButtonContainer className={active ? "" : "active"}>
          <SSummaryPricesElement>
            <span>do zapłaty</span>
            <p>{summaryCostProductWithDelivery}</p>
          </SSummaryPricesElement>
          <Button
            type={"submit"}
            text="przejdz do podsumowania"
            form={"order-form"}
          />
        </SSummaryPricesButtonContainer>
      </SSummaryPricesContainer>
    </SAsideWrapper>
  );
};
