import styled from "styled-components";

export const SWrapper = styled.div`
  position: relative;
  width: 90vw;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding: 10px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const SForm = styled.form`
  margin-right: 5rem;
  @media (max-width: 980px) {
    margin-right: auto;
  }
  @media (max-width: 500px) {
    margin-right: auto;
  }
`;

export const STextarea = styled.div`
  overflow-y: scroll;
  resize: none;

  ::-webkit-scrollbar {
    width: 15px;
    height: 100%;
  }
  ::-webkit-scrollbar-track {
    border: 1px solid grey;
    background-color: #b8b8b8;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #585858;
    border-radius: 9px;
  }
`;
