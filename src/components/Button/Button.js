import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import styles from "./Button.style";

const Button = ({ text, onSubmit }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
