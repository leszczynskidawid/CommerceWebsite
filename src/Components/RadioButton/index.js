import "./style.css";
import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
`;
const SInput = styled.input`
  margin: 10px;
`;
const Styled_p_selector = styled.p`
  display: none;
`;
const SContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SDiscribe = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  max-width: 600px;
`;
const SImgContainer = styled.div`
  display: flex;
  color: grey;
  justify-content: center;
  margin-right: 10px;
`;

const SLabel = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border: 2px solid whitesmoke;
  transition: all 0.5s ease-out;

  &:first-child {
    border-radius: 10px 10px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }

  &:hover {
    background-color: whitesmoke;
  }
  &:has(${SInput}:checked) {
    border: 2px solid black;
    border-radius: 10px;
    ${Styled_p_selector} {
      display: flex;
      align-items: center;
      margin: auto;
    }
    ${SContent} {
      min-height: 150px;
    }
    ${SDiscribe} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const RadioButton = ({
  name,
  register,
  required,
  value,
  iconSrc,
  title,
  description,
  checked,
  handleOnClick,
}) => {
  return (
    <Wrapper>
      <SLabel form={name}>
        <SInput
          type="radio"
          name={name}
          value={value}
          {...register(name, required)}
          checked={checked === value}
          onChange={handleOnClick}
        />
        <SContent>
          <SDiscribe>
            <strong>
              <span>{title}</span>
            </strong>
            <Styled_p_selector>{description}</Styled_p_selector>
          </SDiscribe>
        </SContent>
        <SImgContainer>{iconSrc}</SImgContainer>
      </SLabel>
    </Wrapper>
  );
};
