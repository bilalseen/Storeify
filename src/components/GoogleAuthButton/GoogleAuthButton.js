import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import styles from "./GoogleAuthButton.style";

const Button = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.content}>
        <Image source={require("../../../assets/icon-google.png")} />
        <Text style={styles.text}>Sign in with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
