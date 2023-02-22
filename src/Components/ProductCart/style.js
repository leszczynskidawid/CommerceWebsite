import styled from "styled-components";

const SContainerListProductsCart = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-right: 5rem;

  @media (max-width: 900px) {
    margin-right: 0rem;
    width: 100%;
  }
`;
const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  margin-top: 100px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export { SContainerListProductsCart, SWrapper };
