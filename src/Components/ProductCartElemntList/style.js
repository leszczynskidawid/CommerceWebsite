import styled from "styled-components";

export const SWrapperListElement = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 3fr 1.5fr 0.8fr 0.4fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
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
  width: 150px;
`;
