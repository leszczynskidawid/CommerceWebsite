import styled from "styled-components";

export const SProductDetailsContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 90%;
  margin: 90px auto;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
  }
`;
export const SImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const SImgContainer = styled.div`
  width: 500px;
  height: 600px;
  transition: 0.5s all;
  @media (max-width: 900px) {
    width: 300px;
    height: 400px;
  }
`;
export const SDescriptionProductContainer = styled.div`
  padding: 30px;
  width: 50%;
  display: flex;
  flex-direction: column;
  transition: 0.5s all;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
