import styled from "styled-components";
import { keyframes } from "styled-components";
const opacity = keyframes`
  from {
   opacity:0
  }

  to {
   opacity:1;
  }
`;

export const SAsideWrapper = styled.div`
  position: sticky;
  top: 10px;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  height: 50%;
`;
export const SDaliveryInformationContainer = styled.div`
  border-top: 2px solid grey;
  padding: 10px;
`;
export const SSummaryPricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid grey;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.lightBlue};
`;
export const SSummaryPricesElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;
export const SSummaryPricesButtonContainer = styled.div`
  align-items: center;
  border-radius: 10px;
  border: ${(props) => (props.border ? "1px solid black" : "none")};
  padding: 20px;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.5s ease-out;

  & span,
  p {
    letter-spacing: none;
    font-size: 12px;
    font-weight: 900;
  }
  @media (max-width: 970px) {
    &.active {
      box-sizing: border-box;
      position: fixed;
      left: 5px;
      right: 5px;
      background-color: whitesmoke;
      padding: 10px 50px;
      width: 100%;
      bottom: 5px;

      animation: ${opacity} 0.5s linear;
    }
  }
`;
