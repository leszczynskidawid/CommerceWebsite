import { SWrapper, SForm } from "./style";
import { InputForm } from "../InputForm/InputForm";
import { AsideSummaryProductsOrder } from "../AsideSummaryProductsOrder";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RadioButton } from "../RadioButton";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { orderProductSchema } from "../../schema/formSchema";
import CircularIndeterminateLoader from "../Spinner/style";
import { TitleH1Text } from "../TitleText";

const day = new Date().getDay();
const dayName = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Poniedziałek",
];
const valueDelivery = [
  { name: "kurier", date: dayName[day], cost: 10 },
  { name: "inpost", date: dayName[day], cost: 20 },
  { name: "odbierz w punkcie", date: dayName[day], cost: 25 },
];

export const Checkout = () => {
  const ref = useRef();
  const [data, setData] = useState({});
  const [
    radioButtonTrasnsportTypeChecked,
    setRadioButtonTrasnsportTypeChecked,
  ] = useState("kurier");

  const [radioButtonPayTypeChecked, setRadioButtonPayTypeChecked] =
    useState("blik");

  const handleOnClickRadioButtonTransport = (e) => {
    const value = e.target.value;
    setRadioButtonTrasnsportTypeChecked(value);
  };
  const handleOnClickRadioButtonPayType = (e) => {
    const value = e.target.value;
    setRadioButtonPayTypeChecked(value);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderProductSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const selectValue = (array) => {
    const value = array.find(
      (value) => value.name === radioButtonTrasnsportTypeChecked,
    );
    return value;
  };

  useEffect(() => {
    setData({
      deliveryType: selectValue(valueDelivery),
      radioButtonPayTypeChecked: radioButtonPayTypeChecked,
    });
  }, [radioButtonPayTypeChecked, radioButtonTrasnsportTypeChecked]);

  return (
    <SWrapper>
      <SForm id="order-form" onSubmit={handleSubmit(onSubmit)}>
        <TitleH1Text text={"Sposób dostawy"} />
        <RadioButton
          name={"deliveryType "}
          register={register}
          required
          value={"kurier"}
          title={"kurier do domu"}
          description={"paczka u Cibie juz 24h. opłata za kuriera wynosi 24 zł"}
          iconSrc={<LocalShippingIcon />}
          error={errors}
          checked={radioButtonTrasnsportTypeChecked}
          handleOnClick={(e) => handleOnClickRadioButtonTransport(e)}
        />
        <RadioButton
          name={"deliveryType "}
          register={register}
          required
          value={"inpost"}
          title={"odbierz w punkcie"}
          description={"wybierz punkt odbioru paczki kliknij w tutaj "}
          iconSrc={<LocationOnIcon />}
          error={errors}
          checked={radioButtonTrasnsportTypeChecked}
          handleOnClick={(e) => handleOnClickRadioButtonTransport(e)}
        />

        <RadioButton
          name={"deliveryType "}
          register={register}
          required
          value={"odbierz w punkcie"}
          title={"odbierz w sklepie LOGO"}
          description={"wybierz punkt odbioru paczki kliknij w tutaj "}
          iconSrc={<StoreIcon />}
          error={errors}
          checked={radioButtonTrasnsportTypeChecked}
          handleOnClick={(e) => handleOnClickRadioButtonTransport(e)}
        />
        <TitleH1Text text={"Dane"} />
        <InputForm name={"name"} register={register} required error={errors} />
        <InputForm
          name={"lastName"}
          type={"text"}
          register={register}
          required
          error={errors}
        />
        <InputForm
          name={"street"}
          type={"text"}
          register={register}
          required
          error={errors}
        />
        <InputForm
          name={"numberHause"}
          type={"number"}
          register={register}
          required
          error={errors}
        />
        <InputForm
          name={"postCode"}
          type={"text"}
          register={register}
          required
          error={errors}
        />
        <InputForm
          name={"phoneNumber"}
          type={"number"}
          register={register}
          required
          error={errors}
        />
        <TitleH1Text text={"Sposób płatności"} />
        <RadioButton
          name={"pay"}
          register={register}
          required
          value={"karta"}
          title={"kurier do domu"}
          description={"paczka u Cibie juz 24h. opłata za kuriera wynosi 24 zł"}
          iconSrc={<CreditCardIcon />}
          error={errors}
          checked={radioButtonPayTypeChecked}
          handleOnClick={(e) => handleOnClickRadioButtonPayType(e)}
        />
        <RadioButton
          name={"pay"}
          register={register}
          required
          value={"blik"}
          title={"blik"}
          description={
            "dokonaj wpłąty za pomocą kod blik. Wskazówki jak to zrobić znajdziesz tutaj "
          }
          error={errors}
          checked={radioButtonPayTypeChecked}
          handleOnClick={(e) => handleOnClickRadioButtonPayType(e)}
        />
        <RadioButton
          name={"pay"}
          register={register}
          required
          value={"przelew tradycyjny "}
          title={"przelew tradycyjny "}
          description={
            "dokonaj przelwu na poczcie lub za pomocą rejestracji karty  "
          }
          error={errors}
          checked={radioButtonPayTypeChecked}
          handleOnClick={(e) => handleOnClickRadioButtonPayType(e)}
        />
        <RadioButton
          name={"pay"}
          register={register}
          required
          value={"za pobraniem "}
          title={"za pobranie,"}
          description={"dokonaj płatności przy odbiorze "}
          error={errors}
          checked={radioButtonPayTypeChecked}
          handleOnClick={(e) => handleOnClickRadioButtonPayType(e)}
        />
      </SForm>

      {Object.keys(data).length === 0 ? (
        <CircularIndeterminateLoader />
      ) : (
        <AsideSummaryProductsOrder data={data} forwardRef={ref} />
      )}
    </SWrapper>
  );
};
