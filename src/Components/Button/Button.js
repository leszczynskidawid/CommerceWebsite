import { SButton } from "./style";

export const Button = ({ text, type, action }) => {
  return (
    <SButton type={type} onClick={action}>
      {text}
    </SButton>
  );
};
