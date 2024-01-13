import { SafeAreaView, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Home.style";
import useFetch from "../../hooks/useFetch/useFetch";
import ProductCard from "../../components/ProductCard";
import SearchBar from "../../components/SearchBar";
import CategoryList from "../../components/CategoryList";
import LoadingAnimation from "../../components/LoadingAnimation";
import ErrorAnimation from "../../components/ErrorAnimation";

const Home = ({ navigation }) => {
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

  const handleProductSelect = (id) => {
    navigation.navigate("DetailScreen", { id });
  };

  const productRenderItem = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  useEffect(() => {
    if (dataProducts && dataCategories) {
      setList(dataProducts);
    }
  }, [dataProducts, dataCategories]);

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

  if (loadingProducts && loadingCategories) {
    return <LoadingAnimation />;
  }

  if (errorProducts || errorCategories) {
    return <ErrorAnimation />;
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Storeify</Text>
      <SearchBar
        placeHolder={"Search..."} //
        onSearch={(text) => handleSearch(text)}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataCategories}
        renderItem={categoriesRenderItem}
        style={styles.categoryFlatList}
      />
      <FlatList
        data={list}
        renderItem={productRenderItem}
        showsVerticalScrollIndicator={false}
        style={styles.productListFlatList}
      />
    </SafeAreaView>
  );
};

export default Home;
