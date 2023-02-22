import styled from "styled-components";
import { ErrorMessagesTxt } from "../ErrorMessageText";

export const TextArea = ({
  label,
  error,
  name,
  register,
  required,
  couterCharacters,
  onChange,
}) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <textarea
        cols={40}
        rows={10}
        name={name}
        maxLength={200}
        {...register(name, { required })}
        onChange={onChange}
      ></textarea>
      <span>{couterCharacters}/200</span>
      <ErrorMessagesTxt tekst={error[name]?.message} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > textarea {
    resize: none;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 10px;
  }
  & > span {
    bottom: 10px;
    display: flex;
    right: 20px;
    justify-content: flex-end;
  }
`;
