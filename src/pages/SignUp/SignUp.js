import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import SignUpInputForm from "../../components/SignUpInputForm";
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
        <Text style={styles.text}>Do you have an account? Register</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignUp;
