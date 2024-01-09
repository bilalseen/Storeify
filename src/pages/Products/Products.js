import { SafeAreaView, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Products.style";
import LottieView from "lottie-react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Product from "../../components/Product";

const Products = ({ navigation }) => {
  const [roductsApi, setProductsApi] = useState(
    "https://fakestoreapi.com/products"
  );
  const { loading, data, error } = useFetch(roductsApi);

  if (loading) {
    return (
      <LottieView
        source={require("../../../assets/loading.json")}
        autoPlay
        loop
      />
    );
  }

  if (error) {
    return (
      <LottieView
        source={require("../../../assets/error.json")}
        autoPlay
        loop
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Product product={item} />}
      />
    </SafeAreaView>
  );
};

export default Products;
