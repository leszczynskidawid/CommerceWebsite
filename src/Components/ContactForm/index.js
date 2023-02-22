import { Button } from "../Button/Button";
import { InputForm } from "../InputForm/InputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactMessageSchema } from "../../schema/formSchema";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { TextArea } from "../TextArea";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: auto;
  align-items: center;

  & > form {
    width: 50%;
  }
  @media (max-width: 1000px) {
    & > form {
      width: 80%;
    }
  }
`;

export const ContactForm = () => {
  const form = useRef();
  const [couterCharacters, setCounterCharacters] = useState(0);

  const handleCounterCharacters = (e) => {
    let numberCharacters = e.target.value.length;
    setCounterCharacters(numberCharacters);
  };
  const resetCharactersNumber = () => setCounterCharacters(0);

  const sendEmail = () => {
    try {
      emailjs.sendForm(
        "service_tf05a1o",
        "template_n1w86xd",
        form.current,
        "FGq1GoYmF-GN2TsZY",
      );
      toast.success("wiadomość została wysłana");
    } catch (error) {
      toast.error(`problem, ${error.text}`);
    }
  };

  const {
    handleSubmit,
    register,
    reset,
    getValues,

    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(contactMessageSchema),
  });

  const onSubmit = async () => {
    await sendEmail();
    resetCharactersNumber();

    reset();
  };

  console.log(getValues()?.message);

  return (
    <Wrapper>
      <form id={"contact-form"} ref={form} onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name={"user_name"}
          type={"email"}
          register={register}
          error={errors}
        />

        <TextArea
          label={"message"}
          name={"message"}
          register={register}
          error={errors}
          onChange={(e) => handleCounterCharacters(e)}
          couterCharacters={couterCharacters}
        />

        {/* <InputForm
          name={"Zezwalam na przetwarzanie danych soobowych rodo"}
          type={"checkbox"}
          register={register}
          required
          error={errors}
        /> */}
        <Button
          text={"Wyslij wiadomość "}
          type={"submit"}
          form={"contact-form"}
        />
      </form>
    </Wrapper>
  );
};
