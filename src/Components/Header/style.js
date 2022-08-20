import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  background-image: ${(props) => `url(${`${props.backgroundImage}`})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  position: relative;
`;
