import { View, TextInput } from "react-native";
import React from "react";

import styles from "./CustomTextInput.style";

const CustomTextInput = ({ onChangeText, onBlur, value, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomTextInput;
