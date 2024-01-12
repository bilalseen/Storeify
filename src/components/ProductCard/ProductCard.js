import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import styles from "./ProductCard.style";

const ProductCard = ({ product, onSelect }) => {
  const maxLength = 30;

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.safeContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.priceText}>{product.price}$</Text>
        </View>
        <View style={styles.inlineContainer}>
          <Image style={styles.productImage} source={{ uri: product.image }} />
          <Text
            style={styles.productTitle}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {product.title.length > maxLength
              ? `${product.title.substring(0, maxLength)}...`
              : product.title}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
