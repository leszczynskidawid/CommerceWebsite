import styled from "styled-components";
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  justify-content: left;
  display: ${(props) => (props.toggle ? "flex" : " ")};
  @media (max-width: 900px) {
    display: ${(props) => (props.toggle ? "flex" : "none")};
  }
`;
const StyledIconContainer = styled.span`
  position: absolute;
  display: none;
  right: 10px;
  top: 30px;
  transition: transform 0.5s;
  transform: rotate(0deg);
  transform: ${(props) => (props.toggle ? "rotate(180deg)" : "0deg")};

  @media (max-width: 900px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 900px) {
    border: 1px solid black;
    position: relative;
  }
`;
export { Wrapper, StyledIconContainer, StyledUl };
