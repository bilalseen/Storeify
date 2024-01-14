import { View } from "react-native";
import React from "react";
import { Formik } from "formik";
import CustomTextInput from "../CustomTextInput";
import Button from "../Button";

import styles from "./SignUpInputForm.style";

const SignUpInputForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={() => null}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <CustomTextInput
            onChangeText={handleChange("firstName")}
            onBlur={handleBlur("firstName")}
            value={values.firstName}
            placeholder={"First Name"}
          />
          <CustomTextInput
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            value={values.lastName}
            placeholder={"Last Name"}
          />
          <CustomTextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder={"Email "}
            keyboardType={"email-address"}
          />
          <CustomTextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder={"Password"}
            secureTextEntry={true}
          />
          <Button text={"Sign Up"} />
        </View>
      )}
    </Formik>
  );
};

export default SignUpInputForm;
