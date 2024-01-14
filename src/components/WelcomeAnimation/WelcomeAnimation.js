import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const WelcomeAnimation = () => {
  return (
    <LottieView
      source={require("../../../assets/welcome-animation.json")}
      autoPlay
      loop
    />
  );
};

export default WelcomeAnimation;
