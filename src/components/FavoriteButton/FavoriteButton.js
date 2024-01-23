import {
  View,
  Text,
  TouchableWithoutFeedback,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./FavoriteButton.style";

const FavoriteButton = () => {
  const [color, setColor] = useState("gray");

  const checkFavouriteColor = () => {
    color == "gray"
      ? (setColor("red"),
        ToastAndroid.show("Favorilere eklendi!", ToastAndroid.SHORT))
      : (setColor("gray"),
        ToastAndroid.show("Favorilerden kaldırıldı!", ToastAndroid.SHORT));
  };

  return (
    <TouchableWithoutFeedback onPress={checkFavouriteColor}>
      <View style={styles.container}>
        <Icon name={"favorite"} size={24} color={color} style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavoriteButton;
