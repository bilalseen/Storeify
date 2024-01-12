import { SafeAreaView, View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./RatingStars.style";
import Icon from "react-native-vector-icons/MaterialIcons";

const RatingStars = ({ starRate, starSize }) => {
  const [currentRate, setCurrentRate] = useState(Math.round(starRate));
  const [maxRate, setMaxRate] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={styles.mainContainer}>
      {maxRate.map((item, index) => (
        <Icon
          style={styles.star}
          key={index}
          name="star"
          size={starSize}
          color={item <= currentRate ? "#FFD700" : "#808080"}
        />
      ))}
    </View>
  );
};

export default RatingStars;
