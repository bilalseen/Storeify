import { TextInput } from "react-native";
import React from "react";

import styles from "./CustomTextInput.style";

const CustomTextInput = ({ onChangeText, onBlur, value, placeholder }) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default CustomTextInput;
