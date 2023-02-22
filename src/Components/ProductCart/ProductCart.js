import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { ProductCartElementList } from "../ProductCartElemntList/ProductCartElementList";

export const ProductCart = () => {
  const { cart } = useSelector((state) => state.cart);
  const checkIsEmptyCart = cart?.length;
  const cartState = useSelector((state) => state.cart);

  console.log(cartState);

  const xd = cart.map((object) => {
    return object.price * object.quantity;
  });
  let sum = 0;
  xd.forEach((element) => {
    sum += element;
  });
  console.log(sum);
  return (
    <div>
      {checkIsEmptyCart > 0 ? (
        <div
          style={{
            display: "flex",
            width: "90%",
            margin: "auto",
            flexDirection: "column",
            height: "200px",
          }}
        >
          <h1>Twoj koszyk</h1>
          {cart.map((data) => (
            <ProductCartElementList data={data} key={data.id} />
          ))}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "40%",

                alignItems: "flex-end",
              }}
            >
              <span>
                Suma <strong>{sum}</strong>
              </span>
              <Button type={"submit"} text="Kup" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Shopping cart</h1>
          <span>Twoj koszyk jest pusty </span>
        </div>
      )}
    </div>
  );
};
