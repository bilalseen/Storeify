import { SafeAreaView, Text, Image, View } from "react-native";
import React from "react";
import styles from "./Detail.style";
import useFetch from "../../hooks/useFetch/useFetch";
import RatingStars from "../../components/RatingStars/RatingStars";
import LoadingAnimation from "../../components/LoadingAnimation";
import ErrorAnimation from "../../components/ErrorAnimation";

const Detail = ({ route }) => {
  const { id } = route.params;
  const { loading, data, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  if (error) {
    return <ErrorAnimation />;
  }

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={{ uri: data["image"] }} style={styles.productImage} />
      <View style={styles.productDetailsContainer}>
        <View style={styles.titleAndRatingContainer}>
          <Text style={styles.productTitle}>{data["title"]}</Text>
          <View style={styles.ratingContainer}>
            <RatingStars starRate={data["rating"]["rate"]} starSize={30} />
          </View>
        </View>
        <Text style={styles.productDescription}>{data["description"]}</Text>
        <Text style={styles.productPrice}>$ {data["price"]}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
