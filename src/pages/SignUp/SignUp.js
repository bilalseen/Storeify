import { View, Text } from "react-native";
import React from "react";
import SignUpInputForm from "../../components/SignUpInputForm";
import Button from "../../components/Button";
import GoogleAuthButton from "../../components/GoogleAuthButton";
import WelcomeAnimation from "../../components/WelcomeAnimation";

import styles from "./SignUp.style";
const SignUp = () => {
  return (
    <View style={styles.container}>
      <WelcomeAnimation />
      <SignUpInputForm />
      <Button />
      <GoogleAuthButton />
    </View>
  );
};

export default SignUp;
