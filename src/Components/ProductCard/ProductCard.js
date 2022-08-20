import { NavLink } from "react-router-dom";
import { SImg, SProductCardContainer, SProductTextContainer } from "./style";

export const ProductCard = ({ data }) => {
  return (
    <NavLink to="productDetails">
      <SProductCardContainer>
        <SImg src={data.image}></SImg>
        <SProductTextContainer>
          <strong>
            <span>{data.title}</span>
          </strong>
          <span>${data.price}</span>
        </SProductTextContainer>
      </SProductCardContainer>
    </NavLink>
  );
};
