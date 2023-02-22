import { Checkout } from "../../Components/Checkout/Checkout";
export const CheckoutPage = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        justifyConent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          width: "90%",
          margin: " 10px auto",
        }}
      >
        logo
      </div>
      <Checkout />
    </div>
  );
};
