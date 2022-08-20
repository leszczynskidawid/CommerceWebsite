import { useEffect } from "react";

export const ProductDetails = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          src="#"
          style={{ width: "400px", height: "600px", background: "grey" }}
        />
      </div>
      <div
        style={{ padding: "50px", display: "flex", flexDirection: "column " }}
      >
        <h1>Lounge Tunic </h1>
        <span>50$</span>
        <div>
          <h3>description</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. i
          </span>
        </div>
        <div>
          <h3>Details</h3>
          <div>opis jalkos tam </div>
        </div>
        <div>
          <input type="text" id="fname" name="fname"></input>
          <input type="text" id="fname" name="fname"></input>
          <button type="button">Click Me!</button>
        </div>
      </div>
    </div>
  );
};
