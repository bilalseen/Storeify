import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import styles from "./Button.style";

const Button = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.text}>Sign</Text>
    </TouchableOpacity>
  );
};

export default Button;
