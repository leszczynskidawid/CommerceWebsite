import { SButton } from "./style";

export const Button = ({ text, type, action, form }) => {
  return (
    <SButton type={type} onClick={action} form={form}>
      {text}
    </SButton>
  );
};
