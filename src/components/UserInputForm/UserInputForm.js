import { View, Text, Button, TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import CustomTextInput from "../CustomTextInput";

import styles from "./UserInputForm.style";

const UserInputForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={() => null}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        <View>
          <CustomTextInput
            onChangeText={handleChange("firstName")}
            onBlur={handleBlur("firstName")}
            value={values.firstName}
            placeholder="First Name"
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
          />
          <CustomTextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder={"Password"}
          />
        </View>;
      }}
    </Formik>
  );
};

export default UserInputForm;
