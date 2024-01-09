import { SafeAreaView, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Products.style";
import LottieView from "lottie-react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import ProductCard from "../../components/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const Products = ({ navigation }) => {
  const [list, setList] = useState(null);
  const [productsApi, setProductsApi] = useState(
    "https://fakestoreapi.com/products"
  );
  const [categoryApi, setCategoryApi] = useState(
    "https://fakestoreapi.com/products/categories"
  );

  const {
    loading: loadingProducts,
    data: dataProducts,
    error: errorProducts,
  } = useFetch(productsApi);
  const {
    loading: loadingCategories,
    data: dataCategories,
    error: errorCategories,
  } = useFetch(categoryApi);

  const renderItem = ({ item }) => <ProductCard product={item} />;

  useEffect(() => {
    setList(dataProducts);
  }, [dataProducts, dataCategories]);

  function handleSearch(text) {
    const filteredList = data.filter((product) => {
      const searchedText = text.toLowerCase();
      const productTitle = product.title.toLowerCase();
      return productTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  }

  if (loadingProducts) {
    return (
      <LottieView
        source={require("../../../assets/loading.json")}
        autoPlay
        loop
      />
    );
  }

  if (errorProducts) {
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
      <Text style={styles.title}>Storeify</Text>
      <SearchBar
        placeHolder={"Search..."}
        onSearch={(text) => handleSearch(text)}
      />
      <FlatList
        horizontal
        data={dataCategories}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <FlatList
        data={list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Products;
