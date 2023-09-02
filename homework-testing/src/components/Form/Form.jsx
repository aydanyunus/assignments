import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupSchema } from "./Validation";
import "./form.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/actions/cartActions";

const UserForm = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);


  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          address: "",
          phoneNumber: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          console.log(cart);
          dispatch(clearCart());
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field type="text" name="firstName" id="firstName" />
            <ErrorMessage
              className="error-message"
              name="firstName"
              component="div"
            />

            <label htmlFor="lastName">Last name</label>
            <Field type="text" name="lastName" id="lastName" />
            <ErrorMessage
              className="error-message"
              name="lastName"
              component="div"
            />

            <label htmlFor="age">Age</label>
            <Field type="number" name="age" id="age" />
            <ErrorMessage
              className="error-message"
              name="age"
              component="div"
            />

            <label htmlFor="address">Delivery Address</label>
            <Field type="text" name="address" id="address" />
            <ErrorMessage
              className="error-message"
              name="address"
              component="div"
            />

            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="text" name="phoneNumber" id="phoneNumber" />
            <ErrorMessage
              className="error-message"
              name="phoneNumber"
              component="div"
            />

            <button
              className="btn-checkout"
              type="submit"
              disabled={isSubmitting}
            >
              Checkout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
