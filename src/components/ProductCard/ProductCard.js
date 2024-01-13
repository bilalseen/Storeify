import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import styles from "./ProductCard.style";
import RatingStars from "../RatingStars";

const ProductCard = ({ product, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.image }} />
        </View>
        <View style={styles.productContent}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {product.title}
          </Text>

          <RatingStars starRate={product.rating.rate} starSize={14} />

          <Text style={styles.priceText}>{product.price}$</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
