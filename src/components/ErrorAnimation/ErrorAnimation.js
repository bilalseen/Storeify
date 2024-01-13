import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const ErrorAnimation = () => {
  return (
    <LottieView source={require("../../../assets/error.json")} autoPlay loop />
  );
};

export default ErrorAnimation;
