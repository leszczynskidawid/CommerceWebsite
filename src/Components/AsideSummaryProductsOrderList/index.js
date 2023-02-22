import {
  SElementList,
  SImg,
  SInfoProductContainer,
  SPriceInfoContainer,
  SElementListContainer,
} from "./style";

export const AsideSummaryProductsOrderList = ({ products }) => {
  return (
    <SElementListContainer>
      {products.map((product) => (
        <SElementList key={product.id}>
          <SImg src={product.image} alt={product.discription} />
          <SInfoProductContainer>
            <h5>{product.title}</h5>
            <SPriceInfoContainer>
              <p>{product.sumaryPrice}$</p>
              <p>{product.quantity}szt</p>
            </SPriceInfoContainer>
          </SInfoProductContainer>
        </SElementList>
      ))}
    </SElementListContainer>
  );
};
