import { View, TextInput } from "react-native";
import React from "react";

import styles from "./CustomTextInput.style";

const CustomTextInput = ({
  onChangeText,
  onBlur,
  value,
  placeholder,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomTextInput;
