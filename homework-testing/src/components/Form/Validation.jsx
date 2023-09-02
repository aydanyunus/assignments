import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  age: yup
    .number()
    .min(0, "Age cannot be negative")
    .required("Age is required"),
  address: yup
    .string()
    .min(4, "Address must be at least 4 characters")
    .required("Address is required"),
  phoneNumber: yup
    .string()
    .min(10, "Please enter a valid 10-digit phone number")
    .required("Please enter a valid phone number"),
});
