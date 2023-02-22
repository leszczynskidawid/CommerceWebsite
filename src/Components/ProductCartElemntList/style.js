import styled from "styled-components";

export const SWrapperListElement = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 3fr 1.5fr 0.8fr 0.1fr;
  grid-template-rows: 1fr;
  border-bottom: 1px solid black;
  margin-bottom: 10px;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const SProductNameContainer = styled.div`
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  padding: 10px;
`;
export const SProductPriceContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
  text-align: center;
`;

export const SImgContainer = styled.div`
  width: 150px;
  height: 100px;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
`;
export const SImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const SQtyChangerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const SDeleteProductButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
