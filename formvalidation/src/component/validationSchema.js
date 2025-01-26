import * as yup from "yup";

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const validationSchema = yup.object({
  fname: yup.string().min(3, "fname at least 3 character length").max(15).required("fname field is required"),
  country: yup.string().required(),
  password: yup.string().matches(passwordRegex, "Password must be at least 8 characters, contain one uppercase letter, one number, and one special character.").required("Password is required"),
  gender: yup.string().required(),
  hobby: yup.array().min(2, "2 Hobby is must"),
  address: yup.string().required(),
});

export default validationSchema;
