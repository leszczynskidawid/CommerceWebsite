import * as yup from "yup";
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
const nemeRegex = /^[A-Za-z ]*$/;
const postCodeRegex = /^([0-9]{2})(-[0-9]{3})?$/;

const orderProductSchema = yup
  .object({
    name: yup.string().matches(nemeRegex).min(2).max(40).required(),
    lastName: yup.string().matches(nemeRegex).min(2).max(40).required(),
    street: yup.string().required(),
    numberHause: yup.string().required(),
    postCode: yup.string().matches(postCodeRegex).required().max(6),
    phoneNumber: yup
      .string()
      .matches(phoneRegex, "Nu,er teleonu musi")
      .required(),
  })
  .required();
const contactMessageSchema = yup
  .object({
    user_name: yup.string().email().required(),
    message: yup.string().min(2).max(200).required(),
    // aceptRodo: yup.string().matches(nemeRegex).min(2).max(40).required(),
  })
  .required();

export { orderProductSchema, contactMessageSchema };
