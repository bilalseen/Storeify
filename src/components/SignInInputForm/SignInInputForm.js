import { View } from "react-native";
import React from "react";
import { Formik } from "formik";
import CustomTextInput from "../CustomTextInput";
import Button from "../Button";
import GoogleAuthButton from "../GoogleAuthButton";
import FIREBASE_AUTH from "../../services/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import styles from "./SignInInputForm.style";

const signInUser = (values) => {
  const auth = FIREBASE_AUTH;
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const SignInInputForm = () => {
  const onSubmit = (values) => {
    signInUser(values);
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.inputContainer}>
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
          <Button text={"Sign up"} onSubmit={handleSubmit} />
          <GoogleAuthButton />
        </View>
      )}
    </Formik>
  );
};

export default SignInInputForm;
