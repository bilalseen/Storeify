import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import SignInInputForm from "../../components/SignInInputForm";
import WelcomeAnimation from "../../components/WelcomeAnimation";

import styles from "./SignIn.style";

const SignIn = ({ navigation }) => {
  const navigateToSignUp = () => {
    navigation.navigate("SignUpScreen");
  };
  return (
    <View style={styles.container}>
      <WelcomeAnimation />
      <SignInInputForm />
      <TouchableWithoutFeedback onPress={navigateToSignUp}>
        <Text style={styles.text}>Don't have an account? Become a member</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignIn;
