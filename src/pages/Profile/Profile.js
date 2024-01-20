import { View, Text } from "react-native";
import React from "react";
import styles from "./Profile.style";
import AuthManager from "../../services/AuthManager";
import Button from "../../components/Button";
const Profile = () => {
  const { user, handleSignOut } = AuthManager();
  return (
    <View style={styles.mainContainer}>
      <Text>Profile Page!!!!</Text>
      <Button text={"Log out"} onSubmit={handleSignOut} />
    </View>
  );
};

export default Profile;
