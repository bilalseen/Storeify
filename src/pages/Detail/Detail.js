import { SafeAreaView, Text, Image, View } from "react-native";
import React from "react";
import styles from "./Detail.style";
import useFetch from "../../hooks/useFetch/useFetch";
import LottieView from "lottie-react-native";
import RatingStars from "../../components/RatingStars/RatingStars";
const Detail = ({ route }) => {
  const { id } = route.params;
  const { loading, data, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  if (error) {
    return (
      <LottieView
        source={require("../../../assets/error.json")}
        autoPlay
        loop
      />
    );
  }

  if (loading) {
    return (
      <LottieView
        source={require("../../../assets/loading.json")}
        autoPlay
        loop
      />
    );
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
