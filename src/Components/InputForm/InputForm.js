import { InputWrapper, SInput } from "./style";
import { ErrorMessagesTxt } from "../ErrorMessageText";

export const InputForm = ({ name, register, required, error, type, value }) => {
  return (
    <InputWrapper>
      <label>{name}</label>
      <SInput
        placeholder={name}
        value={value}
        type={type}
        {...register(name, { required })}
      />
      <ErrorMessagesTxt tekst={error[name]?.message} />
    </InputWrapper>
  );
};
