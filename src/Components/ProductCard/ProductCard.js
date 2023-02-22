import { SImg, SProductCardContainer, SProductTextContainer } from "./style";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`productDetails/${data.id}`, { state: { id: data.id } })
      }
    >
      <SProductCardContainer>
        <SImg src={data?.image}></SImg>
        <SProductTextContainer>
          <strong>
            <span>{data?.title}</span>
          </strong>
          <span>${data?.price}</span>
        </SProductTextContainer>
      </SProductCardContainer>
    </div>
  );
};
