import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import styles from "./CategoryList.style";

const CategoryList = ({ categories, onPress }) => {
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [textStyle, setTextStyle] = useState(styles.text);

  const handleOnPress = () => {
    containerStyle == styles.container
      ? (setContainerStyle(styles.containerActive),
        setTextStyle(styles.textActive))
      : (setContainerStyle(styles.container), setTextStyle(styles.text));
    onPress(categories);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={containerStyle}>
        <Text style={textStyle}>{categories}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryList;
