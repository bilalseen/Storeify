import { View } from "react-native";
import React from "react";
import { Formik } from "formik";
import CustomTextInput from "../CustomTextInput";
import Button from "../Button";
import GoogleAuthButton from "../../components/GoogleAuthButton";
import FIREBASE_AUTH from "../../services/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import styles from "./SignUpInputForm.style";

const signUpUser = (values) => {
  const auth = FIREBASE_AUTH;
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const SignUpInputForm = () => {
  const onSubmit = (values) => {
    signUpUser(values);
  };
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.inputContainer}>
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
          <Button text={"Sign Up"} onSubmit={handleSubmit} />
          <GoogleAuthButton />
        </View>
      )}
    </Formik>
  );
};

export default SignUpInputForm;
