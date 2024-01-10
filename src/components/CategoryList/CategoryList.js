import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./CategoryList.style";

const CategoryList = ({ categories }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>{categories}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryList;
