import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import SignUpInputForm from "../../components/SignUpInputForm";
import Button from "../../components/Button";
import GoogleAuthButton from "../../components/GoogleAuthButton";
import WelcomeAnimation from "../../components/WelcomeAnimation";

import styles from "./SignUp.style";
const SignUp = ({ navigation }) => {
  const navigateToSignIn = () => {
    navigation.navigate("SignInScreen");
  };
  return (
    <View style={styles.container}>
      <WelcomeAnimation />
      <SignUpInputForm />
      <TouchableWithoutFeedback onPress={navigateToSignIn}>
        <Text>Do you have a account? Sign in</Text>
      </TouchableWithoutFeedback>
      <Button />
      <GoogleAuthButton />
    </View>
  );
};

export default SignUp;
