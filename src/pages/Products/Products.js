import { SafeAreaView, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Products.style";
import LottieView from "lottie-react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import ProductCard from "../../components/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryList from "../../components/CategoryList/CategoryList";

const Products = ({ navigation }) => {
  const [list, setList] = useState(null);
  const [productsApi, setProductsApi] = useState(
    "https://fakestoreapi.com/products"
  );
  const [categoryApi, setCategoryApi] = useState(
    "https://fakestoreapi.com/products/categories"
  );
  const [filterCategories, setFilterCategories] = useState(
    "https://fakestoreapi.com/products/category"
  );
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  const {
    loading: loadingFilteredCategories,
    data: dataFilteredCategories,
    error: errorFilteredCategories,
  } = useFetch(`${filterCategories}/jewelery`);

  const handleFilteredCategories = (category) => {
    // Kategori zaten seçili ise kaldır, değilse ekle
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);

    // Filtreleme işlemini yapacak bir fonksiyon çağırabilirsiniz
    if (updatedCategories.length === 0) {
      filterProductsByCategories(dataCategories);
    } else {
      filterProductsByCategories(updatedCategories);
    }
  };

  const filterProductsByCategories = (selectedCategories) => {
    // Seçilen kategorilere göre ürünleri filtrele ve setList ile güncelle
    const filteredList = dataProducts.filter((product) => {
      return selectedCategories.includes(product.category);
    });

    setList(filteredList);
  };

  const categoriesRenderItem = ({ item }) => (
    <CategoryList
      categories={item}
      onPress={() => handleFilteredCategories(item)}
    />
  );

  const productRenderItem = ({ item }) => <ProductCard product={item} />;

  useEffect(() => {
    if (dataProducts && dataCategories && dataFilteredCategories) {
      setList(dataProducts);
    }
  }, [dataProducts, dataCategories, dataFilteredCategories]);

  function handleSearch(text) {
    if (dataProducts) {
      const filteredList = dataProducts.filter((product) => {
        const searchedText = text.toLowerCase();
        const productTitle = product.title.toLowerCase();
        return productTitle.indexOf(searchedText) > -1;
      });

      setList(filteredList);
    }
  }

  if (loadingProducts && loadingCategories && loadingFilteredCategories) {
    return (
      <LottieView
        source={require("../../../assets/loading.json")}
        autoPlay
        loop
      />
    );
  }

  if (errorProducts || errorCategories || errorFilteredCategories) {
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
        showsHorizontalScrollIndicator={false}
        style={{ height: 75, marginTop: 20, marginHorizontal: 20 }}
        data={dataCategories}
        renderItem={categoriesRenderItem}
      />
      <FlatList
        data={list}
        renderItem={productRenderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Products;
