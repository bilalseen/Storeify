import { View, Text, Button, TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";

import styles from "./UserInputForm.style";

const UserInputForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={() => null}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        <View>
          <TextInput
            onChangeText={handleChange("firstName")}
            onBlur={handleBlur("firstName")}
            value={values.firstName}
            placeholder="First Name"
          />
          <TextInput
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            value={values.lastName}
            placeholder="Last Name"
          />
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="Email "
          />
          <TextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder="Password"
          />
        </View>;
      }}
    </Formik>
  );
};

export default UserInputForm;
