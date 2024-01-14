import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import styles from "./WelcomeAnimation.style";

const WelcomeAnimation = () => {
  return (
    <LottieView
      style={styles.animationContainerStyle}
      source={require("../../../assets/welcome-animation.json")}
      autoPlay
      loop
    />
  );
};

export default WelcomeAnimation;
