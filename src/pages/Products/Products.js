import { SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './Products.style'
import LottieView from 'lottie-react-native'
import useFetch from '../../hooks/useFetch/useFetch'


const Products = ({ navigation }) => {
    const { loading, data } = useFetch("https://fakestoreapi.com/products");

    if (loading) {
        return (
            <LottieView source={require("../../../assets/loading.json")} autoPlay loop />
        )
    }



    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} renderItem={({ item }) => <Text>{item.title}</Text>} />
        </SafeAreaView>
    )
}

export default Products