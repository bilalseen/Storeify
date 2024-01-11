import { SafeAreaView, View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "./ProductCard.style";

const Product = ({ product }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.text_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}$</Text>
      </View>
    </SafeAreaView>
  );
};

export default Product;
