import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./SearchBar.style";

const SearchBar = ({ placeHolder, onSearch }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      onChangeText={onSearch}
    />
  );
};

export default SearchBar;
