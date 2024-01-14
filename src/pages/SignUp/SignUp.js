import { View, Text } from "react-native";
import React from "react";
import UserInputForm from "../../components/UserInputForm";
import Button from "../../components/Button";
import GoogleAuthButton from "../../components/GoogleAuthButton";
import WelcomeAnimation from "../../components/WelcomeAnimation";

import styles from "./SignUp.style";
const SignUp = () => {
  return (
    <View style={styles.container}>
      <WelcomeAnimation />
      <UserInputForm />
      <Button />
      <GoogleAuthButton />
    </View>
  );
};

export default SignUp;
