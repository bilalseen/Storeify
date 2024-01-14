import { View } from "react-native";
import React from "react";
import { Formik } from "formik";
import CustomTextInput from "../CustomTextInput";
import Button from "../Button";

import styles from "./SignInInputForm.style";

const SignInInputForm = () => {
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={() => null}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
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
          <Button placeholder={"Sign In"} />
        </View>
      )}
    </Formik>
  );
};

export default SignInInputForm;
